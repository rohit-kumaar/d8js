type FormatType = "short" | "medium" | "long" | "full" | "iso" | "time" | "datetime" | "relative" | "ago" | "filename" | "input";
declare function formatDate(input: Date | string | number, format?: FormatType, locale?: string): string;

export { type FormatType, formatDate };
