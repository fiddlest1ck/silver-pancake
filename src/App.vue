<template>
  <v-app>
    <main-toolbar></main-toolbar>
    <v-content class="content">
      <cart></cart>
      <v-container class="main-container" fluid>
        <v-row style="margin-bottom:20px">
          <b>GAME OF THE WEEK</b>
        </v-row>
        <v-row wrap>
          <v-img src='@/assets/images/bg.png'>
          <v-container style='text-align:center;'>
          <v-btn @click='addProduct(secret)' v-if='!inCart(secret)' class='secret'></v-btn>
          </v-container></v-img>
        </v-row>
      </v-container>
      <v-container class="container-product" fluid>
        <v-row class="inline-product">
          <v-col v-for="product in items" v-bind:key="product.id" >
            <product :item='product' class="product"></product>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex';

import MainToolbar from '@/components/MainToolbar';
import Product from '@/components/Product';
import Cart from '@/components/Cart';
import oddworld from '@/assets/images/oddworld.png';
import deponia from '@/assets/images/deponia.png';
import settlers from '@/assets/images/settlers.png';
import neverwinter from '@/assets/images/neverwinter.png';
import assassin from '@/assets/images/assasin.png';
import secret from '@/assets/images/secret.png';

export default {
  name: 'App',
  components: {
    MainToolbar,
    Product,
    Cart
  },
  data() {
    return {
      items: [
        {
          id: 1,
          image: oddworld,
          title: 'ODDWORLD: STRANGER\'S WRATH',
          discount: true,
          owned: false,
          value: 2
        },
        {
          id: 2,
          image: deponia,
          title: 'CHAOS ON DEPONIA',
          discount: false,
          owned: true,
          value: 1
        },
        {
          id: 3,
          image: settlers,
          title: 'THE SETTLERS 2: GOLD EDITION',
          discount: false,
          owned: false,
          value: 2
        },
        {
          id: 4,
          image: neverwinter,
          title: 'NEVERWINTER NIGHTS',
          discount: true,
          owned: false,
          value: 2
        },
        {
          id: 5,
          image: assassin,
          title: 'ASSASSIN\'S CREED: DIRECTOR\'S CUT',
          discount: false,
          owned: false,
          value: 2
        }
      ],
      secret: {
          id: 6,
          image: secret,
          title: 'CYBERPUNK 2077',
          discount: false,
          owned: false,
          value: 20
      }
    };
  },
  methods: {
    inCart(product) {
        return this.products.includes(product);
    },
    ...mapActions([
      'addProduct',
    ])
  },
  computed: {
    ...mapGetters({
      products: 'getProducts',
    })
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
};
.clear-btn {
  border: 0;
  box-shadow: 0 0 0 0;
};
.main-container {
  margin-top:20px;
  width:1325px
};
.container-product {
  padding:0px;
  text-align:center;
};
.inline-product {
  width:1375px;
  margin: 0;
  display:inline-flex
};
.product {
  max-width:250px;
  background-color:#dedede
};
a, b {
  font-size:14px;
  font-family:sans-serif
};
.secret {
  margin-top:200px;
  width:400px;
  height:100px;
  background-color:transparent !important;
  border:0
};
.product-text {
  font-size:12px;
  &.gray {
    text-decoration:underline;
    color:gray
  }
}
.content {
  background-color: #c2c2c2;
}
</style>

