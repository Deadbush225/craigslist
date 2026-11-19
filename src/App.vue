<template>
  <div class="drawer lg:drawer-open min-h-screen bg-base-200" data-theme="light">
    <input id="app-drawer" type="checkbox" class="drawer-toggle" aria-label="Toggle navigation" />

    <div class="drawer-content page-shell flex flex-col min-h-screen w-full">
      <AppNavbar />
      <main class="main-content flex-1">
        <RouterView />
      </main>

      <AppFooter />
    </div>

    <aside class="drawer-side z-40">
      <label for="app-drawer" aria-label="Close navigation" class="drawer-overlay"></label>
      <div class="w-64 min-h-full bg-base-100 border-r border-base-300 p-4">
        <RouterLink to="/" class="mb-4 flex items-center gap-2 px-2" aria-label="Go to home page">
          <img :src="Logo" alt="Craigslist" class="h-9 w-auto" />
        </RouterLink>

        <ul class="menu w-full gap-1">
          <li class="menu-title">Browse</li>
          <li>
            <RouterLink to="/" exact-active-class="menu-active">
              <span class="material-symbols-outlined">home</span>
              Home
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/services" active-class="menu-active">
              <span class="material-symbols-outlined">design_services</span>
              Services
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/messaging" active-class="menu-active">
              <span class="material-symbols-outlined">chat_bubble</span>
              Messages
            </RouterLink>
          </li>

          <li class="menu-title mt-4">Account</li>
          <li>
            <RouterLink to="/dashboard" active-class="menu-active">
              <span class="material-symbols-outlined">dashboard</span>
              Dashboard
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/provider/1" active-class="menu-active">
              <span class="material-symbols-outlined">person</span>
              Provider profile
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/new-listing" active-class="menu-active">
              <span class="material-symbols-outlined">add_box</span>
              Post an ad
            </RouterLink>
          </li>
        </ul>
      </div>
    </aside>
  </div>
</template>

<script setup lang="ts">
import AppFooter from './components/AppFooter.vue'
import AppNavbar from './components/AppNavbar.vue'
import Logo from './assets/logo.png'
</script>
