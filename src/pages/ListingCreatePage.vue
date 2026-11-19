<script setup lang="ts">
import { ref } from 'vue'

const listing = ref({
  title: 'Residential painting service',
  category: 'Home services',
  subcategory: 'Painting',
  listingType: 'Service',
  location: 'Quezon City',
  serviceArea: 'Metro Manila',
  price: '2400',
  priceType: 'Starting price',
  duration: '1-2 days',
  availability: 'Weekdays',
  description: 'I provide clean, high-quality wall repairs and painting for apartments and family homes.',
  requirements: '',
  experience: '5',
  email: 'angela.flores@example.com',
  phone: '+63 917 123 4567',
  showEmail: true,
  showPhone: false,
})

const photoPreviews = ref<string[]>([])
const published = ref(false)

function updatePhotos(event: Event) {
  const input = event.target as HTMLInputElement
  const files = Array.from(input.files ?? []).slice(0, 6)
  photoPreviews.value = files.map((file) => URL.createObjectURL(file))
}

function publishListing() {
  published.value = true
  window.setTimeout(() => {
    published.value = false
  }, 3000)
}
</script>

<template>
  <div class="page-shell">
    <div class="w-full max-w-6xl mx-auto space-y-6">
      <header class="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
        <div>
          <div class="breadcrumbs text-sm mb-2">
            <ul>
              <li><RouterLink to="/dashboard">Dashboard</RouterLink></li>
              <li>Create listing</li>
            </ul>
          </div>
          <h1 class="text-3xl sm:text-4xl font-bold tracking-tight">Create a new listing</h1>
          <p class="mt-2 text-base-content/65">Add clear details to help buyers understand and choose your service.</p>
        </div>
        <span class="badge badge-primary badge-soft">
          <span class="material-symbols-outlined text-base mr-1">draft</span>
          Draft
        </span>
      </header>

      <div v-if="published" role="status" class="alert alert-success alert-soft">
        <span class="material-symbols-outlined">check_circle</span>
        <span>Your listing has been published successfully.</span>
      </div>

      <form @submit.prevent="publishListing">
        <div class="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-6">
          <div class="space-y-6">
            <section class="card bg-base-100 border border-base-300 shadow-sm">
              <div class="card-body p-5 sm:p-7">
                <div>
                  <h2 class="card-title">Basic information</h2>
                  <p class="mt-1 text-sm text-base-content/60">Describe what you offer in a few clear words.</p>
                </div>

                <div class="mt-5 space-y-5">
                  <fieldset class="fieldset">
                    <legend class="fieldset-legend">Listing title <span class="text-error">*</span></legend>
                    <input v-model="listing.title" type="text" required maxlength="80" class="input input-bordered w-full" />
                    <div class="label">
                      <span class="label-text-alt text-base-content/50">A short, descriptive title</span>
                      <span class="label-text-alt text-base-content/50">{{ listing.title.length }}/80</span>
                    </div>
                  </fieldset>

                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <fieldset class="fieldset">
                      <legend class="fieldset-legend">Category <span class="text-error">*</span></legend>
                      <select v-model="listing.category" class="select select-bordered w-full">
                        <option>Home services</option>
                        <option>Design</option>
                        <option>Tech help</option>
                        <option>Lessons and tutoring</option>
                        <option>Events</option>
                      </select>
                    </fieldset>
                    <fieldset class="fieldset">
                      <legend class="fieldset-legend">Subcategory <span class="text-error">*</span></legend>
                      <select v-model="listing.subcategory" class="select select-bordered w-full">
                        <option>Painting</option>
                        <option>Plumbing</option>
                        <option>Electrical</option>
                        <option>Cleaning</option>
                        <option>Interior design</option>
                      </select>
                    </fieldset>
                  </div>

                  <fieldset class="fieldset">
                    <legend class="fieldset-legend">Listing type</legend>
                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <label v-for="type in ['Service', 'For sale', 'Wanted']" :key="type" class="label cursor-pointer justify-start gap-3 rounded-box border border-base-300 p-3 has-[:checked]:border-primary has-[:checked]:bg-primary/5">
                        <input v-model="listing.listingType" type="radio" name="listing-type" :value="type" class="radio radio-primary radio-sm" />
                        <span class="label-text font-medium">{{ type }}</span>
                      </label>
                    </div>
                  </fieldset>
                </div>
              </div>
            </section>

            <section class="card bg-base-100 border border-base-300 shadow-sm">
              <div class="card-body p-5 sm:p-7">
                <div>
                  <h2 class="card-title">Location and pricing</h2>
                  <p class="mt-1 text-sm text-base-content/60">Let customers know where and how you operate.</p>
                </div>
                <div class="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <fieldset class="fieldset">
                    <legend class="fieldset-legend">Primary location <span class="text-error">*</span></legend>
                    <label class="input input-bordered flex items-center gap-2 w-full">
                      <span class="material-symbols-outlined text-base text-base-content/50">location_on</span>
                      <input v-model="listing.location" type="text" required class="grow" />
                    </label>
                  </fieldset>
                  <fieldset class="fieldset">
                    <legend class="fieldset-legend">Service area</legend>
                    <input v-model="listing.serviceArea" type="text" class="input input-bordered w-full" />
                  </fieldset>
                  <fieldset class="fieldset">
                    <legend class="fieldset-legend">Price <span class="text-error">*</span></legend>
                    <label class="input input-bordered flex items-center gap-2 w-full">
                      <span class="text-sm font-semibold">₱</span>
                      <input v-model="listing.price" type="number" required min="0" class="grow" />
                    </label>
                  </fieldset>
                  <fieldset class="fieldset">
                    <legend class="fieldset-legend">Price type</legend>
                    <select v-model="listing.priceType" class="select select-bordered w-full">
                      <option>Starting price</option>
                      <option>Fixed price</option>
                      <option>Hourly rate</option>
                      <option>Request a quote</option>
                    </select>
                  </fieldset>
                  <fieldset class="fieldset">
                    <legend class="fieldset-legend">Typical duration</legend>
                    <select v-model="listing.duration" class="select select-bordered w-full">
                      <option>Under 1 hour</option>
                      <option>1-2 days</option>
                      <option>3-7 days</option>
                      <option>More than 1 week</option>
                    </select>
                  </fieldset>
                  <fieldset class="fieldset">
                    <legend class="fieldset-legend">Availability</legend>
                    <select v-model="listing.availability" class="select select-bordered w-full">
                      <option>Weekdays</option>
                      <option>Weekends</option>
                      <option>Every day</option>
                      <option>By appointment</option>
                    </select>
                  </fieldset>
                </div>
              </div>
            </section>

            <section class="card bg-base-100 border border-base-300 shadow-sm">
              <div class="card-body p-5 sm:p-7">
                <h2 class="card-title">Description and requirements</h2>
                <div class="mt-5 space-y-5">
                  <fieldset class="fieldset">
                    <legend class="fieldset-legend">Service description <span class="text-error">*</span></legend>
                    <div class="relative w-full">
                      <textarea v-model="listing.description" required maxlength="1000" class="textarea textarea-bordered h-36 w-full pb-8"></textarea>
                      <span class="absolute bottom-2 right-3 text-xs text-base-content/50">{{ listing.description.length }}/1000</span>
                    </div>
                  </fieldset>
                  <fieldset class="fieldset">
                    <legend class="fieldset-legend">Requirements or what you need from the buyer</legend>
                    <textarea v-model="listing.requirements" rows="4" maxlength="500" class="textarea textarea-bordered w-full" placeholder="Example: access to the room, size of the area, preferred schedule"></textarea>
                  </fieldset>
                  <fieldset class="fieldset">
                    <legend class="fieldset-legend">Years of experience</legend>
                    <input v-model="listing.experience" type="number" min="0" max="60" class="input input-bordered w-full sm:max-w-48" />
                  </fieldset>
                </div>
              </div>
            </section>

            <section class="card bg-base-100 border border-base-300 shadow-sm">
              <div class="card-body p-5 sm:p-7">
                <div>
                  <h2 class="card-title">Photos</h2>
                  <p class="mt-1 text-sm text-base-content/60">Add up to 6 high-quality photos.</p>
                </div>
                <label class="mt-5 grid min-h-36 place-items-center rounded-box border border-dashed border-base-300 bg-base-200/40 p-6 text-center cursor-pointer hover:border-primary">
                  <div v-if="photoPreviews.length" class="grid w-full grid-cols-2 sm:grid-cols-3 gap-3">
                    <img v-for="(photo, index) in photoPreviews" :key="photo" :src="photo" :alt="`Listing photo ${index + 1}`" class="h-28 w-full rounded-lg object-cover" />
                  </div>
                  <div v-else>
                    <span class="material-symbols-outlined text-4xl text-primary">add_photo_alternate</span>
                    <p class="mt-2 font-semibold">Upload photos</p>
                    <p class="mt-1 text-xs text-base-content/50">PNG or JPG, up to 5 MB each</p>
                  </div>
                  <input type="file" accept="image/png,image/jpeg" multiple class="hidden" @change="updatePhotos" />
                </label>
              </div>
            </section>
          </div>

          <aside class="space-y-6 lg:sticky lg:top-6 lg:self-start">
            <section class="card bg-base-100 border border-base-300 shadow-sm">
              <div class="card-body p-5">
                <h2 class="card-title text-lg">Contact details</h2>
                <div class="mt-4 space-y-4">
                  <fieldset class="fieldset">
                    <legend class="fieldset-legend">Email address</legend>
                    <input v-model="listing.email" type="email" class="input input-bordered w-full" />
                  </fieldset>
                  <fieldset class="fieldset">
                    <legend class="fieldset-legend">Phone number</legend>
                    <input v-model="listing.phone" type="tel" class="input input-bordered w-full" />
                  </fieldset>
                  <div class="divider my-1"></div>
                  <label class="label cursor-pointer justify-between gap-3 px-0">
                    <span class="label-text">Show email publicly</span>
                    <input v-model="listing.showEmail" type="checkbox" class="toggle toggle-primary toggle-sm" />
                  </label>
                  <label class="label cursor-pointer justify-between gap-3 px-0">
                    <span class="label-text">Show phone publicly</span>
                    <input v-model="listing.showPhone" type="checkbox" class="toggle toggle-primary toggle-sm" />
                  </label>
                </div>
              </div>
            </section>

            <section class="card bg-primary/5 border border-primary/20">
              <div class="card-body p-5">
                <div class="flex items-center gap-3">
                  <span class="material-symbols-outlined text-primary">tips_and_updates</span>
                  <h2 class="font-bold">Listing checklist</h2>
                </div>
                <ul class="mt-3 space-y-2 text-sm text-base-content/70">
                  <li class="flex gap-2"><span class="text-success">✓</span> Clear title</li>
                  <li class="flex gap-2"><span class="text-success">✓</span> Accurate location</li>
                  <li class="flex gap-2"><span class="text-base-content/40">○</span> Add recent photos</li>
                  <li class="flex gap-2"><span class="text-base-content/40">○</span> Set public contact details</li>
                </ul>
              </div>
            </section>

            <div class="flex flex-col gap-3">
              <button type="submit" class="btn btn-primary w-full">
                <span class="material-symbols-outlined">publish</span>
                Publish listing
              </button>
              <RouterLink to="/services" class="btn btn-outline w-full">Save as draft</RouterLink>
            </div>
          </aside>
        </div>
      </form>
    </div>
  </div>
</template>
