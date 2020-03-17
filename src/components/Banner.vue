<template>
  <v-container class="pb-0">
    <v-row>
      <v-col>
        <v-banner>{{ message }}</v-banner>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Banner",
  props: {
    message: {
      type: String
    }
  }
};
</script>