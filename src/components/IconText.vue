<template>
  <div class="icon-text">
    <img :src="imageSrc" :alt="name">
    <span>{{ name }}</span>
  </div>  
</template>

<script>
export default {
  props: {
    name: String,
    imageSrc: String,
  }
}
</script>
