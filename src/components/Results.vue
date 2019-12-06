<template>
  <v-container>
    <v-row v-show="pages>1">
      <v-col>
        <v-pagination v-model="page" :length="pages"></v-pagination>
      </v-col>
    </v-row>
    <v-row dense>
      <v-col v-for="(show, index) in series" :key="index" cols="6" sm="3">
        <app-image :show="show" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import AppImage from "./Image.vue";

export default {
  name: "Results",
  data: () => ({
    page: 1
  }),
  computed: {
    series() {
      return this.$store.getters.series.series;
    },
    pages() {
      return this.$store.getters.series.pages;
    }
  },
  components: {
    AppImage
  },
  mounted() {
    this.page = this.$store.getters.series.page || 1;
  }
  // methods: {
  //   next(page) {
  //     this.$emit("next", { show: this.show, page });
  //   }
  // },
  // mounted() {
  //   this.page = this.seriesObject.page || 1;
  // },
  // computed: {
  //   series() {
  //     return this.seriesObject.series || [];
  //   },
  //   pages() {
  //     return this.seriesObject.pages || 0;
  //   }
  // },
  // props: {
  //   seriesObject: Object,
  //   show: String
  // },
};
</script>
