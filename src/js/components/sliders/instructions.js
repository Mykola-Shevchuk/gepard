import {tns} from "tiny-slider/src/tiny-slider";

const sliderNode = document.querySelector('.js-slider_instructions');

const slider = sliderNode ? tns({
  container: sliderNode,

  loop: false,
  nav: true,
  center: true,

  controls: false,

  slideBy: 'page',
  mouseDrag: true,

  responsive: {
    450: {
      items: 1,

      edgePadding: 10
    },
    700: {
      items:2
    },

    1150: {
      items: 3,
    },
    1400: {
      items: 4,
      disable: true

    },
  }
}) : null;

export default slider;
