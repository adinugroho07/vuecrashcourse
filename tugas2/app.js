const app = Vue.createApp({
    data() {
        return {
            name1: '',
            varAlert: '',
            name2: '',
            confirmName: '',

        }
    },
    methods: {
        showAlert: function () {
            alert(this.varAlert);
        },
        setText1(event, lastname) {
            this.name1 = event.target.value + ' ' + lastname;
        },
        setGetAlertText: function (event) {
            this.varAlert = event.target.value;
        },
        setText2: function (event) {
            this.name2 = event.target.value;
        },
        confirmedName: function (event) {
            this.confirmName = this.name2;
            event.target.value = '';
        }
    },
});

app.mount('#assignment');