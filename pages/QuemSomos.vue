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
            <h4><word-animation :content="title" /></h4>
            <NuxtImg :src="image" :alt="altText"></NuxtImg>
          </div>
          <div class="quem-somos__information">
            <p>{{ description }}
            </p>
            <div class="quem-somos__values">
              <div class="quem-somos__value" v-for="(item, index) in gains" :key="index">
                <h3><word-animation :content="item.numero" /></h3>
                <p>{{ item.descricao }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </article>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import { useSiteContentStore } from "@/stores/index";
import AboutUs from '@/components/sections/AboutUs.vue';
import PreLoader from "@/components/PreLoader.vue";
import WordAnimation from '~/components/WordAnimation.vue';

const title = ref("");
const description = ref("");
const image = ref("");
const altText = ref("");
const gains = ref([]);
const aboutUs = ref([]);
const loading = ref(true);

const { data } = await useFetch('https://super.taxxpay.com.br/wp-json/wp/v2/pages', {
  query: { slug: 'quem-somos' }
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


const fetchData = async () => {
  const siteContentStore = useSiteContentStore();

  try {
    await siteContentStore.fetchSiteContent();
    const content = siteContentStore.siteContent;
    title.value = content.data.quemSomos.title;
    description.value = content.data.quemSomos.quemSomos.descricao;
    image.value = content.data.quemSomos.quemSomos.imagem.node.mediaItemUrl;
    altText.value = content.data.quemSomos.quemSomos.imagem.node.altText;
    gains.value = content.data.quemSomos.quemSomos.ganhos.valor;
    aboutUs.value = content.data.quemSomos.sobreNos;
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  fetchData();
});
</script>

<style lang="sass">
@import "@/assets/styles/pages/quem-somos"

</style>
