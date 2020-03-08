<template>
  <Form :page="page" />
</template>

<script>
export default {
  data: () => ({
    page: "Log In"
  }),
  components: {
    Form: () => import("../components/Form.vue")
  }
};
</script>