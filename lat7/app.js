const app = Vue.createApp({
  data() {
    return {
      currentUserInput: "",
      message: "Vue is great!",
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      //this.message = this.currentUserInput;
      this.message = this.$refs.userText.value;
      /* 
        di atas adalah contoh pengaksesan dom element dari refs. tanda $ ini adalah tanda untuk mengakses semua
        properties yang telah di sedia kan oleh vue, salah satu nya adalah refs ini. jadi seperti untuk memanggil properties
        bawaan dari vue ini.
      */
      // console.dir(this.$refs.userText);
    },
  },
  beforeCreate() {
    console.log("beforeCreate()");
  },
  created() {
    console.log("created()");
  },
  beforeMount() {
    console.log("beforeMount()");
  },
  mounted() {
    console.log("mounted()");
  },
  beforeUpdate() {
    console.log("beforeUpdate()");
  },
  updated() {
    console.log("updated()");
  },
  beforeUnmount() {
    console.log("beforeUnmount()");
  },
  unmounted() {
    console.log("unmounted()");
  },
});

app.mount("#app");

// untuk percobaan unmounted vueApp.
// setTimeout(function () {
//   app.unmount();
// }, 3000);

/* 
vue bisa membuat dua app namun antar app tersebut tidak bisa saling terkoneksi atau berbagi data.
jadi setiap vue createApp dia standlone. contoh jika di app2 ingin mengakses data message yang ada di app, maka hal tersebut
tidak akan bisa di lakukan karena sifat nya app vue ini standlone.
*/

const app2 = Vue.createApp({
  data() {
    return {
      text: "From Vue App 2",
    };
  },
});

app2.mount("#app2");
