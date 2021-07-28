<template>
  <div>
    <active-element
      :topic-title="activeTopic && activeTopic.title"
      :text="activeTopic && activeTopic.fullText"
    ></active-element>
    <knowledge-base
      :topics="topics"
      @select-topic="activateTopic"
    ></knowledge-base>
  </div>
</template>

<script>
export default {
  data() {
    return {
      topics: [
        {
          id: 'basics',
          title: 'The Basics',
          description: 'Core Vue basics you have to know',
          fullText:
            'Vue is a great framework and it has a couple of key concepts: Data binding, events, components and reactivity - that should tell you something!',
        },
        {
          id: 'components',
          title: 'Components',
          description:
            'Components are a core concept for building Vue UIs and apps',
          fullText:
            'With components, you can split logic (and markup) into separate building blocks and then combine those building blocks (and re-use them) to build powerful user interfaces.',
        },
      ],
      activeTopic: null,
    };
  },
  provide() {
    /* 
  provide dan inject ini adalah cara untuk membypass jika terjadi nested component (di dalam nya component ada component lagi).abnf
  contoh urutan komponen(nested component) berikut :
  -> App.vue (parent/ancestor) -> knowledgeBase.vue -> knowledgeGrid.vue -> knowledgeElement.vue
     App.vue (parent/ancestor) -> ActiveElement.vue
  
  jadi jika di lihat pada hirarki di atas knowledgeBase dan ActiveElement adalah neighbor/tetangga. jika kita lihat pada masing2
  file nya App memberikan value dan membypas pada knowledgeBase dan baru di gunakan pada knowledgeGrid. begitu juga dengan pengembalian
  variable id lewat $emit dari component knowledgeElement ke App.vue dan membypass semua component yang di lalui.
  oleh karena itu vue menyediakan fitur provide dan inject, di mana provide adalah untuk memprovide data yang akan di consume oleh inject
  pada component yang di inject. provide dan inject ini hanya bisa di lakukan antara parent dan child tidak bisa sesama neighbor/tetangga.
  
  provide dan inject pun bisa di arahkan untuk mengeksekusi method. contoh nya adalah seperti variable di bawah ini,
  selectTopic->(identifier inject pada component dan harus sama nama nya) : this.activateTopic -> (nama method yang akan di eksekusi pada file local)
  */
    return {
      topics: this.topics,
      selectTopic: this.activateTopic,
    };
  },
  methods: {
    activateTopic(topicId) {
      this.activeTopic = this.topics.find((topic) => topic.id === topicId);
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}
section {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 2rem auto;
  max-width: 40rem;
  padding: 1rem;
  border-radius: 12px;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
}

li {
  border-radius: 12px;
  border: 1px solid #ccc;
  padding: 1rem;
  width: 15rem;
  margin: 0 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

h2 {
  margin: 0.75rem 0;
  text-align: center;
}

button {
  font: inherit;
  border: 1px solid #c70053;
  background-color: #c70053;
  color: white;
  padding: 0.75rem 2rem;
  border-radius: 30px;
  cursor: pointer;
}

button:hover,
button:active {
  background-color: #e24d8b;
  border-color: #e24d8b;
}
</style>