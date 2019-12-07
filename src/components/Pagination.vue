<template>
  <v-container v-if="pages>1">
    <v-row>
      <v-col>
        <v-pagination v-model="page" :length="pages"></v-pagination>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  computed: {
    page: {
      get() {
        return this.$store.state.page;
      },
      set(value) {
        this.setPage(value);
      }
    },
    ...mapGetters({
      pages: "getPages"
    })
  },
  methods: {
    ...mapMutations(["setPage"])
  }
};
</script>