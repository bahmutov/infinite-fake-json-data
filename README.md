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

    git clone git@github.com:bahmutov/infinite-fake-json-data.git
    cd infinite-fake-json-data
    npm run setup

Installs json-server's dependencies, angular front-end dependencies,
and fake data generator.

## start demo

    npm start

This should start the `json-server`, then start simple http server inside the `web`
folder, then open the browser. Try scrolling to the bottom. If the server does not
start automatically, open browser at `http://127.0.0.1:8080/`.

See [package.json](package.json) for details.

## details

You can check individual mock data by running from command line

    curl http://localhost:3000/people/slice/0/5

Notice each request takes 1 seconds. This is because inside [json-server/server.js](json-server/server.js#L26)
there is middleware to slow down requests with `slice` in their urls

```js
app.use(slow({
    url: /slice/i,
    delay: 1000
}));
```

## Small print

Author: Gleb Bahmutov &copy; 2014

* [@bahmutov](https://twitter.com/bahmutov)
* [glebbahmutov.com](http://glebbahmutov.com)
* [blog](http://bahmutov.calepin.co/)

License: MIT - do anything with the code, but don't blame me if it does not work.

Spread the word: tweet, star on github, etc.

Support: if you find any problems with this module, email / tweet /
[open issue](https://github.com/bahmutov/infinite-fake-json-data/issues) on Github
