<template>
  <v-container class="pt-0">
    <v-row dense>
      <v-col v-for="(show, index) in series.series" :key="index" cols="6" sm="3" lg="2">
        <app-image :show="show">
          <template slot="info">
            <app-info :show="show" />
          </template>
        </app-image>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Results",
  components: {
    AppImage: () => import("./Image.vue"),
    AppInfo: () => import("./Info.vue")
  },
  computed: {
    ...mapGetters({
      series: "search/GET_SERIES"
    })
  }
};
</script>
