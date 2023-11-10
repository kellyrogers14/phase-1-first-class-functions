function receivesAFunction (callback) {
   return callback ();
};

//

function returnsANamedFunction() {
    return function namedFunction() {
    console.log ('returns a named function')
    }
};

//

function returnsAnAnonymousFunction() {
    return function () {
    return ('returns an anonymous function')
    }
};