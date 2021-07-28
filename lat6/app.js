const app = Vue.createApp({
  data() {
    return {
      goals: [],
      enteredValueGoal: '',
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredValueGoal);
    },
    removeList: function (index) {
      this.goals.splice(index, 1);
    }
  },
});

app.mount('#user-goals');
