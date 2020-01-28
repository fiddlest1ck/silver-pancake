<template>
<div>
    <v-img :src="item.image"></v-img>
    <v-card-title class="product-title" align="left">
        <b class="product-text">{{item.title}}</b>
    </v-card-title>

      <v-card-actions class="product-actions">
        <v-spacer></v-spacer> 
            <v-btn small class="clear-btn" v-if='item.owned' disabled>OWNED</v-btn>
            <v-btn small class="clear-btn" v-if='item.discount' color='success'>-50%</v-btn>
            <v-btn small class="clear-btn" v-if='!inCart(item) && !item.owned' @click='addProduct(item)'>add</v-btn>
            <v-btn small class="clear-btn" v-if='inCart(item)' disabled>in cart</v-btn>
      </v-card-actions>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex';

export default {
  name: 'Product',
  props: ['item'],
  methods: {
    inCart(product) {
        return this.products.includes(product);
    },
    ...mapMutations([
      'closeSidesheet',
      'setRecorderProps'
    ]),
    ...mapActions([
      'addProduct',
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
<style lang="scss">

.product-title {
  height: 30px;
  padding: 3px;
  margin: 4px
};
.product-actions {
  height: 50px;
  padding: 5px 5px 0px 0px
}
</style>