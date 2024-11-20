function blockGetId(blockId) {
    let block = document.getElementById(blockId);
    let blockPosition = block.getBoundingClientRect().top;
    let offsetPosition = blockPosition + window.scrollY;
    return offsetPosition; // Возвращаем значение offsetPosition
}

// Функция-обработчик клика
function handleClick(event) {
    event.preventDefault(); // Предотвращаем переход по ссылке
    const linkId = event.target.id; // Получаем id элемента
    if (linkId === "menuProducts") { // Сравнение строгое
        let blockId = 'blockProducts';
        let offsetPosition = blockGetId(blockId); // Получаем значение offsetPosition из функции

        window.scroll({
            top: offsetPosition,
            behavior: "smooth"
        });
    }
}

// Добавляем обработчик клика на все ссылки
const links = document.querySelectorAll('a'); // Выбираем все теги <a>
links.forEach(link => {
    link.addEventListener('click', handleClick);
});