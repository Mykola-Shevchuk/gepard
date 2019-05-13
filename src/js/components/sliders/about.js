import { tns } from "tiny-slider/src/tiny-slider";

const sliderNode = document.querySelector('.js-slider_about');

const slider = sliderNode ? tns({
    container: sliderNode,
    items: 1,
    slideBy: 'page',
    animateIn: 'tns-fadeIn',
    mouseDrag: true,
    swipeAngle: 25
//    preventScrollOnTouch: 'force',
//    autoplay: true,
//    autoplayButtonOutput: false,
}) : null;

export default slider;