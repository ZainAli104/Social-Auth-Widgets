<template>
  <v-btn
    class="login-button my-2 pa-2"
    width="100%"
    depressed
    large
    @click="googleLogin"
  >
    <v-icon color="red" large>mdi-gmail</v-icon>&nbsp; Login with Gmail
  </v-btn>
</template>
<script>
import {
    auth,
  signInWithPopup,
  GoogleAuthProvider
} from '../../plugins/firebase.js'

export default {
    methods: {
    googleLogin() {
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider)
        .then((result) => {
          // The signed-in user info.
          const user = result.user;

          // This gives you a Facebook Access Token. You can use it to access the Facebook API.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const accessToken = credential.accessToken;
          console.log(accessToken, user);
          this.$router.push("/home");
        })
        .catch((error) => {
          console.log(error.message, "error");
        });
    },
    }
}
</script>