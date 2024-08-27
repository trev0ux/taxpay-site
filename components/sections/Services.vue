<template>
  <section class="services">
    <div class="container">
      <h2>Sua empresa com mais caixa.</h2>

      <article class="services__container">
        <div class="services__accordion-item">
          <div
            v-for="(service, index) in services"
            :key="service.title"
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
              {{ service.title }}
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
                {{ service.content }}
              </p>
            </transition>
          </div>
        </div>
        <figure>
          <NuxtImg src="/image-1.png" alt="Image 1"></NuxtImg>
          <NuxtImg src="/image-1.png" alt="Image 1"></NuxtImg>
          <NuxtImg src="/image-1.png" alt="Image 1"></NuxtImg>
        </figure>
      </article>
    </div>
  </section>
</template>

<script>
import { Icon } from "#components";

export default {
  components: {
    Icon
  },
  data() {
    return {
      services: [
        {
          title: "Design de websites",
          content:
            "Criamos sites únicos que capturam olhares, engajam usuários e deixam uma impressão duradoura. Nosso design premium garante que sua marca se destaque no mundo digital.",
        },
        {
          title: "Desenvolvimento de websites",
          content:
            "Construímos sites rápidos, seguros e escaláveis. Nossa equipe garante que seu site funcione perfeitamente e seja fácil de atualizar com nosso CMS intuitivo.",
        },
        {
          title: "Identidade visual",
          content:
            "Com atenção aos detalhes e foco no usuário, desenvolvemos sua identidade visual para se destacar e entregar uma experiência excepcional. Transformamos suas ideias em produtos prontos para o mercado, tão atraentes visualmente quanto fáceis de usar.",
        },
      ],
      currentIndex: 0,
      progress: 0,
      interval: null,
    };
  },
  methods: {
    startAnimation(itemIndex) {
      this.animateCascade(itemIndex, true);
    },
    reverseAnimation(itemIndex) {
      this.animateCascade(itemIndex, false);
    },
    toggleService(index) {
      this.currentIndex = index;
      this.progress = 0;
      this.startProgress();
    },
    startProgress() {
      clearInterval(this.interval);
      this.interval = setInterval(() => {
        this.progress += 1;
        if (this.progress >= 100) {
          this.progress = 0;
          this.currentIndex = (this.currentIndex + 1) % this.services.length;
        }
      }, 30);
    },
  },
  mounted() {
    this.startProgress();
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
};
</script>
<style lang="sass">
@import "@/assets/styles/components/sections/services"
</style>