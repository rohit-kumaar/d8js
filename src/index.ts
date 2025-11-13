export type FormatType =
  | "short" // 11/11/2025
  | "medium" // Nov 11, 2025
  | "long" // November 11, 2025
  | "full" // Tuesday, November 11, 2025
  | "iso" // 2025-11-11
  | "time" // 10:46 PM
  | "datetime" // 11/11/2025, 10:46 PM
  | "relative" // 2 hours ago
  | "ago" // 5m, 3h, 2d
  | "filename" // 2025-11-11_22-46
  | "input"; // 2025-11-11

const rtf = new Intl.RelativeTimeFormat(undefined, { numeric: "auto" });

const units: Record<string, number> = {
  year: 24 * 60 * 60 * 1000 * 365,
  month: (24 * 60 * 60 * 1000 * 365) / 12,
  day: 24 * 60 * 60 * 1000,
  hour: 60 * 60 * 1000,
  minute: 60 * 1000,
  second: 1000,
};

function isValidDate(d: Date): boolean {
  return d instanceof Date && !isNaN(d.getTime());
}

export function dateObj(
  input: Date | string | number,
  format: FormatType = "medium",
  locale?: string
): string {
  const d = new Date(input);
  if (!isValidDate(d)) throw new Error("Invalid date");

  const now = Date.now();
  const diff = now - d.getTime();

  switch (format) {
    case "short":
      return d.toLocaleDateString(locale, {
        month: "numeric",
        day: "numeric",
        year: "numeric",
      });
    case "medium":
      return d.toLocaleDateString(locale, {
        month: "short",
        day: "numeric",
        year: "numeric",
      });
    case "long":
      return d.toLocaleDateString(locale, {
        month: "long",
        day: "numeric",
        year: "numeric",
      });
    case "full":
      return d.toLocaleDateString(locale, {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
      });
    case "iso":
      return d.toISOString().split("T")[0];
    case "time": {
      const h = d.getHours() % 12 || 12;
      const m = String(d.getMinutes()).padStart(2, "0");
      const ampm = d.getHours() >= 12 ? "PM" : "AM";
      return `${h}:${m} ${ampm}`;
    }
    case "datetime":
      return `${dateObj(d, "short", locale)}, ${dateObj(d, "time", locale)}`;
    case "filename":
      return d
        .toISOString()
        .replace(/[:.]/g, "-")
        .split(".")[0]
        .replace("T", "_");
    case "input":
      return d.toISOString().split("T")[0];
    case "relative":
      return rtf.format(-Math.round(diff / units.day), "day");
    case "ago":
      for (const [unit, ms] of Object.entries(units)) {
        const amount = Math.floor(Math.abs(diff) / ms);
        if (amount >= 1) {
          const symbol = unit === "minute" ? "m" : unit[0];
          return `${amount}${symbol}`;
        }
      }
      return "now";
    default:
      return d.toLocaleDateString(locale);
  }
}
