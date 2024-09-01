<template>
  <section class="hero-banner">
    <aside class="hero-banner__social-icons">
      <ul>
        <li>
          <NuxtLink><Icon name="InstagramIcon"></Icon></NuxtLink>
        </li>
        <li>
          <NuxtLink><Icon name="FacebookIcon"></Icon></NuxtLink>
        </li>
        <li>
          <NuxtLink><Icon name="LinkedinIcon"></Icon></NuxtLink>
        </li>
        <li>
          <NuxtLink><Icon name="YoutubeIcon"></Icon></NuxtLink>
        </li>
      </ul>
    </aside>
    <swiper
      :loop="true"
      :modules="modules"
      :navigation="true"
      :slides-per-view="1"
      :space-between="0"
      :auto-play="true"
      @slideChange="onSlideChange"
      @swiper="onSwiper"
      :pagination="false"
      :draggable="true"
    >
      <swiper-slide
        v-for="(item, index) in banner"
        :key="index"
        class="hero-banner__swiper"
      >
        <figure
          :style="{ backgroundImage: `url(${item.node.mediaItemUrl})` }"
          :alt="item.node.altText"
          class="hero-banner__background"
        ></figure>
        <div class="container hero-banner__container">
          <div class="hero-banner__content">
            <div>
              <h1>{{ item.node.title }}</h1>
              <div v-html="item.node.description">
              </div>
            </div>
            <button class="btn btn-primary">
              Entre em contato
              <span>
                <NuxtImg src="/chevron.png" alt="Seta para direita"></NuxtImg>
              </span>
            </button>
          </div>
        </div>
      </swiper-slide>
    </swiper>
    <div class="custom-pagination hero-banner__bottom-pagination">
      <ul>
        <li
          v-for="(slide, index) in slides"
          :key="index"
          :class="{ active: activeIndex === index }"
          @click="goToSlide(index)"
        >
          <span>{{ index + 1 }}.</span> {{ slide.title }}
        </li>
      </ul>
    </div>

    <div class="custom-number-pagination hero-banner__number-pagination">
      <ul>
        <li
          v-for="(slide, index) in slides"
          :key="index"
          :class="{ active: activeIndex === index }"
          @click="goToSlide(index)"
        >
          0{{ index + 1 }}
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { watch } from "vue";
import { Icon } from "#components";

import { Swiper, SwiperSlide } from "swiper/vue";

export default {
  data() {
    return {
      homepageContent: null,
      posts: null,
      items: [
        { image: "/image-1.png", alt: "Image 1" },
        { image: "/image-1.png", alt: "Image 2" },
        { image: "/image-1.png", alt: "Image 3" },
        { image: "/image-1.png", alt: "Image 4" },
      ],
    };
  },
  props: {
    banner: Array
  },
  setup() {
    const slides = ref([
      { title: "Reduz tributo, aumenta lucro" },
      { title: "Outra vantagem" },
      { title: "Mais um benefício" },
      { title: "Último destaque" },
    ]);

    const swiperInstance = ref(null);
    const activeIndex = ref(0);

    const swiperOptions = {
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        loop: true,
      },
    };

    const onSlideChange = (swiper) => {
      activeIndex.value = swiper.activeIndex;
    };

    const onSwiper = (swiper) => {
      swiperInstance.value = swiper;
    };

    const goToSlide = (index) => {
      if (swiperInstance.value) {
        swiperInstance.value.slideToLoop(index); // Use slideToLoop to handle looping
        activeIndex.value = index; // Manually set active index when navigating
      }
    };

    watch(
      () => swiperInstance.value && swiperInstance.value.activeIndex,
      (newIndex) => {
        activeIndex.value = newIndex;
      }
    );
    return {
      onSwiper,
      slides,
      swiperInstance,
      swiperOptions,
      onSlideChange,
      activeIndex,
      goToSlide,
      modules: [Navigation, Pagination, Scrollbar, A11y],
    };
  },
  components: {
    Swiper,
    SwiperSlide,
    Icon
  },
};
</script>

<style lang="sass">
@import "@/assets/styles/components/sections/hero-banner"
</style>