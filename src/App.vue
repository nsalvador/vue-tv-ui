<template>
  <v-app dark>
    <v-content>
      <app-header @search="search" />
      <app-progress v-if="isLoaded" />
      <template v-else>
        <app-banner :banner="{error, series, show}" />
        <app-results :seriesObject="series" :show="show" @next="search" />
      </template>
    </v-content>
    <app-footer></app-footer>
  </v-app>
</template>

<script>
import appHeader from "./components/Header.vue";
import appResults from "./components/Search/Results.vue";
import appBanner from "./components/Banner.vue";
import appProgress from "./components/Progress.vue";
import appFooter from "./components/Footer.vue";
import axios from "axios";

export default {
  data() {
    return {
      show: "",
      series: {},
      isLoaded: false,
      error: null
    };
  },
  methods: {
    async search(showObject) {
      this.series = {};
      this.isLoaded = true;
      this.error = null;
      this.show = showObject.show;
      try {
        let response = await axios({
          url: `/shows/search?page=${showObject.page}`,
          method: "post",
          data: { show: showObject.show }
        });
        this.isLoaded = false;
        this.series = response.data;
      } catch (error) {
        this.isLoaded = false;
        this.error = error;
      }
    }
  },
  components: {
    appHeader,
    appResults,
    appBanner,
    appProgress,
    appFooter
  }
};
</script>
