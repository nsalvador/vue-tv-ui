<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-pagination :length="pages" v-show="pages>1"></v-pagination>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="(show, index) in seriesObject.series" :key="index" cols="3">
        <app-image :show="show" />
      </v-col>
    </v-row>
  </v-container>
  <!-- 
    <v-pagination :length="pages" v-model="page" v-show="pages>1" @input="next"></v-pagination>
  -->
</template>

<script>
import appImage from "../Image.vue";

export default {
  computed: {
    pages() {
      return this.seriesObject.pages;
    }
  },
  props: {
    seriesObject: Object
  },
  components: {
    appImage
  }
};
</script>
