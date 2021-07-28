<template>
  <div class="container my-5">
    <div class="row justify-content-center">
      <div class="col-6">
        <active-user
          v-for="item in users"
          :key="item.id"
          :obj-user="item"
        ></active-user>
      </div>
      <div class="col-6">
        <user-data @addUserData="addUser"></user-data>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      users: [
        {
          id: "1",
          name: "adi",
          age: "27",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          isToggle: false,
        },
        {
          id: "2",
          name: "astri",
          age: "27",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          isToggle: false,
        },
        {
          id: "3",
          name: "Mbul",
          age: "3",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          isToggle: false,
        },
      ],
    };
  },
  methods: {
    addUser: function (parname, parage, pardescription) {
      this.users.unshift({
        id: new Date().toISOString(),
        name: parname,
        age: parage,
        description: pardescription,
        isToggle: false,
      });
    },
  },
};
</script>