<template>
  <div>
    <div v-if="loading">
      <PreLoader />
    </div>
    <div v-else>
      <banner :banner="banner"></banner>
      <culture :culture="culture" v-if="culture"></culture>
      <how-it-works :how-it-works="howItWorks" v-if="howItWorks"></how-it-works>
      <about-us :content="aboutUs" v-if="aboutUs"></about-us>
      <team :team="team" v-if="team"></team>
      <testimonials :testimonials="testimonials" v-if="testimonials"></testimonials>
    </div>
  </div>
</template>

<script>
import Banner from "@/components/sections/Banner";
import Culture from "@/components/sections/Culture";
import HowItWorks from "@/components/sections/HowItWorks";
import AboutUs from "@/components/sections/about-us";
import Team from "@/components/sections/team";
import Testimonials from "@/components/sections/testimonials";
import PreLoader from "@/components/PreLoader";
import { useSiteContentStore } from "@/stores/index";

export default {
  data() {
    return {
      banner: [],
      culture: [],
      services: [],
      aboutUs: [],
      team: [],
      testimonials: [],
      loading: true
    }
  },
  components: {
    Banner,
    Culture,
    HowItWorks,
    AboutUs,
    Team,
    Testimonials,
    PreLoader
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
        this.banner = content.data.home.banner
        this.culture = content.data.home.cultura;
        this.howItWorks = content.data.home.comoFunciona;
        this.aboutUs = content.data.home.sobreNos;
        this.team = content.data.home.timePreview;
        this.testimonials = content.data.home.depoimentos;

        this.loading = false

      } catch (error) {
        console.log(error)
      } finally {
        this.loading = false

      }


    },
  },
};
</script>

<style lang="sass">
@import "@/assets/styles/pages/home"
</style>
