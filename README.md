# Filehash
a javascript client-side file hashing

## Installation

Include the script in your project

```html
<script src="/path/to/filehash.js"></script>
```

## Usage

to generate a hash of a file object use the `hash(file, algorithm)` method, which will return a promise once completed. the algorithm parameter is optional. `sha-256` is used as default.

```javascript
var file = new File(["hello there!"], "file.txt");

Filehash.hash(file).then(function (result) {
  console.log('hash:', result);
});
```

with the `compare(file, hash, algorithm)` method you can check if a specific hash belongs to a file. the algorithm parameter is here optional, too. `sha-256` is used as default.

```javascript
var file = new File(["hello there!"], "file.txt");
hash = 'c69509590d81db2f37f9d75480c8efedf79a77933db5a8319e52e13bfd9874a3';

Filehash.compare(file, hash).then(function (result) {
  console.log('hash check:', result);
});
```

## Author

[Matthias Klan](https://github.com/vaceta/)

contact: matthias.klan@gmail.com 


## Licence

The MIT License (MIT)

Copyright (c) 2015 Matthias Klan

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
