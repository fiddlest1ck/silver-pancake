<template>
  <v-toolbar
    class="toolbar"
    flat
    style="flex:0"
    height="70px"
    color="#dedede">
    <v-toolbar-title>
    <v-img
      :contain="true"
      src='@/assets/images/logo.png'
      :style='logoStyle()'>
    </v-img>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn @click="cartVisible()" class='clear-btn'>
          <v-icon>mdi-cart-outline</v-icon>
          <span>{{productsCount}}</span>
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex';
import Cart from '@/components/Cart';

export default {
  name: 'MainToolbar',
  components: {
  },
  methods: {
    logoStyle(){
      return {'height': this.$vuetify.breakpoint.smAndDown ? '36px' : '48px'};
    },
    ...mapMutations({
      cartVisible: 'toggleCartVisible',
      setVisible: 'setCartVisible'
    }),
  },
  computed: {
    ...mapGetters({
      productsCount: 'getProductsCount',
      isVisible: 'isCartVisible'
    })
  },
};
</script>

<style lang="scss" scoped>
.toolbar {
    &::v-deep .v-toolbar__content {
      padding: 0 285px;
  };
}

</style>
