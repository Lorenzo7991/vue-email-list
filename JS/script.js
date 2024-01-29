console.log('VUE-OK', Vue);

const { createApp } = Vue;

const endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail'

const app = createApp({
    data() {
        return {
            emails: []
        };
    },
    created() {
        axios.get(endpoint).then(res => {
            console.log('API obj:', res.data);
            this.emails.push(res.data.response);
        })
    },
});
app.mount('#root');