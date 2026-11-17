<script setup lang="ts">
import BaseButton from './BaseButton.vue'
import Logo from '../assets/logo.png'
</script>

<template>
  <header class="site-header">
    <div class="container header-inner header-inner--wide">
      <div class="brand-wrap">
        <RouterLink to="/" class="brand" aria-label="Go to home page">
          <img :src="Logo" alt="Craigslist logo" class="brand-logo" />
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
        <!-- <RouterLink to="/dashboard">Dashboard</RouterLink> -->
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

<style scoped>
.site-header {
  position: sticky;
  top: 0;
  z-index: 30;
  background: rgba(250, 248, 255, 0.84);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(155, 139, 214, 0.18);
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  min-height: 82px;
}

.header-inner--wide {
  min-height: 92px;
}

.brand-wrap {
  display: flex;
  align-items: center;
  gap: 18px;
  flex-shrink: 0;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 1.08rem;
  font-weight: 800;
  letter-spacing: -0.04em;
}

.brand-logo {
  width: 8em;
}

.main-nav {
  display: flex;
  align-items: center;
  gap: 28px;
  justify-content: center;
  flex: 1;
}

.main-nav a {
  position: relative;
  color: var(--muted);
  font-weight: 600;
  transition: color 0.2s ease;
}

.main-nav a:hover,
.main-nav a.router-link-exact-active {
  color: var(--primary);
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
}

.header-icons {
  display: flex;
  align-items: center;
  gap: 8px;
}

.icon-button {
  position: relative;
  width: 38px;
  height: 38px;
  display: grid;
  place-items: center;
  border-radius: 10px;
  color: var(--muted);
  background: rgba(77, 70, 231, 0.04);
}

.badge-dot {
  position: absolute;
  top: -4px;
  right: -3px;
  min-width: 18px;
  height: 18px;
  padding: 0 5px;
  border-radius: 999px;
  background: #d9d7ff;
  color: var(--primary);
  display: grid;
  place-items: center;
  font-size: 0.66rem;
  font-weight: 800;
}

@media (max-width: 980px) {
  .header-inner {
    flex-wrap: wrap;
    padding: 16px 0;
  }

  .main-nav {
    justify-content: flex-start;
    overflow-x: auto;
    padding-bottom: 8px;
  }
}

@media (max-width: 620px) {
  .header-actions {
    width: 100%;
    flex-direction: column;
    align-items: stretch;
  }

  .header-actions :deep(.btn) {
    width: 100%;
  }
}
</style>
