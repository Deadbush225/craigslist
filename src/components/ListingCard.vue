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
