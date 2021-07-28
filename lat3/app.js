const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    add: function () {
      this.counter++;
    },
    decrease: function () {
      this.counter = this.counter - 1;
    }
  }
});

app.mount('#events');
