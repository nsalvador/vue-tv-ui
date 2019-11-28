<template>
  <v-app>
    <v-content>
      <app-header @search="search" />
      <app-banner :banner="{error, series, show}" />
      <app-results :seriesObject="series" :show="show" />
    </v-content>
  </v-app>
</template>

<script>
import appHeader from "./components/Header.vue";
import appResults from "./components/Search/Results.vue";
import appBanner from "./components/Banner.vue";
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
        if (response.status === 200) {
          this.series = response.data;
        } else {
          throw response;
        }
      } catch (error) {
        this.error = error;
      }
    }
  },
  components: {
    appHeader,
    appResults,
    appBanner
  }
};
</script>
