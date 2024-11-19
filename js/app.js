// Функция-обработчик клика
function handleClick(event) {
  event.preventDefault(); // Предотвращаем переход по ссылке
  const linkId = event.target.id; // Получаем id элемента
  console.log('ID ссылки:', linkId);
}

// Добавляем обработчик клика на все ссылки
const links = document.querySelectorAll('a'); // Выбираем все теги <a>
links.forEach(link => {
  link.addEventListener('click', handleClick);
});
