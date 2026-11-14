<script setup lang="ts">
import ListingCard from '../components/ListingCard.vue'
import { listings } from '../data/mockData'

const filterChips = ['All Categories', 'Local Services', 'For Sale', 'Housing', 'Jobs', 'Community', 'Gigs']
</script>

<template>
  <div class="page-shell page-shell--tight">
    <section class="container service-page-panel">
      <div class="breadcrumb-row">
        <RouterLink to="/">Craigslist</RouterLink>
        <span>/</span>
        <span>Metro Manila (NCR)</span>
        <span>/</span>
        <span>Services</span>
        <span>/</span>
        <strong>Search &amp; Deep Filter</strong>
      </div>

      <div class="service-toolbar card">
        <div class="service-search-box">
          <span class="material-symbols-outlined">search</span>
          <input type="text" value="Plumbing & Pipe Repair in Metro Manila" />
          <button type="button" aria-label="Clear search">cancel</button>
        </div>
        <div class="service-toolbar__info">
          <span>57 results</span>
          <button type="button">Reset</button>
        </div>
      </div>

      <div class="filter-row long-row">
        <button v-for="chip in filterChips" :key="chip" type="button" class="chip" :class="{ active: chip === 'All Categories' }">
          {{ chip }}
        </button>
      </div>

      <div class="services-layout">
        <aside class="sidebar card">
          <h3>Filters</h3>

          <div class="filter-group">
            <label>Price range</label>
            <input type="range" min="0" max="100" value="60" />
          </div>

          <div class="filter-group">
            <label>Service type</label>
            <div class="stacked-options">
              <label><input type="checkbox" checked /> Local services</label>
              <label><input type="checkbox" /> Design</label>
              <label><input type="checkbox" checked /> Wellness</label>
              <label><input type="checkbox" /> Tech help</label>
            </div>
          </div>

          <div class="filter-group">
            <label>Availability</label>
            <div class="stacked-options">
              <label><input type="radio" name="availability" checked /> This week</label>
              <label><input type="radio" name="availability" /> This month</label>
            </div>
          </div>
        </aside>

        <div class="results-panel">
          <div class="listing-grid listing-grid--wide">
            <ListingCard v-for="listing in listings" :key="listing.id" :listing="listing" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
