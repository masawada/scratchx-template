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
