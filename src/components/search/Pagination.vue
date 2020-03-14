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
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  name: "Pagination",
  computed: {
    page: {
      get() {
        return this.$store.state.search.page;
      },
      set(value) {
        this.SET_PAGE(value);
      }
    },
    ...mapState("search", { series: state => state.series })
  },
  methods: {
    ...mapMutations("search", ["SET_PAGE"]),
    ...mapActions("search", ["search"]),
    searchHandler() {
      this.search(this.series.name);
    }
  }
};
</script>