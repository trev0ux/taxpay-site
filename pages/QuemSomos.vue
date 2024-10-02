<template>
  <article>
    <div v-if="loading">
      <PreLoader />
    </div>
    <section class="quem-somos" v-else>
      <about-us :content="aboutUs" v-if="aboutUs"></about-us>
      <div class="container">
        <div class="quem-somos__percentage ">
          <div>
            <h4><word-animation :content="title"/></h4>
            <NuxtImg :src="image" :alt="altText"></NuxtImg>
          </div>
          <div class="quem-somos__information">
            <p>{{ description }}
            </p>
            <div class="quem-somos__values">
              <div class="quem-somos__value" v-for="(item, index) in gains" :key="index">
                <h3><word-animation :content="item.numero"/></h3>
                <p>{{ item.descricao }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </article>
</template>
<script>
import AboutUs from "@/components/sections/about-us";
import { useSiteContentStore } from "@/stores/index";
import PreLoader from "@/components/PreLoader";
import WordAnimation from '~/components/WordAnimation.vue';

export default {
  components: {
    AboutUs,
    PreLoader,
    WordAnimation
  },
  data() {
    return {
      title: "",
      description: "",
      image: "",
      altText: "",
      gains: [],
      aboutUs: [],
      loading: true
    }
  },
  async mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      const siteContentStore = useSiteContentStore();

      try {
        await siteContentStore.fetchSiteContent();
        const content = siteContentStore.siteContent

        console.log(content)
        this.title = content.data.quemSomos.title;
        this.description = content.data.quemSomos.quemSomos.descricao;
        this.image = content.data.quemSomos.quemSomos.imagem.node.mediaItemUrl;
        this.altText = content.data.quemSomos.quemSomos.imagem.node.altText;
        this.gains = content.data.quemSomos.quemSomos.ganhos.valor;
        this.aboutUs = content.data.quemSomos.sobreNos;

        this.loading = false
      } catch(error) {
        console.log(error)
      } finally {
        this.loading = false
      }

    },
  },
}

</script>

<style lang="sass">
@import "@/assets/styles/pages/quem-somos"

</style>
