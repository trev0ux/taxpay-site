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
          <li><a href="/servicos">Nossos serviços</a></li>
          <li><a href="/QuemSomos">Quem somos</a></li>
          <li><a href="/equipe">Equipe</a></li>
          <li><a href="/contato">Contato</a></li>
        </ul>
      </div>

      <div class="footer__contacts">
        <h4>Contato</h4>
        <ul>
          <li>(44) x xxxx-xxxx</li>
          <li>atendimento@taxpay.com.br</li>
        </ul>

        <NuxtLink class="btn btn-primary" to="/contato">
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
        <P>Endereço Avenida Lorem Ipsum - Lorem Ipsumm Lorem Ipsum XXX - Lorem
          Ipsum</P>

        <ul>
          <li>
            <NuxtLink>
              <Icon name="InstagramIcon"></Icon>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink>
              <Icon name="FacebookIcon"></Icon>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink>
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
</script>

<style lang="sass">
@import "@/assets/styles/components/footer"
</style>
