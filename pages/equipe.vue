<template>
  <div>
    <div v-if="loading">
      <PreLoader />
    </div>
    <section class="team-page" v-else>
      <article>
        <div class="container">
          <h2><word-animation :content="title" /></h2>
          <div class="team-page__members ">
            <div class="team-page__cards" v-for="(item, index) in teams" :key="item.nome">
              <TeamMember :image="item.imagem.node.mediaItemUrl" :name="item.nome" :role="item.cargo"
                :size="index === 0 || index === 1 ? 'lg' : 'sm'" :showLinkedInIcon="item.linkedin != null">
              </TeamMember>
            </div>
          </div>
        </div>
      </article>
    </section>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import { useSiteContentStore } from "@/stores/index";
import TeamMember from "~/components/TeamMember.vue";
import WordAnimation from '~/components/WordAnimation.vue';

const teams = ref([]);
const title = ref("");
const loading = ref(true);

const fetchData = async () => {
  const siteContentStore = useSiteContentStore();

  try {
    await siteContentStore.fetchSiteContent();
    const content = siteContentStore.siteContent;
    console.log(content);
    teams.value = content.data.time.time.membrosDoTime;
    title.value = content.data.time.time.titulo;
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
};

const { data } = await useFetch('https://super.taxxpay.com.br/wp-json/wp/v2/pages', {
  query: { slug: 'time' }
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

onMounted(() => {
  fetchData();
});
</script>


<style lang="sass" scoped>
@import "@/assets/styles/pages/equipe"
</style>