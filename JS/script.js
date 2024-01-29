console.log('VUE-OK', Vue);

const { createApp } = Vue

const app = createApp({
    data() {
        return {
            message: 'Ready...'
        }
    }
})
app.mount('#root');