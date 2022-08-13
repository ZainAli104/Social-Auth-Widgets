<template>
  <v-row align="center" justify="center">
    <v-col cols="12" sm="8" md="4" align="center">
      <v-card
        width="500"
        class="elevation-4 text-left"
        style="padding: 20px"
        color="white"
      >
        <v-card-title>Signup</v-card-title>
        <v-card-subtitle>Create your account</v-card-subtitle>
        <v-card-text>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
              label="Email"
              name="email"
              prepend-icon="mdi-account"
              type="email"
              required
              :rules="emailRules"
              v-model="email"
              validate-on-blur
            ></v-text-field>

            <v-text-field
              label="Password"
              name="password"
              prepend-icon="mdi-lock"
              type="password"
              :rules="passwordRules"
              v-model="password"
            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions class="text-center">
          <v-btn
            class="login-button"
            :disabled="!valid"
            @click="signIn"
            depressed
            large
            >SignUp</v-btn
          >
          <!-- <v-btn class="reset-button" @click="forgotPassword" depressed large
            >Forgot Password</v-btn
          > -->
        </v-card-actions>
        <p>
          If you already have an account
          <span
            @click="login"
            style="color: #99265f; font-weight: bold; cursor: pointer"
            >login here</span
          >
        </p>
        <v-divider class="my-3"></v-divider>
        <gmail-auth></gmail-auth>
        <FacebookAuth></FacebookAuth>
        <twitter-auth></twitter-auth>
        <github-auth></github-auth>
        <MicrosoftAuth></MicrosoftAuth>
        <YahooAuth></YahooAuth>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import GmailAuth from "../auth-widgets/GmailAuth.vue";
import FacebookAuth from "../auth-widgets/FacebookAuth.vue";
import TwitterAuth from "../auth-widgets/TwitterAuth.vue";
import GithubAuth from "../auth-widgets/GithubAuth.vue";
import {
  auth,
  createUserWithEmailAndPassword,
} from "../../plugins/firebase.js";
import MicrosoftAuth from "../auth-widgets/MicrosoftAuth.vue";
import YahooAuth from "../auth-widgets/YahooAuth.vue";

export default {
  data() {
    return {
      email: "",
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) =>
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          "E-mail must be valid",
      ],
      password: "",
      passwordRules: [
        (v) => !!v || "Password is required",
        (v) =>
          (!!v && v.length > 6) || "Password must be less than 6 characters",
      ],
      isLoading: false,
      valid: true,
    };
  },
  components: {
    GmailAuth,
    FacebookAuth,
    TwitterAuth,
    GithubAuth,
    MicrosoftAuth,
    YahooAuth,
  },
  methods: {
    login() {
      this.$router.push("/");
    },
    async signIn() {
      this.$refs.form.validate();

      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          this.email,
          this.password
        );
        const user = userCredential.user;
        this.$router.push("/home");
        return user;
      } catch (err) {
        this.error = err.message || "Failed to login, due to some error!";
      }
    },
    forgotPassword() {
      console.log("ok");
    },
  },
};
</script>

<style>
</style>