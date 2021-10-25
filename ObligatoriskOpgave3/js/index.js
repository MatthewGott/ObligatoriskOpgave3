Vue.createApp({
    data() {
        return {
            input: null,
            word: null,
            wordUpper: null,
            wordLower: null
        }
    },
    methods: {
        Show() {
            this.word = this.input
            this.wordLower = this.input.toLowerCase()
            this.wordUpper = this.input.toUpperCase()
        }
    }
}).mount("#app")