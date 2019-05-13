import { tns } from "tiny-slider/src/tiny-slider";

const sliderNode = document.querySelector('.js-responces__slider');

const slider = sliderNode ? tns({
    container: sliderNode,
    items: 1,
    slideBy: "page",
    mouseDrag: true,
    swipeAngle: 25,
//    autoplay: true,
//    autoplayButtonOutput: false,
}) : null;

export default slider;