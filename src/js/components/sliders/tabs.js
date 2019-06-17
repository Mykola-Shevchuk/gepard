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
    250: {
      items: 2,
    },
    350: {
      items: 4,
    },
    450: {
      items: 4,
      edgePadding: 0,
    },
    550: {
      items: 5,
      edgePadding: 50,

    },
    850: {
      items: 5,
      disable: true

    },
  }

}) : null;

export default slider;
