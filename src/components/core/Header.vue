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
        v-show="
					link.text == 'Home' ||
						link.text == 'Sign Up' ||
						link.text == 'Log In' ||
						(link.text == 'Log Out' && started)
				"
        @click.stop="onClick(link)"
      />

      <v-dialog v-model="signUpDialog" persistent width="25%">
        <v-card>
          <v-toolbar flat>
            <v-toolbar-title class="text-uppercase">Sign Up</v-toolbar-title>
            <v-spacer />
            <v-btn icon @click="signUpDialog=false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-toolbar>
          <v-divider />
          <v-card-text class="pt-5">
            <v-text-field label="E-mail"></v-text-field>
            <v-text-field label="Password"></v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-btn block>Sign Up</v-btn>
          </v-card-actions>
          <v-divider />
          <v-card-actions class="d-flex justify-center">
            <v-btn text class="overline" @click="logIn">Log In</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-dialog v-model="logInDialog" persistent width="25%">
        <v-card>
          <v-toolbar flat>
            <v-toolbar-title class="text-uppercase">Log In</v-toolbar-title>
            <v-spacer />
            <v-btn icon @click="logInDialog=false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-toolbar>
          <v-divider />
          <v-card-text class="pt-5">
            <v-text-field label="E-mail"></v-text-field>
            <v-text-field label="Password"></v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-btn block>Log In</v-btn>
          </v-card-actions>
          <v-divider />
          <v-card-actions class="d-flex justify-center">
            <v-btn text class="overline" @click="signUp">Sign Up</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

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
    show: "",
    signUpDialog: false,
    logInDialog: false
  }),
  computed: {
    ...mapState(["links", "started"])
  },
  methods: {
    logIn() {
      this.signUpDialog = false;
      this.logInDialog = true;
    },
    signUp() {
      this.logInDialog = false;
      this.signUpDialog = true;
    },
    ...mapMutations([
      "toggleDrawer",
      "setSeries",
      "setError",
      "setLoading",
      "setStarted"
    ]),
    ...mapActions(["search", "createUser", "logoutUser"]),
    onClick(item) {
      switch (item.text) {
        case "Sign Up":
          this.signUpDialog = true;
          break;
        case "Log In":
          this.logInDialog = true;
          break;
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
