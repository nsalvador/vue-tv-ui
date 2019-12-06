<template>
  <v-app-bar app flat>
    <v-app-bar-nav-icon class="hidden-md-and-up" @click="toggleDrawer" />
    <v-container class="mx-auto py-0">
      <v-layout align-center>
        <v-btn
          :to="link.to"
          v-for="(link, i) in links"
          :key="i"
          class="ma-1 hidden-sm-and-down"
          text
        >{{ link.text }}</v-btn>
        <v-spacer></v-spacer>
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
      </v-layout>
    </v-container>
  </v-app-bar>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import router from "../router";
export default {
  name: "Header",
  data: () => ({
    show: "",
    error: null
  }),
  computed: {
    ...mapGetters(["links"])
  },
  methods: {
    ...mapMutations(["toggleDrawer"]),
    async search() {
      try {
        if (this.$route.name === "home") {
          router.push({ name: "search" });
        }
        this.$store.commit("setSeries", {});
        const config = {
          url: `/shows/search?page=1`,
          method: "post",
          data: { show: this.show }
        };
        this.show = "";
        await this.$store.dispatch("search", config);
      } catch (error) {
        this.error = error;
      }
    }
  }
};
</script>
