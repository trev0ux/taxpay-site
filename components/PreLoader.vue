<template>
    <div class="preloader">
        <div class="logo-container" :class="{ 'animation-finished': animationFinished }">
            <svg xmlns="http://www.w3.org/2000/svg" version="1.2" viewBox="285 265 240 80" width="400" height="300">
                <title>Vector Smart Object-ai</title>
                <g id="Layer 1">
                    <g id="logo-group">
                        <path v-for="(path, index) in logoPaths" :key="index" :class="['logo-path', `path-${index}`]"
                            :d="path" />
                    </g>
                </g>
            </svg>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const animationFinished = ref(false)

const logoPaths = [
    "m317.1 329.2c-12.8 0-17.7-4.4-17.7-15.5v-21.8h-7.1v-10.2h2.6c2.5 0 4.5-2.1 4.5-4.6v-7.8h12v12.4h9.6v10.2h-9.6v20.6c0 4.9 3.3 5.6 6.9 5.6 0.9 0 1.8 0 2.7 0v10.9c-1.4 0.2-2.4 0.2-3.9 0.2z",
    "m360.9 296.8v32h-12v-0.8c0-2.5 0.1-4.5 0.2-8.2h-1.2c-1.2 6.9-5.2 9.9-11.5 9.9-7.1 0-10.9-4.4-10.9-12.8 0-11.5 5.2-16.1 17.8-16.1h5.6v-5.1c0-2.7-0.6-5.8-5-5.8-3.5 0-5.2 1.8-5.2 5.6v0.2h-11.8c0.2-10.8 5.3-15.4 17-15.4h0.6c11.9 0 16.4 4.5 16.4 16.5zm-12.8 20.1q1-1.9 1-5.1v-4.1h-3.9c-5.1 0-7.5 2-7.5 6.2v0.8c0 3.2 2 5 5.4 5q2.9 0 4.3-1.8z",
    "m370.4 295.1l-5-13.4h11.9l6 17.6h1.1l6-17.6h11.9l-5 13.4c-2.1 5.6-7.5 9.4-13.5 9.4-6 0-11.3-3.8-13.4-9.4z",
    "m397.3 315.3l5 13.5h-11.9l-6-17.7h-1.1l-6 17.7h-11.9l5-13.5c2.1-5.6 7.4-9.3 13.4-9.3 6 0 11.4 3.7 13.5 9.3z",
    "m406.8 328.8v-47.1h17.6c6.2 0 10.5 1.4 13.4 4.3 2.8 2.9 4.1 7.4 4.1 13.7 0 6.4-1.4 11-4.4 13.9-3 2.9-7.6 4.4-14.2 4.4h-4.5v10.8zm12-21.3h3.7c4.7 0 6.7-2.2 6.7-7.6 0-5.2-2-7.3-6.7-7.3h-3.7z",
    "m480.3 296.8v32h-12v-0.8c0-2.5 0.1-4.5 0.2-8.2h-1.2c-1.2 6.9-5.2 9.9-11.5 9.9-7.1 0-10.9-4.4-10.9-12.8 0-11.5 5.2-16.1 17.8-16.1h5.6v-5.1c0-2.7-0.6-5.8-5-5.8-3.5 0-5.2 1.8-5.2 5.6v0.2h-11.8c0.2-10.8 5.3-15.4 17-15.4h0.6c11.9 0 16.4 4.5 16.4 16.5zm-12.8 20.1q1-1.9 1-5.1v-4.1h-3.9c-5.1 0-7.5 2-7.5 6.2v0.8c0 3.2 2 5 5.4 5q2.9 0 4.3-1.8z",
    "m520.1 281.7h-11.9l-5.9 32.8h-1.2l-6-32.8h-11.9l6.7 30.2c1.1 4.5 5.1 7.8 9.8 7.8l-1.2 4.7c-1.2 5-4.6 5.7-8.2 5.7-1 0-1.8 0-2.8-0.1l-2.6 11c1.4 0.1 2.5 0.1 4 0.1 12.7 0 18.7-4.3 21.3-15.4z"
]

const isLoading = ref(true)

setTimeout(() => {
    isLoading.value = false;
    const delay = 3000
}, 3500)
</script>

<style lang="scss" scoped>
@import "bootstrap/scss/_functions";
@import "bootstrap/scss/_variables";
@import "bootstrap/scss/mixins/_breakpoints";
.preloader {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    transition: opacity 0.5s ease-out, visibility 0.5s ease-out;
}

.fade-out {
    opacity: 0;
    visibility: hidden;
}

.logo-container {
    @include media-breakpoint-down(md) {
        svg {
            width: 120px;
            height: 120px;
        }
    }
}

.logo-path {
    fill: transparent;
    stroke: #000000;
    stroke-width: 2;
    stroke-dasharray: 1000;
    stroke-dashoffset: 1000;
    animation: drawPath .2s forwards, fillPath .2s .2s forwards;
    animation-iteration-count: infinite;
}

@keyframes drawPath {
    to {
        stroke-dashoffset: 0;
    }
}

@keyframes fillPath {
    from {
        fill: transparent;
    }

    to {
        fill: #000000;
    }
}

.animation-finished .logo-path {
    fill: #000000;
    stroke-dashoffset: 0;
}

.path-0 {
    animation-delay: 0s, 1s;
}

.path-1 {
    animation-delay: 0.1s, 1.2s;
}

.path-2 {
    animation-delay: 0.2s, 1.4s;
}

.path-3 {
    animation-delay: 0.3s, 1.6s;
}

.path-4 {
    animation-delay: 0.4s, 1.8s;
}

.path-5 {
    animation-delay: .5s, 2s;
}

.path-6 {
    animation-delay: .6s, 2.2s;
}

</style>
