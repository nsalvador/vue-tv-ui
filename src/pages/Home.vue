<template>
  <div class="d-flex fill-height justify-center align-center">
    <v-card width="300">
      <v-card-title style="justify-content:center;">Vue TV App</v-card-title>
      <v-card-text class="text-center">Search and subscribe to your favorite TV Shows.</v-card-text>
      <!-- <v-divider />
      <v-card-actions>
        <v-btn @click="onClick('register')">sign up</v-btn>
        <v-spacer />
        <v-btn @click="onClick('login')">log in</v-btn>
      </v-card-actions>-->
    </v-card>
  </div>
</template>

<script>
import router from "../router";

export default {
  methods: {
    onClick(name) {
      router.push({ name });
    }
  }
};
</script>