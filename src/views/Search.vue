<template>
  <div>
    <div v-if="condition" style="max-width:744px;min-width:296px;margin:0 auto;">
      <app-banner :message="message">
        <template v-slot:buttons>
          <v-btn
            :disabled="selection.length==series.series.length"
            @click="selectAllHandler"
          >select all</v-btn>
          <v-btn :disabled="!selection.length" @click="SET_SELECTION([])">deselect all</v-btn>
          <v-btn :disabled="!selection.length" @click="subscribeHandler">subscribe</v-btn>
        </template>
      </app-banner>
      <app-pagination v-show="series.pages > 1" />
      <app-results :shows="series.series" />
    </div>
    <app-progress v-else-if="isLoading" />
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";

export default {
  name: "Search",
  mounted() {
    const seriesJSON = sessionStorage.getItem("series");
    if (seriesJSON) {
      const series = JSON.parse(seriesJSON);
      this.SET_PAGE(series.page);
      this.SET_SERIES(series);
    }
  },
  destroyed() {
    if (!this.isLoggedIn) {
      sessionStorage.clear();
    }
  },
  methods: {
    ...mapMutations({
      SET_PAGE: "search/SET_PAGE",
      SET_SERIES: "search/SET_SERIES",
      SET_SELECTION: "SET_SELECTION"
    }),
    subscribeHandler() {
      const selection = this.selection;
      alert(JSON.stringify(selection, null, 2));
    },
    selectAllHandler() {
      const series = this.series.series;
      series.forEach((item, index) =>
        this.$set(this.selection, index, item.seriesName)
      );
    }
  },
  computed: {
    ...mapState({
      isLoading: state => state.search.isLoading,
      error: state => state.error,
      selection: state => state.selection
    }),
    ...mapGetters({
      series: "search/GET_SERIES",
      isLoggedIn: "auth/isLoggedIn"
    }),
    condition() {
      return Object.keys(this.series).length !== 0 || this.error;
    },
    message() {
      return this.error
        ? `${this.error.message}`
        : `${this.series.results} ${
            this.series.results !== 1 ? "results" : "result"
          } for '${this.series.name}'`;
    }
  },
  components: {
    AppResults: () => import("../components/Results.vue"),
    AppPagination: () => import("../components/search/Pagination.vue"),
    AppBanner: () => import("../components/Banner.vue"),
    AppProgress: () => import("../components/search/Progress.vue")
  }
};
</script>