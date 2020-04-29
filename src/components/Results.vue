<template>
  <v-container class="pt-0">
    <v-row dense>
      <v-col v-for="(show, index) in shows" :key="index" cols="6" sm="4" lg="4">
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
export default {
  name: "Results",
  props: {
    shows: {
      type: Array
    }
  },
  components: {
    AppImage: () => import("./Image.vue"),
    AppInfo: () => import("./Info.vue")
  }
};
</script>
