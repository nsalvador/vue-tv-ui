<template>
  <v-app-bar app flat>
    <v-app-bar-nav-icon class="hidden-md-and-up" @click="toggleDrawer" />
    <v-container>
      <div style="max-width:744px;min-width:296px;margin:0 auto;" class="d-flex align-center">
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
      </div>
    </v-container>
  </v-app-bar>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

export default {
  data: () => ({
    show: "",
    error: ""
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
    ...mapMutations({
      toggleDrawer: "toggleDrawer",
      setDialog: "setDialog",
      setDialogTitle: "setDialogTitle",
      SET_LOADING: "search/SET_LOADING",
      SET_SERIES: "search/SET_SERIES",
      SET_PAGE: "search/SET_PAGE",
      SET_ERROR: "SET_ERROR"
    }),
    ...mapActions({
      search: "search/search",
      logout: "auth/logout"
    }),
    logoutHandler() {
      this.logout();
      this.$router.push({ name: "login" });
    },
    onKeyDown() {
      this.searchHandler();
    },
    onClickAppend() {
      this.searchHandler;
    },
    searchHandler() {
      if (this.show) {
        this.SET_PAGE(1);
        this.SET_ERROR(null);
        this.SET_SERIES({});
        this.SET_LOADING(true);
        this.search(this.show);
        if (this.$route.name !== "search") {
          this.$router.push({ name: "search" });
        }
        this.show = "";
      }
    }
  }
};
</script>
