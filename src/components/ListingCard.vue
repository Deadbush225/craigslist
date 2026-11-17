<script setup lang="ts">
import { type Listing } from '../data/mockData'

defineProps<{ listing: Listing }>()
</script>

<template>
  <article class="listing-card">
    <div class="listing-card__media">
      <img :src="listing.image" :alt="listing.title" />
      <span class="listing-card__badge">{{ listing.badge }}</span>
    </div>

    <div class="listing-card__body">
      <div class="listing-card__meta">
        <span>{{ listing.category }}</span>
        <span>{{ listing.location }}</span>
      </div>

      <h3>{{ listing.title }}</h3>
      <p>{{ listing.description }}</p>

      <div class="listing-card__footer">
        <div class="listing-card__rating">
          <span>★</span>
          <strong>{{ listing.rating }}</strong>
          <small>({{ listing.reviews }})</small>
        </div>
        <div class="listing-card__price">{{ listing.price }}</div>
      </div>
    </div>
  </article>
</template>

<style scoped>
.listing-card {
  overflow: hidden;
  border: 1px solid rgba(214, 220, 243, 0.9);
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0 8px 20px rgba(85, 73, 128, 0.05);
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}

.listing-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 22px rgba(85, 73, 128, 0.08);
}

.listing-card__media {
  position: relative;
  height: 220px;
}

.listing-card__media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.listing-card__badge {
  position: absolute;
  top: 12px;
  left: 12px;
  padding: 6px 10px;
  border-radius: 999px;
  background: rgba(27, 35, 55, 0.8);
  color: white;
  font-size: 0.72rem;
  font-weight: 700;
}

.listing-card__body {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 18px;
}

.listing-card__meta {
  display: flex;
  justify-content: space-between;
  gap: 8px;
  font-size: 0.76rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--muted);
}

.listing-card__body h3 {
  margin: 0;
  font-size: 1.18rem;
  letter-spacing: -0.04em;
}

.listing-card__body p {
  margin: 0;
  color: var(--muted);
  line-height: 1.65;
}

.listing-card__footer {
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 12px;
  margin-top: 8px;
}

.listing-card__rating {
  display: flex;
  align-items: center;
  gap: 6px;
  color: #ffb11c;
  font-size: 0.85rem;
}

.listing-card__rating strong,
.listing-card__rating small {
  color: var(--text);
}

.listing-card__price {
  font-size: 1.1rem;
  font-weight: 800;
  color: var(--primary);
}
</style>
