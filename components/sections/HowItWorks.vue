<template>
  <section class="services">
    <div class="container">
      <h2 v-if="howItWorks"><WordAnimation :content="howItWorks.titulo"/></h2>

      <article class="services__container">
        <div class="services__accordion-item" v-if="howItWorks">
          <div
            v-for="(service, index) in items"
            :key="service.titulo"
            class="services__item"
          >
            <h3
              @click="toggleService(index)"
              :class="
                'services__title ' +
                (index === currentIndex
                  ? 'services__accordion-item--active'
                  : '')
              "
            >
              {{ service.titulo }}
              <Icon name="ChevronIcon"></Icon>
              <span
                class="services__progress-bar"
                :style="{
                  height: index === currentIndex ? `${progress}%` : '0%',
                }"
              ></span>
            </h3>
            <transition name="accordion">
              <p v-show="index === currentIndex">
                {{ service.descricao }}
              </p>
            </transition>
          </div>
        </div>
        <figure v-if="howItWorks">
          <div v-for="(item, index) in howItWorks.imagens" :key="index">
            <NuxtImg :src="item.node.mediaItemUrl" alt="Image 1"> </NuxtImg>
          </div>
        </figure>
      </article>
    </div>
  </section>
</template>

<script setup>
import { Icon } from "#components";
import { onMounted, onBeforeUnmount, defineProps, ref } from "vue";
import WordAnimation from "../WordAnimation.vue"

const currentIndex = ref(0);
const progress = ref(0);
const interval = ref(null);

const props = defineProps({
  howItWorks: Object,
});

const isMobile = ref('ontouchstart' in document.documentElement);


const items = computed(() => {
  if (!props.howItWorks?.itens) {
    return [];
  }

  return Object.entries(props.howItWorks.itens).map(([key, value]) => ({
    key,
    ...value,
  }));
});

function startProgress() {
  clearInterval(interval.value);
  interval.value = setInterval(() => {
    progress.value += 1;
    if (progress.value >= 100) {
      progress.value = 0;
      currentIndex.value = (currentIndex.value + 1) % items.value.length;
    }
  }, 150);
}

function toggleService(index) {
  currentIndex.value = index;
  progress.value = 100;
  clearInterval(interval.value);
}

onMounted(() => {
  if(!isMobile.value) {
    startProgress();
  }
});

onBeforeUnmount(() => {
  clearInterval(interval.value);
});
</script>
<style lang="sass">
@import "@/assets/styles/components/sections/services"
</style>
