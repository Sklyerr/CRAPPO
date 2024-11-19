// Функция-обработчик клика
function handleClick(event) {
  event.preventDefault(); // Предотвращаем переход по ссылке
  const linkId = event.target.id; // Получаем id элемента
  if (linkId == "menuProducts"){
.   let block = document.getElementById('blockProducts');
.   let blockPosition = block.getBoundingClientRect().top;
.   let offsetPosition = blockPosition + window.scrollY

.   window.scroll({
.     top: offsetPosition,
.     behavior: "smooth"
})
}


}

// Добавляем обработчик клика на все ссылки
const links = document.querySelectorAll('a'); // Выбираем все теги <a>
links.forEach(link => {
  link.addEventListener('click', handleClick);
});
