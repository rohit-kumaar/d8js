import { formatDate } from "../src/index";

const now = new Date("2025-11-11T22:51:00+05:30");
const past = new Date("2025-11-10T12:00:00+05:30");

beforeAll(() => {
  jest.useFakeTimers();
  jest.setSystemTime(now);
});

afterAll(() => {
  jest.useRealTimers();
});

test("formats short date", () => {
  expect(formatDate(past, "short")).toBe("11/10/2025");
});

test("formats medium date", () => {
  expect(formatDate(past, "medium")).toBe("Nov 10, 2025");
});

test("formats long date", () => {
  expect(formatDate(past, "long")).toBe("November 10, 2025");
});

test("formats full date", () => {
  expect(formatDate(past, "full")).toBe("Monday, November 10, 2025");
});

test("formats ISO date", () => {
  expect(formatDate(past, "iso")).toBe("2025-11-10");
});

test("formats time only", () => {
  const d = new Date("2025-11-11T22:46:00+05:30");
  expect(formatDate(d, "time")).toBe("10:46 PM");
});

test("formats datetime", () => {
  const d = new Date("2025-11-11T22:46:00+05:30");
  expect(formatDate(d, "datetime")).toBe("11/11/2025, 10:46 PM");
});

test("formats relative time (yesterday)", () => {
  expect(formatDate(past, "relative")).toBe("yesterday");
});

test("formats ago (5 minutes ago)", () => {
  expect(formatDate(Date.now() - 1000 * 60 * 5, "ago")).toBe("5m");
});

test("formats input type (YYYY-MM-DD)", () => {
  const d = new Date("2025-11-11T22:46:00+05:30");
  expect(formatDate(d, "input")).toBe("2025-11-11");
});

test("handles invalid date input", () => {
  expect(() => formatDate("invalid" as any)).toThrow("Invalid date");
});
