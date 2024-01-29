console.log('VUE-OK', Vue);

const { createApp } = Vue;

const endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail';

const app = createApp({
    data() {
        return {
            emails: [],
            loading: true
        };
    },
    created() {
        if (!this.loading) return;
        for (let i = 0; i < 10; i++) {
            axios.get(endpoint).then(res => {
                this.emails.push(res.data.response);
                if (this.emails.length === 10) {
                    this.loading = false;
                }
            });
        }
    },
});

app.mount('#root');
