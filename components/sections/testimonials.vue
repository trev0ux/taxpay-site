<template>
  <section class="testimonials">
    <div class="container">
      <h2><WordAnimation :content="testimonials.titulo"/></h2>
      <div class="testimonials__swiper-container">
        <swiper
          :loop="true"
          :modules="modules"
          :navigation="{ nextEl: nextEl, prevEl: prevEl }"
          :slides-per-view="3"
          :space-between="16"
          class="swiper"
          :breakpoints="breakpoints"
          :auto-play="true"
          :draggable="true"
        >
          <swiper-slide
            v-for="(item, index) in testimonials.depoimentos"
            :key="index"
            class="testimonials__swiper"
          >
            <div class="testimonials__item">
              <Icon name="QuotesIcon"></Icon>
              <h3>
                {{ item.citacao }}
              </h3>
              <p>{{ item.comentario }}</p>
              <div class="testimonials__author">
                <NuxtImg :src="item.imagem.node.mediaItemUrl" :alt="item.nome"></NuxtImg>
                <div>
                  <h4>{{ item.nome }}</h4>
                  <p>{{ item.cargo }}</p>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
        <div class="swiper-navigation testimonials__navigation">
          <button 
            ref="prevEl" 
            class="btn p-0 swiper-button-prev" 
            aria-label="Slide anterior"
          ></button>
          <button 
            ref="nextEl" 
            class="btn p-0 swiper-button-next" 
            aria-label="Próximo slide"
          ></button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";
import { Icon } from "#components";
import WordAnimation from "../WordAnimation.vue"

export default {
  data() {
    return {
      items: [],
    };
  },
  props: {
    testimonials: Object
  },
  setup() {
    const prevEl = ref(null);
    const nextEl = ref(null);
    const breakpoints = {
      1440: {
        slidesPerView: 3,
        spaceBetween: 16,
      },
      768: {
        slidesPerView: 2.5,
        spaceBetween: 12,
      },
      375: {
        slidesPerView: 1,
        spaceBetween: 16,
      },
      260: {
        slidesPerView: 1,
        spaceBetween: 16,
      },
    };

    return {
      modules: [Navigation],
      prevEl,
      breakpoints,
      nextEl,
    };
  },
  components: {
    Swiper,
    SwiperSlide,
    Icon,
    WordAnimation
  },
};
</script>

<style lang="sass">
@import "@/assets/styles/components/sections/testimonials"
</style>