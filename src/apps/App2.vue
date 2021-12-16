<!--
  App avec les palettes de composants
-->

<template>
<v-app>
  <v-system-bar
    app
    dark
    color="red"
    height="60">
    <span>System bar</span>
    <v-spacer></v-spacer>
    <v-icon>mdi-wifi-strength-4</v-icon>
    <v-icon>mdi-signal-cellular-outline</v-icon>
    <v-icon>mdi-battery</v-icon>
    <span>12:30</span>
  </v-system-bar>
  <v-app-bar 
    app
    dark
    color="blue">
    <span class="headline">App bar - Karo et Lo</span>
  </v-app-bar>
  <v-navigation-drawer
    app
    dark
    color="green">
    <span>Navigation drawer</span>
  </v-navigation-drawer>
  <v-main>
    <v-container 
      fluid>
      <router-view></router-view>
    </v-container>
  </v-main>
  <v-footer 
    app
    dark
    color="orange"
    height="60">
    <span>Footer bar</span>
    <v-spacer></v-spacer>
    <v-btn
      light
      color="yellow"
      @click="active = !active">
      Toggle Navigation
    </v-btn>
  </v-footer>
  <v-bottom-navigation
    app
    v-model="value"
    :background-color="color"
    :input-value="active"
    dark
    shift>
    <v-btn>
      <span>Video</span>
      <v-icon>mdi-television-play</v-icon>
    </v-btn>
    <v-btn>
      <span>Music</span>
      <v-icon>mdi-music-note</v-icon>
    </v-btn>
    <v-btn>
      <span>Book</span>
      <v-icon>mdi-book</v-icon>
    </v-btn>
    <v-btn>
      <span>Image</span>
      <v-icon>mdi-image</v-icon>
    </v-btn>
  </v-bottom-navigation>
</v-app>
</template>

<script>
  export default {
    name:'App2',
    data () {
      return {
        value: 1,
        active: true,
      }
    },
    computed: {
      color () {
        switch (this.value) {
          case 0: return 'blue-grey'
          case 1: return 'teal'
          case 2: return 'brown'
          case 3: return 'indigo'
          default: return 'blue-grey'
        }
      },
    },
  }
  
</script>
