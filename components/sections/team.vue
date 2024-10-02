<template>
  <section class="team">
    <h2>{{ team.titulo }}</h2>
    <div class="container">
      <div class="team__members">
        <TeamMember v-for="(member, index) in team.membros" :key="index" :name="member.titulo" :role="member.cargo" :image="member.imagem.node.mediaItemUrl"></TeamMember>
      </div>
    </div>
  </section>
</template>

<script>
import TeamMember from '../TeamMember.vue';

export default {
  components: {
    TeamMember,
  },
  props: {
    team: Object
  }
};
</script>

<style lang="sass">
@import "@/assets/styles/components/sections/team"
</style>
