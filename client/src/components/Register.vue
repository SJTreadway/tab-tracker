<template>
  <div>
    <h1>Register</h1>

    <input
      type="email"
      name="email"
      v-model="email"
      placeholder="Email"
    />
    <br>
    <input
      type="password"
      name="password"
      placeholder="Password"
      v-model="password"
    />
    <br>
    <div class="error" v-html="error"></div>
    <button
      type="submit"
      @click="register">
      Register
    </button>
  </div>
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
    async register () {
      try {
        await AuthenticationService.register({
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
.error {
  color: red
}
</style>
