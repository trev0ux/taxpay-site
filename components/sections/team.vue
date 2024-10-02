<template>
  <section class="team">
    <h2><WordAnimation :content="team.titulo"/></h2>
    <div class="container">
      <div class="team__members">
        <team-member v-for="(member, index) in team.membros" :key="index" :name="member.titulo" :role="member.cargo" :image="member.imagem.node.mediaItemUrl"></team-member>
      </div>
    </div>
  </section>
</template>

<script>
import TeamMember from '../team-member.vue';
import WordAnimation from "../WordAnimation.vue"

export default {
  components: {
    TeamMember,
  },
  components: {
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
