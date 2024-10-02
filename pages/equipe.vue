<template>
  <div>
    <section class="team-page">
      <div class="container">
        <h2>{{ title }}</h2>
        <div class="team-page__members ">
          <div class="team-page__cards" v-for="(item, index) in teams" :key="item.nome">
            <TeamMember :image="item.imagem.node.mediaItemUrl" :name="item.nome" :role="item.cargo" :size="index === 0 || index === 1 ? 'lg' : 'sm'"
              :showLinkedInIcon="item.linkedin != null">
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


export default {
  components: {
    TeamMember,
  },
  data() {
    return {
      teams: [],
      title: ""
    };
  },
  async mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      const siteContentStore = useSiteContentStore();

      await siteContentStore.fetchSiteContent();
      const content = siteContentStore.siteContent
      console.log(content);
      this.teams = content.data.time.time.membrosDoTime;
      this.title = content.data.time.time.titulo;
    },
  },
};
</script>


<style lang="sass" scoped>
@import "@/assets/styles/pages/equipe"
</style>