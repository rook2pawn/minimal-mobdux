# minimal-mobdux

The bare minimum of everything you need to get started in Mobdux. No configurations needed.

# install

    npm install

# build

    npm run build

Which is really just a single line build

    "browserify index.js -o bundle.js -t [ babelify --plugins transform-decorators-legacy --presets [ react es2015 stage-1 ] ]"

# then load up foo.html in your browser

To see a simple counters application.


# core modules

    "dependencies": {
      "mobdux": "^2.0.5",
      "mobx": "^3.3.2",
      "mobx-react": "^4.3.5",
      "react": "^16.1.1",
      "react-dom": "^16.1.1"
    },

# bundle / transpile

    "devDependencies": {
    	"babel-cli": "^6.26.0",
    	"babel-plugin-transform-decorators-legacy": "^1.3.4",
    	"babel-preset-es2015": "^6.24.1",
    	"babel-preset-react": "^6.24.1",
    	"babel-preset-stage-1": "^6.24.1",
    	"babelify": "^8.0.0",
    	"browserify": "^14.5.0"
    }
