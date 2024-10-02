<template>
    <article>
        <div v-if="loading">
            <PreLoader />
        </div>
        <section class="services-page" v-else>
            <div class="services-page__business ">
                <h1><word-animation :content="title"/></h1>
                <p>{{ description }}</p>

                <div class="services-page__cards">
                    <div class="services-page__card" v-for="(item, index) in services" :key="index">
                        <div class="services-page__background">
                            <NuxtImg src="calculator-icon.png" alt="ícone calculator"></NuxtImg>
                        </div>
                        <div class="services-page__information">
                            <h4>{{ item.titulo }}</h4>
                            <P>{{ item.descricao }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <about-us :content="aboutUs" v-if="aboutUs"></about-us>
        </section>
    </article>

</template>

<script>
import { useSiteContentStore } from "@/stores/index";
import AboutUs from "@/components/sections/about-us";
import PreLoader from "@/components/PreLoader";
import WordAnimation from '~/components/WordAnimation.vue';

export default {
    data() {
        return {
            title: "",
            description: "",
            services: [],
            aboutUs: [],
            loading: true
        }
    },
    components: {
        AboutUs,
        PreLoader,
        WordAnimation
    },
    async mounted() {
        this.fetchData();
    },
    methods: {
        async fetchData() {
            const siteContentStore = useSiteContentStore();

            try {
                await siteContentStore.fetchSiteContent();
                const content = siteContentStore.siteContent;
                console.log(content)

                this.title = content.data.servicos.services.titulo;
                this.description = content.data.servicos.services.descricao;
                this.services = content.data.servicos.services.servicos;
                this.aboutUs = content.data.servicos.quemSomos;
                this.loading = false
            } catch (error) {
                console.log(error)
            } finally {
                this.loading = false
            }


        },
    },
}

</script>

<style lang="sass">
@import "@/assets/styles/pages/services"
</style>
