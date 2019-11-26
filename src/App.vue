<template>
  <v-app>
    <v-content>
      <app-header @search="search" />
      <app-results
        :seriesObject="series"
        :show="show"
        v-show="Object.keys(series).length!==0"
        v-if="!error"
      />
      <pre v-else>{{ error.name }}: {{error.message }}</pre>
    </v-content>
  </v-app>
</template>

<script>
import appHeader from "./components/Header.vue";
import appResults from "./components/Search/Results.vue";
import axios from "axios";

export default {
  data() {
    return {
      show: "",
      series: {},
      error: null
    };
  },
  methods: {
    async search(show) {
      this.series = {};
      this.error = null;
      try {
        this.show = show;
        let response = await axios({
          url: "/shows/search",
          method: "post",
          data: { show }
        });
        this.series = response.data;
      } catch (error) {
        this.error = error;
      }
    }
  },
  components: {
    appHeader,
    appResults
  }
};
</script>
