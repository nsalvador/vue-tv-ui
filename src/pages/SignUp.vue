<template>
  <v-container class="fill-height">
    <v-row justify="center">
      <v-col sm="8" cols="12" md="4">
        <v-form>
          <v-card elevation="24">
            <v-toolbar color="grey darken-4" flat>
              <v-toolbar-title v-text="title" />
            </v-toolbar>
            <v-card-text>
              <v-text-field type="text" label="Name" prepend-icon="mdi-account" />
              <v-text-field type="text" label="E-mail" prepend-icon="mdi-email" />
              <v-text-field label="Password" type="password" prepend-icon="mdi-lock" />
            </v-card-text>
            <v-card-actions>
              <v-spacer />
              <v-btn block>Sign Up</v-btn>
            </v-card-actions>
          </v-card>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    title: "Sign Up"
  })
};
</script>