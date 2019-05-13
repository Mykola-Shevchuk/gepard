import 'nodelist-foreach-polyfill';
import elementClosest from 'element-closest';
import supportsWebP from 'supports-webp';
import videolazy from './videoLazyLoad';
import '@iconfu/svg-inject';
import objectFitImages from 'object-fit-images';
elementClosest(window);
videolazy('.js-lazy__video');
document.documentElement.classList.add(supportsWebP ? 'webp' : 'no-webp');
SVGInject(document.querySelectorAll("img.svg_injectable"));

objectFitImages();