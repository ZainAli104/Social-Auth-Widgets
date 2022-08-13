<template>
  <v-btn
    class="login-button my-2 pa-2"
    width="100%"
    depressed
    large
    @click="twitterLogin"
  >
    <v-icon color="blue" large>mdi-twitter</v-icon>&nbsp; Login with Twitter
  </v-btn>
</template>

<script>
import {
  auth,
  signInWithPopup,
  TwitterAuthProvider,
} from "../../plugins/firebase.js";

export default {
  methods: {
    twitterLogin() {
      const provider = new TwitterAuthProvider();
      signInWithPopup(auth, provider)
        .then((result) => {
          // The signed-in user info.
          const user = result.user;

          // This gives you a Facebook Access Token. You can use it to access the Facebook API.
          const credential = TwitterAuthProvider.credentialFromResult(result);
          const accessToken = credential.accessToken;
          console.log(accessToken, user);
          this.$router.push("/home");
        })
        .catch((error) => {
          console.log(error.message, "error");
        });
    },
  },
};
</script>