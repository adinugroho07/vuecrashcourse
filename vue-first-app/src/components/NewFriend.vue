<template>
  <form @submit.prevent="submitData">
    <div>
      <label for="name" id="name">Name</label>
      <input type="text" id="name" v-model="enteredName" />
    </div>
    <div>
      <label for="phone" id="phone">Phone</label>
      <input type="tel" id="phone" v-model="enteredPhone" />
    </div>
    <div>
      <label for="email" id="email">Email</label>
      <input type="email" id="email" v-model="enteredEmail" />
    </div>
    <div>
      <button>Add Contact</button>
    </div>
  </form>
</template>

<script>
export default {
  emits: ["add-contact"],
  data() {
    return {
      enteredName: "",
      enteredPhone: "",
      enteredEmail: "",
    };
  },
  methods: {
    submitData: function () {
      this.$emit(
        "add-contact",
        this.enteredName,
        this.enteredPhone,
        this.enteredEmail
      );
    },
  },
};
</script>