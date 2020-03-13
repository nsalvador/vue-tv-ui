<template>
  <div>
    <div
      v-if="Object.keys(series).length !== 0 || error"
      style="max-width:744px;min-width:296px;margin:0 auto;"
    >
      <app-banner />
      <app-pagination v-show="series.pages > 1" />
      <app-results />
    </div>
    <app-progress v-else-if="isLoading" />
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  name: "Search",
  computed: {
    ...mapState("search", ["isLoading"]),
    ...mapGetters({
      series: "search/GET_SERIES",
      error: "GET_ERROR"
    })
  },
  watch: {
    series(newValue) {
      localStorage.setItem("series", JSON.stringify(newValue));
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