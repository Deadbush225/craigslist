<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import ListingCard from '../components/ListingCard.vue'
import { categories, categorySubcategories, listings } from '../data/mockData'

const route = useRoute()
const router = useRouter()

const selectedCategory = ref(typeof route.query.category === 'string' ? route.query.category : 'All Categories')
const selectedSubcategory = ref(typeof route.query.subcategory === 'string' ? route.query.subcategory : 'All')
const searchQuery = ref(typeof route.query.q === 'string' ? route.query.q : '')
const freeQuoteOnly = ref(route.query.freeQuote === 'true')
const selectedCredentials = ref<string[]>([])

const categoryNames = computed(() => ['All Categories', ...categories.map((category) => category.name)])
const availableSubcategories = computed(() =>
  selectedCategory.value === 'All Categories'
    ? []
    : ['All', ...(categorySubcategories[selectedCategory.value] ?? [])],
)

const categoryListings = computed(() =>
  selectedCategory.value === 'All Categories'
    ? listings
    : listings.filter((listing) => listing.category === selectedCategory.value),
)

const actualPriceBounds = computed(() => {
  const prices = categoryListings.value
    .map((listing) => listing.priceValue)
    .filter((price) => price > 0)

  return {
    min: prices.length ? Math.min(...prices) : 0,
    max: prices.length ? Math.max(...prices) : 100000,
  }
})

const minimumPrice = ref(actualPriceBounds.value.min)
const maximumPrice = ref(actualPriceBounds.value.max)

const priceRangeStyle = computed(() => {
  const { min, max } = actualPriceBounds.value
  const span = max - min || 1
  const clamp = (v: number) => Math.min(100, Math.max(0, v))

  const start = clamp(((minimumPrice.value - min) / span) * 100)
  const end = clamp(((maximumPrice.value - min) / span) * 100)

  return {
    '--range-start': `${Math.min(start, end)}%`,
    '--range-end': `${Math.max(start, end)}%`,
  }
})

const credentialOptions = computed(() => {
  const source = categoryListings.value.filter((listing) =>
    selectedSubcategory.value === 'All'
      ? true
      : listing.subcategory === selectedSubcategory.value,
  )

  return [...new Set(source.flatMap((listing) => listing.credentials))]
})

const filteredListings = computed(() =>
  listings.filter((listing) => {
    const matchesCategory =
      selectedCategory.value === 'All Categories' || listing.category === selectedCategory.value
    const matchesSubcategory =
      selectedSubcategory.value === 'All' || listing.subcategory === selectedSubcategory.value
    const query = searchQuery.value.trim().toLowerCase()
    const matchesSearch =
      !query ||
      listing.title.toLowerCase().includes(query) ||
      listing.description.toLowerCase().includes(query) ||
      listing.subcategory.toLowerCase().includes(query) ||
      listing.location.toLowerCase().includes(query)
    const matchesPrice =
      listing.priceValue === 0 ||
      (listing.priceValue >= minimumPrice.value && listing.priceValue <= maximumPrice.value)
    const matchesFreeQuote = !freeQuoteOnly.value || listing.freeQuote
    const matchesCredentials =
      selectedCredentials.value.length === 0 ||
      selectedCredentials.value.every((credential) => listing.credentials.includes(credential))

    return (
      matchesCategory &&
      matchesSubcategory &&
      matchesSearch &&
      matchesPrice &&
      matchesFreeQuote &&
      matchesCredentials
    )
  }),
)

function updateRoute() {
  router.replace({
    query: {
      ...(selectedCategory.value !== 'All Categories' ? { category: selectedCategory.value } : {}),
      ...(selectedSubcategory.value !== 'All' ? { subcategory: selectedSubcategory.value } : {}),
      ...(searchQuery.value.trim() ? { q: searchQuery.value.trim() } : {}),
      ...(freeQuoteOnly.value ? { freeQuote: 'true' } : {}),
    },
  })
}

watch(selectedCategory, (category) => {
  selectedSubcategory.value = 'All'
  selectedCredentials.value = []
  const bounds = category === 'All Categories'
    ? {
        min: Math.min(...listings.map((listing) => listing.priceValue).filter((price) => price > 0)),
        max: Math.max(...listings.map((listing) => listing.priceValue).filter((price) => price > 0)),
      }
    : (() => {
        const prices = listings
          .filter((listing) => listing.category === category)
          .map((listing) => listing.priceValue)
          .filter((price) => price > 0)
        return { min: Math.min(...prices), max: Math.max(...prices) }
      })()

  minimumPrice.value = bounds.min
  maximumPrice.value = bounds.max
  updateRoute()
})

watch([selectedSubcategory, searchQuery, freeQuoteOnly], updateRoute)

