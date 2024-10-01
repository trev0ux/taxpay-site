import { defineStore } from "pinia";
import { ref } from "vue";
import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "../app.vue";
import { SITECONTENT_QUERY } from "../graphql/queries";
import { useNuxtApp } from "#app";

export const useSiteContentStore = defineStore("siteContent", () => {
  const siteContent = ref(null);
  const loading = ref(false);
  const error = ref<string | null>(null);
  const { $axios } = useNuxtApp();

  async function fetchSiteContent() {
    try {
        const response = await $axios.post("", { query: SITECONTENT_QUERY });
        if (response.data) {
          siteContent.value = response.data;
          console.log("Data fetched:", siteContent.value);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
  }

  return {
    siteContent,
    fetchSiteContent,
  };
});
