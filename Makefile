all: npm
	spago bundle-app
	.\node_modules\.bin\browserify index.js -o html/index.js

npm:
	npm install