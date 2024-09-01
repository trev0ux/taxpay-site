<template>
  <section class="company-culture">
    <div class="container company-culture__container">
      <article class="company-culture__text">
        <h2>Mudar a realidade E A contabilidade das empresas.</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspen</p>
        <button class="btn btn-primary">
          Entre em contato
          <span>
            <NuxtImg src="/chevron.png" alt="Seta para direita"></NuxtImg>
          </span>
        </button>
      </article>
      <article class="company-culture__boxes">
        <swiper :breakpoints="breakpoints">
          <swiper-slide>
            <div class="company-culture__item">
              <div>
                <NuxtImg
                  src="/money-icon.png"
                  alt="Seta para direita"
                ></NuxtImg>
              </div>
              <h3>lOREM ipsum dolor sit amet</h3>
            </div></swiper-slide
          >
          <swiper-slide>
            <div class="company-culture__item">
              <div>
                <NuxtImg src="/doc-icon.png" alt="Seta para direita"></NuxtImg>
              </div>
              <h3>lOREM ipsum dolor sit amet</h3>
            </div></swiper-slide
          >
          <swiper-slide>
            <div class="company-culture__item">
              <div>
                <NuxtImg
                  src="/calculator-icon.png"
                  alt="Seta para direita"
                ></NuxtImg>
              </div>
              <h3>lOREM ipsum dolor sit amet</h3>
            </div></swiper-slide
          >
          <swiper-slide>
            <div class="company-culture__item">
              <div>
                <NuxtImg
                  src="/graph-icon.png"
                  alt="Seta para direita"
                ></NuxtImg>
              </div>
              <h3>lOREM ipsum dolor sit amet</h3>
            </div>
          </swiper-slide>
        </swiper>
        <div class="company-culture__button">
          <button class="btn btn-primary">
            Entre em contato
            <span>
              <NuxtImg src="/chevron.png" alt="Seta para direita"></NuxtImg>
            </span>
          </button>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";

const breakpoints = {
  1440: {
    allowTouchMove: false,
    slidesPerView: 4,
    spaceBetween: 32,
  },
  768: {
    slidesPerView: 2.5,
    spaceBetween: 12,
  },
  375: {
    slidesPerView: 1.2,
    spaceBetween: 16,
  },
  275: {
    slidesPerView: 1.2,
    spaceBetween: 16,
  },
};
</script>

<style lang="sass">
@import "@/assets/styles/components/sections/culture"
</style>