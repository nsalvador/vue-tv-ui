<template>
  <v-footer padless>
    <v-container class="pa-0">
      <v-card flat class="transparent">
        <v-card-text class="white--text text-center py-3" v-html="text" />
      </v-card>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
  data: () => ({
    text: `&copy; ${new Date().getFullYear()} by Nigel Salvador, Full Stack Web Developer. Proudly build with <strong><a target='_blank' href='https://vuejs.org/'>Vue.js</a></strong> &amp; <strong><a target='_blank' href='https://vuetifyjs.com/en/'>Vuetify</a></strong>`
  })
};
</script>