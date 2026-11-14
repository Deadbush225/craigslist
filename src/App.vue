<template>
  <div class="app-shell">
    <AppNavbar />

    <main class="main-content">
      <RouterView />
    </main>

    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import AppFooter from './components/AppFooter.vue'
import AppNavbar from './components/AppNavbar.vue'
</script>
