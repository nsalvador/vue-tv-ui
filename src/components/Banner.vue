<template>
  <v-container>
    <v-banner v-if="banner.error">{{ banner.error.name }}: {{ banner.error.message }}</v-banner>
    <v-banner
      v-else-if="Object.keys(banner.series).length!==0"
    >{{ banner.series.results }} result(s) for '{{ banner.show }}'</v-banner>
  </v-container>
</template>

<script>
export default {
  props: {
    banner: Object
  }
};
</script>