<template>
  <div
    class="card border-info bg-light rounded shadow"
    style="margin-bottom: 20px"
  >
    <div class="card-header">
      <p>Insert New Data User</p>
    </div>
    <div class="card-body">
      <form @submit.prevent="insertUser">
        <div class="mb-3">
          <label for="name" class="form-label">Name</label>
          <input
            type="text"
            class="form-control"
            placeholder="Fill With Name Person"
            v-model="name"
          />
        </div>
        <div class="mb-3">
          <label for="age" class="form-label">Age</label>
          <input type="number" class="form-control" v-model="age" />
        </div>
        <div class="mb-3">
          <label for="description" class="form-label">Example textarea</label>
          <textarea
            class="form-control"
            v-model="description"
            id="description"
            rows="3"
          ></textarea>
        </div>
        <div class="mb-3">
          <button class="btn btn-md btn-primary">Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  emits: ["add-user-data"],
  data() {
    return {
      name: "",
      age: 0,
      description: "",
    };
  },
  methods: {
    insertUser: function () {
      this.$emit("add-user-data", this.name, this.age, this.description);
    },
  },
};
</script>