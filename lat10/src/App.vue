<template>
  <div>
    <!-- <TheHeader /> -> kayak gini juga bisa -->
    <!-- di bawah ini contoh menggunakan tag component yang sudah di registrasi kan dengan key pascal case TheHeader -> the-header  -->
    <the-header></the-header>
    <badge-list></badge-list>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import BadgeList from "./components/BadgeList.vue";
import UserInfo from "./components/UserInfo.vue";

/* 
pada propertied components itu adalah cara merigstrasikan local component. jadi kita meregristrasikan local komponen dengan
key: Variable Import Component atau langsung mengisikan dengan variable import, karena javascript akan mengenalinya secara otomatis
dengan sytanks key:var import component.

component2 yang di register local ini hanya akan terpanggil jika file App.vue ini di panggil.
*/

export default {
  components: {
    //'TheHeader':TheHeader, -> gini bisa
    TheHeader, //gini juga bisa, jadi langsung nama variable importnya
    BadgeList: BadgeList, // kayak gini juga bisa.
    UserInfo,
  },
  data() {
    return {
      activeUser: {
        name: "Maximilian Schwarzmüller",
        description: "Site owner and admin",
        role: "admin",
      },
    };
  },
};
</script>
<style scoped>
/*
jika menambahkan scoped pada tag style ini maka style ini hanya akan di gunakan pada file ini, bukan secara global
*/
section {
  margin: 2rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>