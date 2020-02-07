<template>
  <div class="d-flex fill-height justify-center align-center">
    <v-card width="300">
      <v-toolbar color="grey darken-4" flat>
        <v-toolbar-title>{{ page }}</v-toolbar-title>
      </v-toolbar>
      <v-card-text class="pb-0">
        <v-text-field
          clearable
          label="Name"
          v-model="name"
          required
          :error-messages="nameErrors"
          @input="$v.name.$touch()"
          @blur="$v.name.$touch()"
          v-show="page=='Sign Up'"
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
      <v-card-actions class="px-4 pb-4">
        <v-btn>{{page}}</v-btn>
        <v-spacer />
        <v-btn @click="clear">clear</v-btn>
      </v-card-actions>
      <v-divider />
      <v-card-text class="text-center" v-if="page=='Sign Up'">
        Already have an account?
        <a @click="onClickHandler">Log In</a>
      </v-card-text>
      <v-card-text class="text-center" v-else-if="page=='Log In'">
        Don't have an account?
        <a @click="onClickHandler">Sign Up</a>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { required, email, minLength } from "vuelidate/lib/validators";
import router from "../router";

export default {
  props: {
    page: {
      type: String
    }
  },
  validations: {
    name: { required },
    email: { required, email },
    password: { required, minLength: minLength(3) }
  },
  data: () => ({
    show: false,
    name: "",
    email: "",
    password: ""
  }),

  computed: {
    // cardDisplay() {
    //   let output;
    //   switch (this.page) {
    //     case "Sign Up":
    //       output =
    //         "Already have an account? <a @click='onClickHandler'>Log In</a>";
    //       break;
    //     case "Log In":
    //       output =
    //         "Don't have an account? <a @click='onClickHandler'>Sign Up</a>";
    //   }
    //   return output;
    // },
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
    onClickHandler() {
      let name;
      switch (this.page) {
        case "Sign Up":
          name = "login";
          break;
        case "Log In":
          name = "sign-up";
          break;
      }
      router.push({ name });
    },
    clear() {
      this.$v.$reset();
      this.name = "";
      this.email = "";
      this.password = "";
    }
  }
};
</script>