const headerNode = document.querySelector('.js-header');

function headerScrollHandler(e){
    const scrollY = window.scrollY;
//    const scrollBreakpoint = window.matchMedia("(max-width: 767px)").matches ? 144 : 0;
    
    if (scrollY >= 144){
        headerNode.classList.add('state_scrolled');
    } else {
        headerNode.classList.remove('state_scrolled');
    }
}

window.addEventListener('scroll', headerScrollHandler, {passive: true})

export {headerNode};