<template>
    <section class="services-page">
        <div class="services-page__business ">
            <h1>{{ title }}</h1>
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
</template>

<script>
import { useSiteContentStore } from "@/stores/index";
import AboutUs from "@/components/sections/about-us";
export default {
    data() {
        return {
            title: "",
            description: "",
            services: [],
            aboutUs: []
        }
    },
    components: {
        AboutUs
    },
    async mounted() {
        this.fetchData();
    },
    methods: {
        async fetchData() {
            const siteContentStore = useSiteContentStore();

            await siteContentStore.fetchSiteContent();
            const content = siteContentStore.siteContent;
            console.log(content)

            this.title = content.data.servicos.services.titulo;
            this.description = content.data.servicos.services.descricao;
            this.services = content.data.servicos.services.servicos;
            this.aboutUs = content.data.servicos.quemSomos;
        },
    },
}

</script>

<style lang="sass">
@import "@/assets/styles/pages/services"
</style>
