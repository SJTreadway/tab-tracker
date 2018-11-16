<template>
  <v-layout row>
    <v-flex xs6 offset-xs3>
      <Panel title="Register">
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
            @click="register">
            Register
          </v-btn>
        </div>
      </Panel>
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from '@/components/Panel'
import AuthenticationService from '@/services/AuthenticationService'

export default {
  components: {
    Panel
  },
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
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        this.error = null
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
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

</style>
