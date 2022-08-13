<template>
  <v-btn
    class="login-button my-2 pa-2"
    width="100%"
    depressed
    large
    @click="facebookLogin"
  >
    <v-icon color="blue" large>mdi-facebook</v-icon>&nbsp; Login with FaceBook
  </v-btn>
</template>

<script>
import {
  auth,
  signInWithPopup,
  FacebookAuthProvider,
} from "../../plugins/firebase.js";

export default {
  methods: {
    facebookLogin() {
      const provider = new FacebookAuthProvider();
      signInWithPopup(auth, provider)
        .then((result) => {
          // The signed-in user info.
          const user = result.user;

          // This gives you a Facebook Access Token. You can use it to access the Facebook API.
          const credential = FacebookAuthProvider.credentialFromResult(result);
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