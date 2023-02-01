//* 1. Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
//* 2. Додасть назву інгредієнта як його текстовий вміст.
//* 3. Додасть елементу клас item.
//* 4. Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

/*
    1. Створити елемент <li>
    2. Додати назви в створені <li>
    3. Створити цикл для перебoру елементів категорій
    4. Знайти Заголовки <h2>
    5. Вивести контент Заголовків
    6. Знайти кількість елементів в категорії <li>
    7. Вивести знайдену кількість елементів   
*/

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// console.log(ingredients);

const container = document.getElementById("ingredients")


for (const item of ingredients) {
  const itemElement = document.createElement("li")
  itemElement.textContent = item;
  container.append(itemElement);

  console.log(itemElement);  
}





// const ingredientsList = document.querySelector("#ingredients");
// ingredientsList.append(
//   ...ingredients.map((item) => {
//     let itemList = document.createElement("li");
//     itemList.textContent = item;
//     return itemList;
//   })
// );

// / const list = ingredients.map((item) => {
//   let itemList = document.createElement("li");
//   itemList.textContent = item;
//   return itemList;
// });
// ingredientsList.append(...list);

// for (let item of ingredients) {
//  let itemList = document.createElement("li");
//  itemList.textContent = item;
//  ingredientsList.append(itemList);
// }