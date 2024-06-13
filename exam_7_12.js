var extendClass2 = (function () {
    var Bridge = function () { };
    return function (SuperClass, SubClass, subMethods) {
      Bridge.prototype = Superclass.prototype;
      SubClass.prototype = new Bridge();
      SubClass.prototype.constructor = SubClass;
      if (subMethods) {
        for (var method in subMethods) {
          SubClass.prototype[method] = subMethods[method];
        }
      }
      Object.freeze(SubClass.prototype);
      return SubClass;
    };
  })();