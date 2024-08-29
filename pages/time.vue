<template>
  <section class="team-page">
    <div class="container">
      <h2>Time</h2>
      <div v-for="item in teams" :key="item.name">
        <team-member
          :name="item.name"
          :role="item.role"
          :size="index == 0 && index == 1 ? 'lg' : 'sm'"
        >
        </team-member>
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

<style></style>
