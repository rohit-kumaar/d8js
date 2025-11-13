import React from "react";
import { formatDate, type FormatType } from "./index";

export function useDateFormat(
  date: Date | string | number,
  format: FormatType = "medium"
): string {
  const [formatted, setFormatted] = React.useState(() =>
    formatDate(date, format)
  );

  React.useEffect(() => {
    setFormatted(formatDate(date, format));
  }, [date, format]);

  return formatted;
}
