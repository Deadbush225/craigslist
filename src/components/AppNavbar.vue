<script setup lang="ts">
import BaseButton from './BaseButton.vue'
</script>

<template>
  <header class="site-header">
    <div class="container header-inner header-inner--wide">
      <div class="brand-wrap">
        <RouterLink to="/" class="brand" aria-label="Go to home page">
          <span class="brand-mark">C</span>
          <span class="brand-text">Craigslist</span>
        </RouterLink>
      </div>

      <!-- <div class="site-search">
        <select aria-label="Category selection">
          <option>All Categories</option>
          <option>Local Services</option>
          <option>For Sale</option>
          <option>Housing</option>
          <option>Jobs</option>
        </select>
      </div> -->

      <nav class="main-nav" aria-label="Main navigation">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/services">Services</RouterLink>
        <RouterLink to="/dashboard">Dashboard</RouterLink>
        <RouterLink to="/messaging">Messages</RouterLink>
        <RouterLink to="/provider/1">Provider</RouterLink>
      </nav>

      <div class="header-actions">
        <BaseButton to="/new-listing" variant="primary" size="sm">Post an Ad</BaseButton>
        <div class="header-icons">
          <RouterLink to="/messaging" class="icon-button relative" aria-label="Messages">
            <span class="material-symbols-outlined">chat_bubble_outline</span>
            <span class="badge-dot">3</span>
          </RouterLink>
        </div>
        <BaseButton to="/login" variant="secondary" size="sm">Log In</BaseButton>
      </div>
    </div>
  </header>
</template>
