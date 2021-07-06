const categoryRef = document.querySelectorAll('.item');
console.log(categoryRef);
console.log(`В списке ${categoryRef.length} категории`);
console.log('================================================');
categoryRef.forEach(function (element) {
  const titleRef = element.querySelector('h2');
  const numberRef = element.querySelectorAll('li');
  console.log(
    `Категория: ${titleRef.textContent}\nКоличество элементов: ${numberRef.length}`,
  );
  console.log('================================================');
});
