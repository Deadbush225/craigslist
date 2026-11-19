<script setup lang="ts">
import Logo from '../assets/logo.png';
</script>

<template>
  <footer class="footer mt-8 bg-neutral p-10 text-neutral-content">
    <div class="container mx-auto flex max-w-6xl flex-wrap justify-between gap-8">
      <div>
        <div class="mb-3">
          <img :src="Logo" class="h-10 w-auto brightness-0 invert"/>
        </div>
        <p>Find trusted local help for everyday tasks, home projects, and care services.</p>
      </div>

      <div class="flex gap-12">
        <div>
          <h4 class="footer-title">Explore</h4>
          <ul class="grid gap-2">
            <li><RouterLink to="/services">Browse services</RouterLink></li>
            <li><RouterLink to="/dashboard">Dashboard</RouterLink></li>
            <li><RouterLink to="/new-listing">Create listing</RouterLink></li>
          </ul>
        </div>
        <div>
          <h4 class="footer-title">Company</h4>
          <ul class="grid gap-2">
            <li><RouterLink to="/">About</RouterLink></li>
            <li><RouterLink to="/messaging">Support</RouterLink></li>
            <li><RouterLink to="/login">Sign in</RouterLink></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>