// src/angular.ts
import { Pipe, PipeTransform } from "@angular/core";
import { formatDate, FormatType } from "./index";

let hasWarned = false;

@Pipe({ name: "tdf", standalone: true })
export class TinyDateFormatPipe implements PipeTransform {
  transform(
    value: Date | string | number,
    format: FormatType = "medium",
    locale?: string
  ): string {
    try {
      return formatDate(value, format, locale);
    } catch (error: any) {
      // Detect JIT compiler missing
      const isJitError =
        error?.message?.includes?.("compiler") ||
        error?.message?.includes?.("JIT") ||
        error?.code === "NG0900"; // Angular's JIT error code

      if (!hasWarned && isJitError) {
        hasWarned = true;
        console.warn(
          "\n[tiny-date-formats] Angular JIT compiler not available.\n" +
            "Fix for development:\n" +
            '  → Add: import "@angular/compiler"; in main.ts\n\n' +
            "For production:\n" +
            "  → Use AOT: ng build --aot\n"
        );
      }

      // Safe fallback: use browser's toLocaleString
      try {
        return new Date(value).toLocaleString(locale);
      } catch {
        return String(value);
      }
    }
  }
}
