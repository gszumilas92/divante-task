<template>
  <div class="item-selected">
    <div class="image-bg" :style="{ backgroundImage: `url('${item.url}')` }"></div>
    <div class="box">
      <!-- Concat "Title " with ID of item -->
      <div class="container">
        <div class="row">
          <div class="col-8">
            <div class="title">Title {{ item.id }}</div> 
            <div class="description">{{ item.title }}</div>
          </div>
          <div class="col-4 align-column-end">
            <a @click="addToCart" :class="{disabled: isInCart}" class="btn btn-primary">
              <span v-if="!isInCart">Add to cart</span>
              <span v-if="isInCart">Added</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: Object
  },
  methods: {
    addToCart() {
      this.$store.commit('addToCart', this.item);
    }
  },
  computed: {
    isInCart() {
      return this.$store.state.cartList.includes(this.item);
    }
  }
}
</script>
