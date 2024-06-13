var extendClass2 = (function () {
    var Bridge = function () { };
    return function (SuperClass, SubClass, subMethods) {
      Bridge.prototype = SuperClass.prototype; // SuperClass 자리를 Bridge가 대체
      SubClass.prototype = new Bridge();
      if (subMethods) {
        for (var method in subMethods) {
          SubClass.prototype[method] = subMethods[method];
        }
      }
      Object.freeze(SubClass.prototype);
      return SubClass;
    };
  })();