const app = Vue.createApp({
    data() {
        return {
            parShow: false,
            color: '#8ddba4',
        }
    },
    methods: {
        showHide() {
            this.parShow = !this.parShow;
        }
    }
});
app.mount('#assignment');