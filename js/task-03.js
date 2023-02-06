//* 1. Напиши скрипт для створення галереї зображень на підставі масиву даних. HTML містить список ul.gallery.
//* 2. Усі елементи галереї повинні додаватися в DOM за одну операцію додавання.
//* 3. Додай мінімальне оформлення галереї флексбоксами або грідами через CSS класи.

/*
    1. Створит контейнер для подальшого запису в html 
       Створити цикл для перебoру масиву images
    2. 
    3. 
    4. 
    5. 
    6. 
    7. 
*/

const getGallery = document.querySelector(".gallery")

const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

//* 1-й варіант:

const newImages = images
.map((item) => `<li class="imgTaskThree"><img src="${item.url}" alt="${item.alt}" width="300" height="200"></img></li>`)
.join("");

getGallery.insertAdjacentHTML("beforeend", newImages);

// for (const img of images) {
//   const itemElement = document.createElement("li");
//    itemElement.textContent = img;
//    getGallery.append(itemElement);
// }