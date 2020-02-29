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
          v-model="user.name"
          required
          :error-messages="nameErrors"
          @input="$v.user.name.$touch()"
          @blur="$v.user.name.$touch()"
          v-show="page=='Register'"
        />
        <v-text-field
          clearable
          label="Email"
          v-model="user.email"
          required
          :error-messages="emailErrors"
          @input="$v.user.email.$touch()"
          @blur="$v.user.email.$touch()"
        />
        <v-text-field
          label="Password"
          :type="show ? 'text' : 'password'"
          clearable
          v-model="user.password"
          :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="show=!show"
          @input="$v.user.password.$touch()"
          @blur="$v.user.password.$touch()"
          :error-messages="passwordErrors"
        />
      </v-card-text>
      <v-card-actions class="px-4 pb-4">
        <v-btn @click="submitHandler">{{page}}</v-btn>
        <v-spacer />
        <v-btn @click="clear">clear</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import { required, email, minLength } from "vuelidate/lib/validators";
import { mapActions, mapMutations } from "vuex";
import User from "../models/user";

export default {
  props: {
    page: {
      type: String
    }
  },
  validations: {
    user: {
      name: { required },
      email: { required, email },
      password: { required, minLength: minLength(3) }
    }
  },
  data: () => ({
    show: false,
    user: new User()
  }),
  computed: {
    nameErrors() {
      const errors = [];
      if (!this.$v.user.name.$dirty) return errors;
      !this.$v.user.name.required && errors.push("Name is required.");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.user.email.$dirty) return errors;
      !this.$v.user.email.email && errors.push("Must be valid e-mail");
      !this.$v.user.email.required && errors.push("E-mail is required");
      return errors;
    },
    passwordErrors() {
      const errors = [];
      if (!this.$v.user.password.$dirty) return errors;
      !this.$v.user.password.required && errors.push("Password is required");
      !this.$v.user.password.minLength &&
        errors.push("Password must be at least 3 characters long");
      return errors;
    }
  },
  methods: {
    ...mapActions("auth", ["register"]),
    ...mapMutations(["setError"]),
    async submitHandler() {
      if (!this.$v.$invalid) {
        try {
          await this.register(this.user);
          this.$router.push({ name: "subscription" });
        } catch (e) {
          this.setError(e);
        }
      }
    },
    clear() {
      this.$v.$reset();
      this.user = new User();
    }
  }
};
</script>