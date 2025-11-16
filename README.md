# d8js

**<1.5KB** · Zero deps · React, Vue, Angular, Node, Vanilla

Named date formats with smart locale & relative time.

## Formats

| String   | Output                       |
| :------- | :--------------------------- |
| short    | 11/11/2025                   |
| medium   | Nov 11, 2025                 |
| long     | November 11, 2025            |
| full     | Wednesday, November 11, 2025 |
| iso      | 2025-11-11                   |
| time     | 3:45 PM                      |
| datetime | 11/11/2025, 3:45 PM          |
| relative | 1 day ago                    |
| ago      | 5m, 3h, 2d                   |
| filename | 2025-11-11_22-51             |
| input    | 2025-11-11                   |

## Usage

### Vanilla / Node

```js
import { dateObj } from "d8js";

dateObj("2025-11-11", "short"); // 11/11/2025
dateObj("2025-11-11", "medium"); // Nov 11, 2025
dateObj("2025-11-11", "long"); // November 11, 2025
dateObj("2025-11-11", "full"); // Tuesday, November 11, 2025
dateObj("2025-11-11", "iso"); // 2025-11-11
dateObj("2025-11-11T22:46", "time"); // 10:46 PM
dateObj("2025-11-11T22:46", "datetime"); // 11/11/2025, 10:46 PM

// Relative time examples
dateObj(Date.now() - 24 * 60 * 60 * 1000, "relative"); // yesterday
dateObj(Date.now() + 2 * 24 * 60 * 60 * 1000, "relative"); // in 2 days

// Ago format
dateObj(Date.now() - 5 * 60 * 1000, "ago"); // 5m
dateObj(Date.now() - 2 * 60 * 60 * 1000, "ago"); // 2h
dateObj(Date.now() - 3 * 24 * 60 * 60 * 1000, "ago"); // 3d

dateObj("2025-11-11T22:46", "filename"); // 2025-11-11_22-46
dateObj("2025-11-11", "input"); // 2025-11-11
dateObj(new Date(Date.now() - 5 * 1000), "ago"); // "5 seconds ago"
dateObj(new Date(), "medium"); // "Nov 11, 2025"
```

### React

```jsx
import { dateObj } from "d8js";

function App() {
  return (
    <>
      <p>{dateObj(new Date(), "short")}</p>
    </>
  );
}

export default App;
```

### Vue

```js
<script setup>
  import { dateObj } from "d8js";
</script>

<template>
  <p>{{ dateObj("2025-11-11", "medium") }}</p>
</template>
```

### Angular

**Note:** DateObjPipe is a custom Angular pipe that formats dates
using the dateObj() npm package.

Create a custom pipe: date-obj.pipe.ts

```js
import { Pipe, PipeTransform } from "@angular/core";
import { dateObj, FormatType } from "d8js";

@Pipe({ name: "dateObj" })
export class DateObjPipe implements PipeTransform {
  transform(
    value: Date | string | number,
    formate: FormatType = "medium",
    locale?: string
  ): string {
    return dateObj(value, formate, locale);
  }
}
```

#### In TS file

```TS
import { DateObjPipe } from './date-obj-pipe';

@Component({
  imports: [DateObjPipe],
})
```

#### In HTML file

```html
<p>{{ '2025-11-12' | dateObj:'relative' }}</p>
```

## Links

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/-rohit-kumaar/)
