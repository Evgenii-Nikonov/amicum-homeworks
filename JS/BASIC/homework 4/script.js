// 1. (это задание делайте по желанию) Написать функцию, преобразующую число в объект. Передавая на
// вход число в диапазоне [0, 999],
// мы должны получить на выходе объект, в котором в соответствующих свойствах описаны разряды числа:
// - единицы (в свойстве units)
// - десятки (в свойстве tens)
// - сотни (в свойстве hundereds)
// Например, для числа 45 мы должны получить следующий объект:
// {
//  units: 5, //это единицы
//  tens: 4, //это десятки
//  hundreds: 0, //это сотни
// }
// Если число было передано вне [0, 999] диапазона, не целое число или вообще не число,
// необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.
// Вам может пригодиться:
//  Number.isInteger(value) – функция проверяет, является ли переданное число целым, подробнее здесь
// https://mzl.la/2XCVSsx
//  Math.floor(value) - метод возвращает целое число, которое меньше или равно данному числу (проще
// говоря округляет в меньшую сторону), подробнее здесь https://mzl.la/2Qx42SO .
//  Используйте также остаток от деления на 10, например 123 % 10 будет 3
//  Вам также может пригодится делить число на 100 и на 10.

function numToObject(num) {
  if (!Number.isInteger(num) || num < 0 || num > 999) {
    console.log("Число должно быть целым и в диапазоне от 0 до 999!");
    return {};
  }
  return {
    units: num % 10,
    tens: Math.floor(num / 10) % 10,
    hundreds: Math.floor(num / 100),
  };
}

console.log(numToObject(123));
// 1.1 (это обязательное задание) Сделайте в стиле es5, а затем в стиле es6 (по аналогии из дополнительных
// видео -> 3 примеры наследования -> типы на es5 и es6), конструктор Product, который принимает параметры name
// и price, сохраните их как свойства объекта. Также объекты типа Product должны иметь метод
// make25PercentDiscount, который будет уменьшать цену в объекте на 25%. Имейте в виду, что метод
// make25PercentDiscount не должен быть внутри функции-конструктора, и также не нужно создавать отдельный
// объект-прототип (как объект transport в уроке).

// ES5
function Product(name, price) {
  this.name = name;
  this.price = price;
}

Product.prototype.make25PercentDiscount = function () {
  this.price = this.price * 0.75;
};

// Пример использования
var product1 = new Product("Laptop", 1000);
console.log(product1.price); // 1000
product1.make25PercentDiscount();
console.log(product1.price); // 750

// ES6
class Product2 {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  make25PercentDiscount() {
    this.price = this.price * 0.75;
  }
}

const product2 = new Product("Phone", 800);
console.log(product2.price); // 800
product2.make25PercentDiscount();
console.log(product2.price); // 600

// 1.2 (это обязательное задание) Сделайте в стиле es5, а затем в стиле es6 (по аналогии из дополнительных
// видео -> 3 примеры наследования -> механика наследования),
// а) конструктор Post, который принимает параметры author, text, date и сохраняет их как свойства объекта. Объекты
// типа Post должны иметь метод edit, который будет принимать текст и записывать его в свойство text объекта.
// б) конструктор AttachedPost, который принимает параметры author, text, date. Проинициализируйте эти свойства с
// помощью конструктора Post, чтобы не дублировать код. Также в конструкторе AttachedPost должно создаваться
// свойство highlighted со значением false. Унаследуйте в объектах типа AttachedPost методы из Post.
// Объекты типа AttachedPost должны иметь метод makeTextHighlighted, который будет назначать свойству
// highlighted значение true.

// ES5
// Конструктор Post
function Post(author, text, date) {
  this.author = author;
  this.text = text;
  this.date = date;
}

Post.prototype.edit = function (newText) {
  this.text = newText;
};

// Конструктор AttachedPost
function AttachedPost(author, text, date) {
  Post.call(this, author, text, date);
  this.highlighted = false;
}

// Наследование методов Post
AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;

AttachedPost.prototype.makeTextHighlighted = function () {
  this.highlighted = true;
};

var post1 = new Post("Author1", "This is a post", "2024-07-13");
console.log(post1.text); // This is a post
post1.edit("This is an edited post");
console.log(post1.text); // This is an edited post

var attachedPost1 = new AttachedPost("Author2", "This is an attached post", "2024-07-13");
console.log(attachedPost1.highlighted); // false
attachedPost1.makeTextHighlighted();
console.log(attachedPost1.highlighted); // true
// ES6
// Конструктор Post
class Post2 {
  constructor(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
  }

  edit(newText) {
    this.text = newText;
  }
}

// Конструктор AttachedPost
class AttachedPost2 extends Post {
  constructor(author, text, date) {
    super(author, text, date);
    this.highlighted = false;
  }

  makeTextHighlighted() {
    this.highlighted = true;
  }
}

// Пример использования
const post2 = new Post("Author3", "This is another post", "2024-07-13");
console.log(post2.text); // This is another post
post2.edit("This is another edited post");
console.log(post2.text); // This is another edited post

const attachedPost2 = new AttachedPost("Author4", "This is another attached post", "2024-07-13");
console.log(attachedPost2.highlighted); // false
attachedPost2.makeTextHighlighted();
console.log(attachedPost2.highlighted); // true
