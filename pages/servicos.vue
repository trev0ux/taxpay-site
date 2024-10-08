<template>
    <article>
        <div v-if="loading">
            <PreLoader />
        </div>
        <section class="services-page" v-else>
            <div class="services-page__business ">
                <h1><word-animation :content="title" /></h1>
                <p>{{ description }}</p>

                <div class="services-page__cards">
                    <div class="services-page__card" v-for="(item, index) in services" :key="index">
                        <div class="services-page__background">
                            <NuxtImg src="/calculator-icon.png" alt="ícone calculator"></NuxtImg>
                        </div>
                        <div class="services-page__information">
                            <h4>{{ item.titulo }}</h4>
                            <P>{{ item.descricao }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <animate-section>
                <about-us :content="aboutUs" v-if="aboutUs"></about-us>
            </animate-section>
        </section>
    </article>

</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useSiteContentStore } from "@/stores/index";
import AboutUs from '@/components/sections/AboutUs.vue';
import PreLoader from "@/components/PreLoader.vue";
import WordAnimation from '@/components/WordAnimation.vue';
import AnimateSection from '@/components/AnimateSection.vue';

const title = ref("");
const description = ref("");
const services = ref([]);
const aboutUs = ref([]);
const loading = ref(true);

const { data } = await useFetch('https://super.taxxpay.com.br/wp-json/wp/v2/pages', {
    query: { slug: 'servicos' }
});

if (data.value && data.value[0] && data.value[0].yoast_head_json) {
    const yoast = data.value[0].yoast_head_json;
    useServerSeoMeta({
        title: () => yoast.title || '',
        description: () => yoast.description || '',
        ogUrl: () => yoast.og_url || '',
        ogTitle: () => yoast.og_title || '',
        ogDescription: () => yoast.og_description || '',
        ogImage: () => yoast.og_image && yoast.og_image[0] ? yoast.og_image[0].url : '',
        ogType: () => yoast.og_type || '',
        ogLocale: () => yoast.og_locale || '',
    });
}

const fetchData = async () => {
    const siteContentStore = useSiteContentStore();

    try {
        await siteContentStore.fetchSiteContent();
        const content = siteContentStore.siteContent;
        title.value = content.data.servicos.services.titulo;
        description.value = content.data.servicos.services.descricao;
        services.value = content.data.servicos.services.servicos;
        aboutUs.value = content.data.servicos.quemSomos;
        loading.value = false;
    } catch (error) {
        console.log(error);
    }
};

onMounted(() => {
    fetchData();
});
</script>

<style lang="sass">
@import "@/assets/styles/pages/services"
</style>
