<script setup lang="ts">
import BaseButton from '../components/BaseButton.vue'
import ListingCard from '../components/ListingCard.vue'
import { categories, listings } from '../data/mockData'
</script>

<template>
  <div class="page-shell page-shell--tight">
    <section class="container hero-directory">
      <!-- <div class="top-status-bar">
        <span class="hero-pill">58,240 verified active listings in Metro Manila today</span>
      </div> -->

      <div class="directory-hero card">
          <div class="hero-copy">
              <h1>Search verified contractors, service pros, and local product offers right in your area.</h1>
          <div class="search-panel">
            <div class="search-panel__location">
                <span class="material-symbols-outlined">near_me</span>
                <div>
                    <small>Neighborhood</small>
                    <strong>Makati / BGC (5km)</strong>
                </div>
            </div>
            <div class="search-panel__input">
              <span class="material-symbols-outlined">search</span>
              <input type="text" placeholder="Search furniture, licensed electricians, studio apartments, cargo bikes..." />
            </div>
        </div>
        <BaseButton to="/services">Find Listings</BaseButton>

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
          <h2>Explore Metro Manila by Category</h2>
        </div>
      </div>

      <div class="category-grid">
        <RouterLink v-for="category in categories" :key="category.name" :to="'/services'" class="category-card">
            <div class="category-header">
                <span class="category-icon material-symbols-outlined">{{ category.icon }}</span>
                <div class="category-title">
                    <strong>{{ category.name }}</strong>
                    <small>{{ category.description }}</small>
                </div>
            </div>
        </RouterLink>
      </div>
    </section>

    <section class="container section-block section-block--alt">
      <div class="section-heading">
        <div>
          <h2>Top services near you</h2>
        </div>
      </div>
      <div class="listing-grid">
        <ListingCard v-for="listing in listings" :key="listing.id" :listing="listing" />
      </div>
    </section>
  </div>
</template>

<style scoped>
.page-shell {
  padding-top: 28px;
}

.hero-directory {
  padding-top: 18px;
}

.directory-hero {
  padding: 26px 24px;
  background: linear-gradient(135deg, rgba(255,255,255,0.94), rgba(242,237,255,0.9));
}

.hero-copy {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.hero-copy h1 {
  margin: 0;
  font-size: clamp(2.4rem, 4vw, 4.4rem);
  line-height: 1.05;
  letter-spacing: -0.06em;
}

.hero-copy p {
  max-width: 660px;
  margin: 0;
  color: var(--muted);
  font-size: 1.08rem;
  line-height: 1.8;
}

.search-panel {
  display: flex;
  align-items: center;
  gap: 14px;
  flex-wrap: wrap;
  margin-top: 18px;
}

.search-panel__input,
.search-panel__location {
  display: flex;
  align-items: center;
  gap: 10px;
  min-height: 52px;
  padding: 0 16px;
  border: 1px solid var(--border);
  border-radius: 14px;
  background: rgba(255,255,255,0.75);
}

.search-panel__input {
  flex: 1 1 360px;
}

.search-panel__input input,
.search-panel__location input {
  border: 0;
  background: transparent;
  outline: none;
  width: 100%;
  color: var(--text);
}

.search-panel__location {
  min-width: 220px;
}

.search-panel__location small {
  display: block;
  color: var(--muted);
  font-size: 0.68rem;
  text-transform: uppercase;
}

.search-panel__location strong {
  font-size: 0.92rem;
}

.quick-query-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  margin-top: 18px;
  color: var(--muted);
  font-size: 0.8rem;
}

.query-chip {
  border: 1px solid var(--border);
  background: rgba(255,255,255,0.7);
  border-radius: 999px;
  padding: 7px 12px;
  color: var(--text);
}

.section-block {
  padding-top: 32px;
}

.section-block--alt {
  padding-top: 18px;
}

.section-heading {
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 18px;
  margin-bottom: 18px;
}

.section-heading h2 {
  margin: 0;
  font-size: clamp(1.8rem, 2vw, 2.6rem);
  letter-spacing: -0.05em;
}

.category-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}

.category-header {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 12px;
}

.category-card {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 24px 18px;
  background: rgba(255, 255, 255, 0.75);
  border: 1px solid rgba(214, 220, 243, 0.9);
  border-radius: var(--radius-lg);
  box-shadow: 0 12px 24px rgba(20, 32, 60, 0.05);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.category-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 16px 34px rgba(23, 34, 61, 0.08);
}

.category-title {
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.category-icon {
  width: 52px;
  height: 52px;
  display: grid;
  place-items: center;
  font-size: 1.8rem;
  border-radius: 14px;
  background: linear-gradient(135deg, #e8ebff, #f2f3ff);
}

.category-card strong {
  font-size: 1.06rem;
}

.category-card small {
  color: var(--muted);
}

.listing-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
}

@media (max-width: 980px) {
  .category-grid,
  .listing-grid {
    grid-template-columns: 1fr;
  }
}
</style>
