<template>
  <v-app-bar app flat>
    <v-app-bar-nav-icon class="hidden-md-and-up" @click="TOGGLE_DRAWER" />
    <v-container>
      <div style="max-width:744px;min-width:296px;margin:0 auto;" class="d-flex align-center">
        <v-btn
          text
          v-text="GET_LINKS('first').text"
          class="ma-1 hidden-sm-and-down"
          :to="GET_LINKS('first').to"
        />
        <div class="hidden-sm-and-down" v-show="!isLoggedIn">
          <v-btn
            text
            v-for="(link, i) in GET_LINKS('mid')"
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
          @click:append="searchHandler"
          @keydown.enter="searchHandler"
        />
        <v-btn
          text
          v-text="GET_LINKS('last').text"
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
  watch: {
    series(newValue) {
      localStorage.setItem("series", JSON.stringify(newValue));
    }
  },
  computed: {
    ...mapState("search", {
      series: state => state.series
    }),
    ...mapGetters({
      isLoggedIn: "auth/isLoggedIn",
      GET_LINKS: "GET_LINKS"
    })
  },
  methods: {
    ...mapMutations({
      TOGGLE_DRAWER: "drawer/TOGGLE_DRAWER",
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
