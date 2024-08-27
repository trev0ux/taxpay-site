<template>
  <section class="team">
    <h2>Team</h2>
    <div class="container">
      <div class="team__members">
        <figure>
          <NuxtLink>
            <Icon name="LinkedinIcon"></Icon>
          </NuxtLink>
          <NuxtImg src="/image-1.png"></NuxtImg>
          <h3>Name Surname</h3>
          <p>Funçao Taxpay</p>
        </figure>
        <figure>
          <NuxtLink>
            <Icon name="LinkedinIcon"></Icon>
          </NuxtLink>
          <NuxtImg src="/image-1.png"></NuxtImg>
          <h3>Name Surname</h3>
          <p>Funçao Taxpay</p>
        </figure>
      </div>
    </div>
  </section>
</template>

<script>
import { Icon } from "#components";

export default {
  components: {
    Icon,
  },
};
</script>

<style></style>
