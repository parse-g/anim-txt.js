# anim-**T**x**T**.js

## parse-g

### the text **animator**

install

```ps
npm i anim-txt.js
```

use in project

```js
import { AnimateTxT } from 'anim-txt.js';
```

### Actions

#### Default settings

```js
{
    time: 1500,
    text: 'AnimateTxT!',
    point: '.',
    construct: {
      replace: false,
      backReplace: {
        value: true,
        point: '.',
      },
      time: {
        mode: 'half',
        ms: 1500,
      },
      text: 'AnimateTxT!',
    },
  }
```

#### **CONSTRUCTOR**

Create new animation

```js
const settings = {
  time: { mode: 'half', ms: 1500 },
  replace: false,
  backReplace: {
    value: true,
    point: '#'
  }
};

const myAnim = new AnimateTxT(settings);
```

settings

```ts
{
    replace: boolean,
    backReplace: {
      value: boolean,
      point: string
    },
    time: {
      mode: 'full' | 'half' | 'third',
      ms: number
    },
    text: string
  };
```

start custom animation ->

```js
myAnim.start();
```

get settings ->

```js
myAnim.settings;
```

---

### _Point animation_

**example**

```js
AnimateTxT.point({ text: 'my text', point: 'p', all_time: 1500 });
```

**_template_**

```ts
AnimateTxT.point({ text: string, point: string, all_time: number });
```

---

### _Print animation_

**example**

```js
AnimateTxT.print({ text: 'my text', all_time: 1500 });
```

**_template_**

```ts
AnimateTxT.print({ text: string, all_time: number });
```

---

### _Wawe animation_

**example**

```js
AnimateTxT.wawe({ text: 'my text', all_time: 1500 });
```

**_template_**

```ts
AnimateTxT.wawe({ text: string, all_time: number });
```

---

### _Line animation_

**example**

```js
AnimateTxT.line({ text: 'my text', all_time: 1500 });
```

**_template_**

```ts
AnimateTxT.line({ text: string, all_time: number });
```
