<template>
  <section>
    <header>
      <h1>My List Friends Contact</h1>
    </header>
    <new-friend @add-contact="contactAdd"></new-friend>
    <ul>
      <!-- <li v-for="friend in friends" :key="friend.id">{{ friend.name }}</li> -->
      <friend-contact
        v-for="friend in friends"
        :key="friend.id"
        :obj-friend="friend"
        @toggle-favourite="toggleFav"
        @delete-contact="deleteContact"
      ></friend-contact>
    </ul>
    <!-- <ul>
      <li v-for="item in friends" :key="item.id">
        <p><strong>id :</strong> {{ item.id }}</p>
        <br />
        <p><strong>name :</strong> {{ item.name }}</p>
        <br />
        <p><strong>phone :</strong> {{ item.phone }}</p>
        <br />
        <p><strong>email :</strong> {{ item.email }}</p>
        <br />
        <p><strong>isFavourite :</strong> {{ item.isFavourite }}</p>
      </li>
    </ul> -->
  </section>
</template>

<script>
/* 
fungsi export default ini akan memberitahu javascript bahwa object yang ada di sini adalah default export yang ada pada 
App.vue file.
*/
export default {
  data() {
    return {
      friends: [
        {
          id: "manuel",
          name: "Manuel Lorenz",
          phone: "01234 5678 991",
          email: "manuel@localhost.com",
          isFavourite: false,
        },
        {
          id: "julie",
          name: "Julie Jones",
          phone: "09876 543 221",
          email: "julie@localhost.com",
          isFavourite: false,
        },
      ],
    };
  },
  methods: {
    toggleFav: function (id) {
      const identifier = this.friends.find((element) => element.id == id);
      identifier.isFavourite = !identifier.isFavourite;
    },
    contactAdd: function (parname, parphone, paremail) {
      //unshift() -> penambahan element pada array dari element awal.
      //push() -> penambahan element pada array dari element akhir.
      this.friends.unshift({
        id: new Date().toISOString(),
        name: parname,
        phone: parphone,
        email: paremail,
        isFavourite: false,
      });
    },
    deleteContact: function (id) {
      this.friends = this.friends.filter(function (e) {
        return e.id != id;
      });
    },
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Jost&display=swap");

* {
  box-sizing: border-box;
}

html {
  font-family: "Jost", sans-serif;
}

body {
  margin: 0;
}

header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

#app li,
#app form {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}

#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
#app input {
  font: inherit;
  padding: 0.15rem;
}
#app label {
  font-weight: bold;
  margin-right: 1rem;
  width: 7rem;
  display: inline-block;
}
#app form div {
  margin: 1rem 0;
}
</style>