<template>
  <v-app>
  
    <v-navigation-drawer
    height="100vh"
      temporary
      right
      v-model="drawer"
      app>

      <v-list
      nav
      flat
      dense>

        <v-list-item-group
          v-model="selectedItem">

        <v-list-item
          v-for="([text, link], i) in items"
          :key="i"
          link
          @click="$vuetify.goTo(link)">

          <v-list-item-content>

            <v-list-item-title >

              {{text}}
            
            </v-list-item-title>

          </v-list-item-content>

        </v-list-item>

        </v-list-item-group>

      </v-list>
    </v-navigation-drawer>

<!--

      app
      elevation="6"
      fade-img-on-scroll
      scroll-threshold="200"
      src="@/assets/drake.jpg"

      app=true
      elevation="0"
      color="rgb(0, 0, 0, 0.0)"

      app
      inverted-scroll=true
      elevation="6"

      app=false
      elevation="6"
      elevate-on-scroll
      fade-img-on-scroll
      scroll-threshold="200"
      src="@/assets/drake.jpg"

      app=false
      dense
      dark
      elevation="6"
      elevate-on-scroll
      fade-img-on-scroll
      scroll-threshold="200"
      src="@/assets/ts/bg74.jpg"

-->

    <v-app-bar
      app=false
      dense
      elevation="10"
      elevate-on-scroll
      fade-img-on-scroll
      scroll-threshold="200">

      <v-btn 
        icon
        color="">
        <v-icon>mdi-hanger</v-icon>
      </v-btn>

      <v-spacer></v-spacer>

      <v-toolbar-title
        class="overline font-weight-regular">
        TEXTILSHOWROOM
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-app-bar-nav-icon
        class=""
        @click="drawer=!drawer">
      </v-app-bar-nav-icon>

    </v-app-bar>

    <v-main>

      <v-container
      fluid>

        <transition
          mode="out-in"
          enter-active-class="animate__animated animate__fadeIn"
          leave-active-class="animate__animated animate__fadeOut"
        >
          <router-view>

          </router-view>

        </transition>

      </v-container>

    </v-main>
    
  </v-app>

</template>

<script>
  export default {
    data: () => ({ 
      drawer: null,
      items: [
        ["Collection 2022",       "/about"],
        ["Ensembles",             "#features"],
        ["Chaussures",            "#download"],
        ["Accesoires",            "#pricing"],
      ]
    }),
  }
</script>
