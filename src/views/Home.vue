<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-md-6 col-lg-4 col-xl-3">
        <shopping-card/>
      </div>
      <div class="col-12 col-md-6 col-lg-8 col-xl-9">
        <div class="loading-icon-wrapper" v-if="loading">
          <img class="animation-rotate" src="/assets/icons/loading.png" alt="loading">
        </div>
        <template v-if="!loading">
          <div v-if="!itemSelected" class="grid-item-list">
            <list-item v-on:selected="selectItem(item)" v-for="item in itemList" v-bind:key="item.id" :item="item"/>
          </div>
        </template>
        <item-selected v-if="itemSelected" :item="itemSelected" />
      </div>
    </div>
  </div>
</template>

<script>
import ShoppingCard from "../components/ShoppingCard.vue";
import ListItem from "../components/ListItem.vue";
import ItemSelected from "../components/ItemSelected.vue";

export default {
  components: {
    ShoppingCard,
    ListItem,
    ItemSelected
  },
  data: function () {
    return {
      itemSelected: null
    }
  },
  computed: {
    itemList: function () {
      return this.$store.state.itemList;
    },
    loading () {
      return this.$store.state.loading;
    },
  },
  methods: {
    selectItem: function (item) {
      this.itemSelected = item;
    }
  },
  mounted: function () {
    this.$store.dispatch('fetchItemList')
  }
}
</script>
