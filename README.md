# tiny-date-formats

**<1.5KB** · Zero deps · React, Vue, Angular, Node, Vanilla

Named date formats with smart locale & relative time.

```bash
npm install tiny-date-formats
```

## Formats

| Name     | Example                      |
| :------- | :--------------------------- |
| short    | 11/12/2025                   |
| medium   | Nov 12, 2025                 |
| long     | November 12, 2025            |
| full     | Wednesday, November 12, 2025 |
| iso      | 2025-11-12                   |
| time     | 3:45 PM                      |
| datetime | 11/12/2025, 3:45 PM          |
| relative | 1 day ago                    |
| ago      | 5m, 3h, 2d                   |
| filename | 2025-11-12_22-51             |


## Usage

Vanilla / Node

```Javascript
import { formatDate } from "tiny-date-formats";

console.log(formatDate(new Date(), "ago")); // "0s"
console.log(formatDate("2025-11-10", "medium")); // "Nov 12, 2025"
```

React

```react
import { formatDate } from "tiny-date-formats";
import { useDateFormat } from "tiny-date-formats/react";

function App() {
  const time = useDateFormat(new Date(), "time");

  return (
    <>
      <p>{formatDate(new Date(), "short")}</p>
      <p>Time: {time}</p>
    </>
  );
}

export default App;
```

Vue

```vue
<script setup>
  import { formatDate } from "tiny-date-formats";
</script>

<template>
  <p>{{ formatDate("2025-11-10", "medium") }}</p>
</template>
```

Angular

```angular
Note: Angular is not currently supported. We’re actively working on adding
Angular support in an upcoming release. Stay tuned for updates!
```
