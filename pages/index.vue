<template>
  <div>
    <banner :banner="banner"></banner>
    <culture></culture>
    <services></services>
    <about-us></about-us>
    <team></team>
    <testimonials></testimonials>
  </div>
</template>

<script>
import { HOMEPAGE_QUERY } from "~/graphql/queries";
import { useNuxtApp } from "#app";
import Banner from "@/components/sections/banner";
import Culture from "@/components/sections/culture";
import Services from "@/components/sections/services";
import AboutUs from "@/components/sections/about-us";
import Team from "@/components/sections/team";
import Testimonials from "@/components/sections/testimonials";

export default {
  mounted() {
    this.fetchData();
  },
  data() {
    return {
      banner: []
    }
  },
  components: {
    Banner,
    Culture,
    Services,
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
        this.banner = data.page.banner
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
        return {
          posts: [],
          homepageContent: "",
        };
      }
    },
  },
};
</script>

<style lang="sass">
@import "@/assets/styles/pages/home"
</style>
