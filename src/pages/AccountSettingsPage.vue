<script setup lang="ts">
import { ref } from 'vue'

const profile = ref({
  name: 'Angela Flores',
  username: 'angelaf',
  email: 'angela.flores@example.com',
  phone: '+63 917 123 4567',
  bio: 'Home styling and interior painting professional serving Metro Manila.',
})

const password = ref({
  current: '',
  next: '',
  confirm: '',
})

const preferences = ref({
  language: 'English (Philippines)',
  currency: 'Philippine Peso (PHP)',
  timezone: 'Asia/Manila',
  distance: '25',
  theme: 'Light',
})

const notifications = ref({
  messages: true,
  listingUpdates: true,
  marketing: false,
  bookingReminders: true,
})

const privacy = ref({
  publicProfile: true,
  showPhone: false,
  showEmail: false,
  twoFactor: false,
})

const avatar = ref('https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80')
const saved = ref(false)
const showPassword = ref(false)

function updateAvatar(event: Event) {
  const input = event.target as HTMLInputElement
  const file = input.files?.[0]
  if (file) avatar.value = URL.createObjectURL(file)
}

function saveChanges() {
  saved.value = true
  window.setTimeout(() => {
    saved.value = false
  }, 3000)
}
</script>

<template>
  <div class="page-shell">
    <div class="w-full max-w-5xl mx-auto space-y-6">
      <header class="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
        <div>
          <div class="breadcrumbs text-sm mb-2">
            <ul>
              <li><RouterLink to="/dashboard">Dashboard</RouterLink></li>
              <li>Account settings</li>
            </ul>
          </div>
          <h1 class="text-3xl sm:text-4xl font-bold tracking-tight">Account settings</h1>
          <p class="mt-2 text-base-content/65">Manage your profile, security, and marketplace preferences.</p>
        </div>
        <button type="button" class="btn btn-primary" @click="saveChanges">
          <span class="material-symbols-outlined">save</span>
          Save changes
        </button>
      </header>

      <div v-if="saved" role="status" class="alert alert-success alert-soft">
        <span class="material-symbols-outlined">check_circle</span>
        <span>Your account settings have been saved.</span>
      </div>

      <section class="card bg-base-100 border border-base-300 shadow-sm">
        <div class="card-body p-5 sm:p-7">
          <h2 class="card-title">Profile</h2>
          <div class="mt-4 grid grid-cols-1 md:grid-cols-[160px_minmax(0,1fr)] gap-6">
            <div class="flex flex-col items-center gap-3">
              <div class="avatar">
                <div class="w-32 rounded-full ring ring-base-300 ring-offset-2 ring-offset-base-100">
                  <img :src="avatar" alt="Profile preview" />
                </div>
              </div>
              <label class="btn btn-outline btn-sm">
                <span class="material-symbols-outlined text-base">upload</span>
                Change photo
                <input type="file" accept="image/*" class="hidden" @change="updateAvatar" />
              </label>
              <p class="text-xs text-base-content/50 text-center">JPG or PNG, up to 5 MB</p>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <label class="form-control">
                <span class="label-text mb-2 font-semibold">Full name</span>
                <input v-model="profile.name" type="text" class="input input-bordered w-full" />
              </label>
              <label class="form-control">
                <span class="label-text mb-2 font-semibold">Username</span>
                <input v-model="profile.username" type="text" class="input input-bordered w-full" />
              </label>
              <label class="form-control">
                <span class="label-text mb-2 font-semibold">Email address</span>
                <input v-model="profile.email" type="email" class="input input-bordered w-full" />
              </label>
              <label class="form-control">
                <span class="label-text mb-2 font-semibold">Mobile number</span>
                <input v-model="profile.phone" type="tel" class="input input-bordered w-full" />
              </label>
              <label class="form-control sm:col-span-2">
                <span class="label-text mb-2 font-semibold">About you</span>
                <textarea v-model="profile.bio" class="textarea textarea-bordered h-24" maxlength="240"></textarea>
                <span class="label-text-alt mt-1 text-base-content/50">{{ profile.bio.length }} / 240</span>
              </label>
            </div>
          </div>
        </div>
      </section>

      <section class="card bg-base-100 border border-base-300 shadow-sm">
        <div class="card-body p-5 sm:p-7">
          <div>
            <h2 class="card-title">Password and security</h2>
            <p class="mt-1 text-sm text-base-content/60">Use a strong password that you do not use elsewhere.</p>
          </div>
          <div class="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <label class="form-control">
              <span class="label-text mb-2 font-semibold">Current password</span>
              <input v-model="password.current" :type="showPassword ? 'text' : 'password'" class="input input-bordered w-full" />
            </label>
            <label class="form-control">
              <span class="label-text mb-2 font-semibold">New password</span>
              <input v-model="password.next" :type="showPassword ? 'text' : 'password'" class="input input-bordered w-full" />
            </label>
            <label class="form-control">
              <span class="label-text mb-2 font-semibold">Confirm password</span>
              <input v-model="password.confirm" :type="showPassword ? 'text' : 'password'" class="input input-bordered w-full" />
            </label>
          </div>
          <label class="label w-fit cursor-pointer gap-3 mt-3">
            <input v-model="showPassword" type="checkbox" class="checkbox checkbox-sm" />
            <span class="label-text">Show passwords</span>
          </label>
          <div class="divider"></div>
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 class="font-bold">Two-factor authentication</h3>
              <p class="text-sm text-base-content/60">Add an extra verification step when signing in.</p>
            </div>
            <input v-model="privacy.twoFactor" type="checkbox" class="toggle toggle-primary" aria-label="Two-factor authentication" />
          </div>
        </div>
      </section>

      <section class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div class="card bg-base-100 border border-base-300 shadow-sm">
          <div class="card-body p-5 sm:p-7">
            <h2 class="card-title">Regional preferences</h2>
            <div class="mt-4 space-y-4">
              <label class="form-control">
                <span class="label-text mb-2 font-semibold">Language</span>
                <select v-model="preferences.language" class="select select-bordered w-full">
                  <option>English (Philippines)</option>
                  <option>Filipino</option>
                  <option>English (US)</option>
                </select>
              </label>
              <label class="form-control">
                <span class="label-text mb-2 font-semibold">Currency</span>
                <select v-model="preferences.currency" class="select select-bordered w-full">
                  <option>Philippine Peso (PHP)</option>
                  <option>US Dollar (USD)</option>
                </select>
              </label>
              <label class="form-control">
                <span class="label-text mb-2 font-semibold">Time zone</span>
                <select v-model="preferences.timezone" class="select select-bordered w-full">
                  <option>Asia/Manila</option>
                  <option>Asia/Singapore</option>
                  <option>UTC</option>
                </select>
              </label>
              <label class="form-control">
                <span class="label-text mb-2 font-semibold">Search radius: {{ preferences.distance }} km</span>
                <input v-model="preferences.distance" type="range" min="5" max="100" step="5" class="range range-primary range-sm" />
              </label>
              <label class="form-control">
                <span class="label-text mb-2 font-semibold">Appearance</span>
                <select v-model="preferences.theme" class="select select-bordered w-full">
                  <option>Light</option>
                  <option>Dark</option>
                  <option>System</option>
                </select>
              </label>
            </div>
          </div>
        </div>

        <div class="card bg-base-100 border border-base-300 shadow-sm">
          <div class="card-body p-5 sm:p-7">
            <h2 class="card-title">Notifications and privacy</h2>
            <div class="mt-4 divide-y divide-base-300">
              <label class="flex items-center justify-between gap-4 py-3 cursor-pointer">
                <span><strong>Messages</strong><small class="block text-base-content/55">New chats and replies</small></span>
                <input v-model="notifications.messages" type="checkbox" class="toggle toggle-primary toggle-sm" />
              </label>
              <label class="flex items-center justify-between gap-4 py-3 cursor-pointer">
                <span><strong>Listing updates</strong><small class="block text-base-content/55">Activity on your ads</small></span>
                <input v-model="notifications.listingUpdates" type="checkbox" class="toggle toggle-primary toggle-sm" />
              </label>
              <label class="flex items-center justify-between gap-4 py-3 cursor-pointer">
                <span><strong>Booking reminders</strong><small class="block text-base-content/55">Upcoming appointments</small></span>
                <input v-model="notifications.bookingReminders" type="checkbox" class="toggle toggle-primary toggle-sm" />
              </label>
              <label class="flex items-center justify-between gap-4 py-3 cursor-pointer">
                <span><strong>Marketing offers</strong><small class="block text-base-content/55">News and promotions</small></span>
                <input v-model="notifications.marketing" type="checkbox" class="toggle toggle-primary toggle-sm" />
              </label>
              <label class="flex items-center justify-between gap-4 py-3 cursor-pointer">
                <span><strong>Public profile</strong><small class="block text-base-content/55">Allow others to view your profile</small></span>
                <input v-model="privacy.publicProfile" type="checkbox" class="toggle toggle-primary toggle-sm" />
              </label>
              <label class="flex items-center justify-between gap-4 py-3 cursor-pointer">
                <span><strong>Show mobile number</strong><small class="block text-base-content/55">On public listings</small></span>
                <input v-model="privacy.showPhone" type="checkbox" class="toggle toggle-primary toggle-sm" />
              </label>
              <label class="flex items-center justify-between gap-4 py-3 cursor-pointer">
                <span><strong>Show email address</strong><small class="block text-base-content/55">On public listings</small></span>
                <input v-model="privacy.showEmail" type="checkbox" class="toggle toggle-primary toggle-sm" />
              </label>
            </div>
          </div>
        </div>
      </section>

      <div class="flex justify-end gap-3">
        <button type="button" class="btn btn-ghost">Cancel</button>
        <button type="button" class="btn btn-primary" @click="saveChanges">Save changes</button>
      </div>
    </div>
  </div>
</template>
