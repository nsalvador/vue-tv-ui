<template>
  <v-container class="d-flex justify-center align-center fill-height">
    <v-form>
      <v-card elevation="24" width="400">
        <v-toolbar color="grey darken-4" flat>
          <v-toolbar-title v-text="title" />
        </v-toolbar>
        <v-card-text>
          <v-text-field
            clearable
            label="Name"
            v-model="name"
            required
            :error-messages="nameErrors"
            @input="$v.name.$touch()"
            @blur="$v.name.$touch()"
          />
        </v-card-text>
        <v-card-actions>
          <v-btn @click="clear">clear</v-btn>
        </v-card-actions>
      </v-card>
    </v-form>
  </v-container>
</template>

<script>
import { required } from "vuelidate/lib/validators";

export default {
  validations: {
    name: { required }
  },
  data: () => ({
    title: "Sign Up",
    name: ""
  }),
  computed: {
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.required && errors.push("Name is required.");
      return errors;
    }
  },
  methods: {
    clear() {
      this.$v.$reset();
      this.name = "";
    }
  }
};
</script>
