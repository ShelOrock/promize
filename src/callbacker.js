function syncCallbacker(arg1, arg2, ...args) {
        let tempVal = null;
        for(let i = 0; i < arguments.length; i++) {

            if(typeof arguments[i] !== 'function') throw 'arguments should be functions';
            if(arguments.length < 2) throw 'need more arguments';

            tempVal = arguments[i](tempVal);

        };

        return tempVal;

    // if(typeof arg1 !== 'function' || typeof arg2 !== 'function') throw 'arguments should be functions';
    // if(arg1 === undefined || arg2 === undefined) throw 'define both arguments';

    // const result = arg1();
    // return arg2(result);

};

function asyncCallbacker(arg1, arg2, ...args) {

    // if(typeof arg1 !== 'function' || typeof arg2 !== 'function') throw 'arguments should be functions';
    // if(arguments.length < 2) throw 'define both arguments';

    // let data;

    // function done(data) {
    //     arg2(data, done)
    // }

    // const result1 = arg1(data, function done(data) {
    //     arg2(data, done);
    // });
    
        // let arr = [...args];

        for(let i = 0; i < arguments.length; i++) {
        if(typeof arguments[i] !== 'function') throw 'arguments should be functions';
        if(arguments.length < 2) throw 'define both arguments';

        let data;
        // let count = 0;
        // function done(data) {
        //      while(count < arguments.length) {
        //         arguments[count](data, done)
        //         count++;
        //     }

        const result = arguments[i](data, done)
    }
};

module.exports = { syncCallbacker, asyncCallbacker };
