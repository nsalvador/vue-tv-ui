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
        v-show="link.text=='Home' || (link.text=='Start' && !started) || (link.text=='Finish' && started)"
        @click="onClick(link)"
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

export default {
  name: "Header",
  data: () => ({
    show: ""
  }),
  computed: {
    ...mapState(["links", "started"])
  },
  methods: {
    ...mapMutations([
      "toggleDrawer",
      "setSeries",
      "setError",
      "setLoading",
      "setStarted"
    ]),
    ...mapActions(["search", "createUser", "logoutUser"]),
    onClick(item) {
      if (item.text === "Start") {
        this.createUser({
          url: "/users",
          method: "post",
          data: {
            email: "nigelsalvador@gmail.com",
            password: "mrch0305"
          }
        });
      }
      if (item.text === "Finish") {
        const token = sessionStorage.getItem("token");
        this.logoutUser({
          headers: {
            Authorization: `Bearer ${token}`
          },
          url: "/users/logout",
          method: "post"
        });
      }
    },
    onKeyDown() {
      this.onClickAppend();
    },
    onClickAppend() {
      if (this.$route.name == "home") {
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
};
</script>
