<script setup lang="ts">
import ListingCard from '../components/ListingCard.vue'
import { listings } from '../data/mockData'

const filters = ['All services', 'Home', 'Design', 'Wellness', 'Auto', 'Tech', 'Events']
</script>

<template>
  <div class="page-shell compact-page">
    <section class="section">
      <div class="container">
        <div class="page-header">
          <div>
            <span class="eyebrow">Browse services</span>
            <h1>Find local help nearby</h1>
          </div>
          <div class="search-box">
            <span class="material-symbols-outlined">search</span>
            <input type="text" placeholder="Search for a service or provider" />
          </div>
        </div>

        <div class="filter-row">
          <button v-for="filter in filters" :key="filter" type="button" class="chip" :class="{ active: filter === 'All services' }">
            {{ filter }}
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
                <label><input type="checkbox" checked /> Home services</label>
                <label><input type="checkbox" /> Design</label>
                <label><input type="checkbox" checked /> Wellness</label>
                <label><input type="checkbox" /> Tech</label>
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

          <div class="listing-grid listing-grid--wide">
            <ListingCard v-for="listing in listings" :key="listing.id" :listing="listing" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
