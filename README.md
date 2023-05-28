---
part: 1
letter: a
lang: en
---

# a Introduction to React

You may use the new generation frontend tool [Vite](https://vitejs.dev/) or the default tool [create-react-app](https://github.com/facebook/create-react-app) to get started.

```bash
npx create-react-app part1
cd part1
npm start
```

The applicaiton runs on <http://localhost:3000>

The file **_<i>index.js</i>_** looks like this

```js
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
```

and file **_<i>App.js</i>_** looks like this

```js
const App = () => (
  <div>
    <p>Hello world</p>
  </div>
);

export default App;
```

### Component

The file <i>public/index.js</i> :

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    content not shown ...
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>
```

There are a few ways to define functions in JavaScript. Here we will use [arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions), which are described in a newer version of JavaScript known as [ECMAScript 6](http://es6-features.org/#Constants), also called ES6.

The first rule of frontend web development:

> <i>keep the console open all the time</i>

```js
const App = () => {
  const now = new Date();
  return (
    <div>
      <p>Hello world, it is {now.toString()}</p>
    </div>
  );
};
export default App;
```
