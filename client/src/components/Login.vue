<template>
  <v-layout row>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>
            Login
          </v-toolbar-title>
        </v-toolbar>

        <div class="pl-4 pr-4 pt-2 pb-2">
          <v-text-field
            type="email"
            label="Email"
            v-model="email"
          />
          <br>
          <v-text-field
            type="password"
            label="Password"
            v-model="password"
          />
          <br>
          <div class="custom-error" v-html="error"></div>
          <v-btn
            class="cyan"
            dark
            type="submit"
            @click="login">
            Login
          </v-btn>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
      try {
        await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.error = null
      } catch (err) {
        this.error = err.response.data.error
      }
    }
  },
  mounted () {
  }
}
</script>

<style scoped>
.custom-error {
  color: red;
}
</style>
