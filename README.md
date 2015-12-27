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
