<template>
  <div>
    <banner :banner="banner" v-if="banner"></banner>
    <culture :culture="culture" v-if="culture"></culture>
    <how-it-works :how-it-works="howItWorks" v-if="howItWorks"></how-it-works>
     <about-us :content="aboutUs" v-if="aboutUs"></about-us>
    <team :team="team" v-if="team"></team>
    <testimonials :testimonials="testimonials" v-if="testimonials"></testimonials>
  </div>
</template>

<script>
import { HOMEPAGE_QUERY } from "~/graphql/queries";
import { useNuxtApp } from "#app";
import Banner from "@/components/sections/banner";
import Culture from "@/components/sections/culture";
import HowItWorks from "@/components/sections/how-it-works";
import AboutUs from "@/components/sections/about-us";
import Team from "@/components/sections/team";
import Testimonials from "@/components/sections/testimonials";

export default {
  mounted() {
    this.fetchData();
  },
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
  methods: {
    async fetchData() {
      const { $axios } = useNuxtApp();
      try {
        const response = await $axios.post("", { query: HOMEPAGE_QUERY });
        const { data } = response.data;
        console.log(data.page)
        this.banner = data.page.banner
        this.culture = data.page.cultura;
        this.howItWorks = data.page.comoFunciona;
        this.aboutUs = data.page.sobreNos;
        this.team = data.page.timePreview;
        this.testimonials = data.page.depoimentos

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
  },
};
</script>

<style lang="sass">
@import "@/assets/styles/pages/home"
</style>
