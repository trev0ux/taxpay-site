<template>
  <header class="position-relative">
    <div :class="'nav-menu container ' + headerClass">
      <NuxtLink to="/">
        <NuxtImg src="/logo.svg" alt="TaxPay Logo" width="135" height="auto" />
      </NuxtLink>

      <div :class="'nav-menu__mobile ' + (isMobileMenuOpen ? 'nav-menu__mobile--open' : '') ">
        <ul class="nav-menu__items">
          <li>
            <NuxtLink to="/servicos" class="nav-menu__item" title="Veja nossos serviços" active-class="nav-menu__item--active">Nossos Serviços</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/quemsomos" class="nav-menu__item" title="Saiba mais sobre nós" active-class="nav-menu__item--active">Quem Somos</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/equipe" class="nav-menu__item" title="Saiba mais sobre nós" active-class="nav-menu__item--active">Equipe</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/contato" class="nav-menu__item" title="Entre em contato conosco" active-class="nav-menu__item--active">Contato</NuxtLink>
          </li>
        </ul>

        <div>
          <NuxtLink class="nav-menu__contact btn btn-primary d-flex d-lg-none">
            Entrar em contato
            <span>
              <Icon name="ChevronIcon"/>
            </span>
          </NuxtLink>
        </div>
      </div>

      <NuxtLink class="nav-menu__contact btn btn-primary d-none d-lg-flex">
        Entrar em contato
        <span>
          <ChevronIcon color="#191919"/>
        </span>
      </NuxtLink>

      <button 
        :class="'btn nav-menu__burguer ' + (isMobileMenuOpen ? 'nav-menu__burguer--open' : '')" 
        @click="toggleMobileMenu" 
        aria-label="Toggle mobile menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </header>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useRoute } from 'nuxt/app';
import ChevronIcon from "./global/ChevronIcon";

const route = useRoute();

const headerClass = computed(() => {
  return route.path != '/' ? 'nav-menu--not-home' : ' ';
});

const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};
</script>

<style lang="sass">
@import "@/assets/styles/components/header"
</style>