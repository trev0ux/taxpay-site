<template>
    <section class="contact">
        <div class="container">
            <div class="contact__information">
                <h2>ENTRE EM CONTATO COM A GENTE</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et.</p>
                <p>Telefone: (XX) XXXXX-XXXX </p>
                <P>E-mail: atendimento@taxpay.com.br</P>
            </div>

            <div class="contact__forms">
                <form>
            <div class="mb-3">
                <label for="tipoContato" class="form-label">Tipo de contato</label>
                <select id="tipoContato" name="tipoContato" class="form-select">
                    <option value="" selected>Selecione</option>
                    <option value="" selected>email</option>
                   
                </select>
            </div>
            <div class="mb-3">
                <label for="nome" class="form-label">Nome</label>
                <input type="text" id="nome" name="nome" class="form-control" placeholder="Seu nome">
            </div>
            <div class="row">
                <div class="col-md-6 mb-3">
                    <label for="email" class="form-label">E-mail</label>
                    <input type="email" id="email" name="email" class="form-control" placeholder="Seu email">
                </div>
                <div class="col-md-6 mb-3">
                    <label for="telefone" class="form-label">Telefone</label>
                    <input type="tel" id="telefone" name="telefone" class="form-control" placeholder="Seu telefone">
                </div>
            </div>
            <div class="row">
                <div class="col-md-6 mb-3">
                    <label for="estado" class="form-label">Estado</label>
                    <select id="estado" name="estado" class="form-select">
                        <option value="" selected>Seu estado</option>
                        <!-- Adicione outras opções aqui -->
                    </select>
                </div>
                <div class="col-md-6 mb-3">
                    <label for="cidade" class="form-label">Cidade</label>
                    <select id="cidade" name="cidade" class="form-select">
                        <option value="" selected>Sua cidade</option>
                        <!-- Adicione outras opções aqui -->
                    </select>
                </div>
            </div>
            <div class="mb-3">
                <label for="mensagem" class="form-label">Mensagem</label>
                <textarea id="mensagem" name="mensagem" class="form-control" rows="4" placeholder="Digite sua mensagem"></textarea>
            </div>

            <button class="btn btn-primary">
                ENVIAR MENSAGEM
            <span>
              <NuxtImg src="/chevron.png" alt="Seta para direita"></NuxtImg>
            </span>
          </button>
        </form>
            </div>
        </div>
    </section>
</template>

<script>

</script>



<style lang="sass">
@import "@/assets/styles/pages/contact"
</style>