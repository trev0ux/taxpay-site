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

<script setup>
import { ref, onBeforeMount } from 'vue';
import { useSiteContentStore } from '@/stores/index.ts';
import { useServerSeoMeta } from '#app';
import Banner from '@/components/sections/Banner.vue';
import Culture from '@/components/sections/Culture.vue';
import HowItWorks from '@/components/sections/HowItWorks.vue';
import AboutUs from '@/components/sections/AboutUs.vue';
import Team from '@/components/sections/Team.vue';
import Testimonials from '@/components/sections/Testimonials.vue';
import PreLoader from '@/components/PreLoader.vue';

const banner = ref([]);
const culture = ref([]);
const howItWorks = ref([]);
const aboutUs = ref([]);
const team = ref([]);
const testimonials = ref([]);
const loading = ref(true);

const { data } = await useFetch('https://super.taxxpay.com.br/wp-json/wp/v2/pages', {
  query: { slug: 'home' }
});

if (data.value && data.value[0] && data.value[0].yoast_head_json) {
  const yoast = data.value[0].yoast_head_json;
  useServerSeoMeta({
    title: () => yoast.title || '',
    description: () => yoast.description || '',
    ogUrl: () => yoast.og_url || '',
    ogTitle: () => yoast.og_title || '',
    ogDescription: () => yoast.og_description || '',
    ogImage: () => yoast.og_image && yoast.og_image[0] ? yoast.og_image[0].url : '',
    ogType: () => yoast.og_type || '',
    ogLocale: () => yoast.og_locale || '',
  });
}


async function fetchData() {
  const siteContentStore = useSiteContentStore();

  try {
    await siteContentStore.fetchSiteContent();
    const content = siteContentStore.siteContent;
    banner.value = content.data.home.banner;
    culture.value = content.data.home.cultura;
    howItWorks.value = content.data.home.comoFunciona;
    aboutUs.value = content.data.home.sobreNos;
    team.value = content.data.home.timePreview;
    testimonials.value = content.data.home.depoimentos;
    loading.value = false;
  } catch (error) {
    console.error(error);
  } finally {
    loading.value = false;
  }
}

onMounted(fetchData);
</script>


<style lang="sass">
@import "@/assets/styles/pages/home"
</style>
