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
        v-show="showButton(link)"
        @click.stop="onClick(link)"
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
        @click:append="onClickAppend"
        @keydown.enter="onKeyDown"
      />
    </v-container>
  </v-app-bar>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
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
    ...mapState(["links", "started", "drawer"]),
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
    ...mapActions(["search", "createUser", "logoutUser"]),
    onKeyDown() {
      this.onClickAppend();
    },
    onClickAppend() {
      if (this.show) {
        if (this.$route.name == "home" || this.$route.name == "sign-up") {
          router.push({ name: "search" });
        }
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
