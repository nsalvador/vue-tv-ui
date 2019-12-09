<template>
  <v-app-bar app flat>
    <v-app-bar-nav-icon class="hidden-md-and-up" @click="toggleDrawer" />
    <v-container class="d-flex align-center">
      <v-btn
        :to="link.to"
        v-for="(link, i) in links"
        :key="i"
        class="ma-1 hidden-sm-and-down"
        text
        v-text="link.text"
      />
      <v-spacer />
      <v-text-field
        style="max-width: 300px;"
        append-icon="mdi-magnify"
        flat
        placeholder="Search..."
        hide-details
        solo-inverted
        v-model="show"
        @click:append="search"
        @keydown.enter="search"
      />
    </v-container>
  </v-app-bar>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import router from "../../router";

export default {
  name: "Header",
  data: () => ({
    show: ""
  }),
  computed: {
    ...mapState(["links"])
  },
  methods: {
    ...mapMutations(["toggleDrawer"]),
    search() {
      if (this.$route.name === "home") {
        router.push({ name: "search" });
      }
      this.$store.commit("setSeries", {});
      this.$store.commit("setError", null);
      this.$store.commit("setLoading", true);
      this.$store.dispatch("search", {
        url: "/shows/search",
        method: "post",
        data: { show: this.show },
        params: { page: 1 }
      });
      this.show = "";
    }
  }
};
</script>
