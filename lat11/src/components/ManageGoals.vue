<template>
  <div>
    <h2>Manage Goals</h2>
    <input type="text" ref="goal" />
    <button @click="setGoal">Set Goal</button>
    <!-- 
    tag <teleport to="body"> ini berguna untuk memindahkan component ke dalam dom tertentu. misal pada component error-alert di bawah ini
    jika di inspect akan nested jauh ke dalam dom, namun kita bisa pindahkan dengan tag teleport ini dan tag teleport ini mempunyai
    parameter yaitu to="css selector". parameter tersebut kita isi kan letak posisi dom dimana component yang akan di render di letak kan.
    pada contoh di bawah component yang akan di render akan di tempatkan pada body.
    -->
    <teleport to="body">
      <!--
    di bawah ini adalah contoh penggunaan slot. jadi pada component error-alert tersebut di dalam component itu ada tag <slot></slot>,
    nanti nya tag slot itu akan di gantikan dengan element2 di bawah ini. shingga slot ini terlihat seperti template yang dynamic 
    <h2>Input is invalid!</h2>
    <p>Please enter at least a few characters...</p>
    <button @click="confirmError">Okay</button>

    jika slot di akses 2 kali atau lebih dari satu kita bisa menggunakan tag <template> seperti contoh di bawah ini.
     
    <base-card>
      <template #header>
        <h3>{{ fullName }}</h3>
        <base-badge :type="role" :caption="role.toUpperCase()"></base-badge>
      </template>
      <template #default>
        <p>{{ infoText }}</p>
      </template>
    </base-card>  

    pada contoh di atas ini contoh pemanggilan slot dengan named (<slot name="header"></slot> -> <template #header>) 
    dan slot default (<slot></slot> -> <template #default>).
    
    element yang di di jadikan slot adalah <base-card> bisa di lihat pada file BasedCard.vue . pada slot kita juga bisa berikan penamaan
    atau yang biasa di sebut named slot. contoh -> <slot name="header">. untuk pemanggilan slot nya bisa kita menggunakan v-slot atau bisa
    menggunakan tanda kres(#namedslot). contoh named slot -> <template #header>.
    -->
      <error-alert v-if="inputIsInvalid">
        <h2>Input is invalid!</h2>
        <p>Please enter at least a few characters...</p>
        <button @click="confirmError">Okay</button>
      </error-alert>
    </teleport>
  </div>
</template>

<script>
import ErrorAlert from "./ErrorAlert.vue";

export default {
  components: {
    ErrorAlert,
  },
  data() {
    return {
      inputIsInvalid: false,
    };
  },
  methods: {
    setGoal() {
      const enteredValue = this.$refs.goal.value;
      if (enteredValue === "") {
        this.inputIsInvalid = true;
      }
    },
    confirmError() {
      this.inputIsInvalid = false;
    },
  },
};
</script>