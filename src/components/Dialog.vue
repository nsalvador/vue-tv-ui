<template>
  <div>
    <app-dialog-fullscreen>
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
  components: {
    AppDialogFullscreen: () => import("./FullscreenDialog.vue"),
    AppDialogMobile: () => import("./MobileDialog.vue")
  }
};
</script>
