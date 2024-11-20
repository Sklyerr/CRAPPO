gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
if (ScrollTrigger.isTouch !== 1) {

    ScrollSmoother.create ({
        wrapper: '.wrapper',
        content: '.content',
        smooth: 2,
        effects: true
    })

}



// Функция-обработчик клика
function handleClick(event) {
    event.preventDefault(); // Предотвращаем переход по ссылке
    const linkId = event.target.id; // Получаем id элемента
    if (linkId == "menuProducts"){
        let block = document.getElementById('blockProducts');
        let blockPosition = block.getBoundingClientRect().top;
        let offsetPosition = blockPosition + window.scrollY
  
        window.scroll({
            top: offsetPosition,
            behavior: "smooth"
  })
  }
  
  
  }
  
  // Добавляем обработчик клика на все ссылки
  const links = document.querySelectorAll('a'); // Выбираем все теги <a>
  links.forEach(link => {
    link.addEventListener('click', handleClick);
  });
// function listenerClick() {
//     let link = document.addEventListener("click")

//     if (link == 'menuProducts') {
//         block = 'blockProducts'
//         return block
//     } 
// }

// function scrollToBlock(block) {
//     let blockPosition = block.getBoundingClientRect().top;
//     let offsetPosition = blockPosition + window.scrollY;

//     window.scroll({
//         top: offsetPosition,
//         behavior: "smooth"
//     })
// }

listenerClick();
scrollToBlock(block);
// let link = document.getElementById('menuProducts');
// let block = document.getElementById('blockProducts');
// let blockPosition = block.getBoundingClientRect().top;
// let offsetPosition = blockPosition + window.scrollY;

// link.addEventListener("click", ()=>{
//     window.scroll({
//         top: offsetPosition,
//         behavior: "smooth"
//     });
// });