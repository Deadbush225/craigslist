<script setup lang="ts">
import Logo from '../assets/logo.png'
</script>

<template>
  <header class="navbar bg-base-100 border-b border-base-300 sticky top-0 z-30 px-4">
    <div class="navbar-start flex items-center gap-2">
      <label for="app-drawer" class="btn btn-ghost btn-circle lg:hidden" aria-label="Open navigation">
        <span class="material-symbols-outlined">menu</span>
      </label>
      <RouterLink to="/" class="hidden sm:flex" aria-label="Go to home page">
        <img :src="Logo" alt="Craigslist logo" class="h-9 w-auto" />
      </RouterLink>
    </div>

    <nav class="navbar-center hidden lg:flex" aria-label="Main navigation">
      <ul class="menu menu-horizontal gap-1">
        <li><RouterLink to="/" exact-active-class="menu-active">Home</RouterLink></li>
        <li><RouterLink to="/services" active-class="menu-active">Services</RouterLink></li>
        <li><RouterLink to="/messaging" active-class="menu-active">Messages</RouterLink></li>
        <li><RouterLink to="/provider/1" active-class="menu-active">Provider</RouterLink></li>
      </ul>
    </nav>

    <div class="navbar-end gap-1">
      <RouterLink to="/new-listing" class="btn btn-primary btn-sm hidden sm:inline-flex">
        Post an Ad
      </RouterLink>
      <div class="indicator">
        <span class="indicator-item badge badge-xs badge-primary"></span>
        <RouterLink to="/messaging" class="btn btn-ghost btn-circle" aria-label="Messages">
          <span class="material-symbols-outlined">chat_bubble_outline</span>
        </RouterLink>
      </div>
      <div class="dropdown dropdown-end">
        <button type="button" class="btn btn-ghost btn-circle avatar" aria-label="Open profile menu">
          <div class="w-9 rounded-full ring ring-base-300 ring-offset-2">
            <span class="grid h-full w-full place-items-center bg-primary text-primary-content">DB</span>
          </div>
        </button>
        <ul tabindex="0" class="menu dropdown-content mt-3 w-52 rounded-box border border-base-300 bg-base-100 p-2 shadow">
          <li><RouterLink to="/dashboard">Dashboard</RouterLink></li>
          <li><RouterLink to="/provider/1">Profile</RouterLink></li>
          <li><RouterLink to="/login">Sign out</RouterLink></li>
        </ul>
      </div>
    </div>
  </header>
</template>
