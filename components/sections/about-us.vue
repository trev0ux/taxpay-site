<template>
  <section :class="'about-us ' + (isPurple ? 'about-us--purple' : '') " class="'about-us ' + (isGreen ? 'about-us--green' : '') ">
    <div class="container">
      <div class="about-us__container">
        <div class="about-us__image d-none d-lg-block">
          <NuxtImg src="/image-1.png" alt="about us banner"></NuxtImg>
        </div>
        <article class="about-us__text">
          <h2>Mudar a realidade E A contabilidade das empresas.</h2>
          <div class="about-us__image d-block d-lg-none">
            <NuxtImg src="/image-1.png" alt="about us banner"></NuxtImg>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspen</p>
          <button v-if="!isPurple, !isGreen" class="btn btn-primary">
            Entre em contato
            <span>
              <NuxtImg src="/chevron.png" alt="Seta para direita"></NuxtImg>
            </span>
          </button>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props:{
    isPurple:{
      type:Boolean,
      required:false
    },

    isGreen:{
      type:Boolean,
      required:false
    
    }
  }
};
</script>

<style lang="sass">
@import "@/assets/styles/components/sections/about-us"
</style>

