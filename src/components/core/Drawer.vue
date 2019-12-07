<template>
  <v-navigation-drawer v-model="drawer" app temporary>
    <v-list>
      <v-list-item v-for="(link, i) in links" :key="i" :to="link.to">
        <v-list-item-content>
          <v-list-item-title v-text="link.text" />
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  computed: {
    ...mapGetters({
      links: "getLinks"
    }),
    drawer: {
      get() {
        return this.$store.state.drawer;
      },
      set(value) {
        this.setDrawer(value);
      }
    }
  },
  methods: {
    ...mapMutations(["setDrawer"])
  }
};
</script>