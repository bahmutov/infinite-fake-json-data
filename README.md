# infinite-fake-json-data

This project shows AngularJs front-end with data loading
on user scroll. The mock data is served using
[json-server](https://github.com/typicode/json-server) with
extra [connect-slow](https://github.com/bahmutov/connect-slow)
middleware to intentionally slow down the response. This
simulates the real-world network behavior.

For an alternative all in browser solution see
[infinite-fake-data](https://github.com/bahmutov/infinite-fake-data)
that uses mock backend and works without a server, while
still slowing down responses.

## install

    cd json-server; npm install; cd ..
    cd web; bower install; cd ..
    npm install

## start demo

    npm start

This should start the `json-server`, then start simple http server inside the `web`
folder, then open the browser. Try scrolling to the bottom.

See [package.json](package.json) for details.

## Small print

Author: Gleb Bahmutov &copy; 2014

* [@bahmutov](https://twitter.com/bahmutov)
* [glebbahmutov.com](http://glebbahmutov.com)
* [blog](http://bahmutov.calepin.co/)

License: MIT - do anything with the code, but don't blame me if it does not work.

Spread the word: tweet, star on github, etc.

Support: if you find any problems with this module, email / tweet /
[open issue](https://github.com/bahmutov/infinite-fake-json-data/issues) on Github
