<template>
  <v-app>
    <v-app-bar extension-height="48" height="64" model-value>
            <v-btn ripple to="/">Home</v-btn>
            <v-btn ripple to="/about">About</v-btn>
        </v-app-bar><v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
}
</script>
