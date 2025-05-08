import Swiper from 'swiper';
import { Navigation, Keyboard, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

Swiper.use([Navigation, Keyboard, EffectFade]);

const swiper = new Swiper('.container-swiper', {
  loop: true,
  slidesPerView: 5,
  centeredSlides: true,
  initialSlide: 5,
  spaceBetween: 100,
  speed: 500,
  loopAdditionalSlides: 0,

  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  navigation: {
    nextEl: '[data-arrow="next"]',
    prevEl: '[data-arrow="prev"]',
  },
  a11y: true,
});
