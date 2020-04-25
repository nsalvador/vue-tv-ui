<template>
  <v-snackbar v-model="snackbar" :timeout="0" left color="red">
    {{ message }}
    <v-btn @click="snackbar=false" icon text>
      <v-icon>mdi-close</v-icon>
    </v-btn>
  </v-snackbar>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  methods: {
    ...mapMutations(["SET_SNACKBAR"])
  },
  computed: {
    ...mapState({
      message: state => state.message
    }),
    snackbar: {
      get() {
        return this.$store.state.snackbar;
      },
      set(value) {
        this.SET_SNACKBAR(value);
      }
    }
  }
};
</script>