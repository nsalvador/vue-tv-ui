<template>
  <div>
    <div style="max-width:744px; min-width:296px; margin: 0 auto">
      <app-banner :message="message" />
      <app-results v-show="condition" :shows="shows" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";

export default {
  mounted() {
    const showsJSON = sessionStorage.getItem("shows");
    if (showsJSON) {
      this.SET_SHOWS(JSON.parse(showsJSON));
    } else {
      this.getShows();
    }
  },
  computed: {
    ...mapGetters({
      shows: "show/GET_SHOWS"
    }),
    message() {
      return !this.condition()
        ? "No show. Start a search"
        : `Subscribed to ${this.shows.length} ${
            this.shows.length === 1 ? "show" : "shows"
          }`;
    }
  },
  methods: {
    ...mapMutations("show", ["SET_SHOWS"]),
    ...mapActions("show", ["getShows"]),
    condition() {
      return this.shows.length !== 0;
    }
  },
  components: {
    AppBanner: () => import("../components/Banner.vue"),
    AppResults: () => import("../components/Results.vue")
  }
};
</script>