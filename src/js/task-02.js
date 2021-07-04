const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listRef = document.querySelector('#ingredients');
console.log(listRef);
const ingredientsList = ingredients.map(function (element) {
  const item = document.createElement('li');
  listRef.appendChild(item);
  item.textContent = element;
  return item;
});
