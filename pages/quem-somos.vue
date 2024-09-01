<template>
  <section class="quem-somos ">
  



   
    
      <AboutUs is-green></AboutUs>
  <div class="container">
    
  
    <div class="quem-somos__percentage ">
      
      <div>
        <h4>LOREN PSUM DOLOR SIT AMET</h4>
        <NuxtImg src="image-1.png"></NuxtImg>
      </div>
       
      

      <div class="quem-somos__information">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <div class="quem-somos__values">
          <div class="quem-somos__value">
            <h3>800%</h3>
            <p>lorem psum lorem psum</p>
          </div>

          <div class="quem-somos__value">
            <h3>80%</h3>
            <p>lorem psum </p>
          </div>

          <div class="quem-somos__value">
            <h3>30.00</h3>
            <p>lorem psum </p>
          </div>

          <div class="quem-somos__value">
            <h3>400%</h3>
            <p>lorem psum lorem psum </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  </section>
</template>










<script>
    import AboutUs from "@/components/sections/about-us";
    export default{
        components: {
            AboutUs
            
        }
    }
    
</script>

<style lang="sass">
@import "@/assets/styles/pages/quem-somos"

</style>


