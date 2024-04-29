var copy0bject =function (target){
    var result = {};
    for(var prop in target){
        result[prop] = target[prop];
    }
    return result;
};