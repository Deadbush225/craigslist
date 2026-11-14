<script setup lang="ts">
import { computed } from 'vue'
import BaseButton from '../components/BaseButton.vue'
import { providers } from '../data/mockData'

const props = defineProps<{ id?: string }>()

const provider = computed(() => {
  return providers.find((item) => String(item.id) === String(props.id)) ?? providers[0]
})
</script>

<template>
  <div class="page-shell compact-page">
    <div class="container profile-layout">
      <section class="card profile-header">
        <div class="profile-header__top">
          <img :src="provider.image" :alt="provider.name" class="profile-avatar" />
          <div>
            <span class="eyebrow">{{ provider.role }}</span>
            <h1>{{ provider.name }}</h1>
            <p>{{ provider.city }} • {{ provider.responseTime }}</p>
          </div>
        </div>

        <div class="profile-actions">
          <BaseButton to="/messaging">Message</BaseButton>
          <BaseButton variant="secondary" to="/services">Back to listings</BaseButton>
        </div>
      </section>

      <div class="profile-content">
        <section class="card profile-main">
          <h2>About</h2>
          <p>{{ provider.bio }}</p>

          <div class="tag-list">
            <span v-for="specialty in provider.specialties" :key="specialty" class="tag">{{ specialty }}</span>
          </div>

          <div class="stat-row">
            <div>
              <strong>{{ provider.rating }}</strong>
              <small>Rating</small>
            </div>
            <div>
              <strong>{{ provider.reviews }}</strong>
              <small>Reviews</small>
            </div>
            <div>
              <strong>{{ provider.completedJobs }}</strong>
              <small>Jobs</small>
            </div>
          </div>
        </section>

        <aside class="card profile-side">
          <h3>Pricing</h3>
          <p class="price-pill">{{ provider.price }}</p>
          <ul class="meta-list">
            <li>Free quote consultation</li>
            <li>Flexible scheduling</li>
            <li>Travel within metro area</li>
          </ul>
        </aside>
      </div>
    </div>
  </div>
</template>
