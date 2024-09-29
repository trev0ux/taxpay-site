<template>
  <div>
    <head>
      <title>Entre em Contato - TaxPay</title>
      <html lang="pt-BR"></html>
      <meta name="description" content="Entre em contato conosco para obter mais informações sobre nossos serviços e suporte.">
    </head>
    
    <section class="contact">
      <div class="container">
        <div class="contact__information">
          <h2>ENTRE EM CONTATO COM A GENTE</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et.</p>
          <p>Telefone: (XX) XXXXX-XXXX</p>
          <p>E-mail: atendimento@taxpay.com.br</p>
        </div>

        <div class="contact__forms">
          <form @submit.prevent="handleSubmit">
            <div class="mb-3">
              <label for="tipoContato" class="form-label">Tipo de contato</label>
              <select id="tipoContato" v-model="formData.tipoContato" class="form-select" required>
                <option value="" disabled selected>Selecione</option>
                <option value="email">E-mail</option>
              </select>
            </div>
            <div class="mb-3">
              <label for="nome" class="form-label">Nome</label>
              <input type="text" id="nome" v-model="formData.nome" class="form-control" placeholder="Seu nome" required>
            </div>
            <div class="row">
              <div class="col-md-6 mb-3">
                <label for="email" class="form-label">E-mail</label>
                <input type="email" id="email" v-model="formData.email" class="form-control" placeholder="Seu email" required>
              </div>
              <div class="col-md-6 mb-3">
                <label for="telefone" class="form-label">Telefone</label>
                <input type="tel" id="telefone" v-model="formData.telefone" class="form-control" placeholder="Seu telefone" required>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6 mb-3">
                <label for="estado" class="form-label">Estado</label>
                <select id="estado" v-model="formData.estado" class="form-select" required>
                  <option value="" disabled selected>Seu estado</option>
                  <!-- Adicione outras opções aqui -->
                </select>
              </div>
              <div class="col-md-6 mb-3">
                <label for="cidade" class="form-label">Cidade</label>
                <select id="cidade" v-model="formData.cidade" class="form-select" required>
                  <option value="" disabled selected>Sua cidade</option>
                  <!-- Adicione outras opções aqui -->
                </select>
              </div>
            </div>
            <div class="mb-3">
              <label for="mensagem" class="form-label">Mensagem</label>
              <textarea id="mensagem" v-model="formData.mensagem" class="form-control" rows="4" placeholder="Digite sua mensagem" required></textarea>
            </div>

            <button class="btn btn-primary" type="submit">
              ENVIAR MENSAGEM
              <span>
                <NuxtImg src="/chevron.png" alt="Seta para direita" loading="lazy" width="16" height="16" />
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      formData: {
        tipoContato: '',
        nome: '',
        email: '',
        telefone: '',
        estado: '',
        cidade: '',
        mensagem: ''
      }
    };
  },
  methods: {
    async handleSubmit() {
      try {
        const response = await axios.post('/api/contact', this.formData);
        console.log('Mensagem enviada:', response.data);
        this.resetForm();
      } catch (error) {
        console.error('Erro ao enviar mensagem:', error);
      }
    },
    resetForm() {
      this.formData = {
        tipoContato: '',
        nome: '',
        email: '',
        telefone: '',
        estado: '',
        cidade: '',
        mensagem: ''
      };
    }
  }
};
</script>

<style lang="sass">
@import "@/assets/styles/pages/contact"
</style>