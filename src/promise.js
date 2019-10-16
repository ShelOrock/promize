const basicPromise = new Promise ((resolve) => {
    resolve('basicPromise');
});

const funcPromise = () => {
    return new Promise((resolve) => {
        resolve('funcPromise');
    })
};

// const prom = new Promise((resolve) => {
//     resolve('I\'m resolved');
// });

const chainedPromise = prom => {
    return new Promise((resolve) => {
        resolve();
    }).then(prom);
};

const rejectedPromise = () => { 
    return new Promise((resolve, reject) => {
    reject(new Error('rejectedPromise'));
    });
};

module.exports = { basicPromise, chainedPromise, rejectedPromise, funcPromise };
