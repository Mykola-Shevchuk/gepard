import {tns} from "tiny-slider/src/tiny-slider";

const sliderNode = document.querySelector('.b-tabs-list');

const slider = sliderNode ? tns({
  container: sliderNode,
  items: 6,
  edgePadding: 0,
  animateIn:'tns-fadeIn',
  animateOut: 'tns-fadeOut',
  controls: false,
  nav: false,
  mouseDrag: true,

  responsive: {
    1300: {
      items: 6,
      disable: true,
    },
    800: {
      items: 6,
      disable: true
    },
    600: {
      items: 4
    },
    530: {
      items: 3
    },
    400: {
      items: 2
    },
    300: {
      items: 1
    },
  }
//    preventScrollOnTouch: 'force',
//    autoplay: true,
//    autoplayButtonOutput: false,
}) : null;

export default slider;