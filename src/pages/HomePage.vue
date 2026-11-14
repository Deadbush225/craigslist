<script setup lang="ts">
import BaseButton from '../components/BaseButton.vue'
import ListingCard from '../components/ListingCard.vue'
import { categories, listings } from '../data/mockData'
</script>

<template>
  <div class="page-shell page-shell--tight">
    <section class="container hero-directory">
      <div class="top-status-bar">
        <span class="hero-pill">58,240 verified active listings in Metro Manila today</span>
      </div>

      <div class="directory-hero card">
        <div class="hero-copy">
          <h1>Civic peer exchange for the neighborhood you actually live in.</h1>
          <p>Search verified contractors, service pros, and local product offers right in your metro area.</p>

          <div class="search-panel">
            <div class="search-panel__input">
              <span class="material-symbols-outlined">search</span>
              <input type="text" placeholder="Search furniture, licensed electricians, studio apartments, cargo bikes..." />
            </div>
            <div class="search-panel__location">
              <span class="material-symbols-outlined">near_me</span>
              <div>
                <small>Neighborhood</small>
                <strong>Makati / BGC (5km)</strong>
              </div>
            </div>
            <BaseButton to="/services">Find Listings</BaseButton>
          </div>

          <div class="quick-query-row">
            <span>Popular Queries:</span>
            <button type="button" class="query-chip">Plumbing</button>
            <button type="button" class="query-chip">Moving Help</button>
            <button type="button" class="query-chip">Cargo Bikes</button>
            <button type="button" class="query-chip">1-Bedroom Apts</button>
            <button type="button" class="query-chip">Mid-Century Modern</button>
          </div>
        </div>
      </div>
    </section>

    <section class="container section-block">
      <div class="section-heading">
        <div>
          <span class="eyebrow">Directory &amp; Classifieds Hub</span>
          <h2>Explore Metro Manila by Category</h2>
        </div>
      </div>

      <div class="category-grid">
        <RouterLink v-for="category in categories" :key="category.name" :to="'/services'" class="category-card">
          <span class="category-icon">{{ category.icon }}</span>
          <strong>{{ category.name }}</strong>
          <small>{{ category.description }}</small>
        </RouterLink>
      </div>
    </section>

    <section class="container section-block section-block--alt">
      <div class="section-heading">
        <div>
          <span class="eyebrow">Featured picks</span>
          <h2>Top services near you</h2>
        </div>
      </div>
      <div class="listing-grid">
        <ListingCard v-for="listing in listings" :key="listing.id" :listing="listing" />
      </div>
    </section>
  </div>
</template>
