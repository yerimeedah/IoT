var Rectangle = class {
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }
    getArea() {
      return this.width * this.height;
    }
  };
  
  var Square = class extends Rectangle {
    constructor(width) {
      super(width, width);
    }
    getArea() {
      console.log('size is : ', super.getArea());
      /* 
      호출한 메서드의 this는 'super'가 아닌 원래의 this를 그대로 따른다.
      super.getArea() === SuperClass.prototype.getArea()
      */
    }
  };