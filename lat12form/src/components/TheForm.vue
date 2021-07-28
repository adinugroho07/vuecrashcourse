<template>
  <form @submit.prevent="submitData">
    <div class="form-control">
      <label for="user-name">Your Name</label>
      <input id="user-name" name="user-name" type="text" v-model="userName" />
    </div>
    <div class="form-control">
      <label for="age">Your Age (Years)</label>
      <!-- 
      jika kita tidak menambahkan extensi number maka variable yang di bind oleh userAge akan di treat as string, bukan number maka variable
      begitu juga jika kita menggunakan ref maka value yang di hasilkan atau yang ambil akan di treat as string.
      -->
      <input id="age" name="age" type="number" v-model.number="userAge" />
    </div>
    <div class="form-control">
      <label for="referrer">How did you hear about us?</label>
      <select id="referrer" name="referrer" v-model="select">
        <option value="google">Google</option>
        <option value="wom">Word of mouth</option>
        <option value="newspaper">Newspaper</option>
      </select>
    </div>
    <div class="form-control">
      <h2>What are you interested in?</h2>
      <div>
        <input
          id="interest-news"
          name="interest"
          type="checkbox"
          value="news"
          v-model="checkbox"
        />
        <label for="interest-news">News</label>
      </div>
      <div>
        <input
          id="interest-tutorials"
          name="interest"
          type="checkbox"
          value="tutorials"
          v-model="checkbox"
        />
        <label for="interest-tutorials">Tutorials</label>
      </div>
      <div>
        <input
          id="interest-nothing"
          name="interest"
          type="checkbox"
          value="nothing"
          v-model="checkbox"
        />
        <label for="interest-nothing">Nothing</label>
      </div>
    </div>
    <div class="form-control">
      <h2>How do you learn?</h2>
      <div>
        <input
          id="how-video"
          name="how"
          type="radio"
          value="videocourse"
          v-model="radioSelect"
        />
        <label for="how-video">Video Courses</label>
      </div>
      <div>
        <input
          id="how-blogs"
          name="how"
          type="radio"
          value="blogs"
          v-model="radioSelect"
        />
        <label for="how-blogs">Blogs</label>
      </div>
      <div>
        <input
          id="how-other"
          name="how"
          type="radio"
          value="other"
          v-model="radioSelect"
        />
        <label for="how-other">Other</label>
      </div>
      <div>
        <input type="checkbox" name="term" id="term" v-model="termcond" />
        <label for="term">Do You Aggree For Out Term And Conditions ?</label>
      </div>
    </div>
    <div>
      <button>Save Data</button>
    </div>
  </form>
</template>
<script>
export default {
  data() {
    return {
      userName: '',
      userAge: null,
      select: 'wom',
      checkbox: [],
      radioSelect: '',
      termcond: false,
    };
  },
  methods: {
    submitData() {
      console.log('user name :' + this.userName);
      console.log('original age :' + this.userAge);
      //harus di berikan kolom lagi seperti contoh di bawah, kalo tidak dia akan di treat as string semua jadi nya bukan
      //value yang di tambah tapi malah string nya di concatenate
      console.log('now age :' + (this.userAge + 5));
      //console.log('user Age :' + this.$refs.age.value + 5);
      console.log('select :' + this.select);
      console.log('checkbox :' + this.checkbox);
      console.log('Radio :' + this.radioSelect);
      console.log('Term Conditions :' + this.termcond);

      this.userAge = null;
      this.userName = '';
      this.select = 'wom';
      this.checkbox = [];
      this.radioSelect = '';
      this.termcond = false;
    },
  },
};
</script>

<style scoped>
form {
  margin: 2rem auto;
  max-width: 40rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 2rem;
  background-color: #ffffff;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
}

h2 {
  font-size: 1rem;
  margin: 0.5rem 0;
}

input,
select {
  display: block;
  width: 100%;
  font: inherit;
  margin-top: 0.5rem;
}

select {
  width: auto;
}

input[type='checkbox'],
input[type='radio'] {
  display: inline-block;
  width: auto;
  margin-right: 1rem;
}

input[type='checkbox'] + label,
input[type='radio'] + label {
  font-weight: normal;
}

button {
  font: inherit;
  border: 1px solid #0076bb;
  background-color: #0076bb;
  color: white;
  cursor: pointer;
  padding: 0.75rem 2rem;
  border-radius: 30px;
}

button:hover,
button:active {
  border-color: #002350;
  background-color: #002350;
}
</style>