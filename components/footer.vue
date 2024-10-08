<template>
  <footer class="footer">
    <div class="container">
      <div>
        <NuxtImg class="footer__logo" src="/logo.svg" alt=""></NuxtImg>

        <!-- <h3 class="footer__subscribe">
          INSCREVA-SE EM NOSSA NEWSLETTER E RECEBA NOVIDADES.
        </h3>
        <div class="footer__input-email">
          <input class="form-control" placeholder="Seu email" type="text" />

          <button class="btn btn-primary">
            inscrever
            <span>
              <ChevronIcon color="#191919" />
            </span>

          </button>
        </div> -->
      </div>

      <div class="footer__maps">
        <h4>MAPA DO SITE</h4>
        <ul>
          <li><a href="/Servicos">Nossos serviços</a></li>
          <li><a href="/QuemSomos">Quem somos</a></li>
          <li><a href="/Equipe">Equipe</a></li>
          <li><a href="/Contato">Contato</a></li>
        </ul>
      </div>

      <div class="footer__contacts">
        <h4>Contato</h4>
        <ul>
          <li>{{ footer.telefone }}</li>
          <li>{{ footer.email }}</li>
        </ul>

        <NuxtLink class="btn btn-primary" to="/Contato">
          ENTRAR EM CONTATO
          <span>
            <ChevronIcon color="#191919" />
          </span>

        </NuxtLink>
      </div>
    </div>

    <div class="container">
      <div class="footer__rights">
        <p>TAXPAY</p>
        <p>{{ footer.endereco }}</p>

        <ul>
          <li>
            <NuxtLink :to="footer.instagram" external v-if="footer.instagram">
              <Icon name="InstagramIcon"></Icon>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink :to="footer.facebook" external v-if="footer.facebook">
              <Icon name="FacebookIcon"></Icon>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink :to="footer.linkedin" external v-if="footer.linkedin">
              <Icon name="LinkedinIcon"></Icon>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script setup>
import ChevronIcon from "./global/ChevronIcon.vue";
import { useSiteContentStore } from "@/stores/index";

const footer = ref([])

const siteContentStore = useSiteContentStore();

try {
  await siteContentStore.fetchSiteContent();
  const content = siteContentStore.siteContent;
  footer.value = content.data.footer.footer
} catch (error) {
  console.log(error);
}

</script>

<style lang="sass">
@import "@/assets/styles/components/footer"
</style>
