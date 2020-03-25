<template>
  <v-navigation-drawer v-model="drawer" app>
    <v-list>
      <v-list-item :to="links('Home').to">
        <v-list-item-content>
          <v-list-item-title v-text="links('Home').text" />
        </v-list-item-content>
      </v-list-item>
      <div v-show="!isLoggedIn">
        <v-list-item v-for="(link, i) in links('mid')" :key="i" :to="link.to">
          <v-list-item-content>
            <v-list-item-title v-text="link.text" />
          </v-list-item-content>
        </v-list-item>
      </div>
      <v-list-item v-show="isLoggedIn" @click="logout">
        <v-list-item-content>
          <v-list-item-title v-text="links('Log Out').text" />
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters({
      isLoggedIn: "auth/isLoggedIn",
      links: "GET_LINKS"
    }),
    drawer: {
      get() {
        return this.$store.state.drawer.drawer;
      },
      set(value) {
        this.SET_DRAWER(value);
      }
    }
  },
  methods: {
    ...mapMutations("drawer", ["SET_DRAWER"]),
    ...mapActions("auth", ["logout"])
  }
};
</script>