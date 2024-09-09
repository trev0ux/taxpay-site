<template>
  <figure :class="'team-member ' + (size == 'lg' ? 'team__member--lg' : '')">
    <NuxtLink  v-if="size === 'lg'">
      <Icon name="LinkedinIcon" v-if="linkedin"></Icon>
    </NuxtLink>
    <NuxtImg :src="image ? image : '/image-1.png'"></NuxtImg>
    <h3>{{ name }}</h3>
    <p>{{ role }}</p>
  </figure>
</template>
<script>
import { Icon } from "#components";

export default {
  components: {
    Icon,
  },
  props: {
    name: {
        type: String,
        required: true
    },
    image: {
      type: String,
      required: true 
    },
    role: {
        type: String,
        required: true
    },
    linkedin: {
        type: Boolean,
        required: true
    },
    size: {
        type: String,
        required: false
    }
  }
};
</script>
<style lang="sass">
@import "@/assets/styles/components/team-member"
</style>