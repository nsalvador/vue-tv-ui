<template>
  <Form :page="page" />
</template>

<script>
export default {
  props: {
    page: {
      type: String
    }
  },
  components: {
    Form: () => import("../components/Form.vue")
  }
};
</script>