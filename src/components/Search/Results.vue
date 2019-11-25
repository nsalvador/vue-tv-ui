<template>
  <v-container grid-list-md>
    <v-pagination :length="pages" v-model="page" v-show="pages>1" @input="next"></v-pagination>
    <v-layout row wrap>
      <v-flex v-for="(showObject, index) in series" :key="index" xs3>
        <app-image :show="showObject" />
      </v-flex>
    </v-layout>
    <pre v-show="error">{{error}}</pre>
  </v-container>
</template>

<script>
import appImage from "../Image.vue";
import axios from "axios";

export default {
  props: {
    showToSearch: String
  },
  data() {
    return {
      series: [],
      page: 1,
      pages: 0,
      error: null
    };
  },
  watch: {
    showToSearch(value) {
      this.showToSearch = value;
      this.search();
    }
  },
  components: {
    appImage
  },
  methods: {
    next(value) {
      this.page = value;
      this.search();
    },
    async search() {
      try {
        let response = await axios({
          url: `/shows/search?page=${this.page}`,
          method: "post",
          data: { show: this.showToSearch }
        });
        this.series = response.data.series;
        this.page = response.data.page;
        this.pages = response.data.pages;
      } catch (error) {
        this.error = error;
      }
    }
  }
};
</script>