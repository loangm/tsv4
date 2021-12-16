<template>
  <v-container>

    <v-row
      class="text-center">

      <v-col cols="12">

        <v-img
          src="@/assets/ts/tslogo.jpg"
          class="my-3"
          contain
          height="200"/>

      </v-col>

      <v-col class="mb-4">

        <h1 class="display-2 font-weight-bold mb-3">
          Titre
        </h1>

        <p class="subheading font-weight-regular">

          Ligne 1
          <br>Ligne 2

        </p>

      </v-col>

    </v-row>

  <!--  -->
  
    <v-card
    class="my-4 pa-12"
    color="grey"
    flat
  >
    <v-card
      elevation="12"
      width="256"
    >
      <v-navigation-drawer
        floating
        permanent
      >
        <v-list
          dense
          rounded>
        </v-list>
      </v-navigation-drawer>
    </v-card>
  </v-card>

  <!--  -->

    <v-card
    class="my-4 pa-12"
    color="grey"
    flat
  >
    <v-card
      elevation="12"
      width="256"
    >
      <v-navigation-drawer
        floating
        permanent
      >
        <v-list
          dense
          rounded>
        </v-list>
      </v-navigation-drawer>
    </v-card>
  </v-card>

  <!--  -->

    <v-card
    class="my-4 pa-12"
    color="grey"
    flat
  >
    <v-card
      elevation="12"
      width="256"
    >
      <v-navigation-drawer
        floating
        permanent
      >
        <v-list
          dense
          rounded>
        </v-list>
      </v-navigation-drawer>
    </v-card>
  </v-card>

  <!--  -->

  <v-card
    class="my-4 pa-12"
    color="grey"
    flat
  >
    <v-card
      elevation="12"
      width="256"
    >
      <v-navigation-drawer
        floating
        permanent
      >
        <v-list
          dense
          rounded>
        </v-list>
      </v-navigation-drawer>
    </v-card>
  </v-card>

  <!--  -->

  <!--  -->

  <!--  -->

  <v-card
    class="my-4 pa-12"
    color="grey"
    flat
  >
    <v-card
      elevation="12"
      width="256"
    >
      <v-navigation-drawer
        floating
        permanent
      >
        <v-list
          dense
          rounded>
        </v-list>
      </v-navigation-drawer>
    </v-card>
  </v-card>

  <!--  -->

  <v-card
    class="my-4 pa-12"
    color="grey"
    flat
  >
    <v-card
      elevation="12"
      width="256"
    >
      <v-navigation-drawer
        floating
        permanent
      >
        <v-list
          dense
          rounded>
        </v-list>
      </v-navigation-drawer>
    </v-card>
  </v-card>

  <!--  -->

  </v-container>
</template>

<script>
//  import HelloWorld from './HelloWorld'

  export default {
    data () {
      return {
        items: [
        ['mdi-email', 'Inbox'],
        ['mdi-account-supervisor-circle', 'Supervisors'],
        ['mdi-clock-start', 'Clock-in'],
        ],
      }
    },

    name: 'Accueil',

    components: {
      // HelloWorld,
    },
  }
</script>


