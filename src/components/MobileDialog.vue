<template>
  <v-dialog fullscreen hide-overlay transition="dialog-bottom-transition" v-model="dialog">
    <template v-slot:activator="{ on }">
      <v-btn icon v-on="on" class="hidden-md-and-up">
        <v-icon>mdi-information-outline</v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-card-actions>
        <v-btn text @click="dialog=false">Close</v-btn>
        <v-spacer></v-spacer>
        <v-btn text>Subscribe</v-btn>
      </v-card-actions>
      <v-divider></v-divider>
      <v-card-text class="pa-6">
        <slot name="info" />
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data: () => ({
    dialog: false
  })
};
</script>