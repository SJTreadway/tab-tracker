<template>
  <v-toolbar fixed dark class="cyan">
    <v-toolbar-title class="mr-4">
      <v-btn flat dark @click="navigateTo({ name: 'home' })">
        TabTracker
      </v-btn>
    </v-toolbar-title>

    <v-toolbar-items>
      <v-btn flat dark>
        Browse
      </v-btn>
    </v-toolbar-items>

    <v-spacer></v-spacer>

    <v-toolbar-items v-if="!$store.state.isUserLoggedIn">
      <v-btn flat dark @click="navigateTo({ name: 'login' })">
        Login
      </v-btn>
    </v-toolbar-items>

    <v-toolbar-items v-if="!$store.state.isUserLoggedIn">
      <v-btn flat dark @click="navigateTo({ name: 'register' })">
        Sign Up
      </v-btn>
    </v-toolbar-items>

    <v-toolbar-items v-if="$store.state.isUserLoggedIn">
      <v-btn flat dark @click="logout">
        Logout
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    },
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({ name: 'home' })
    }
  }
}
</script>

<style scoped>
</style>
