<template>
  <v-container>
    <v-row v-show="pages>1">
      <v-col>
        <v-pagination :length="pages"></v-pagination>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="(show, index) in series" :key="index" cols="6" sm="3">
        <app-image :show="show" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import appImage from "../Image.vue";

export default {
  computed: {
    series() {
      return this.seriesObject.series || [];
    },
    pages() {
      return this.seriesObject.pages || 0;
    },
    results() {
      return this.seriesObject.results || 0;
    }
  },
  props: {
    seriesObject: Object,
    show: String
  },
  components: {
    appImage
  }
};
</script>
