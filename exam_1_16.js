var copy0bjectDeep =function (target){
    var result = {};
    if(typeof target === 'object'&& target !== null){
        for(var prop in target){
            result[prop] = copy0bjectDeep(target[prop]);
        }
    }else{
        result = target;
    }
    return result;
};