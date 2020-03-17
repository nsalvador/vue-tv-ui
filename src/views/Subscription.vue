<template>
  <div style="max-width:744px;min-width:296px;margin:0 auto;">
    <v-container>
      <v-row>
        <v-col>
          <v-banner v-show="condition">No subscriptions. Start a search.</v-banner>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  mounted() {
    this.GET_SUBSCRIPTIONS();
  },
  computed: {
    ...mapState("search", ["series"]),
    condition() {
      return this.series.length === 0;
    }
  },
  methods: {
    ...mapActions("search", ["GET_SUBSCRIPTIONS"])
  }
};
</script>