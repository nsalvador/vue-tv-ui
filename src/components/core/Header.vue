<template>
  <v-app-bar app flat>
    <v-app-bar-nav-icon class="hidden-md-and-up" @click="toggleDrawer" />
    <v-container class="d-flex align-center">
      <v-btn class="ma-1 hidden-sm-and-down" text to="/">Home</v-btn>
      <div v-if="!isLoggedIn" class="hidden-sm-and-down">
        <v-btn text to="/register" class="ma-1">Register</v-btn>
        <v-btn text to="/login" class="ma-1">Log In</v-btn>
      </div>
      <!-- <v-btn
        :to="link.to"
        v-for="(link, i) in links"
        :key="i"
        class="ma-1 hidden-sm-and-down"
        text
        v-text="link.text"
        v-show="showButton(link)"
        @click.stop="onClick(link)"
      />-->
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
      <v-btn v-if="isLoggedIn" text class="ma-1" @click="logoutHandler">Log Out</v-btn>
    </v-container>
  </v-app-bar>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
import router from "../../router";
import showButtonMixin from "../../mixins/showButtonMixin";
import onClickMixin from "../../mixins/onClickMixin";

export default {
  name: "Header",
  mixins: [showButtonMixin, onClickMixin],
  data: () => ({
    show: ""
  }),
  computed: {
    ...mapState(["drawer"]),
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
    ...mapActions(["search", "auth/logout"]),
    async logoutHandler() {
      await this["auth/logout"]();
      router.push({ name: "login" });
    },
    onKeyDown() {
      this.onClickAppend();
    },
    onClickAppend() {
      if (this.show) {
        router.push({ name: "search" });
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
