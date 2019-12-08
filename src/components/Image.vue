<template>
  <v-card tile>
    <v-responsive>
      <v-img :src="getImage(show)" aspect-ratio="0.68" contain class="img"></v-img>
    </v-responsive>
    <v-card-actions>
      <span class="text-truncate" :title="show.seriesName">{{ show.seriesName }}</span>
      <v-spacer />
      <v-btn icon class="px-0">
        <v-icon>mdi-information-outline</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    baseURL: "https://tv-calendar-assets.s3.us-east-2.amazonaws.com/",
    noImageURL: "https://via.placeholder.com/680x1000.png?text=No+Image"
  }),
  props: ["show"],
  methods: {
    getImage(show) {
      return show.posterKey
        ? `${this.baseURL}${show.posterKey}`
        : this.noImageURL;
    }
  }
};
</script>
