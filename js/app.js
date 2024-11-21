gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
if (ScrollTrigger.isTouch !== 1) {

    ScrollSmoother.create ({
        wrapper: '.wrapper',
        content: '.content',
        smooth: 2,
        effects: true
    })

}



function blockGetId(blockId) {
    let block = document.getElementById(blockId);
    let blockPosition = block.getBoundingClientRect().top + window.scrollY;
    return blockPosition;
}

// Функция-обработчик клика
function handleClick(event) {
    event.preventDefault(); // Предотвращаем переход по ссылке
    let linkId = event.target.id; // Получаем id элемента
    let blockId;
    if (linkId == "menuProducts" || linkId == "footerProducts"){
        blockId = 'blockProducts';
    } if (linkId == "menuFeatures" || linkId == "footerFeatures"){
        blockId = 'blockFeatures';
    } if (linkId == "menuAbout" || linkId == "footerAbout"){
        blockId = 'blockAbout';
    } if (linkId == "menuContact" || linkId == "footerContact"){
        blockId = 'blockContact';
    } if (linkId == "footerHome"){
        blockId = 'blockTop';
    } 

    let blockPosition = blockGetId(blockId);

    window.scroll({
        top: blockPosition,
        behavior: "smooth"
    })
};

  
// Добавляем обработчик клика на все ссылки
let links = document.querySelectorAll('a');
links.forEach(link => {
    link.addEventListener('click', handleClick);
})