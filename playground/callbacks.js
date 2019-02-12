var getUser = (id, callback) => {
    var user = {
        id,
        name : 'Kumar'
    }
    callback(user);
};

getUser(31, (user)=>{
    console.log(user);
});