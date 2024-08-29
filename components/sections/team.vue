<template>
  <section class="team">
    <h2>Team</h2>
    <div class="container">
      <div class="team__members">
        <team-member></team-member>
        <team-member></team-member>
      </div>
    </div>
  </section>
</template>

<script>
import TeamMember from '../team-member.vue';

export default {
  components: {
    TeamMember,
  }
};
</script>

<style lang="sass">
@import "@/assets/styles/components/sections/team"
</style>
