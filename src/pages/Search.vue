<template>
  <div>
    <app-header @search="search" />
    <app-progress v-if="isLoaded" />
    <template v-else>
      <app-banner :banner="{error, series, show}" />
      <app-results :seriesObject="series" :show="show" @next="search" />
    </template>
  </div>
</template>

<script>
import appHeader from "../components/Header.vue";
import appProgress from "../components/Progress.vue";
import appBanner from "../components/Banner.vue";
import appResults from "../components/SearchResults.vue";
import axios from "axios";

if (process.env.NODE_ENV === "production") {
  axios.defaults.baseURL = "https://tv-calendar-api.herokuapp.com";
}

export default {
  name: "Search",
  data: () => ({
    show: "",
    series: {},
    isLoaded: false,
    error: null
  }),
  methods: {
    async search(showObject) {
      this.show = showObject.show;
      this.series = {};
      this.isLoaded = true;
      this.error = null;
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
    appProgress,
    appBanner,
    appResults
  }
};
</script>