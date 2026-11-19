<script setup lang="ts">
import { type Listing } from '../data/mockData'

defineProps<{ listing: Listing }>()
</script>

<template>
<RouterLink :to="{ name: 'listing-details', params: { id: String(listing.id) } }" class="hover:text-primary">
  <article
    class="card bg-base-100 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
  >
    <figure class="relative h-56">
      <img :src="listing.image" :alt="listing.title" class="h-full w-full object-cover" />
      <span class="badge badge-neutral absolute left-3 top-3">{{ listing.badge }}</span>
    </figure>

    <div class="card-body gap-3 p-5">
      <div class="flex justify-between gap-2 text-xs font-bold uppercase text-base-content/60">
        <span>{{ listing.category }}</span>
        <span>{{ listing.location }}</span>
      </div>

      <h3 class="card-title text-lg">
          {{ listing.title }}
      </h3>
      <p class="text-base-content/70">{{ listing.description }}</p>

      <div class="flex items-end justify-between gap-3">
        <div class="flex items-center gap-1 text-warning">
          <span>★</span>
          <strong class="text-base-content">{{ listing.rating }}</strong>
          <small class="text-base-content/60">({{ listing.reviews }})</small>
        </div>
        <div class="flex items-center gap-2">
          <div class="text-lg font-extrabold text-primary">{{ listing.price }}</div>
          <RouterLink
            :to="{ path: '/messaging', query: { listing: String(listing.id) } }"
            class="btn btn-primary btn-sm btn-circle"
            :aria-label="listing.category === 'Jobs' ? `Chat about ${listing.title}` : `Message about ${listing.title}`"
          >
            <span class="material-symbols-outlined text-base">chat</span>
          </RouterLink>
        </div>
      </div>
    </div>
  </article>
</RouterLink>
</template>
