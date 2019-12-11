<template>
  <div>
    <div v-if="Object.keys(series).length !== 0 || error">
      <app-banner />
      <app-pagination v-show="series.pages > 1" />
      <app-results />
    </div>
    <app-progress v-else-if="loading" />
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  name: "Search",
  computed: {
    ...mapState(["loading"]),
    ...mapGetters({
      series: "getSeries",
      error: "getError"
    })
  },
  components: {
    AppResults: () => import("../components/Results.vue"),
    AppPagination: () => import("../components/Pagination.vue"),
    AppBanner: () => import("../components/Banner.vue"),
    AppProgress: () => import("../components/Progress.vue")
  }
};
</script>