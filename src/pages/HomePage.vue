<script setup lang="ts">
import BaseButton from '../components/BaseButton.vue'
import ListingCard from '../components/ListingCard.vue'
import { categories, listings } from '../data/mockData'
</script>

<template>
  <div class="page-shell">
    <section class="hero-section">
      <div class="container hero-grid">
        <div class="hero-copy">
          <span class="eyebrow">Local expertise, zero hassle</span>
          <h1>Find trusted people for the jobs that matter most.</h1>
          <p>
            Search vetted services, compare local professionals, and book the help you need without the usual friction.
          </p>

          <div class="hero-actions">
            <BaseButton to="/services">Browse services</BaseButton>
            <BaseButton to="/new-listing" variant="secondary">Post a listing</BaseButton>
          </div>

          <div class="hero-stats">
            <div>
              <strong>12k+</strong>
              <span>service requests</span>
            </div>
            <div>
              <strong>4.9/5</strong>
              <span>average rating</span>
            </div>
            <div>
              <strong>1.2k</strong>
              <span>active providers</span>
            </div>
          </div>
        </div>

        <div class="hero-panel card">
          <div class="search-strip">
            <span class="material-symbols-outlined">search</span>
            <input type="text" value="Home cleaning, design, repair..." aria-label="Search services" />
          </div>

          <div class="mini-feature">
            <div class="mini-feature__badge">Popular today</div>
            <div class="mini-feature__body">
              <div>
                <strong>Interior painting</strong>
                <small>Quezon City</small>
              </div>
              <span>₱2,400</span>
            </div>
          </div>

          <div class="mini-list">
            <div>
              <span>✅ Verified pros</span>
              <small>Screened & reviewed</small>
            </div>
            <div>
              <span>⚡ Fast booking</span>
              <small>Book in under 10 mins</small>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-heading">
          <div>
            <span class="eyebrow">Popular categories</span>
            <h2>Find the right support for your next project</h2>
          </div>
          <BaseButton to="/services" variant="ghost" size="sm">View all</BaseButton>
        </div>

        <div class="category-grid">
          <RouterLink v-for="category in categories" :key="category.name" class="category-card" :to="'/services'">
            <span class="category-icon">{{ category.icon }}</span>
            <strong>{{ category.name }}</strong>
            <small>{{ category.description }}</small>
          </RouterLink>
        </div>
      </div>
    </section>

    <section class="section section-alt">
      <div class="container">
        <div class="section-heading">
          <div>
            <span class="eyebrow">Featured local picks</span>
            <h2>Top services near you</h2>
          </div>
        </div>

        <div class="listing-grid">
          <ListingCard v-for="listing in listings" :key="listing.id" :listing="listing" />
        </div>
      </div>
    </section>
  </div>
</template>
