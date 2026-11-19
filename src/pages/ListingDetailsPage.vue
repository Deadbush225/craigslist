<script setup lang="ts">
import { computed, ref } from 'vue'
import { listings, providers } from '../data/mockData'

const props = defineProps<{ id: string }>()
const listing = computed(() => listings.find((item) => String(item.id) === String(props.id)) ?? listings[0])
const provider = computed(() => providers.find((item) => item.id === listing.value.providerId) ?? providers[0])
const activeImage = ref(0)

const detailLabels = computed(() => {
  const category = listing.value.category
  if (category === 'Jobs') return { primary: 'Employment type', secondary: 'Compensation', tertiary: 'Work setup' }
  if (category === 'Housing') return { primary: 'Property type', secondary: 'Monthly rent', tertiary: 'Availability' }
  if (category === 'For Sale') return { primary: 'Condition', secondary: 'Selling price', tertiary: 'Delivery' }
  if (category === 'Gigs') return { primary: 'Project type', secondary: 'Project fee', tertiary: 'Availability' }
  return { primary: 'Service category', secondary: 'Starting rate', tertiary: 'Response time' }
})

const gallery = computed(() => [
  listing.value.image,
  'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80',
])
</script>

<template>
  <div class="page-shell page-shell--tight">
    <div class="container max-w-7xl">
      <div class="breadcrumbs text-sm mb-5">
        <ul>
          <li><RouterLink to="/">Craigslist</RouterLink></li>
          <li><RouterLink to="/services">{{ listing.category }}</RouterLink></li>
          <li>{{ listing.subcategory }}</li>
        </ul>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-[minmax(0,1.55fr)_minmax(280px,.45fr)] gap-6">
        <main class="space-y-6 min-w-0">
          <section class="card bg-base-100 border border-base-300 shadow-sm overflow-hidden">
            <figure class="relative h-[360px] bg-base-200">
              <img :src="gallery[activeImage]" :alt="listing.title" class="h-full w-full object-cover" />
              <div class="absolute inset-x-4 bottom-4 flex justify-between">
                <button type="button" class="btn btn-circle btn-sm" aria-label="Previous photo" @click="activeImage = (activeImage + gallery.length - 1) % gallery.length">
                  <span class="material-symbols-outlined">chevron_left</span>
                </button>
                <span class="badge bg-base-100/95">{{ activeImage + 1 }} / {{ gallery.length }}</span>
                <button type="button" class="btn btn-circle btn-sm" aria-label="Next photo" @click="activeImage = (activeImage + 1) % gallery.length">
                  <span class="material-symbols-outlined">chevron_right</span>
                </button>
              </div>
            </figure>
            <div class="card-body p-5 sm:p-7">
              <div class="flex flex-wrap items-center justify-between gap-3">
                <span class="badge badge-primary badge-outline">{{ listing.category }} · {{ listing.subcategory }}</span>
                <span class="badge">{{ listing.badge }}</span>
              </div>
              <h1 class="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">{{ listing.title }}</h1>
              <div class="flex items-center gap-2 text-sm text-base-content/65">
                <span class="material-symbols-outlined text-base">location_on</span>
                {{ listing.location }}
              </div>
              <p class="mt-3 leading-7 text-base-content/75">{{ listing.description }}</p>
              <div class="mt-5 flex flex-wrap gap-2">
                <span v-for="credential in listing.credentials" :key="credential" class="badge badge-lg badge-ghost">
                  <span class="material-symbols-outlined mr-1 text-sm text-success">verified</span>
                  {{ credential }}
                </span>
              </div>
            </div>
          </section>

          <section class="card bg-base-100 border border-base-300 shadow-sm">
            <div class="card-body p-5 sm:p-7">
              <h2 class="card-title">Details</h2>
              <dl class="mt-3 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-base-300">
                <div class="py-3 sm:px-4 sm:py-0 first:pl-0">
                  <dt class="text-xs text-base-content/60">{{ detailLabels.primary }}</dt>
                  <dd class="mt-1 font-semibold">{{ listing.subcategory }}</dd>
                </div>
                <div class="py-3 sm:px-4 sm:py-0">
                  <dt class="text-xs text-base-content/60">{{ detailLabels.secondary }}</dt>
                  <dd class="mt-1 font-bold text-primary">{{ listing.price }}</dd>
                </div>
                <div class="py-3 sm:px-4 sm:py-0">
                  <dt class="text-xs text-base-content/60">{{ detailLabels.tertiary }}</dt>
                  <dd class="mt-1 font-semibold">{{ listing.category === 'Services' ? provider.responseTime : 'Ready for inquiry' }}</dd>
                </div>
              </dl>
            </div>
          </section>
        </main>

        <aside class="space-y-5">
          <section class="card bg-base-100 border border-base-300 shadow-sm sticky top-24">
            <div class="card-body p-5">
              <p class="text-sm text-base-content/60">{{ detailLabels.secondary }}</p>
              <p class="text-3xl font-bold text-primary">{{ listing.price }}</p>
              <RouterLink :to="{ path: '/messaging', query: { listing: String(listing.id) } }" class="btn btn-primary w-full mt-4">
                <span class="material-symbols-outlined">chat</span>
                {{ listing.category === 'Jobs' ? 'Contact employer' : 'Send a message' }}
              </RouterLink>
              <button type="button" class="btn btn-outline w-full">Save listing</button>

              <div v-if="listing.providerId" class="divider"></div>
              <div v-if="listing.providerId" class="flex items-center gap-3">
                <div class="avatar">
                  <div class="w-12 rounded-full">
                    <img :src="provider.image" :alt="provider.name" />
                  </div>
                </div>
                <div class="min-w-0">
                  <RouterLink :to="{ name: 'provider', params: { id: String(provider.id) } }" class="font-bold hover:text-primary">
                    {{ provider.name }}
                  </RouterLink>
                  <p class="text-xs text-base-content/60">{{ provider.role }}</p>
                </div>
              </div>
            </div>
          </section>
        </aside>
      </div>
    </div>
  </div>
</template>
