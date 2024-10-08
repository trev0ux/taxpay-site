<template>
    <article>
        <div v-if="loading">
            <PreLoader />
        </div>
        <div class="contact" v-else>
            <section>
                <div class="container">
                    <div class="contact__information">
                        <h2><word-animation :content="contact.titulo" /></h2>
                        <p>{{ contact.descricao }}</p>
                        <p>Telefone: {{ contact.telefone }}</p>
                        <p>E-mail: {{ contact.email }}</p>
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
                                <input type="text" id="nome" v-model="formData.nome" class="form-control"
                                    placeholder="Seu nome" required>
                            </div>
                            <div class="row">
                                <div class="col-md-6 mb-3">
                                    <label for="email" class="form-label">E-mail</label>
                                    <input type="email" id="email" v-model="formData.email" class="form-control"
                                        placeholder="Seu email" required>
                                </div>
                                <div class="col-md-6 mb-3">
                                    <label for="telefone" class="form-label">Telefone</label>
                                    <input type="tel" id="telefone" v-model="formData.telefone" class="form-control"
                                        placeholder="Seu telefone" required>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6 mb-3">
                                    <label for="estado" class="form-label">Estado</label>
                                    <select id="estado" v-model="formData.estado" @change="fetchCities"
                                        class="form-select" required>
                                        <option value="" disabled selected>Escolha um estado</option>
                                        <option v-for="estado in estados" :key="estado.sigla" :value="estado.sigla">{{
                                            estado.nome }}</option>
                                    </select>
                                </div>
                                <div class="col-md-6 mb-3">
                                    <label for="cidade" class="form-label">Cidade</label>
                                    <select id="cidade" v-model="formData.cidade" class="form-select" required>
                                        <option value="" disabled selected>Sua cidade</option>
                                        <option v-for="cidade in cidades" :key="cidade.id" :value="cidade.nome">{{
                                            cidade.nome }}</option>
                                    </select>
                                </div>
                            </div>
                            <div class="mb-3">
                                <label for="mensagem" class="form-label">Mensagem</label>
                                <textarea id="mensagem" v-model="formData.mensagem" class="form-control" rows="4"
                                    placeholder="Digite sua mensagem" required></textarea>
                            </div>

                            <button class="btn btn-primary" type="submit">
                                ENVIAR MENSAGEM
                                <span>
                                    <ChevronIcon color="#191919" />
                                </span>
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    </article>
</template>

<script>
import emailjs from 'emailjs-com';
import ChevronIcon from "../components/global/ChevronIcon.vue";
import WordAnimation from '~/components/WordAnimation.vue';
import { useSiteContentStore } from "@/stores/index";

emailjs.init('2NsySIujxYNNAp7W_');

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
            },
            contact: [],
            estados: [],
            cidades: [],
            loading: true
        };
    },
    components: {
        WordAnimation
    },
    created() {
        this.fetchStates();
    },
    mounted() {
        this.fetchData()
    },
    methods: {
        async fetchData() {
            const siteContentStore = useSiteContentStore();

            try {
                await siteContentStore.fetchSiteContent();
                const content = siteContentStore.siteContent;
                this.contact = content.data.contato.contato;
                this.loading = false;
            } catch (error) {
                console.log(error);
            }
        },
        async fetchStates() {
            try {
                const response = await fetch('https://brasilapi.com.br/api/ibge/uf/v1');
                const data = await response.json();
                this.estados = data;
            } catch (error) {
                console.error('Erro ao buscar estados:', error);
            }
        },
        async fetchCities() {
            try {
                if (!this.formData.estado) return;
                const response = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${this.formData.estado}/distritos`);
                const data = await response.json();
                this.cidades = data;
            } catch (error) {
                console.error('Erro ao buscar cidades:', error);
            }
        },
        async handleSubmit() {
            try {
                const result = await emailjs.send('service_zy6mkvk', 'template_5qry5wc', {
                    from_name: this.formData.nome,
                    from_email: this.formData.email,
                    telefone: this.formData.telefone,
                    estado: this.formData.estado,
                    cidade: this.formData.cidade,
                    tipoContato: this.formData.tipoContato,
                    message: this.formData.mensagem
                });

                this.resetForm();
            } catch (err) {
                console.error('Erro ao enviar mensagem:', err);
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
            this.cidades = [];
        }
    }
};
</script>

<style lang="sass">
@import "@/assets/styles/pages/contact"
</style>