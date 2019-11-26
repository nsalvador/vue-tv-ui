<template>
  <v-app>
    <v-content>
      <app-header @search="search" />
      <app-results :seriesObject="series" />
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
      series: {},
      error: null
    };
  },
  methods: {
    async search(show) {
      try {
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
