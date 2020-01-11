<template>
  <v-navigation-drawer v-model="drawer" app>
    <v-list>
      <v-list-item
        v-for="(link, i) in links"
        :key="i"
        :to="link.to"
        v-show="showButton(link)"
        @click.stop="onClick(link)"
      >
        <v-list-item-content>
          <v-list-item-title v-text="link.text" />
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import showButtonMixin from "../../mixins/showButtonMixin";
import onClickMixin from "../../mixins/onClickMixin";

export default {
  name: "Drawer",
  mixins: [showButtonMixin, onClickMixin],
  computed: {
    ...mapState(["links", "started"]),
    drawer: {
      get() {
        return this.$store.state.drawer;
      },
      set(value) {
        this.setDrawer(value);
      }
    },
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
      "setDrawer",
      "setDialog",
      "setDialogTitle",
      "toggleDrawer"
    ])
  }
};
</script>