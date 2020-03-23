<template>
  <div>
    <div v-if="condition" style="max-width:744px;min-width:296px;margin:0 auto;">
      <app-banner :message="message" />
      <app-pagination v-show="series.pages > 1" />
      <app-results />
    </div>
    <app-progress v-else-if="isLoading" />
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";

export default {
  name: "Search",
  mounted() {
    const seriesJSON = localStorage.getItem("series");
    if (seriesJSON) {
      const series = JSON.parse(seriesJSON);
      this.SET_PAGE(series.page);
      this.SET_SERIES(series);
    }
  },
  destroyed() {
    localStorage.clear();
  },
  methods: {
    ...mapMutations("search", ["SET_PAGE", "SET_SERIES"])
  },
  computed: {
    ...mapState({
      isLoading: state => state.search.isLoading,
      error: state => state.error
    }),
    ...mapGetters({
      series: "search/GET_SERIES"
    }),
    condition() {
      return Object.keys(this.series).length !== 0 || this.error;
    },
    message() {
      return this.error
        ? `${this.error.name}: ${this.error.message}`
        : `${this.series.results} results(s) for '${this.series.name}'`;
    }
  },
  components: {
    AppResults: () => import("../components/search/results/Results.vue"),
    AppPagination: () => import("../components/search/Pagination.vue"),
    AppBanner: () => import("../components/Banner.vue"),
    AppProgress: () => import("../components/search/Progress.vue")
  }
};
</script>