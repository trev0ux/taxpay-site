<template>
  <header class="container position-relative">
    <div class="nav-menu">
    <NuxtImg src="/logo.png" alt="TaxPay Logo"></NuxtImg>
    <ul>
      <li class="nav-menu__item"><NuxtLink to="/servicos">Nossos Serviços</NuxtLink></li>
      <li class="nav-menu__item"><NuxtLink to="/quem-somos">Quem Somos</NuxtLink></li>
      <li class="nav-menu__item"><NuxtLink to="/equipe">Equipe</NuxtLink></li>
      <li class="nav-menu__item nav-menu__item--active"><NuxtLink to="/contato">Contato</NuxtLink></li>
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

<script>
export default {

}
</script>

<style lang="sass">
@import "@/assets/styles/components/header"
</style>