watch(
  () => route.query,
  (query) => {
    selectedCategory.value = typeof query.category === 'string' ? query.category : 'All Categories'
    selectedSubcategory.value = typeof query.subcategory === 'string' ? query.subcategory : 'All'
    searchQuery.value = typeof query.q === 'string' ? query.q : ''
    freeQuoteOnly.value = query.freeQuote === 'true'
  },
)

watch(actualPriceBounds, (bounds) => {
  if (minimumPrice.value < bounds.min) minimumPrice.value = bounds.min
  if (maximumPrice.value > bounds.max) maximumPrice.value = bounds.max
})

function chooseSubcategory(subcategory: string) {
  selectedSubcategory.value = subcategory
  selectedCredentials.value = []
  updateRoute()
}

function resetFilters() {
  selectedCategory.value = 'All Categories'
  selectedSubcategory.value = 'All'
  searchQuery.value = ''
  freeQuoteOnly.value = false
  selectedCredentials.value = []
  minimumPrice.value = actualPriceBounds.value.min
  maximumPrice.value = actualPriceBounds.value.max
  updateRoute()
}
</script>

<template>
  <div class="page-shell page-shell--tight">
    <section class="w-full flex flex-col gap-6">
      <nav class="breadcrumbs text-sm" aria-label="Breadcrumb">
        <ul>
          <li><RouterLink to="/">Craigslist</RouterLink></li>
          <li><RouterLink to="/services">Metro Manila (NCR)</RouterLink></li>
          <li>
            <RouterLink
              :to="selectedCategory === 'All Categories' ? '/services' : { path: '/services', query: { category: selectedCategory } }"
            >
              {{ selectedCategory === 'All Categories' ? 'Browse' : selectedCategory }}
            </RouterLink>
          </li>
          <li v-if="selectedSubcategory !== 'All'">{{ selectedSubcategory }}</li>
        </ul>
      </nav>

      <div class="card bg-base-100 border border-base-300 shadow-sm p-3 sm:p-4">
        <div class="join w-full flex-wrap gap-2 sm:flex-nowrap">
          <select
            v-model="selectedCategory"
            class="select select-bordered join-item w-full sm:w-52"
            aria-label="Select category"
          >
            <option v-for="category in categoryNames" :key="category" :value="category">
              {{ category }}
            </option>
          </select>

          <label class="input input-bordered join-item flex flex-1 items-center gap-2">
            <span class="material-symbols-outlined">search</span>
            <input v-model="searchQuery" type="text" class="grow" placeholder="Search listings, subtypes, or locations" />
          </label>

          <button type="button" class="btn btn-primary join-item" @click="updateRoute">
            Search
          </button>
        </div>
      </div>

      <div class="filter flex-wrap gap-2" aria-label="Category filters">
        <button
          v-for="subcategory in availableSubcategories"
          :key="subcategory"
          type="button"
          class="btn btn-sm"
          :class="selectedSubcategory === subcategory ? 'btn-primary' : 'btn-outline'"
          @click="chooseSubcategory(subcategory)"
        >
          {{ subcategory }}
        </button>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-[18rem_minmax(0,1fr)] gap-6">
        <aside class="card bg-base-100 border border-base-300 shadow-sm h-fit lg:sticky lg:top-24">
          <div class="card-body p-5">
            <div class="flex items-center justify-between gap-3">
              <h2 class="card-title">Filters</h2>
              <button type="button" class="btn btn-ghost btn-sm" @click="resetFilters">Reset</button>
            </div>

            <fieldset class="fieldset mt-4">
              <legend class="fieldset-legend">Price range</legend>
              <div class="grid grid-cols-2 gap-3">
                <label class="form-control">
                  <span class="label-text mb-1 block">Minimum</span>
                  <input
                    v-model.number="minimumPrice"
                    type="number"
                    class="input input-bordered w-full"
                    :min="actualPriceBounds.min"
                    :max="maximumPrice"
                  />
                </label>
                <label class="form-control">
                  <span class="label-text mb-1 block">Maximum</span>
                  <input
                    v-model.number="maximumPrice"
                    type="number"
                    class="input input-bordered w-full"
                    :min="minimumPrice"
                    :max="actualPriceBounds.max"
                  />
                </label>
              </div>
              <div
                class="dual-range"
                role="group"
                aria-label="Adjust minimum and maximum price"
                :style="priceRangeStyle"
              >
                <div class="dual-range__rail bg-base-content/10"></div>
                <div class="dual-range__track-wrap">
                    <div class="dual-range__track bg-primary"></div>
                </div>
                <input
                  v-model.number="minimumPrice"
                  type="range"
                  class="dual-range__input"
                  :min="actualPriceBounds.min"
                  :max="actualPriceBounds.max"
                  :aria-valuemin="actualPriceBounds.min"
                  :aria-valuemax="maximumPrice"
                  aria-label="Minimum price"
                />
                <input
                  v-model.number="maximumPrice"
                  type="range"
                  class="dual-range__input dual-range__input--top"
                  :min="actualPriceBounds.min"
                  :max="actualPriceBounds.max"
                  :aria-valuemin="minimumPrice"
                  :aria-valuemax="actualPriceBounds.max"
                  aria-label="Maximum price"
                />
              </div>
              <div class="flex justify-between text-xs text-base-content/60">
                <span>₱{{ actualPriceBounds.min.toLocaleString() }}</span>
                <span>₱{{ actualPriceBounds.max.toLocaleString() }}</span>
            </div>
            </fieldset>

            <fieldset class="fieldset mt-2">
              <legend class="fieldset-legend">Service & availability</legend>
              <label class="label cursor-pointer justify-start gap-3">
                <input v-model="freeQuoteOnly" type="checkbox" class="checkbox checkbox-primary checkbox-sm" />
                <span>Free quote available</span>
              </label>
            </fieldset>

            <fieldset v-if="credentialOptions.length" class="fieldset mt-2">
              <legend class="fieldset-legend">Credentials & verification</legend>
              <label
                v-for="credential in credentialOptions"
                :key="credential"
                class="label cursor-pointer justify-start gap-3"
              >
                <input
                  v-model="selectedCredentials"
                  type="checkbox"
                  class="checkbox checkbox-primary checkbox-sm"
                  :value="credential"
                />
                <span>{{ credential }}</span>
              </label>
            </fieldset>
          </div>
        </aside>

        <div class="min-w-0">
          <div class="mb-4 flex items-center justify-between">
            <p class="font-semibold">{{ filteredListings.length }} results</p>
          </div>

          <div v-if="filteredListings.length" class="grid grid-cols-1 xl:grid-cols-2 gap-5">
            <ListingCard v-for="listing in filteredListings" :key="listing.id" :listing="listing" />
          </div>
          <div v-else class="card bg-base-100 border border-base-300 p-10 text-center">
            <span class="material-symbols-outlined text-4xl text-base-content/40">search_off</span>
            <h2 class="mt-3 text-xl font-bold">No listings match these filters</h2>
            <button type="button" class="btn btn-primary btn-sm mt-4" @click="resetFilters">Clear filters</button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.dual-range {
  --thumb-size: 16px;
  --track-height: 5px;
  position: relative;
  height: 26px;
  margin-top: 4px;
}

