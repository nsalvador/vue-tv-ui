<template>
  <v-card>
    <v-responsive>
      <v-img :src="getImage(show)" aspect-ratio="0.68" contain class="img" />
    </v-responsive>
    <v-card-actions>
      <span class="text-truncate" :title="show.seriesName">{{ show.seriesName }}</span>
      <v-spacer />
      <app-dialog :show="show">
        <template slot="info">
          <slot name="info" />
        </template>
      </app-dialog>
    </v-card-actions>
  </v-card>
</template>

<script>
const baseURL = "https://tv-calendar-assets.s3.us-east-2.amazonaws.com/";
const noImageURL = "https://via.placeholder.com/680x1000.png?text=No+Image";

export default {
  props: ["show"],
  components: {
    AppDialog: () => import("./Dialog.vue")
  },
  methods: {
    getImage(show) {
      return show.posterKey ? `${baseURL}${show.posterKey}` : noImageURL;
    }
  }
};
</script>
