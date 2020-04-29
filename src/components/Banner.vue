<template>
  <v-container class="pb-0">
    <v-row>
      <v-col>
        <v-banner single-line>
          {{ message }}
          <template v-slot:actions>
            <slot name="buttons" />
          </template>
        </v-banner>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Banner",
  props: {
    message: {
      type: String
    }
  }
};
</script>