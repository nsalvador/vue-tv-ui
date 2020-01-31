<template>
  <v-container class="d-flex justify-center align-center fill-height">
    <v-form>
      <v-card elevation="24" width="320">
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
          <v-text-field
            clearable
            label="Email"
            v-model="email"
            required
            :error-messages="emailErrors"
            @input="$v.email.$touch()"
            @blur="$v.email.$touch()"
          />
          <v-text-field
            label="Password"
            :type="show ? 'text' : 'password'"
            clearable
            v-model="password"
            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="show=!show"
            @input="$v.password.$touch()"
            @blur="$v.password.$touch()"
            :error-messages="passwordErrors"
          />
        </v-card-text>
        <v-card-actions>
          <v-btn @click="submit">submit</v-btn>
          <v-spacer />
          <v-btn @click="clear">clear</v-btn>
        </v-card-actions>
      </v-card>
    </v-form>
  </v-container>
</template>

<script>
import { required, email, minLength } from "vuelidate/lib/validators";

export default {
  validations: {
    name: { required },
    email: { required, email },
    password: { required, minLength: minLength(3) }
  },
  data: () => ({
    title: "Sign Up",
    name: "",
    email: "",
    password: "",
    show: false,
    isSubmitted: false
  }),
  computed: {
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.required && errors.push("Name is required.");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Must be valid e-mail");
      !this.$v.email.required && errors.push("E-mail is required");
      return errors;
    },
    passwordErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.required && errors.push("Password is required");
      !this.$v.password.minLength &&
        errors.push("Password must be at least 3 characters long");
      return errors;
    }
  },
  methods: {
    clear() {
      this.$v.$reset();
      this.name = "";
      this.email = "";
      this.password = "";
    },
    submit() {
      if (!this.$v.$invalid) {
        this.isSubmitted = true;
        setTimeout(() => {
          this.isSubmitted = false;
          this.clear();
        }, 3000);
      }
    }
  }
};
</script>
