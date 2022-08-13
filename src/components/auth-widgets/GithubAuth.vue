<template>
  <v-btn
    class="login-button my-2 pa-2"
    width="100%"
    depressed
    large
    @click="githubLogin"
  >
    <v-icon color="black" large>mdi-github</v-icon>&nbsp; Login with Github
  </v-btn>
</template>

<script>
import {
  auth,
  signInWithPopup,
  GithubAuthProvider,
} from "../../plugins/firebase.js";

export default {
  methods: {
    githubLogin() {
      const provider = new GithubAuthProvider();
      signInWithPopup(auth, provider)
        .then((result) => {
          // The signed-in user info.
          const user = result.user;

          // This gives you a Facebook Access Token. You can use it to access the Facebook API.
          const credential = GithubAuthProvider.credentialFromResult(result);
          const accessToken = credential.accessToken;
          console.log(accessToken, user);
          this.$router.push("/home");
        })
        .catch((error) => {
          console.log(error.message);
        });
    },
  },
};
</script>