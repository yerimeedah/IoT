var extendClass1 = function (SuperClass, SubClass, subMethods) {
    SubClass.prototype = new SuperClass;
    for (var prop in SubClass.prototype) {
      if (SubClass.prototype.hasOwnProperty(prop)) {
        delete SubClass.prototype[prop];
      }
    }
    if (subMethods) {
      for (var method in subMethods) {
        SubClass.prototype[method] = subMethods[method];
      }
    }
    Object.freeze(SubClass.prototype);
    return SubClass;
  };
  
  var Square = extendClass1(Rectangle, function (width) {
    Rectangle.call(this, width, width);
  });