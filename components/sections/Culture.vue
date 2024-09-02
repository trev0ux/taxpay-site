<template>
  <section class="company-culture">
    <div class="container company-culture__container">
      <article class="company-culture__text">
        <h2>{{ culture.titulo }}</h2>
        <p> {{ culture.descricao }} </p>
        <button class="btn btn-primary">
          Entre em contato
          <span>
            <NuxtImg src="/chevron.png" alt="Seta para direita"></NuxtImg>
          </span>
        </button>
      </article>
      <article class="company-culture__boxes">
        <swiper :breakpoints="breakpoints">
          
          <swiper-slide  v-for="(item, index) in culture.items" :key="index">
            <div class="company-culture__item">
              <div>
                <NuxtImg
                  :src="item.imagem.node.mediaItemUrl"
                  :alt="item.imagem.node.altText"
                ></NuxtImg>
              </div>
              <h3> {{ item.titulo }}</h3>
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
import { defineProps } from "vue";

defineProps({
  culture: Array
});

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