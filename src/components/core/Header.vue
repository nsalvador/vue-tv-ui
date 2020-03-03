<template>
  <v-app-bar app flat>
    <v-app-bar-nav-icon class="hidden-md-and-up" @click="toggleDrawer" />
    <v-container class="d-flex align-center">
      <v-btn text v-text="links[0].text" class="ma-1 hidden-sm-and-down" :to="links[0].to" />
      <div class="hidden-sm-and-down" v-show="!isLoggedIn">
        <v-btn
          text
          v-for="(link, i) in links.slice(1, 3)"
          :key="i"
          v-text="link.text"
          :to="link.to"
          class="ma-1"
        />
      </div>
      <v-spacer />
      <v-text-field
        style="max-width: 300px;"
        append-icon="mdi-magnify"
        flat
        placeholder="Search..."
        hide-details
        solo-inverted
        v-model="show"
        @click:append="onClickAppend"
        @keydown.enter="onKeyDown"
      />
      <v-btn
        text
        v-text="links[links.length-1].text"
        class="ma-1 hidden-sm-and-down"
        v-show="isLoggedIn"
        @click="logoutHandler"
      />
    </v-container>
  </v-app-bar>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

export default {
  data: () => ({
    show: ""
  }),
  computed: {
    ...mapState(["drawer", "links"]),
    ...mapGetters("auth", ["isLoggedIn"]),
    dialog: {
      get() {
        return this.$store.state.dialog;
      },
      set(value) {
        this.setDialog(value);
      }
    }
  },
  methods: {
    ...mapMutations([
      "toggleDrawer",
      "setSeries",
      "setError",
      "setLoading",
      "setStarted",
      "setDialog",
      "setDialogTitle"
    ]),
    ...mapActions({
      search: "search",
      logout: "auth/logout"
    }),
    logoutHandler() {
      this.logout();
      this.$router.push({ name: "login" });
    },
    onKeyDown() {
      this.onClickAppend();
    },
    onClickAppend() {
      if (this.show) {
        this.$router.push({ name: "search" });
        this.setSeries({});
        this.setError(null);
        this.setLoading(true);
        this.search({
          url: "/shows/search",
          method: "post",
          data: { show: this.show },
          params: { page: 1 }
        });
        this.show = "";
      }
    }
  }
};
</script>
