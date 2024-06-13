var ES5 = function (name) {
    this.name = name;
  };
  ES5.staticMethod = function () {
    return this.name + ' staticMethod';
  };
  ES5.prototype.method = function () {
    return this.name + ' method'; 
  };
  var es5Instance = new ES5('es5');
  console.log(ES5.staticMethod()); // ES5 staticMethod -> ES5는 함수명이다 (Function.prototype.name)
  console.log(es5Instance.method()); // es5 method
  
  var ES6 = class { // 이 중괄호 묶음 내부가 클래스 본문 영역이다.
    constructor(name) { // 클래스 본문에서는 function 키워드를 생략해도 메서드로 인식한다.
      this.name = name; // ES5의 생성자 함수와 동일한 역할을 수행한다.
    } // 메서드와 다음 메서드 사이에는 콤마(,)로 구분하지 않는다.
    static staticMethod() { // static 키워드는 해당 메서드가 static 메서드임을 알림
      return this.name + ' staticMethod'; 
    }
    method() { // 자동으로 prototype 객체 내부에 할당되는 메서드. ES5.prototype.method와 동일함.
      return this.name + ' method'; 
    }
  };
  var es6Instance = new ES6('es6');
  console.log(ES6.staticMethod()); // ES6 staticMethod
  console.log(es6Instance.method()); // es6 method