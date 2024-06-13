var Rectangle = function (width, height) {
    this.width = width;
    this.height = height;
  };
  
  var Square = function (width) {
    Rectangle.call(this, width, width);
  };
  
  Square.prototype = new Rectangle();
  // 이 부분을 생략하면 getArea() 메서드를 쓸 수 없다.
  // 하지만 이 부분으로 인해 width, height = undefined라는 구체적 데이터가 생기게 된다.
  // 이를 해결하기 위한 방안으로 p.190-7.8.add.js를 참조
  
  /*
  var Square = function (width) {
    this.width = width;
    this.height = width;
  };
  */
  
  Rectangle.prototype.getArea = function () {
    return this.width * this.height;
  };
  
  var sq = new Square(5);
  console.log(sq.getArea()); // 25
  console.log(sq.constructor);