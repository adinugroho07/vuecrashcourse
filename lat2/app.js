const app = Vue.createApp({
    data() {
        return {
            h2: "myuser goals",
            link: "https://vuejs.org/v2/guide/installation.html",
            angka: 0,
        };
    },
    methods: {
        getOurGoals: function () {
            let temp = "";
            const rand = this.getRandomNumber();

            if (rand < 0.5) {
                this.angka = rand;
                temp = "Kurang dari nol koma lima";
            } else {
                this.angka = rand;
                temp = "lebih dari nol koma lima";
            }

            return temp;
        }, // sama aja syntaks di atas sama di bawah
        getRandomNumber() {
            return Math.random();
        },
    },
});
app.mount("#user-goal");
