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
import AppResults from "../components/Results.vue";
import AppPagination from "../components/Pagination.vue";
import AppBanner from "../components/Banner.vue";
import AppProgress from "../components/Progress.vue";
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
    AppResults,
    AppPagination,
    AppBanner,
    AppProgress
  }
};
</script>