<template>
  <v-container class="py-0">
    <v-row>
      <v-col>
        <v-pagination v-model="page" :length="series.pages" @input="search"></v-pagination>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "Pagination",
  computed: {
    page: {
      get() {
        return this.$store.state.page;
      },
      set(value) {
        this.setPage(value);
      }
    },
    ...mapState(["series"])
  },
  methods: {
    ...mapMutations(["setPage"]),
    search() {
      this.$store.dispatch("search", {
        url: "/shows/search",
        method: "post",
        data: { show: this.series.name },
        params: { page: this.page }
      });
    }
  }
};
</script>