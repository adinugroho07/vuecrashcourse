const app = Vue.createApp({
    data() {
        return {
            boxA: false,
            boxB: false,
            boxC: false,
            boxSingleA: false,
            boxSingleB: false,
            boxSingleC: false,
        }
    },
    methods: {
        boxSelected: function (box) {
            if (box === 'A') {
                this.boxA = !this.boxA;
            } else if (box === 'B') {
                this.boxB = !this.boxB;
            } else if (box === 'C') {
                this.boxC = !this.boxC;
            }
        },
        boxSingleClick(box) {
            if (box === 'A') {
                this.boxSingleA = !this.boxSingleA;
            } else if (box === 'B') {
                this.boxSingleB = !this.boxSingleB;
            } else if (box === 'C') {
                this.boxSingleC = !this.boxSingleC;
            }
        }
    },
    computed: {
        boxStyle() {
            if (this.boxA) {
                return 'border-style: solid;border-color: aqua;background-color:aqua;';
            } else if (this.boxB) {
                return 'border-style: solid;border-color: salmon;background-color:salmon;';
            } else if (this.boxC) {
                return 'border-style: solid;border-color: chartreuse;background-color:chartreuse;';
            }
        }
    },
});
app.mount('#styling');