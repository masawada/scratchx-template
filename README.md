ScratchX Template
=================

## Initialize

Clone this repo and remove remote branch `origin`.

```
$ git clone https://github.com/masawada/scratchx-template.git project_name
$ cd project_name
$ git remote remove origin
```

## Commands
### build(watch)

```
$ npm run watch
```

This command starts observing `src/*` changes and transpiles them into ES6.

### serve

```
$ npm run server
```

This command starts a server using the `dist` directory as the root.

## Usage

Open [the ScratchX website](http://scratchx.org/) and click `Open Extension URL`. Then, insert the Extension URL (e.g. http://localhost:3000/main.js).

## License
[This repo](https://github.com/masawada/scratchx-template) is distributed under the MIT License.

Copyright (c) 2015 Masayoshi Wada

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
