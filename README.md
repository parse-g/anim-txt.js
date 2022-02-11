# anim.js
## parse-g
### text **anim**ator


install
```ps
npm i anim.js --save
```

use in project
```js
const anim = require('anim.js')
```
## *OR*
```js
import { Animate } from 'anim.js'
```

### Actions

#### Default settings

```js
{
    time: 1500,
    text: 'Hello, world!',
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
      text: 'Animate!',
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
      point: '#',
    },
}

const myAnim = new Animate(settings)
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

````js
myAnim.start()
````

get settings ->

```js
myAnim.settings
```

---
### *Point animation*

```js
Animate.point({text: 'my text', point: 'p', all_time: 1500})
```

in typescript
````ts
Animate.point({text: string, point: string, all_time: number})
````

### *Print animation*

```js
Animate.print({text: 'my text', all_time: 1500})
```

in typescript
````ts
Animate.print({text: string, all_time: number})
````

### *Wawe animation*

```js
Animate.wawe({text: 'my text', all_time: 1500})
```

in typescript
````ts
Animate.wawe({text: string, all_time: number})
````

### *Line animation*

```js
Animate.line({text: 'my text', all_time: 1500})
```

in typescript
````ts
Animate.line({text: string, all_time: number})
````