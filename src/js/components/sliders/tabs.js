import {tns} from "tiny-slider/src/tiny-slider";

const sliderNode = document.querySelector('.b-tabs-list');

const slider = sliderNode ? tns({
  container: sliderNode,

  loop: false,
  nav: false,
  center: true,

  controls: false,

  slideBy: 'page',
  mouseDrag: true,

  responsive: {
    350: {
      items: 2,
    },
    450: {
      items: 3,
    },
    550: {
      items: 4,

    },

    850: {
      items: 6,
      disable: true

    },
  }

}) : null;

export default slider;