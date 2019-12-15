<template>
  <div>
    <h4>Name:</h4>
    <p class="body-2" v-text="show.seriesName"></p>
    <h4>Overview:</h4>
    <p class="body-2" v-text="show.overview"></p>
    <h4>Status:</h4>
    <p class="body-2" v-text="show.status"></p>
  </div>
</template>

<script>
export default {
  props: {
    show: Object
  }
};
</script>