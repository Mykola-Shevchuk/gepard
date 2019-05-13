import { tns } from "tiny-slider/src/tiny-slider";

const sliderNode = document.querySelector('.js-slider_instructions');

const slider = sliderNode ? tns({
  container: sliderNode,
  items: 4,
  slideBy: 'page',
  animateIn: 'tns-fadeIn',
  controls: false,
  mouseDrag: true,
  swipeAngle: 25
//    preventScrollOnTouch: 'force',
//    autoplay: true,
//    autoplayButtonOutput: false,
}) : null;

export default slider;