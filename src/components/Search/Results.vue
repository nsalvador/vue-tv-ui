<template>
  <v-container>
    <v-banner>{{ results }} results for {{ show }}</v-banner>
    <v-row>
      <v-col cols="12">
        <v-pagination :length="pages" v-show="pages>1"></v-pagination>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="(show, index) in series" :key="index" cols="3">
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
