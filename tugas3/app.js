const app = Vue.createApp({
    data() {
        return {
            counter: 0
        }
    },
    methods: {
        addCounter5: function () {
            this.counter += 5;
        },
        addCounter1: function () {
            this.counter += 1;
        }
    },
    computed: {
        /* 
            jadi commputed itu adalah properties pada data dimana sumber data nya ini berasal dari method.
            jadi seperti method yang jika di panggil di treat nya seperti properties data pada object data di atas.
        */
        counterOutput() {
            if (this.counter <= 35) {
                return 'Not there yet';
            } else {
                return 'Too much!';
            }
        }
    },
    watch: {
        /* 
            untuk wachters gunanya adalah untuk mengecek properties pada object data atau pada computed.
            untuk pemanggilannya atau pembuatan method pada wachters ini harus sama nama methodnya dengan nama properties atau computed.
            dan untuk parameter yang tertera adalah last value, berikut rumus nya : methodname(oldvalue,newvalue) .
            old value dan new value ini adalah value yang di ambil dari properties pada obejct data atau computed. 
            contoh di bawah method counter sama denga nama properties pada object data yaitu counter, cara bekerja nya wacht ini dia akan memonitor
            value yang ada pada properties counter jika value nya sudah lebih dari 50 maka akan ada timer yang akan men set value dari counter ini menjadi 0
        */
        counter(value) {
            if (value > 50) {
                const that = this;
                setTimeout(function () {
                    that.counter = 0;
                }, 2000);
            }
        }
    },
});
app.mount('#assignment');