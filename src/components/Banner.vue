<template>
  <v-container class="pb-0">
    <v-row>
      <v-col class="py-0">
        <v-banner v-if="error">{{ error.name }}: {{ error.message }}</v-banner>
        <v-banner v-else>{{ series.results }} result(s) for '{{ series.name }}'</v-banner>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Banner",
  computed: {
    ...mapState(["error", "series"])
  }
};
</script>