/* Full-width inactive rail */
.dual-range__rail {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: var(--track-height);
  transform: translateY(-50%);
  border-radius: 9999px;
}

/* Inset by half the thumb width so 0%–100% maps to thumb centers */
.dual-range__track-wrap {
  position: absolute;
  top: 50%;
  left: calc(var(--thumb-size) / 2);
  right: calc(var(--thumb-size) / 2);
  height: var(--track-height);
  transform: translateY(-50%);
  pointer-events: none;
}

.dual-range__track {
  position: absolute;
  top: 1px;
  bottom: 0;
  left: var(--range-start);
  right: calc(100% - var(--range-end));
  border-radius: 9999px;
}

.dual-range__input {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  margin: 0; /* removes default browser range margin */
  padding: 0;
  background: transparent;
  pointer-events: none;
  appearance: none;
  -webkit-appearance: none;
  z-index: 2;
}

/* Brings min thumb in front when both thumbs meet near the max end */
.dual-range__input--front {
  z-index: 3;
}

.dual-range__input::-webkit-slider-runnable-track {
  height: var(--track-height);
  background: transparent;
  border: none;
}

.dual-range__input::-moz-range-track {
  height: var(--track-height);
  background: transparent;
  border: none;
}

.dual-range__input::-webkit-slider-thumb {
  appearance: none;
  -webkit-appearance: none;
  pointer-events: auto;
  cursor: pointer;
  width: var(--thumb-size);
  height: var(--thumb-size);
  margin-top: calc((var(--track-height) - var(--thumb-size)) / 2);
  border-radius: 9999px;
  background: var(--color-primary, oklch(var(--p)));
  border: 2px solid var(--color-base-100, oklch(var(--b1)));
  box-shadow: 0 1px 3px rgb(0 0 0 / 0.25);
}

.dual-range__input::-moz-range-thumb {
  pointer-events: auto;
  cursor: pointer;
  box-sizing: border-box;
  width: var(--thumb-size);
  height: var(--thumb-size);
  border-radius: 9999px;
  background: var(--color-primary, oklch(var(--p)));
  border: 2px solid var(--color-base-100, oklch(var(--b1)));
  box-shadow: 0 1px 3px rgb(0 0 0 / 0.25);
}
</style>