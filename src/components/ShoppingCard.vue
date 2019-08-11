<template>
  <div class="shopping-card">
    <icon-text name="Contact" :imageSrc="contactIcon"/>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora assumenda aliquid provident aspernatur pariatur rem culpa totam, temporibus id expedita!</p>
    <icon-text :name="cartTextIcon" :imageSrc="cartIcon"/>
    <ul class="cart">
      <div class="empty-card" v-if="cartList >= 0">
        <span>Cart is empty</span>
      </div>
      <li v-for="item in cartList" :key="item.id" class="cart-item">
        <span class="cart-item-id">{{ item.id }}</span>
        <!-- Concat "Title " with ID of item -->
        <span class="cart-item-title">Title {{ item.id }}</span>
      </li>
    </ul>
  </div>  
</template>

<script>
import IconText from "./IconText.vue"

export default {
  components: {
    IconText
  },
  data: function () {
    return {
      contactIcon: '/assets/icons/contact.png',
      cartIcon: '/assets/icons/cart.png'
    }
  },
  computed: {
    cartList: function () {
      return this.$store.state.cartList
    },
    cartTextIcon: function () {
      return this.cartList >= 0 ? "Cart": `Cart ( ${ this.cartList.length } )` 
    }
  }
}
</script>

