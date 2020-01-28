<template>
<v-card v-if="isVisible" class='cart-window' max-width="700" style="z-index:1">
    <v-card-title>
      <v-row>
        <v-col md=5>
          <b>{{productsCount}} ITEMS IN CART</b>
        </v-col>
        <v-col ld=1>
          <b class="product-value-padding">${{productsValue}}</b>
          <v-btn depressed color="#000000" style="color:white" medium @click='clearCart()'>clear cart</v-btn>
        </v-col>
      </v-row>
    </v-card-title>

    <v-list-item class="clear-padding">
      <v-list-item-content>
            <v-row v-for="item in products" v-bind:key="item.id" class="product-list-border">
                <v-col md=4>
                    <v-img :src="item.image"></v-img>
                </v-col>
                <v-col>
                    <v-list-item-title><b class="product-text">{{item.title | truncate(40)}}</b></v-list-item-title>
                    <span><a class="product-text gray" @click='removeProduct(item)'>Remove</a></span>
                </v-col>
            </v-row>
      </v-list-item-content>
    </v-list-item>
</v-card>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex';

export default {
  name: 'Cart',
  methods: {
    logoStyle(){
      return {'height': this.$vuetify.breakpoint.smAndDown ? '36px' : '48px'};
    },
    image(pic){
      return requre('../assets/images'+ pic);
    },
    ...mapActions([
        'clearCart',
        'removeProduct'
    ])
  },
  computed: {
    ...mapGetters({
      isVisible: 'isCartVisible',
      products: 'getProducts',
      productsCount: 'getProductsCount',
      productsValue: 'getProductsValue'
    })
  },
};
</script>

<style lang="scss" scoped>

.product-list-border {
    padding:1px;
    border-top:1px solid #dedede
};
.product-value-padding { 
    padding-right:10px;
};
.cart-window {
    position: absolute;
    width:400px;
    right: 285px;
    z-index:1;
    border-radius:0 !important;
  }
.clear-padding {
    padding: 0;
}
</style>
