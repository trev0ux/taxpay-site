<template>
    <section class="services-page">
        <div class="services-page__business ">
            <h1>MUDAR A REALIDADE E A <br> CONTABILIDADE DAS EMPRESAS.</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.<br> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip.</p>

            <div class="services-page__cards">
                <div class="services-page__card">
                    <div class="services-page__background">
                        <NuxtImg src="calculator-icon.png"></NuxtImg>
                    </div>
                    <div class="services-page__information">
                        <h4>LOREM IPSUM</h4>
                        <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
                        </P>
                    </div>
                </div>
                <div class="services-page__card">
                    <div class="services-page__background">
                        <NuxtImg src="calculator-icon.png"></NuxtImg>
                    </div>
                    <div class="services-page__information">
                        <h4>LOREM IPSUM</h4>
                        <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
                        </P>
                    </div>
                </div>
                <div class="services-page__card">
                    <div class="services-page__background">
                        <NuxtImg src="calculator-icon.png"></NuxtImg>
                    </div>
                    <div class="services-page__information">
                        <h4>LOREM IPSUM</h4>
                        <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
                        </P>
                    </div>
                </div>

                <div class="services-page__card">
                    <div class="services-page__background">
                        <NuxtImg src="calculator-icon.png"></NuxtImg>
                    </div>
                    <div class="services-page__information">
                        <h4>LOREM IPSUM</h4>
                        <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
                        </P>
                    </div>
                </div>
                <div class="services-page__card">
                    <div class="services-page__background">
                        <NuxtImg src="calculator-icon.png"></NuxtImg>
                    </div>
                    <div class="services-page__information">
                        <h4>LOREM IPSUM</h4>
                        <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
                        </P>
                    </div>
                </div>
                <div class="services-page__card">
                    <div class="services-page__background">
                        <NuxtImg src="calculator-icon.png"></NuxtImg>
                    </div>
                    <div class="services-page__information">
                        <h4>LOREM IPSUM</h4>
                        <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
                        </P>
                    </div>
                </div>
            </div>
           
        </div>

        <AboutUs is-purple></AboutUs>
    </section>
</template>

<script>
    import { HOMEPAGE_QUERY } from "~/graphql/queries";
    import { useNuxtApp } from "#app";
    import AboutUs from "@/components/sections/about-us";
    export default{
        components: {
            AboutUs
        },

        methods: {
    async fetchData() {
      const { $axios } = useNuxtApp();
      try {
        const response = await $axios.post("", { query: HOMEPAGE_QUERY });
        const { data } = response.data;
        console.log(data.page)
        this.banner = data.page.banner
        this.culture = data.page.cultura;
        this.howItWorks = data.page.comoFunciona;
        this.aboutUs = data.page.sobreNos;
        this.team = data.page.timePreview;
        this.testimonials = data.page.depoimentos

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
  },
    }
    
</script>

<style lang="sass">
@import "@/assets/styles/pages/services"
</style>
