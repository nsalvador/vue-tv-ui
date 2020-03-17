<template>
  <div style="max-width:744px;min-width:296px;margin:0 auto;" v-if="condition">
    <app-banner message="No subscriptions. Start a search." />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Subscription",
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
  },
  components: {
    AppBanner: () => import("../components/Banner.vue")
  }
};
</script>