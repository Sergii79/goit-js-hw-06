//* 1. Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
//* 2. Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).

/*
    1. Створити константу для категорій  - li.item
    2. Створити цикл для перебoру категорій
   
*/

const numberOfCategories = document.querySelectorAll(".item");

console.log("Number of categories:", numberOfCategories.length);

console.log(numberOfCategories);