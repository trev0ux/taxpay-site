<template>
    <div class="word-container" ref="wordContainer">
        <span class="real-word">{{ content }}</span>
        <div class="word-animation">
            <transition-group name="word-animation" tag="div">
                <span v-for="(word, index) in visibleWords" :key="`${word}-${index}`" :style="{
                    transition: `all 0.5s ease ${index * 5000}ms`
                }" :class="[word == ' ' ? 'word mx-1' : 'word']">
                    <span class="value">
                        <div>
                            {{ word }}
                        </div>
                    </span>
                </span>
            </transition-group>
        </div>
    </div>
</template>

<script>
export default {
    name: 'WordAnimation',
    props: {
        content: {
            type: String,
            required: true
        },
        wordSeparators: {
            type: Array,
            default: () => [' ', '\n', '\t', '.', ',', ';', ':', '!', '?']
        }
    },
    data() {
        return {
            visibleWords: [],
            observer: null
        }
    },
    computed: {
        words() {
            return this.separateWords(this.content)
        }
    },
    mounted() {
        this.createObserver()
    },
    beforeDestroy() {
        if (this.observer) {
            this.observer.disconnect()
        }
    },
    methods: {
        escapeRegExp(string) {
            return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        },
        separateWords(text) {
            const escapedSeparators = this.wordSeparators.map(sep => this.escapeRegExp(sep));
            const separatorPattern = escapedSeparators.join('|');
            const regex = new RegExp(`(${separatorPattern})|([^${separatorPattern}]+[.!?]?)`, 'g');
            return text.match(regex) || [];
        },
        animateWords() {
            let index = 0
            const intervalId = setInterval(() => {
                if (index < this.words.length) {
                    this.visibleWords.push(this.words[index])
                    index++
                } else {
                    clearInterval(intervalId)
                }
            }, 100)
        },
        createObserver() {
            const options = {
                root: null,
                threshold: 0.1
            }

            this.observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        this.animateWords()
                        this.observer.disconnect()
                    }
                })
            }, options)

            this.observer.observe(this.$refs.wordContainer)
        }
    }
}
</script>

<style scoped>
.word {
    display: inline-block;
    position: relative;
}

.word-container {
    position: relative;
}

.value {
    overflow: hidden;
    height: 120px;
}

.word-animation-enter-active {
    transition: all 0.5s ease forwards;
}

.word-animation {
    position: absolute;
    left: 0;
    top: 0;
}

.real-word {
    opacity: 0;
}

.word-animation-enter-to {
    opacity: 1;
    transform: translateY(0);
}

@keyframes float-up {
    0% {
        opacity: 0;
        transform: translateY(100%);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

.word-animation-enter-active {
    animation: float-up 0.5s ease forwards;
}
</style>