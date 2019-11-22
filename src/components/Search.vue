<template>
  <v-container>
    <v-text-field
      outlined
      placeholder="Search..."
      append-icon="mdi-magnify"
      @keydown.enter="search"
      v-model="show"
      @click:append="search"
    ></v-text-field>
  </v-container>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      show: ""
    };
  },
  methods: {
    search() {
      this.$emit("search", this.show);
    }
  }
};
</script>