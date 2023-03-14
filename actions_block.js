function handleClick(event) {
// Отримати елемент, на якому була викликана подія (в даному випадку, кнопка "ОК")
const button = event.target;
// Отримати батьківський елемент кнопки (div)
const parent = button.parentElement;
// Отримати елемент select, який є батьківським для кнопки (div)
const select = parent.querySelector('select');
// Отримати вибране значення у селекті
const selectedValue = select.value;

  console.log(selectedValue); // Виводить обране значення селект боксу в консоль
}