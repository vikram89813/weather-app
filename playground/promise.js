var asyncAdd = (a,b) => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(typeof a === 'number' && typeof b === 'number'){
                resolve(a+b);
            } else {
                reject('Arguments must be numbers.');
            }
        },1500);
    });
};

asyncAdd(5,7).then((res)=>{
    console.log('Result : ', res);
},(errorMessage)=>{
    console.log(errorMessage);
});

// var somePromise = new Promise((resolve,reject)=>{
//     //resolve('it worked');
//     reject('not working');
// });

// somePromise.then((message) => {
//     console.log('Success : ', message);
// }, (errorMessage)=>{
//     console.log('Erorr : ', errorMessage);
// });