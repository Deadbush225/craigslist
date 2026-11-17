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

<style scoped>
.service-page-panel {
  padding-top: 20px;
}

.breadcrumb-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  font-size: 0.82rem;
  color: var(--muted);
  margin-bottom: 16px;
}

.service-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  padding: 14px 16px;
  margin-bottom: 16px;
}

.service-search-box {
  display: flex;
  align-items: center;
  gap: 10px;
  min-height: 52px;
  padding: 0 16px;
  border: 1px solid var(--border);
  border-radius: 14px;
  background: rgba(255,255,255,0.75);
  flex: 1;
}

.service-search-box input {
  border: 0;
  background: transparent;
  outline: none;
  width: 100%;
  color: var(--text);
}

.service-search-box button,
.service-toolbar__info button {
  border: 0;
  background: transparent;
  color: var(--primary);
  font-weight: 700;
}

.service-toolbar__info {
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--muted);
  font-weight: 700;
}

.long-row {
  margin-bottom: 22px;
}

.filter-row {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
}

.chip {
  padding: 0.68rem 0.95rem;
  border-radius: 999px;
  border: 1px solid var(--border);
  background: rgba(255, 255, 255, 0.66);
  color: var(--muted);
  font-weight: 700;
}

.chip.active {
  background: var(--primary);
  border-color: transparent;
  color: white;
}

.services-layout {
  display: grid;
  grid-template-columns: 290px minmax(0, 1fr);
  gap: 24px;
}

.sidebar {
  padding: 22px 18px;
}

.filter-group {
  margin-top: 22px;
}

.filter-group label {
  display: block;
  margin-bottom: 10px;
  font-weight: 700;
  color: var(--text);
}

.filter-group input[type='range'] {
  width: 100%;
  accent-color: var(--primary);
}

.stacked-options {
  display: grid;
  gap: 10px;
  color: var(--muted);
}

.stacked-options label {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 500;
}

.results-panel {
  min-width: 0;
}

.listing-grid--wide {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

@media (max-width: 980px) {
  .services-layout {
    grid-template-columns: 1fr;
  }
}
</style>
