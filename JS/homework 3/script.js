// wLPp7khnRijyFkAKA4oN2ZGkCxudDkaTwVuXhqBUeo/edit?usp=sharing
// 1. С помощью цикла for написать алгоритм для вывода чисел (выводите в консоль, с помощью console.log) от 0 до 10
// включительно, чтобы результат выглядел так:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число
// Для решения этой задачи используйте остаток от деления на 2, подробнее здесь
// https://developer.mozilla.org/ru/docs/Learn/JavaScript/First_steps/Math#%D0%B0%D1%80%D0%B8%D1%84%D0%BC%D0%B
// 5%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5_%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%82
// %D0%BE%D1%80%D1%8B и здесь https://developer.mozilla.org/enUS/docs/Web/JavaScript/Reference/Operators/Remainder

for (let i = 0; i <= 10; i++) {
  if (i === 0) {
    console.log(i + " - это ноль");
  } else if (i % 2 === 0) {
    console.log(i + " - чётное число");
  } else {
    console.log(i + " - нечётное число");
  }
}

// 2. Выведите в консоль значения, указанные рядом с комментариями:
const post = {
  author: "John", //вывести этот текст
  postId: 23,
  comments: [
    {
      userId: 10,
      userName: "Alex",
      text: "lorem ipsum",
      rating: {
        likes: 10,
        dislikes: 2, //вывести это число
      },
    },
    {
      userId: 5, //вывести это число
      userName: "Jane",
      text: "lorem ipsum 2", //вывести этот текст
      rating: {
        likes: 3,
        dislikes: 1,
      },
    },
  ],
};

console.log(post.author);
console.log(post.comments[0].rating.dislikes);
console.log(post.comments[1].userId);
console.log(post.comments[1].text);

// 3. Перед вами находится массив с продуктами, сегодня распродажа и вам нужно на каждый товар применить скидку
// 15%, можете использовать метод forEach https://mzl.la/1AOMMWX :
const products = [
  {
    id: 3,
    price: 200,
  },
  {
    id: 4,
    price: 900,
  },
  {
    id: 1,
    price: 1000,
  },
];

const salePercent = 15;
const formattedSalePercent = 15 / 100;

products.forEach((product) => {
  const saleValue = product.price * formattedSalePercent;
  product.price = product.price - saleValue;
});
console.log(products);

// 4. Перед вами находится массив с продуктами в интернет-магазине. Вам нужно:
// 1. Получить все товары, у которых есть фотографии, можете использовать метод filter https://mzl.la/2qROQkT
// 2. Отсортируйте товары по цене (от низкой цены к высокой), можете использовать метод sort
// https://mzl.la/2Y79hbZ , как устроен sort можно посмотреть например здесь https://youtu.be/O2pusOp0gC0 или в
// дополнительных видео в материалах урока.
const products2 = [
  {
    id: 3,
    price: 127,
    photos: ["1.jpg", "2.jpg"],
  },
  {
    id: 5,
    price: 499,
    photos: [],
  },
  {
    id: 10,
    price: 26,
    photos: ["3.jpg"],
  },
  {
    id: 8,
    price: 78,
  },
];

const filteredProducs2 = products2.filter((product) => product.photos && product.photos.length > 0);
console.log(filteredProducs2);

const sortedProducs2 = [...products2].sort((a, b) => a.price - b.price);
console.log(sortedProducs2);

// В первом пункте у вас должен получиться такой массив из двух элементов:
// Во втором пункте массив должен стать таким:

// 5. (По желанию, т.к. такая особенность практически не используется) Вывести с помощью цикла for числа от 0 до 9,
// НЕ используя тело цикла. То есть выглядеть должно примерно так:
// for(…){/* здесь пусто */}

// Помните, что в первом, втором и третьем раздела цикла можно не только писать условия, или увеличивать счетчик
// например на 1, допустимы любые выражения, например вызовы функций.

for (let i = 0; i < 10; console.log(i++)) {}

// 6. Нарисовать горку с помощью console.log (используя цикл for), как показано на рисунке,
// только у вашей горки должно быть 20 рядов, а не 5:

let string = "";

for (let i = 0; i < 20; i++) {
  console.log((string += "x"));
}
