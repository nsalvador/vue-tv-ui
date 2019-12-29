<template>
  <v-footer padless>
    <v-container class="d-flex justify-center pa-0">
      <v-card flat class="transparent">
        <v-card-text class="text-center overline" v-html="text" />
      </v-card>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
  data: () => ({
    text: `Copyright &copy; ${new Date().getFullYear()}. Nigel Salvador, Full Stack Web Developer<br/>Proudly build with <a target='_blank' href='https://vuejs.org/'>Vue.js</a> &amp; <a target='_blank' href='https://vuetifyjs.com/en/'>Vuetify</a>`
  })
};
</script>