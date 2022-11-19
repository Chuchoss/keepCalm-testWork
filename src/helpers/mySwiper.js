export default function mySwiper() {
  let images = [...document.querySelectorAll(".item")];
  let swiperTitle = document.getElementById("swiper-title");
  let containerSwiper = document.getElementById("swiper-container");
  let slider = document.querySelector(".slider");
  let sliderWidth = slider.getBoundingClientRect().width;
  let conteinerRigth = images.length * 360 - sliderWidth - 40;
  let topOffset = parseFloat(getCoords(slider).top).toFixed(2);
  let imageWidth;
  let current = 0;
  let target = 0;
  let ease = 0.07;
  let titleOffset = 50;

  function lerp(start, end, t) {
    return start * (1 - t) + end * t;
  }

  function setTransform(el, transform) {
    el.style.transform = transform;
  }
  function init() {
    imageWidth = sliderWidth / images.length;
    containerSwiper.style.height = `${
      (sliderWidth - (window.innerWidth - window.innerHeight)) * images.length -
      (sliderWidth + 40)
    }px`;
  }

  function getCoords(elem) {
    let box = elem.getBoundingClientRect();

    return {
      top: box.top + window.pageYOffset,
      right: box.right + window.pageXOffset,
      bottom: box.bottom + window.pageYOffset,
      left: box.left + window.pageXOffset,
    };
  }

  function animate() {
    current = parseFloat(lerp(current, target, ease)).toFixed(2);
    current = current >= conteinerRigth ? conteinerRigth : current;
    target = window.scrollY - topOffset;

    getCoords(slider).top - getCoords(swiperTitle).top <= titleOffset
      ? (swiperTitle.style.opacity = 0)
      : (swiperTitle.style.opacity = 1);
    setTransform(slider, `translateX(-${current}px)`);
    requestAnimationFrame(animate);
  }

  init();
  animate();
}
