<template>
  <section class="testimonials">
    <div class="container">
      <h2>Depoimentos de nossos clientes</h2>
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
            v-for="(item, index) in items"
            :key="index"
            class="testimonials__swiper"
          >
            <div class="testimonials__item">
              <Icon name="QuotesIcon"></Icon>
              <h5>
                {{ item.quotes }}
              </h5>
              <p>{{ item.comment }}</p>
              <div class="testimonials__author">
                <NuxtImg :src="item.image" :alt="item.name"></NuxtImg>
                <div>
                  <h6>{{ item.author }}</h6>
                  <p>{{ item.role }}</p>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
        <div class="swiper-navigation testimonials__navigation">
          <button ref="prevEl" class="btn p-0 swiper-button-prev"></button>
          <button ref="nextEl" class="btn p-0 swiper-button-next"></button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";
import { Icon } from "#components";

export default {
  data() {
    return {
      items: [
        {
          image: "/image-1.png",
          quotes: "Abigail",
          comment: "Viadooo",
          role: "CEO",
          alt: "Image 1",
          author: "Jerundio",
        },
        {
          image: "/image-1.png",
          quotes: "Abigail",
          comment: "Viadooo",
          role: "CEO",
          alt: "Image 1",
          author: "Jerundio",
        },
        {
          image: "/image-1.png",
          quotes: "Abigail",
          comment: "Viadooo",
          role: "CEO",
          alt: "Image 1",
          author: "Jerundio",
        },
        {
          image: "/image-1.png",
          quotes: "Abigail",
          comment: "Viadooo",
          role: "CEO",
          alt: "Image 1",
          author: "Jerundio",
        },
      ],
    };
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
  },
};
</script>

<style lang="sass">
@import "@/assets/styles/components/sections/testimonials"
</style>