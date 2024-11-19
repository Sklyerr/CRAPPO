// Функция-обработчик клика по ссылке
function handleClick(event) {
  event.preventDefault(); // Предотвращаем стандартное поведение ссылки (переход по URL)
  const linkId = event.target.id; // Получаем значение атрибута id элемента, на который кликнули
  console.log('ID ссылки:', linkId); // Выводим id элемента в консоль
}

// Выбираем все элементы <a> на странице
const links = document.querySelectorAll('a'); // querySelectorAll возвращает NodeList со всеми тегами <a>

// Для каждого элемента из списка ссылок добавляем обработчик события
links.forEach(link => {
  link.addEventListener('click', handleClick); // При клике на ссылку будет вызвана функция handleClick
});
