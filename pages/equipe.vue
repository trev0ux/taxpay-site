<template>
  <section class="team-page">
    <div class="container">


      <h2>Equipe</h2>
      <div class="team-page__members ">
        <div class="team-page__cards" v-for="(item, index) in teams" :key="item.name">
          <team-member 
          :name="item.name" :role="item.role" :size="index === 0 || index === 1 ? 'lg' : 'sm'"
            :showLinkedInIcon="index < 2">
          </team-member>
        </div>
      </div>

    </div>

  </section>
</template>

<script>

import TeamMember from "~/components/team-member.vue";


export default {
  components: {
    TeamMember,
  },
  data() {
    return {
      teams: [
        {
          name: "Alberto",
          role: "CEO",
        },
        {
          name: "Carla",
          role: "CEO",
        },
        {
          name: "Jessica",
          role: "CEO",
        },
        {
          name: "Alberto",
          role: "CEO",
        },
        {
          name: "Alberto",
          role: "CEO",
        },
        {
          name: "Alberto",
          role: "CEO",
        },
        {
          name: "Alberto",
          role: "CEO",
        },
        {
          name: "Alberto",
          role: "CEO",
        },
        {
          name: "Alberto",
          role: "CEO",
        },
        {
          name: "Alberto",
          role: "CEO",
        },
      ],
    };
  },
};
</script>


<style lang="sass">
@import "@/assets/styles/pages/equipe"
</style>