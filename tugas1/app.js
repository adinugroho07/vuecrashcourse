const app = Vue.createApp({
    data() {
        return {
            myName: 'Adi Nugroho',
            birthYear: 1994,
            photoUrl: 'https://www.desktophut.com/wp-content/uploads/2018/02/Juggernaunt-Dota-2-Live-Wallpaper-1.jpg.webp',
        };
    },
    methods: {
        getMyAge: function () {
            const date = new Date();
            const currentYear = date.getFullYear();
            return currentYear - this.birthYear;
        },
        getRandomNumber: function () {
            return Math.floor(Math.random() * 100);
        }
    },
});
app.mount('#assignment');