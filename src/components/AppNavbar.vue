<script setup lang="ts">
import BaseButton from './BaseButton.vue'
</script>

<template>
  <header class="site-header">
    <div class="container header-inner">
      <div class="brand-wrap">
        <RouterLink to="/" class="brand" aria-label="Go to home page">
          <span class="brand-mark">C</span>
          <span class="brand-text">Craigslist</span>
        </RouterLink>
        <div class="location-pill">
          <span class="material-symbols-outlined">location_on</span>
          Metro Manila / NCR
        </div>
      </div>

      <nav class="main-nav" aria-label="Main navigation">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/services">Services</RouterLink>
        <RouterLink to="/dashboard">Dashboard</RouterLink>
        <RouterLink to="/messaging">Messages</RouterLink>
      </nav>

      <div class="header-actions">
        <BaseButton to="/new-listing" variant="secondary" size="sm">Post an ad</BaseButton>
        <BaseButton to="/login" size="sm">Log in</BaseButton>
      </div>
    </div>
  </header>
</template>
