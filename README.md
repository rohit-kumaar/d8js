# d8js

**<1.5KB** · Zero deps · React, Vue, Angular, Node, Vanilla

Named date formats with smart locale & relative time.

```bash
npm install d8js
```

## Formats

| String   | Output                       |
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
import { dateObj } from "d8js";

console.log(dateObj(new Date(), "ago")); // "0s"
console.log(dateObj("2025-11-10", "medium")); // "Nov 12, 2025"
```

React

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

Vue

```vue
<script setup>
  import { dateObj } from "d8js";
</script>

<template>
  <p>{{ dateObj("2025-11-10", "medium") }}</p>
</template>
```

Angular

```angular
Note: Angular is not currently supported. We’re actively working on adding
Angular support in an upcoming release. Stay tuned for updates!
```
