<template>
  <v-navigation-drawer v-model="drawer" app>
    <v-list>
      <v-list-item :to="links[0].to">
        <v-list-item-content>
          <v-list-item-title v-text="links[0].text" />
        </v-list-item-content>
      </v-list-item>
      <div v-show="!isLoggedIn">
        <v-list-item v-for="(link, i) in links.slice(1, 3)" :key="i" :to="link.to">
          <v-list-item-content>
            <v-list-item-title v-text="link.text" />
          </v-list-item-content>
        </v-list-item>
      </div>
      <v-list-item v-show="isLoggedIn" @click="logout">
        <v-list-item-content>
          <v-list-item-title v-text="links[links.length-1].text" />
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapState(["links"]),
    ...mapGetters("auth", ["isLoggedIn"]),
    drawer: {
      get() {
        return this.$store.state.drawer;
      },
      set(value) {
        this.SET_DRAWER(value);
      }
    }
  },
  methods: {
    ...mapMutations(["SET_DRAWER"]),
    ...mapActions({ logout: "auth/logout" })
  }
};
</script>