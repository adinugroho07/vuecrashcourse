<template>
  <li>
    <h2>{{ friend.name }} {{ objFriend.isFavourite ? "(Favourite)" : "" }}</h2>
    <button @click="toggleFavourite">Toggle Favourite</button>
    <button @click="toggleDetails">
      {{ detailsAreVisible ? "Hide" : "Show" }} Details
    </button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone :</strong> {{ friend.phone }}</li>
      <li><strong>Email :</strong> {{ friend.email }}</li>
    </ul>
    <button @click="$emit('delete-contact', objFriend.id)">
      Delete Contact
    </button>
  </li>
</template>
<script>
/* 
properties prop di bawah ini adalah sebagai paramter input pada component. sama seperti method yang membutuhkan input parameter.
jadi di tag <friend-contact></friend-contact> kita bisa menambahkan attribute lagi sesuai dengan prop yang di define pada component tersebut
untuk contoh di bawah maka tag nya akan menjadi seperti ini <friend-contact obj-friend="objValue"></friend-contact>.
jika pada prop kita define nama variable nya camelcase (getA) maka yang di tuliskan pada attribut adalah kebabcase (get-a).
contoh -> props= objFriend -> pada attribute akan menjadi obj-friend="".

data yang di parsing kan lewat parameter objFriend hanya bisa di display, tidak bisa untuk di lakukan perubahan atau penambahan value.
karena ini sifatnya unidirectional data flow (hanya menerima flow data dari 1 sumber arah). jika ingin di lakukan perubahan maka
data yang di parsing oleh prop harus menjadi intial data, jadi di copy kan ke local properties seperti contoh di bawah
ex -> friend: {
        id: this.objFriend.id,
        name: this.objFriend.name,
        phone: this.objFriend.phone,
        email: this.objFriend.email,
      },



*/
export default {
  /*
props: ["objFriend"], ini props secara default dan bisa lebih dari 1 prop tinggal di tambah aja element array nya
di props pun bisa kita gunakan array seperti contoh di bawah dan bisa kita gunakan validator untuk memvalidasi input pada prop.
kita bisa memvalidasi tipe data yang hanya bisa di inputkan pada prop ini. berikut adalah type yang di support oleh vue
type: String,Number,Boolean,Array,Object,Date,Function,Symbol. dan type ini bisa di isikan lebih dari 1.
      contoh type lebih dari 1 -> type: ['string', 'number']
default : untuk mengembalikan data jika value pada prop ini kosong
required : untuk memastikan bahwa prop ini harus di isikan value
validator : untuk memvalidasi inputan value pada prop sesuai kebutuhan kita. di sini akan di buatkan login validasi nya dengan
            menggunakan function dan value pada parameter di function tersebut adalah value yang di dapat dari inputan data pada prop
contoh validator -> validator: function (value) {return nummber === 1 || number === 0} . jadi dia hanya menerima angka 1 atau 0.
*/
  props: {
    objFriend: {
      type: Object,
      required: true,
      default: function () {
        return {
          id: "default",
          name: "Default Value",
          phone: "Default value",
          email: "defaultvalue@localhost.com",
          isFavourite: false,
        };
      },
    },
  },
  /*
  fungsi dari properties emits di bawah ini adalah untuk memberitahu apa saja custome event/emit yang kita gunakan
  supaya kita tidak perlu melihat kebawah ke code kita dan untuk memudah kan pencarian. dan pada properties tersebut juga
  kita bisa melakukan validation emits sama seperti yang di lakukan oleh prop. untuk contoh nya silahkan google.
  */
  emits: ["toggle-favourite", "delete-contact"],
  data() {
    return {
      detailsAreVisible: true,
      friend: {
        id: this.objFriend.id,
        name: this.objFriend.name,
        phone: this.objFriend.phone,
        email: this.objFriend.email,
        isFavourite: this.objFriend.isFavourite,
      },
    };
  },
  methods: {
    toggleDetails: function () {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavourite: function () {
      // this.friend.isFavourite = !this.friend.isFavourite;
      /* 
      emit ini adalah cara untuk component child berkomunikasi dengan parent. ini adalah method yang di build oleh child
      dan bisa di akses oleh parent nya. cara mengaksesnya adalah dengaan menggunakan v-on/@+identifieremit/custome event name="method on parent".
      $emit('identifier emit/custome event name', value-tobe-sent) 
      contoh -> this.$emit("toggle-favourite", this.friend.id); . nanti di parent nya dia akan di akses pada tag component child
      seperti ini -> <friend-contact :obj-friend="friend" @toggle-favourite="toggleFav" ></friend-contact> . toggleFav adalah method
      yang di define pada parent method.
      */
      this.$emit("toggle-favourite", this.friend.id);
    },
    // deleteContact: function () {
    //   this.$emit("delete-contact", this.friend.id);
    // },
  },
};
</script>