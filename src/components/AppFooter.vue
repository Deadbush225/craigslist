<script setup lang="ts">
import Logo from '../assets/logo.png';
</script>

<template>
  <footer class="site-footer">
    <div class="container footer-inner">
      <div>
        <div class="brand footer-brand">
          <img :src="Logo" class="brand-logo"/>
        </div>
        <p>Find trusted local help for everyday tasks, home projects, and care services.</p>
      </div>

      <div class="footer-links">
        <div>
          <h4>Explore</h4>
          <ul>
            <li><RouterLink to="/services">Browse services</RouterLink></li>
            <li><RouterLink to="/dashboard">Dashboard</RouterLink></li>
            <li><RouterLink to="/new-listing">Create listing</RouterLink></li>
          </ul>
        </div>
        <div>
          <h4>Company</h4>
          <ul>
            <li><RouterLink to="/">About</RouterLink></li>
            <li><RouterLink to="/messaging">Support</RouterLink></li>
            <li><RouterLink to="/login">Sign in</RouterLink></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<style>
    .site-footer .brand-logo {
        filter: hue-rotate(523deg) invert(100%);
    }
</style>