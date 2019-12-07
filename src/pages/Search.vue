<template>
  <div v-show="!isLoading">
    <app-banner />
    <app-pagination />
    <app-results />
  </div>
</template>

<script>
import AppResults from "../components/Results.vue";
import AppPagination from "../components/Pagination.vue";
import AppBanner from "../components/Banner.vue";
import { mapGetters } from "vuex";

export default {
  name: "Search",
  computed: {
    ...mapGetters({
      isLoading: "getLoading"
    })
  },
  components: {
    AppResults,
    AppPagination,
    AppBanner
  }
};
</script>