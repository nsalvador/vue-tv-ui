<template>
  <v-dialog persistent width="400" v-model="dialog">
    <v-card>
      <v-toolbar flat>
        <v-toolbar-title class="text-uppercase" v-text="title" />
        <v-spacer />
        <v-btn icon @click="dialog=false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>
      <v-divider />
      <v-card-text class="pt-5">
        <v-text-field label="E-mail"></v-text-field>
        <v-text-field label="Password"></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-btn block v-text="title" />
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "Sign-Up-Dialog",
  computed: {
    ...mapState({ title: "dialogTitle" }),
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
    ...mapMutations(["setDialog"])
  }
};
</script>