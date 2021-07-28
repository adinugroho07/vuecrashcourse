<template>
  <div
    class="card border-info bg-light rounded shadow"
    style="margin-bottom: 20px"
  >
    <div class="card-header">
      I'am <strong>{{ objUser.name }}</strong> and I'm
      <strong>{{ objUser.age }}</strong> Years Old.
    </div>
    <div class="card-body">
      <h5 class="card-title">{{ objUser.name }}</h5>
      <p class="card-text">
        {{ objUser.description }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    objUser: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {};
  },
};
</script>