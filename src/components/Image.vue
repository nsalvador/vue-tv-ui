<template>
  <v-card>
    <v-responsive>
      <v-img :src="GET_IMAGE(show)" aspect-ratio="0.68" contain class="img" />
    </v-responsive>
    <v-card-actions class="py-0">
      <v-checkbox v-model="selection" :value="show.seriesName"></v-checkbox>
      <span class="text-truncate" :title="show.seriesName">{{ show.seriesName }}</span>
      <v-spacer />
      <app-dialog :show="show">
        <template v-slot:info>
          <slot name="info" />
        </template>
      </app-dialog>
    </v-card-actions>
  </v-card>
</template>

<script>
const noImageURL = "https://via.placeholder.com/680x1000.png?text=No+Image";
import { mapMutations } from "vuex";

export default {
  props: ["show"],
  components: {
    AppDialog: () => import("./dialog/Dialog")
  },
  computed: {
    selection: {
      get() {
        return this.$store.state.selection;
      },
      set(value) {
        this.SET_SELECTION(value);
      }
    }
  },
  methods: {
    ...mapMutations(["SET_SELECTION"]),
    GET_IMAGE(show) {
      return show.posterUrl ? show.posterUrl : noImageURL;
    }
  }
};
</script>
