<template>
  <div>

    <head>
      <title>Equipe - TaxPay</title>
      <html lang="pt-BR">

      </html>
      <meta name="description" content="Conheça a nossa equipe.">
    </head>
    <section class="team-page">
      <div class="container">


        <h2>Equipe</h2>
        <div class="team-page__members ">
          <div class="team-page__cards" v-for="(item, index) in teams" :key="item.name">
            <team-member :name="item.name" :role="item.role" :size="index === 0 || index === 1 ? 'lg' : 'sm'"
              :showLinkedInIcon="index < 2">
            </team-member>
          </div>
        </div>

      </div>

    </section>
  </div>
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


<style lang="sass" scoped>
@import "@/assets/styles/pages/equipe"
</style>