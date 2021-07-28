<template>
  <dialog open>
    <!-- 
    slot ini adalah fitur di vue js dimana di dalam element <slot></slot> kita bisa memasukkan value raw HTML ketika kita panggil
    component ini. contoh nya ada pada file ManageGoals.vue . jika sebelum nya kita hanya bisa berkomunikasi hanya dengan lewat prop
    dan emit saja sekarang kita juga bisa memanupulasi HTML yang ada di dalam component tersebut, caranya adalah dengan slot ini
    
     -->
    <slot></slot>
  </dialog>
</template>

<style scoped>
dialog {
  margin: 0;
  position: fixed;
  top: 20vh;
  left: 30%;
  width: 40%;
  background-color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}
</style>