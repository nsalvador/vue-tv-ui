<template>
  <v-container class="py-0">
    <v-row>
      <v-col>
        <v-pagination v-model="page" :length="series.pages" @input="searchHandler"></v-pagination>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";

export default {
  name: "Pagination",
  computed: {
    ...mapGetters({ series: "search/GET_SERIES" }),
    page: {
      get() {
        return this.$store.state.search.page;
      },
      set(value) {
        this.SET_PAGE(value);
      }
    }
  },
  methods: {
    ...mapMutations({
      SET_PAGE: "search/SET_PAGE",
      SET_SELECTION: "SET_SELECTION"
    }),
    ...mapActions("search", ["search"]),
    searchHandler() {
      this.SET_SELECTION();
      this.search(this.series.name);
    }
  }
};
</script>