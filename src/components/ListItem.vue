<template>
  <div v-on:click="selected" class="grid-item">
    <div class="image">
      <img :src="item.url" :alt="item.thumbnailUrl">
    </div>
    <div class="box">
      <!-- Concat "Title " with ID of item -->
      <div class="title">Title {{ item.id }}</div> 
      <div class="description">{{ item.title }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: Object
  },
  methods: {
    selected () {
      this.$emit('selected');
    }
  }
}
</script>
