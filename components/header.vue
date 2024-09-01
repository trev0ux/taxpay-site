<template>
  <header class="container position-relative">
    <div :class="'nav-menu ' + (headerClass)">
      <NuxtLink to="/">
        <NuxtImg src="/logo.svg" alt="TaxPay Logo"></NuxtImg>
      </NuxtLink>
      <ul>
        <li>
          <NuxtLink to="/servicos" class="nav-menu__item" active-class="nav-menu__item--active">Nossos Serviços
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/quem-somos" class="nav-menu__item" active-class="nav-menu__item--active">Quem Somos</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/equipe" class="nav-menu__item" active-class="nav-menu__item--active">Equipe</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/contato" class="nav-menu__item" active-class="nav-menu__item--active">Contato</NuxtLink>
        </li>
      </ul>
      <NuxtLink class="nav-menu__contact btn btn-primary">
        Entrar em contato
        <span>
          <NuxtImg src="/chevron.png" alt="Seta para direita"></NuxtImg>
        </span>
      </NuxtLink>
      <button class="btn nav-menu__burguer">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </header>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'nuxt/app';

const route = useRoute();

const headerClass = computed(() => {
  return route.path != '/' ? 'nav-menu--not-home' : ' ';
});
</script>

<style lang="sass">
@import "@/assets/styles/components/header"
</style>
