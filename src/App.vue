<template>
  <div>
    <navigation/>
    <div class="main container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navigation from "./components/Navigation.vue";

export default {
  components: {
    Navigation,
  }
}
</script>
