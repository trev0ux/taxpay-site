<template>
  <div>
    <Banner></Banner>
    <Culture></Culture>
    <h1>Homepage</h1>
    <h2>Recent Posts</h2>
    <ul>
      <li v-for="post in posts" :key="post.slug">
        <h3>{{ post.title }}</h3>
      </li>
    </ul>
  </div>
</template>

<script>
import { HOMEPAGE_QUERY } from "~/graphql/queries";
import { useNuxtApp } from "#app";
import Banner from "@/components/sections/Banner";
import Culture from "@/components/sections/Culture";

export default {
  mounted() {
    this.fetchData();
  },
  components: {
    Banner,
    Culture
  },
  setup() {
    const breakpoints = {
      1440: {
        allowTouchMove: false,
        slidesPerView: 4,
        spaceBetween: 32,
      },
      768: {
        slidesPerView: 2.5,
        spaceBetween: 12,
      },
      375: {
        slidesPerView: 1.2,
        spaceBetween: 16,
      },
    };
    return {
      breakpoints,
    };
  },
  methods: {
    async fetchData() {
      const { $axios } = useNuxtApp();
      try {
        const response = await $axios.post("", { query: HOMEPAGE_QUERY });
        const { data } = response.data;
        console.log(response);
        this.posts = data.posts.nodes;
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
