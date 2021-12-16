<!--
  App Hello world avec une App Bar
-->

<!--

<v-app>
  <v-app-bar app></v-app-bar>
  <v-main>
    <v-container>
      Hello World
    </v-container>
  </v-main>
</v-app>

-->

<template>
  <v-app>
    <v-app-bar
      app
      elevation="0"
      class="font-weight-light headline text-uppercase">

      <v-img
          :src="require('../assets/rose.png')"
          class="mr-3"
          contain
          max-width="40"
          />

      <span>Karolina</span>

      <v-spacer></v-spacer>

			<router-link to="/" tag="v-btn">
        <v-btn
        small
        text
        rounded
        class="mr-1">
          Home
					<v-icon class="ml-2">mdi-home-circle</v-icon>
        </v-btn>
      </router-link>

      <router-link to="/vue" tag="v-btn">
        <v-btn
        small
        text
        rounded
        class="mr-1">
          Vue
					<v-icon class="ml-2">mdi-home-circle</v-icon>
        </v-btn>
      </router-link>

      <router-link to="/vuetify" tag="v-btn">
        <v-btn
        small
        text
        rounded
        class="mr-1">
          Vuetify
					<v-icon class="ml-2">mdi-home-circle</v-icon>
        </v-btn>
      </router-link>

      <router-link to="/calendar" tag="v-btn">
        <v-btn
        small
        text
        rounded
        class="mr-1">
        Calendar
					<v-icon class="ml-2">mdi-layers</v-icon>
        </v-btn>
      </router-link>

      <v-spacer></v-spacer>

      <v-btn
        small
        href="http://localhost:8080/"
        target="_blank"
        text
        rounded
        class="mr-1">
        <span>Again</span>
        <v-icon class="ml-2">mdi-open-in-new</v-icon>
      </v-btn>

    </v-app-bar>
    <v-main>
    <v-container fluid>
      <router-view></router-view>
    </v-container>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>



