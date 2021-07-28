import { createApp } from 'vue';

import App from './App.vue';

import BaseBadge from './components/BaseBadge.vue';


const app = createApp(App);

/*
ini adalah cara untuk me register component secara global. jadi component ini bisa di akses di setiap app dalam vue ini.
namun ke kurangan nya jika menggunakan global component adalah setiap component itu di gunakan atau tidak pasti akan di download
terlebih dahulu untuk bisa di gunakan dan ini bisa jadi redundand dan juga jika component yang di register kan itu banyak maka
list register component ini bisa jadi panjang ke bawah.

oleh karena itu vue memberikan opsi dengan local component yang di register pada setiap component.
sehingga vue tidak akan men load semua component yang di register akhirnya cost performance nya bisa di turun kan. 
untuk contoh local component ada di file App.vue
*/

app.component('base-badge', BaseBadge);

app.mount('#app');
