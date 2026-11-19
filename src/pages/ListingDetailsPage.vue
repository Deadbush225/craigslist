<script setup lang="ts">
import { computed, ref } from 'vue'
import { listings, providers } from '../data/mockData'

const props = defineProps<{ id: string }>()
const listing = computed(() => listings.find((item) => String(item.id) === String(props.id)) ?? listings[0])
const provider = computed(() => providers.find((item) => item.id === listing.value.providerId) ?? providers[0])
const activeImage = ref(0)
const isSaved = ref(false)
const notice = ref('')
const copied = ref(false)

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

const relatedListings = computed(() =>
  listings
    .filter((item) => item.id !== listing.value.id && item.category === listing.value.category)
    .slice(0, 3),
)

function toggleSaved() {
  isSaved.value = !isSaved.value
  notice.value = isSaved.value ? 'Listing saved to your favorites.' : 'Listing removed from your favorites.'
  window.setTimeout(() => { notice.value = '' }, 2400)
}

async function shareListing() {
  const url = window.location.href
  try {
    if (navigator.share) {
      await navigator.share({ title: listing.value.title, text: listing.value.description, url })
    } else {
      await navigator.clipboard.writeText(url)
      copied.value = true
      window.setTimeout(() => { copied.value = false }, 2400)
    }
  } catch {
    // Closing the native share sheet should not change the page.
  }
}
</script>

