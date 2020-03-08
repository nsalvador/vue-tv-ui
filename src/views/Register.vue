<template>
  <Form :page="page" />
</template>

<script>
export default {
  data: () => ({
    page: "Register"
  }),
  components: {
    Form: () => import("../components/Form.vue")
  }
};
</script>