# CurryLimitReverse
## install

`npm i --save fup-curry-limit-reverse-core`


## Use

```
const curryLimitReverseCore = require('fup-curry-limit-reverse-core');

or es module

import curryLimitReverseCore from 'fup-curry-limit-reverse-core';

```


## Example

```
const sum    = (...nums) => nums
  .reduce((added, num) => added + num, 0); 
const sum2   = curryLimitReverseCore(2, sum); // (y, x) => y + x | y => x => y + x
const add1   = sum2(1);                       // (x) => 1 + x
const result = add1(2);                       // 3
const x      = sum2(10, 20);                  // 30
```
