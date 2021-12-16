<template>
  <div class="ma-0 pa-0">

<v-container 
  fluid 
  class="fill-height">
    <v-img
      class="fill-height"
      src="@/assets/drake.jpg">
    </v-img>
</v-container>

    <v-img
      src="@/assets/drake.jpg"
      height="96vh"
      class="mb-6">

  <!--

    <v-container
      v-for="align in alignments"
      :key="align"
      class="grey lighten-5 mb-6"
    >
      <v-row
        :align="align"
        no-gutters
        style="height: 150px;"
      >
        <v-col
          v-for="n in 5"
          :key="n"
        >
          <v-card
            class="pa-2"
            outlined
            tile
          >
            One of three columns
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-container class="grey lighten-5">
      <v-row
        no-gutters
        style="height: 150px;"
      >
        <v-col
          v-for="align in alignments"
          :key="align"
          :align-self="align"
        >
          <v-card
            class="pa-2"
            outlined
            tile
          >
            One of three columns
          </v-card>
        </v-col>
      </v-row>
    </v-container>

  -->

    </v-img>

    <!-- Première section -->

    <v-carousel 
      cycle
      height="96vh"
      hide-delimiter-background
      show-arrows-on-hover
      reverse-transition="fade-transition"
      transition="fade-transition"
      >

      <v-carousel-item
        src="@/assets/drake.jpg">
        <v-row
          class="fill-height"
          align="center"
          justify="center">
          <div class="display-1 white--text pl-5 px-5 hidden-sm-only">
            TEXTILSHOWROOM
          </div>
        </v-row>
      </v-carousel-item>

      <v-carousel-item
        src="@/assets/drake.jpg">
        <v-row
          class="fill-height"
          align="center"
          justify="center">
          <div class="display-2 white--text pl-5 pr-5 hidden-sm-only"><strong>Upto 60% + Extra 10%</strong></div><br/>
        </v-row>
      </v-carousel-item>

      <v-carousel-item
        src="@/assets/drake.jpg">
        <v-row
          class="fill-height"
          align="center"
          justify="center">
          <div class="display-2 white--text pl-5 pr-5 hidden-sm-only"><strong>Upto 60% + Extra 10%</strong></div><br/>
        </v-row>
      </v-carousel-item>

      <v-carousel-item
        src="@/assets/drake.jpg">
        <v-row
          class="fill-height"
          align="center"
          justify="center">
          <div class="display-2 white--text pl-5 pr-5 hidden-sm-only"><strong>Upto 60% + Extra 10%</strong></div><br/>
        </v-row>
      </v-carousel-item>

    </v-carousel>

    <!-- Deuxième section -->

    <div class="pt-6 pl-4 pr-4 row">

      <div
       class="col-md-6 col-sm-6 col-xs-12">
        <v-card tile>
          <v-img
            src="@/assets/drake.jpg"
            class="white--text align-center"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="400px">
           <h1 class="text-center font-size">Top Picks</h1>
            <div class="text-center">
              <v-btn  href="/shop" class="white--text " outlined>SHOP NOW</v-btn>
            </div>
          </v-img>
        </v-card>
      </div>

      <div
        class="col-md-6 col-sm-6 col-xs-12">
        <v-card
          tile>
          <v-img
            src="@/assets/drake.jpg"
            class="white--text align-center"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="400px"
          >
            <h1 class="text-center font-size">New Arrivals</h1>
            <div class="text-center">
              <v-btn  href="/shop" class="white--text" outlined>SHOP NOW</v-btn>
            </div>
          </v-img>
        </v-card>
      </div>

    </div>

    <!-- Troisème section -->

    <div class="pl-4 pr-4 row">

      <div
       class="col-md-4 col-sm-4 col-xs-12">
        <v-card 
          tile
          outlined>
          <v-img
            src="@/assets/drake.jpg"
            class="white--text align-center"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="300px">
            <h1 class="text-center font-size">Lorem & Ipsum</h1>
            <div class="text-center mt-2">
              <v-btn class="white--text caption"  href="/shop" text>SHOP NOW <v-icon class="white--text caption">mdi-arrow-right</v-icon></v-btn>
            </div>
          </v-img>
        </v-card>
      </div>

      <div
        class="col-md-4 col-sm-4 col-xs-12">
        <v-card 
          tile
          outlined>
          <v-img
            src="@/assets/drake.jpg"
            class="white--text align-center"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="300px">
            <h1 class="text-center font-size">Lorem & Ipsum</h1>
            <div class="text-center mt-2">
              <v-btn class="white--text caption"  href="/shop" text>SHOP NOW <v-icon class="white--text caption">mdi-arrow-right</v-icon></v-btn>
            </div>
          </v-img>
        </v-card>
      </div>

      <div
        class="col-md-4 col-sm-4 col-xs-12">
        <v-card 
          tile
          outlined>
          <v-img
            src="@/assets/drake.jpg"
            class="white--text align-center"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="300px">
            <h1 class="text-center font-size">Lorem & Ipsum</h1>
            <div class="text-center mt-2">
              <v-btn class="white--text caption"  href="/shop" text>SHOP NOW <v-icon class="white--text caption">mdi-arrow-right</v-icon></v-btn>
            </div>
          </v-img>
        </v-card>
      </div>

    </div>

    <!-- Quatrième section les 4 cartes-->

    <v-container class="mb-4">
      <v-row no-gutters>
        <v-col :cols="12">
          <v-card-text
            tile
            outlined>
            <v-card-title class="subheading ">Deals of the Day</v-card-title>
            <div class="row">

              <div class="col-12 col-md-3 col-sm-6 col-xs-6 text-center">
                <v-hover
                  v-slot:default="{hover}"
                  open-delay="200">
                    <v-card
                      tile
                      :elevation="hover ? 16 : 4">
                        <v-img
                          class="white--text align-end"
                          height="200px"
                          src="@/assets/drake.jpg">
                            <v-card-title>Bags & Purses </v-card-title>
                        </v-img>
                        <v-card-text class="text--primary text-center">
                          <div>Upto 60% + Extra 10%</div>
                          <div>Baggit, Zara, Fossil</div>
                        </v-card-text>

                        <div class="text-center">
                          <v-btn
                            href="/shop"
                            class="ma-4"
                            outlined
                            color="grey">
                            Explore
                          </v-btn>
                        </div>
                    </v-card>
                </v-hover>
              </div>

              <div class="col-12 col-md-3 col-sm-6 col-xs-6 text-center" >
                <v-hover
                  v-slot:default="{ hover }"
                  open-delay="200"
                >
                  <v-card
                    tile
                    :elevation="hover ? 16 : 4"
                  >
                  <v-img
                    class="white--text align-end"
                    height="200px"
                    src="@/assets/drake.jpg"
                  >
                    <v-card-title>T-Shirt </v-card-title>
                  </v-img>

                  <v-card-text class="text--primary text-center">
                    <div>Upto 50%</div>
                    <div>Zara, Selected, Celio</div>
                  </v-card-text>

                  <div class="text-center">
                    <v-btn href="/shop"
                      class="ma-4"
                      outlined
                      color="grey"
                    >
                      Explore
                    </v-btn>
                  </div>
                </v-card>
                </v-hover>
              </div>

              <div class="col-12 col-md-3 col-sm-6 col-xs-6 text-center" >
                <v-hover
                  v-slot:default="{ hover }"
                  open-delay="200"
                >
                  <v-card
                    tile
                    :elevation="hover ? 16 : 4"
                  >
                  <v-img
                    class="white--text align-end"
                    height="200px"
                    src="@/assets/drake.jpg"
                  >
                    <v-card-title>Jeans </v-card-title>
                  </v-img>

                  <v-card-text class="text--primary text-center">
                    <div>Upto 60% + Extra 10%</div>
                    <div>Jack & Jones, Levis</div>
                  </v-card-text>

                  <div class="text-center">
                    <v-btn href="/shop"
                      class="ma-4"
                      outlined
                      color="grey"
                    >
                      Explore
                    </v-btn>
                  </div>
                </v-card>
                </v-hover>
              </div>

              <div class="col-12 col-md-3 col-sm-6 col-xs-6 text-center" >
                <v-hover
                  v-slot:default="{ hover }"
                  open-delay="200"
                >
                  <v-card
                    tile
                    :elevation="hover ? 16 : 4"
                  >
                  <v-img
                    class="white--text align-end"
                    height="200px"
                    src="@/assets/drake.jpg"
                  >
                    <v-card-title>Shoes </v-card-title>
                  </v-img>

                  <v-card-text class="text--primary text-center">
                    <div>Upto 60% + Extra 10%</div>
                    <div>Nike, Adidas, Puma</div>
                  </v-card-text>

                  <div class="text-center">
                    <v-btn href="/shop"
                      class="ma-4"
                      outlined
                      color="grey"
                    >
                      Explore
                    </v-btn>
                  </div>
                </v-card>
                </v-hover>
              </div>

            </div>
          </v-card-text>
        </v-col>
      </v-row>
    </v-container>

    <!-- Cinquième section (bande grise) -->

    <v-card
      color="grey"
      tile>
      <v-container>
        <v-row no-gutters>

          <v-col class="col-12 col-md-4 col-sm-12">
            <v-row >
              <v-col class="col-12 col-sm-3 pr-4" align="right">
                <v-icon class="display-2">mdi-truck</v-icon>
              </v-col>
              <v-col class="col-12 col-sm-9 pr-4">
                <h3 class="font-weight-light">FREE SHIPPING & RETURN</h3>
                              <p class="font-weight-thin">Free Shipping over $300</p>
              </v-col>
            </v-row>
          </v-col>

          <v-col class="col-12 col-md-4 col-sm-12">
            <v-row >
              <v-col class="col-12 col-sm-3 pr-4" align="right">
                <v-icon class="display-2">mdi-cash-usd</v-icon>
              </v-col>
              <v-col  class="col-12 col-sm-9 pr-4">
                <h3 class="font-weight-light">MONEY BACK GUARANTEE</h3>
                <p class="font-weight-thin">30 Days Money Back Guarantee</p>
              </v-col>
            </v-row>
          </v-col>

          <v-col class="col-12 col-md-4 col-sm-12">
            <v-row>
              <v-col class="col-12 col-sm-3 pr-4" align="right">
                <v-icon class="display-2">mdi-headset</v-icon>
              </v-col>
              <v-col  class="col-12 col-sm-9 pr-4">
                <h3 class="font-weight-light">020-800-456-747</h3>
                <p class="font-weight-thin">24/7 Available Support</p>
              </v-col>
            </v-row>
          </v-col>

        </v-row>
      </v-container>
    </v-card>

  </div>
</template>

<script>
    export default {
        data () {
            return {
                items: [
                    { title: 'Click Me' },
                    { title: 'Click Me' },
                    { title: 'Click Me' },
                    { title: 'Click Me 2' },
                ],
                activeBtn: 1,
                colors: [
                    'indigo',
                    'warning',
                    'pink darken-2',
                    'red lighten-1',
                    'deep-purple accent-4',
                ],
                slides: [
                    'First',
                    'Second',
                    'Third',
                    'Fourth',
                    'Fifth',
                ],
                alignments: [
                  'start',
                  'center',
                  'end',
                ],
            }
        },
    }
</script>

<style>
  .v-card--reveal {
    align-items: center;
    bottom: 0;
    justify-content: center;
    opacity: .5;
    position: absolute;
    width: 100%;
  }
</style>