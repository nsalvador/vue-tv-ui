<template>
  <v-app-bar app flat>
    <v-app-bar-nav-icon class="hidden-md-and-up" @click="TOGGLE_DRAWER" />
    <v-container>
      <div style="max-width:744px;min-width:296px;margin:0 auto;" class="d-flex align-center">
        <v-btn
          text
          v-text="links('Home').text"
          class="ma-1 hidden-sm-and-down"
          :to="links('Home').to"
        />
        <div class="hidden-sm-and-down" v-show="!isLoggedIn">
          <v-btn
            text
            v-for="(link, i) in links('mid')"
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
        <v-menu open-on-hover offset-y>
          <template v-slot:activator="{ on }">
            <v-btn v-show="isLoggedIn" text icon class="ma-2" v-on="on">
              <v-icon>mdi-account-circle</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item :to="links('Subscriptions').to">
              <v-list-item-title v-text="links('Subscriptions').text"></v-list-item-title>
            </v-list-item>
            <v-list-item @click="logoutHandler">
              <v-list-item-title v-text="links('Log Out').text"></v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </v-container>
  </v-app-bar>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";

export default {
  data: () => ({
    show: ""
  }),
  computed: {
    ...mapGetters({
      isLoggedIn: "auth/isLoggedIn",
      links: "GET_LINKS"
    })
  },
  methods: {
    ...mapMutations({
      TOGGLE_DRAWER: "drawer/TOGGLE_DRAWER",
      SET_LOADING: "search/SET_LOADING",
      SET_SERIES: "search/SET_SERIES",
      SET_PAGE: "search/SET_PAGE",
      SET_ERROR: "SET_ERROR",
      SET_SELECTION: "SET_SELECTION"
    }),
    ...mapActions({
      search: "search/search",
      logout: "auth/logout"
    }),
    logoutHandler() {
      sessionStorage.clear();
      this.logout();
      this.$router.push({ name: "login" });
    },
    async searchHandler() {
      if (this.show) {
        try {
          this.SET_PAGE();
          this.SET_ERROR();
          this.SET_SERIES();
          this.SET_SELECTION();
          this.SET_LOADING(true);
          await this.search(this.show);
          if (this.$route.name !== "search") {
            this.$router.push({ name: "search" });
          }
        } catch (error) {
          this.SET_ERROR(error.response.data);
        } finally {
          this.SET_LOADING(false);
          this.show = "";
        }
      }
    }
  }
};
</script>
