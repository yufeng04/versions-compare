# Versions Compare 工具

[![Build Status](https://travis-ci.org/searchfe/versions-compare.svg?branch=master)](https://travis-ci.org/searchfe/versions-compare)
[![Coverage Status](https://coveralls.io/repos/github/searchfe/versions-compare/badge.svg?branch=master)](https://coveralls.io/github/searchfe/versions-compare?branch=master)

版本对比工具

## 安装

```bash
npm install --save versions-compare
```

## 例子

```javascript
var compare = require('versions-compare');

compare(1, 2); // -1
compare([1, 2], [1, 3]); // -1
compare('1.2.3', '1.4.1'); // 1
compare('1.1.1', '1.1.1'); // 0
compare('1.2.3', [1, 2, 3]); // 0
compare('1.2', 2); // -1
compare(3, [2, 3, 4]); // -1
compare('1.1.', [1, 2, 3]); // Wrong Params.
compare('.1.1', [1, 2, 3]); // Wrong Params.

```
