<template>
  <header :class="[isScrolled ? 'nav-menu nav-menu--scrolled' : 'nav-menu']">
    <div :class="['container', headerClass]">
      <NuxtLink to="/">
        <NuxtImg src="/logo.svg" alt="TaxPay Logo" width="135" height="auto" />
      </NuxtLink>

      <div :class="'nav-menu__mobile ' + (isMobileMenuOpen ? 'nav-menu__mobile--open' : '') ">
        <ul class="nav-menu__items">
          <li>
            <NuxtLink to="/Servicos" class="nav-menu__item" title="Veja nossos serviços" active-class="nav-menu__item--active" @click="toggleMobileMenu">Nossos Serviços</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/QuemSomos" class="nav-menu__item" title="Saiba mais sobre nós" active-class="nav-menu__item--active" @click="toggleMobileMenu">Quem Somos</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/Equipe" class="nav-menu__item" title="Saiba mais sobre nós" active-class="nav-menu__item--active" @click="toggleMobileMenu">Equipe</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/Contato" class="nav-menu__item" title="Entre em contato conosco" active-class="nav-menu__item--active" @click="toggleMobileMenu">Contato</NuxtLink>
          </li>
        </ul>

        <div>
          <NuxtLink class="nav-menu__contact btn btn-primary d-flex d-lg-none" to="/Contato" @click="toggleMobileMenu">
            Entrar em contato
            <span>
              <Icon name="ChevronIcon"/>
            </span>
          </NuxtLink>
        </div>
      </div>

      <NuxtLink class="nav-menu__contact btn btn-primary d-none d-lg-flex" to="/Contato">
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

const isScrolled = ref(false);

const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const checkScroll = () => {
  isScrolled.value = window.scrollY > 90;
};

onMounted(() => {
  window.addEventListener('scroll', checkScroll);
  checkScroll();
});
</script>

<style lang="sass">
@import "@/assets/styles/components/header"
</style>