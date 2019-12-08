<template>
  <v-footer padless>
    <v-container>
      <v-layout wrap>
        <v-flex>
          <v-card
            v-for="(item, i) in footer"
            :key="i"
            class="text-center transparent pa-0"
            v-html="item"
            tile
            flat
          ></v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    footer: [
      `&copy; ${new Date().getFullYear()} &mdash; Nigel Salvador, Full Stack Web Developer`,
      "Proudly built with <strong>Vue.js</strong> &amp; <strong>Vuetify</strong>"
    ]
  })
};
</script>