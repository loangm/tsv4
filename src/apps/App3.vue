<!--
  App Hello world avec une ToolBar
-->

<template>
  <v-app>

    <v-toolbar
      elevation="24"
      outlined
      app
      dark
      prominent
      src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">

      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="ml-4 font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>


      <v-toolbar-items>


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

      <router-link to="/hello" tag="v-btn">
        <v-btn
        small
        text
        rounded
        class="mr-1">
        Hello
					<v-icon class="ml-2">mdi-layers</v-icon>
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

      </v-toolbar-items>

      <v-btn icon>
        <v-icon>mdi-export</v-icon>
      </v-btn>

            <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>

    </v-toolbar>

    <v-content>
      <router-view/>
    </v-content>

  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {
  },
  data() {
    return {
      //
    };
  }
};

</script>