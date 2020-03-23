<template>
  <div style="max-width:744px;min-width:296px;margin:0 auto;" v-if="condition">
    <app-banner message="No subscriptions. Start a search." />
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Subscription",
  computed: {
    ...mapState("search", ["series"]),
    condition() {
      return this.series.series.length === 0;
    }
  },
  components: {
    AppBanner: () => import("../components/Banner.vue")
  }
};
</script>