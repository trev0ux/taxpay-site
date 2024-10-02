<template>
  <div>
    <header-component></header-component>
    <slot></slot>
    <footer-component></footer-component>
  </div>
</template>

<script>
import HeaderComponent from "../components/Header.vue";
import FooterComponent from "../components/Footer.vue";

export default {
  components: { HeaderComponent, FooterComponent },
};
</script>

<style></style>
