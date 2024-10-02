<template>
  <div>
    <div v-if="loading">
      <PreLoader />
    </div>
    <section class="team-page" v-else>
      <div class="container">
        <h2><word-animation :content="title"/></h2>
        <div class="team-page__members ">
          <div class="team-page__cards" v-for="(item, index) in teams" :key="item.nome">
            <TeamMember :image="item.imagem.node.mediaItemUrl" :name="item.nome" :role="item.cargo"
              :size="index === 0 || index === 1 ? 'lg' : 'sm'" :showLinkedInIcon="item.linkedin != null">
            </TeamMember>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import TeamMember from "~/components/TeamMember.vue";
import { useSiteContentStore } from "@/stores/index";
import WordAnimation from '~/components/WordAnimation.vue';


export default {
  components: {
    TeamMember,
    WordAnimation,
  },
  data() {
    return {
      teams: [],
      title: "",
      loading: true
    };
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
        console.log(content);
        this.teams = content.data.time.time.membrosDoTime;
        this.title = content.data.time.time.titulo;
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


<style lang="sass" scoped>
@import "@/assets/styles/pages/equipe"
</style>