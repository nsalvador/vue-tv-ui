<template>
  <div>
    <app-dialog-fullscreen :show="show">
      <template slot="info">
        <slot name="info" />
      </template>
    </app-dialog-fullscreen>
    <app-dialog-mobile>
      <template slot="info">
        <slot name="info" />
      </template>
    </app-dialog-mobile>
  </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Object
    }
  },
  components: {
    AppDialogFullscreen: () => import("./Fullscreen.vue"),
    AppDialogMobile: () => import("./Mobile.vue")
  }
};
</script>
