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

var obj = {
    a: 1,
    b: {
        c: null,
        d: [1,2]
    }
};
var obj2 = copy0bjectDeep(obj);

obj2.a = 3;
obj2.b.c = 4;
obj.b.d[1] = 3;

console.log(obj);
console.log(obj2);