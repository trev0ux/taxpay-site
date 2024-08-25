<template>
  <footer class="footer">
    <div class="container">


      <div>
        <NuxtImg class="footer__logo" src="/logo.svg" alt=""></NuxtImg>

        <h4 class="footer__subscribe">INSCREVA-SE EM NOSSA NEWSLETTER E RECEBA NOVIDADES.</h4>
        <div class="footer__input-email">
          <input class="form-control" placeholder="Seu email" type="text">

          <button class="btn btn-primary">
            inscrever
            <span>
              <NuxtImg src="/chevron.png" alt="Seta para direita"></NuxtImg>
            </span>
          </button>
        </div>
      </div>


      <div class="footer__maps">
        <h4>MAPA DO SITE</h4>
        <ul>
          <li><a href=""></a>nossos serviços</li>
          <li><a href=""></a>quem somos</li>
          <li><a href=""></a>equipe</li>
          <li><a href=""></a>contato</li>
        </ul>
      </div>


      <div class="footer__services">
        <h4>Serviços</h4>
        <ul>
          <li><a href=""></a>Lorem Ipsum</li>
          <li><a href=""></a>Lorem Ipsum</li>
          <li><a href=""></a>Lorem Ipsum</li>
          <li><a href=""></a>Lorem Ipsum</li>
        </ul>
      </div>


      <div class="footer__contacts">
        <h4>Contato</h4>
        <ul>
          <li>(44) x xxxx-xxxx</li>
          <li>atendimento@taxpay.com.br</li>
        </ul>

        <button class="btn btn-primary">ENTRAR EM CONTATO
          <span>
            <NuxtImg src="/chevron.png" alt="Seta para direita"></NuxtImg>
          </span>
        </button>

      </div>





    </div>


    <div class="container">
      <div class="footer__rights">
        <p>TAXPAY</p>
        <P>Endereço Avenida Lorem Ipsum - Lorem Ipsumm Lorem Ipsum XXX - Lorem Ipsum</P>

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

<script>
import { Icon } from "#components";
export default {};
</script>

<style lang="sass">
@import "@/assets/styles/components/footer"
</style>
