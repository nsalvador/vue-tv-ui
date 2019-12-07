<template>
  <v-container>
    <v-row dense>
      <v-col v-for="(show, index) in series.series" :key="index" cols="6" sm="3" lg="2">
        <app-image :show="show" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import AppImage from "./Image.vue";
import { mapGetters } from "vuex";

export default {
  name: "Results",
  components: {
    AppImage
  },
  computed: {
    ...mapGetters({
      series: "getSeries"
    })
  }
};
</script>