<template>
  <div class="page-shell page-shell--tight">
    <div class="container max-w-7xl">
      <div v-if="notice" role="status" class="toast toast-top toast-end z-50">
        <div class="alert alert-success shadow-lg">
          <span class="material-symbols-outlined">check_circle</span>
          <span>{{ notice }}</span>
        </div>
      </div>

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
              <div class="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-base-content/65">
                <span class="flex items-center gap-1">
                  <span class="material-symbols-outlined text-base">location_on</span>
                  {{ listing.location }}
                </span>
                <span class="flex items-center gap-1">
                  <span class="material-symbols-outlined text-base">schedule</span>
                  Listed today
                </span>
                <span class="flex items-center gap-1">
                  <span class="material-symbols-outlined text-base text-warning">star</span>
                  {{ listing.rating }} ({{ listing.reviews }} reviews)
                </span>
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
              <h2 class="card-title">Listing details</h2>
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

          <section class="card bg-base-100 border border-base-300 shadow-sm">
            <div class="card-body p-5 sm:p-7">
              <h2 class="card-title">About this listing</h2>
              <p class="mt-3 leading-7 text-base-content/75">
                {{ listing.description }} The seller or provider includes clear scope details and upfront communication before work or pickup begins.
                Buyers and clients can confirm timing, included materials, payment terms, and any requirements through the listing chat.
              </p>
              <div class="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div class="rounded-box border border-base-300 p-4">
                  <span class="material-symbols-outlined text-primary">verified_user</span>
                  <p class="mt-2 font-bold">Verified credentials</p>
                  <p class="text-sm text-base-content/60">Identity and listed qualifications checked</p>
                </div>
                <div class="rounded-box border border-base-300 p-4">
                  <span class="material-symbols-outlined text-primary">payments</span>
                  <p class="mt-2 font-bold">Clear pricing</p>
                  <p class="text-sm text-base-content/60">Confirm the final quote before booking</p>
                </div>
                <div class="rounded-box border border-base-300 p-4">
                  <span class="material-symbols-outlined text-primary">chat</span>
                  <p class="mt-2 font-bold">Direct contact</p>
                  <p class="text-sm text-base-content/60">Ask questions without sharing personal details</p>
                </div>
              </div>
            </div>
          </section>

          <section class="card bg-base-100 border border-base-300 shadow-sm">
            <div class="card-body p-5 sm:p-7">
              <div class="flex items-center justify-between gap-3">
                <h2 class="card-title">Location</h2>
                <span class="badge badge-ghost">{{ listing.location }}</span>
              </div>
              <div class="mt-4 relative h-52 overflow-hidden rounded-box bg-primary/10 border border-base-300" role="img" aria-label="Map placeholder for listing location">
                <div class="absolute inset-0 opacity-40" style="background-image: linear-gradient(32deg, transparent 47%, rgba(91,100,140,.22) 48%, rgba(91,100,140,.22) 52%, transparent 53%), linear-gradient(90deg, transparent 47%, rgba(91,100,140,.16) 48%, rgba(91,100,140,.16) 52%, transparent 53%); background-size: 70px 70px;"></div>
                <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-2 rounded-full bg-base-100 px-4 py-2 shadow-lg">
                  <span class="material-symbols-outlined text-primary">location_on</span>
                  <strong>{{ listing.location }}</strong>
                </div>
              </div>
            </div>
          </section>

          <section class="card bg-base-100 border border-base-300 shadow-sm">
            <div class="card-body p-5 sm:p-7">
              <h2 class="card-title">Frequently asked questions</h2>
              <div class="mt-3 join join-vertical w-full">
                <div class="collapse collapse-arrow join-item border border-base-300">
                  <input type="radio" name="listing-faq" :checked="true" />
                  <div class="collapse-title font-semibold">What is included?</div>
                  <div class="collapse-content text-sm text-base-content/70">
                    Scope and inclusions can be confirmed in chat before you place an order or schedule a visit.
                  </div>
                </div>
                <div class="collapse collapse-arrow join-item border border-base-300">
                  <input type="radio" name="listing-faq" />
                  <div class="collapse-title font-semibold">Can I change the schedule?</div>
                  <div class="collapse-content text-sm text-base-content/70">
                    Yes. Message the seller or provider to agree on a date and cancellation terms.
                  </div>
                </div>
                <div class="collapse collapse-arrow join-item border border-base-300">
                  <input type="radio" name="listing-faq" />
                  <div class="collapse-title font-semibold">How do I make a payment?</div>
                  <div class="collapse-content text-sm text-base-content/70">
                    Use the listed contact method to agree on cash, GCash, Maya, or bank transfer payment terms.
                  </div>
                </div>
              </div>
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
              <button type="button" class="btn btn-outline w-full" :class="{ 'btn-soft': isSaved }" @click="toggleSaved">
                <span class="material-symbols-outlined">{{ isSaved ? 'bookmark_added' : 'bookmark' }}</span>
                {{ isSaved ? 'Saved' : 'Save listing' }}
              </button>
              <button type="button" class="btn btn-ghost btn-sm w-full" @click="shareListing">
                <span class="material-symbols-outlined">share</span>
                {{ copied ? 'Link copied' : 'Share listing' }}
              </button>

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
                  <p class="mt-1 flex items-center gap-1 text-xs">
                    <span class="material-symbols-outlined text-sm text-warning">star</span>
                    {{ provider.rating }} · {{ provider.reviews }} reviews
                  </p>
                </div>
              </div>
              <div v-if="listing.providerId" class="mt-4 rounded-box bg-base-200 p-3 text-xs text-base-content/70">
                <span class="flex items-center gap-2">
                  <span class="status status-success"></span>
                  {{ provider.responseTime }}
                </span>
              </div>
              <button type="button" class="btn btn-link btn-sm text-error no-underline mt-2">
                <span class="material-symbols-outlined text-base">flag</span>
                Report this listing
              </button>
            </div>
          </section>
        </aside>
      </div>

      <section v-if="relatedListings.length" class="mt-8">
        <div class="mb-4 flex items-end justify-between gap-3">
          <div>
            <p class="text-sm font-bold text-primary">More from {{ listing.category }}</p>
            <h2 class="text-2xl font-bold">Similar listings</h2>
          </div>
          <RouterLink to="/services" class="btn btn-ghost btn-sm">View all</RouterLink>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <RouterLink
            v-for="item in relatedListings"
            :key="item.id"
            :to="{ name: 'listing-details', params: { id: String(item.id) } }"
            class="card bg-base-100 border border-base-300 shadow-sm overflow-hidden hover:shadow-md transition"
          >
            <figure class="h-44"><img :src="item.image" :alt="item.title" class="h-full w-full object-cover" /></figure>
            <div class="card-body p-4">
              <span class="text-xs font-bold text-base-content/55">{{ item.location }}</span>
              <h3 class="card-title text-base">{{ item.title }}</h3>
              <p class="font-bold text-primary">{{ item.price }}</p>
            </div>
          </RouterLink>
        </div>
      </section>
    </div>
  </div>
</template>
