<template>
  <v-dialog max-width="600px" persistent v-model="dialog">
    <template v-slot:activator="{ on }">
      <v-btn icon v-on="on" class="hidden-sm-and-down">
        <v-icon>mdi-information-outline</v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-card-title />
      <v-card-text>
        <slot name="info" />
      </v-card-text>
      <v-divider />
      <v-card-actions>
        <v-btn text @click="dialog=false">Close</v-btn>
        <v-spacer />
        <v-btn text @click="subscribeHandler">Subscribe</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import Show from "../../models/show";
import { mapActions } from "vuex";

export default {
  props: {
    show: {
      type: Object
    }
  },
  data: () => ({
    dialog: false
  }),
  methods: {
    ...mapActions({
      subscribe: "show/subscribeToShow"
    }),
    async subscribeHandler() {
      try {
        this.dialog = false;
        const show = new Show(this.show);
        await this.subscribe(show);
        alert("success");
      } catch (error) {
        alert("error:", JSON.stringify(error, null, 2));
      }
    }
  }
};
</script>