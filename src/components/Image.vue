<template>
  <v-card>
    <v-responsive>
      <v-img :src="getImage(show)" aspect-ratio="0.68" contain class="img" />
    </v-responsive>
    <v-card-actions>
      <span class="text-truncate" :title="show.seriesName">{{ show.seriesName }}</span>
      <v-spacer />
      <v-btn icon class="px-0 hidden-sm-and-down" @click="dialog1=true">
        <v-icon>mdi-information-outline</v-icon>
      </v-btn>
      <v-btn icon class="px-0 hidden-md-and-up" @click="dialog2=true">
        <v-icon>mdi-information-outline</v-icon>
      </v-btn>
    </v-card-actions>
    <v-dialog v-model="dialog1" max-width="500px" class="hidden-sm-and-down">
      <v-card>
        <v-toolbar>
          <v-btn icon @click="dialog1=false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title v-text="show.seriesName"></v-toolbar-title>
        </v-toolbar>
      </v-card>
    </v-dialog>
    <v-dialog
      class="hidden-md-and-up"
      fullscreen
      transition="dialog-bottom-transition"
      v-model="dialog2"
    >
      <v-card>
        <v-toolbar>
          <v-btn icon @click="dialog2=false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title v-text="show.seriesName"></v-toolbar-title>
        </v-toolbar>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script>
const baseURL = "https://tv-calendar-assets.s3.us-east-2.amazonaws.com/";
const noImageURL = "https://via.placeholder.com/680x1000.png?text=No+Image";

export default {
  props: ["show"],
  data: () => ({
    dialog1: false,
    dialog2: false
  }),
  methods: {
    getImage(show) {
      return show.posterKey ? `${baseURL}${show.posterKey}` : noImageURL;
    }
  }
};
</script>
