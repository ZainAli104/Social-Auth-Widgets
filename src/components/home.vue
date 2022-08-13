<template>
  <div>
    <h2>Welcome to home page</h2>
    <v-card-actions class="text-center">
      <v-btn class="login-button" @click="logOut" depressed large>Logout</v-btn>
    </v-card-actions>
  </div>
</template>

<script>
export default {
  methods: {
    logOut() {
      this.$router.push("/");
    },
  },
};
</script>