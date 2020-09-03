## purescript practice

just a purescript practice, redoing example from [purescript-react-basic](https://github.com/lumihq/purescript-react-basic/tree/v14.0.0/examples/component)

note that newest version of purescript-react-basic is 15.0.0；and it don't have a example, nor offical website yet.

so you need to change something from example to upgrading to 15.0.0 (from [purescript-react-basic]):

 ---

### Upgrading from React Basic v14

The React.Basic.DOM modules have been moved to react-basic-dom. This doesn't require any code changes, but you will need to add this dependency to your projects.

The component implementation previously in React.Basic has been extracted to react-basic-classic, which now provides the React.Basic.Classic module. Just install that library and find/replace ^import\sReact\.Basic\s with import React.Basic.Classic.

If you were using the React.Basic.Compat module, that module has been moved to react-basic-compat.

If you were using react-basic-hooks exclusively everything should work as-is.

---

## build

build on `windows 10`

`make`: from `GnuWin`, optional choose is ubuntu subsystem on win10.

note that when you use linux system, you need to change Makefile:

```makefile
all: npm
	spago bundle-app
	node_modules/.bin/browserify index.js -o html/index.js

npm:
	npm install
```

I use spago to build project instead of purs with bower.

