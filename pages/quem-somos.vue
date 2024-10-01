<template>
  <section class="quem-somos ">
    <about-us :content="aboutUs" v-if="aboutUs"></about-us>
    <div class="container">
      <div class="quem-somos__percentage ">
        <div>
          <h4>{{ title }}</h4>
          <NuxtImg :src="image" :alt="altText"></NuxtImg>
        </div>
        <div class="quem-somos__information">
          <p>{{ description }}
          </p>
          <div class="quem-somos__values">
            <div class="quem-somos__value"  v-for="(item, index) in gains" :key="index">
              <h3>{{ item.numero }}</h3>
              <p>{{ item.descricao }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import AboutUs from "@/components/sections/about-us";
import { useSiteContentStore } from "@/stores/index";

export default {
  components: {
    AboutUs
  },
  data() {
    return {
      title: "",
      description: "",
      image: "",
      altText: "",
      gains: [],
      aboutUs: []
    }
  },
  async mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      const siteContentStore = useSiteContentStore();

      await siteContentStore.fetchSiteContent();
      const content = siteContentStore.siteContent

      console.log(content)
        this.title = content.data.quemSomos.title;
        this.description = content.data.quemSomos.quemSomos.descricao;
        this.image = content.data.quemSomos.quemSomos.imagem.node.mediaItemUrl;
        this.altText = content.data.quemSomos.quemSomos.imagem.node.altText;
        this.gains = content.data.quemSomos.quemSomos.ganhos.valor;
        this.aboutUs = content.data.quemSomos.sobreNos;
    },
  },
}

</script>

<style lang="sass">
@import "@/assets/styles/pages/quem-somos"

</style>
