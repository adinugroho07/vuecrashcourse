import { createApp } from "vue";
import App from "./App.vue";
import FriendContact from "./components/FriendContact.vue";
import NewFriendContact from "./components/NewFriend.vue";

/*
main.js ini adalah entry point bahwa vue framework akan di inject ke html dengan ID app.
pada syntaks import di atas kita mengimport file App.vue yang ada pada folder yang sama
(./ artinya adalah di folder yang sama, ../ brarti folder yang ada di atas nya). vueApp yang sudah di definisikan pada file App.vue
akan di load pada fungsi createApp dan mount.


untuk import from vue -> itu adalah import dari dependencies yang ada pada file package.json dengan key dependencies , 
sehingga untuk pemanggilannya cukup di berikan string quote from vue karena sudah di definisikan di package.json atau dependencies.


*/

const app = createApp(App)
app.component('friend-contact', FriendContact);
app.component('new-friend', NewFriendContact);
app.mount("#app");
