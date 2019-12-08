<template>
  <div>
    <div v-if="Object.keys(series).length !== 0 || error">
      <app-banner />
      <app-pagination v-show="series.pages > 1" />
      <app-results />
    </div>
    <app-progress v-else-if="isLoading" />
  </div>
</template>

<script>
import AppResults from "../components/Results.vue";
import AppPagination from "../components/Pagination.vue";
import AppBanner from "../components/Banner.vue";
import AppProgress from "../components/Progress.vue";
import { mapGetters } from "vuex";

export default {
  name: "Search",
  computed: {
    ...mapGetters({
      series: "getSeries",
      error: "getError",
      isLoading: "getLoading"
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