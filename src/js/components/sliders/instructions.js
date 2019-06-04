import {tns} from "tiny-slider/src/tiny-slider";

const sliderNode = document.querySelector('.js-slider_instructions');

const slider = sliderNode ? tns({
  container: sliderNode,

  edgePadding: 0,
  animateIn:'tns-fadeIn',
  animateOut: 'tns-fadeOut',
  controls: false,
  nav: false,
  mouseDrag: true,
  
  responsive: {
    1300: {
      items: 4,
      disable: true,
    },
    700: {
      items: 4,
      disable: false
    },
    480: {
      items: 2,
      center: true
      
    },
  }
//    preventScrollOnTouch: 'force',
//    autoplay: true,
//    autoplayButtonOutput: false,
}) : null;

export default slider;