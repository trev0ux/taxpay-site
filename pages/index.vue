<template>
  <div>
    <banner :banner="banner"></banner>
    <culture :culture="culture" v-if="culture"></culture>
    <how-it-works :how-it-works="howItWorks" v-if="howItWorks"></how-it-works>
    <about-us :content="aboutUs" v-if="aboutUs"></about-us>
    <team :team="team" v-if="team"></team>
    <testimonials :testimonials="testimonials" v-if="testimonials"></testimonials>
  </div>
</template>

<script>
import Banner from "@/components/sections/banner";
import Culture from "@/components/sections/culture";
import HowItWorks from "@/components/sections/how-it-works";
import AboutUs from "@/components/sections/about-us";
import Team from "@/components/sections/team";
import Testimonials from "@/components/sections/testimonials";
import { useSiteContentStore } from "@/stores/index";

export default {
  data() {
    return {
      banner: [],
      culture: [],
      services: [],
      aboutUs: [],
      team: [],
      testimonials: []
    }
  },
  components: {
    Banner,
    Culture,
    HowItWorks,
    AboutUs,
    Team,
    Testimonials
  },
  async mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      const siteContentStore = useSiteContentStore();

      await siteContentStore.fetchSiteContent();
      const content = siteContentStore.siteContent
      this.banner = content.data.home.banner
      this.culture = content.data.home.cultura;
      this.howItWorks = content.data.home.comoFunciona;
      this.aboutUs = content.data.home.sobreNos;
      this.team = content.data.home.timePreview;
      this.testimonials = content.data.home.depoimentos;
    },
  },
};
</script>

<style lang="sass">
@import "@/assets/styles/pages/home"
</style>
