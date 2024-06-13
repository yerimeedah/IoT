var Square = function (width) {
    this.width = width;
    this.height = width;
  };
  
  Square.prototype.getArea = function () {
    return this.width * this.height;
  };