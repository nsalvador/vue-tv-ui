<template>
  <div>
    <div v-if="condition" style="max-width:744px;min-width:296px;margin:0 auto;">
      <app-banner />
      <app-pagination v-show="series.pages > 1" />
      <app-results />
    </div>
    <app-progress v-else-if="isLoading" />
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "Search",
  computed: {
    ...mapState({
      isLoading: state => state.search.isLoading,
      series: state => state.search.series,
      error: state => state.error
    }),
    condition() {
      return Object.keys(this.series).length !== 0 || this.error;
    }
  },
  methods: {
    ...mapMutations("search", ["SET_SERIES", "SET_PAGE"])
  },
  mounted() {
    const seriesJSON = localStorage.getItem("series");
    const series = JSON.parse(seriesJSON);

    if (series) {
      this.SET_SERIES(series);
      this.SET_PAGE(series.page);
    }
  },
  components: {
    AppResults: () => import("../components/search/results/Results.vue"),
    AppPagination: () => import("../components/search/Pagination.vue"),
    AppBanner: () => import("../components/search/Banner.vue"),
    AppProgress: () => import("../components/search/Progress.vue")
  }
};
</script>