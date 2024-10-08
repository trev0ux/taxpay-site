<template>
  <section class="team">
    <div class="container">
      <h2><word-animation :content="team.titulo"/></h2>
      <div class="team__members">
        <TeamMember v-for="(member, index) in team.membros" :key="index" :name="member.titulo" :role="member.cargo" :image="member.imagem.node.mediaItemUrl"></TeamMember>
      </div>
    </div>
  </section>
</template>

<script>
import WordAnimation from "../WordAnimation.vue"
import TeamMember from '../TeamMember.vue';

export default {
  components: {
    TeamMember,
    WordAnimation
  },
  props: {
    team: Object
  }
};
</script>

<style lang="sass">
@import "@/assets/styles/components/sections/team"
</style>
