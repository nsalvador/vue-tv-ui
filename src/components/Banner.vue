<template>
  <v-container v-show="Object.keys(series).length!==0">
    <v-row>
      <v-col>
        <v-banner>{{ results }} result(s) for '{{ name }}'</v-banner>
      </v-col>
    </v-row>
    <!-- <v-banner v-if="banner.error">{{ banner.error.name }}: {{ banner.error.message }}</v-banner>
    -->
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Banner",
  computed: {
    ...mapGetters({
      results: "getResults",
      series: "getSeries",
      name: "getName"
    })
  }
};
</script>