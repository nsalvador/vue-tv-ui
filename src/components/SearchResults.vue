<template>
  <v-container>
    <v-row v-show="pages>1">
      <v-col>
        <v-pagination :length="pages" @input="next" v-model="page"></v-pagination>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="pa-1" v-for="(show, index) in series" :key="index" cols="6" sm="3">
        <app-image :show="show" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import appImage from "./Image.vue";

export default {
  name: "SearchResults",
  data: () => ({
    page: null
  }),
  methods: {
    next(page) {
      this.$emit("next", { show: this.show, page });
    }
  },
  mounted() {
    this.page = this.seriesObject.page || 1;
  },
  computed: {
    series() {
      return this.seriesObject.series || [];
    },
    pages() {
      return this.seriesObject.pages || 0;
    }
  },
  props: {
    seriesObject: Object,
    show: String
  },
  components: {
    appImage
  }
};
</script>
