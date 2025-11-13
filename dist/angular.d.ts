import { PipeTransform } from '@angular/core';
import { FormatType } from './index.js';

declare class TinyDateFormatPipe implements PipeTransform {
    transform(value: Date | string | number, format?: FormatType, locale?: string): string;
}

export { TinyDateFormatPipe };
