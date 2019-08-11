<template>
  <div class="navigation">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="navigation-inner">
            <router-link to="/">
              <span class="logo">LOGO</span>
            </router-link>
            <div class="center-items">
              <ul>
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/about">About</router-link></li>
                <li><router-link to="/contact">Contact</router-link></li>
              </ul>
              <img src="/assets/icons/lupe.png" alt="lupe">
            </div>
          </div>
        </div>  
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>
