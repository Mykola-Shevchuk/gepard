import jump from 'jump.js'
//import SmoothScroll from 'smooth-scroll/dist/smooth-scroll.polyfills.js'

//var scroll = new SmoothScroll('a.js-link_anchor');
const anchorLinks = document.querySelectorAll('.js-link_anchor');
const anchorLinkClickHandler = function(e) {
    e.preventDefault();
    
    const href = this.hash;
    jump(href);
};
anchorLinks.forEach(link => link.addEventListener('click', anchorLinkClickHandler))

export default anchorLinks