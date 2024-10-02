<template>
  <section :class="'about-us ' + (isPurple ? 'about-us--purple' : '')"
    class="'about-us ' + (isGreen ? 'about-us--green' : '')">
    <div class="container">
      <div class="about-us__container" v-if="content">
        <div class="about-us__image d-none d-lg-block">
          <NuxtImg alt="imagem do bloco about-us" v-if="content.imagem" :src="content.imagem.node.mediaItemUrl"
            :alt="content.imagem.node.altText"></NuxtImg>
        </div>
        <article class="about-us__text">
          <h2>{{ content.titulo }}</h2>
          <div class="about-us__image d-block d-lg-none">
            <NuxtImg v-if="content.imagem" :src="content.imagem.node.mediaItemUrl" :alt="content.imagem.node.altText">
            </NuxtImg>
          </div>
          <p>{{ content.descricao }}</p>
          <button v-if="(!isPurple, !isGreen)" class="btn btn-primary">
            Entre em contato
            <span>
              <ChevronIcon color="#191919" />
            </span>

          </button>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { defineProps } from "vue";
import ChevronIcon from "../global/ChevronIcon.vue";

defineProps({
  isPurple: {
    type: Boolean,
    required: false,
  },
  content: {
    type: Object,
    required: false
  },
  isGreen: {
    type: Boolean,
    required: false,
  },
});


</script>

<style lang="sass">
@import "@/assets/styles/components/sections/about-us"
</style>
