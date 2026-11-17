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
  <div class="page-shell page-shell--tight">
    <div class="container profile-layout">
      <section class="card profile-hero">
        <div class="profile-cover"></div>
        <div class="profile-body">
          <div class="profile-summary">
            <img :src="provider.image" :alt="provider.name" class="profile-avatar" />
            <div>
              <div class="profile-badges">
                <span class="status-chip">PRC Licensed Master Plumber</span>
                <span class="status-chip status-chip--secondary">TESDA NC-II Certified</span>
              </div>
              <h1>{{ provider.name }}</h1>
              <p>{{ provider.role }} • {{ provider.city }}</p>
            </div>
          </div>

          <div class="profile-actions">
            <BaseButton to="/messaging">Message</BaseButton>
            <BaseButton variant="secondary" to="/services">Back to listings</BaseButton>
          </div>
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

<style scoped>
.profile-layout {
  max-width: 1200px;
}

.profile-hero {
  overflow: hidden;
  padding: 0;
}

.profile-cover {
  height: 160px;
  background: linear-gradient(135deg, #e8e3ff, #f3e6ff);
}

.profile-body {
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 18px;
  padding: 0 24px 24px;
  margin-top: -34px;
}

.profile-summary {
  display: flex;
  align-items: end;
  gap: 18px;
}

.profile-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 8px;
}

.status-chip {
  display: inline-flex;
  padding: 6px 10px;
  border-radius: 999px;
  background: rgba(25, 176, 120, 0.1);
  color: #0c8d5b;
  font-size: 0.68rem;
  font-weight: 800;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.status-chip--secondary {
  background: rgba(77, 70, 231, 0.08);
  color: var(--primary);
}

.profile-header__top {
  display: flex;
  align-items: center;
  gap: 18px;
}

.profile-avatar {
  width: 110px;
  height: 110px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid rgba(77, 70, 231, 0.1);
}

.profile-header__top h1 {
  margin: 6px 0 4px;
  font-size: clamp(2rem, 3vw, 3.1rem);
  letter-spacing: -0.06em;
}

.profile-actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 18px;
}

.profile-content {
  display: grid;
  grid-template-columns: 1.25fr 0.75fr;
  gap: 20px;
  margin-top: 22px;
}

.profile-main,
.profile-side {
  padding: 24px;
}

.profile-main p {
  line-height: 1.8;
  color: var(--muted);
}

.tag-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 22px 0;
}

.tag {
  padding: 8px 12px;
  border-radius: 999px;
  background: var(--surface-strong);
  color: var(--primary);
  font-weight: 700;
  font-size: 0.8rem;
}

.stat-row {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
  padding-top: 8px;
}

.stat-row strong {
  display: block;
  font-size: 1.5rem;
  letter-spacing: -0.04em;
}

.stat-row small {
  color: var(--muted);
}

.profile-side h3 {
  margin: 0;
  font-size: 1.4rem;
}

.price-pill {
  margin: 16px 0 10px;
  font-size: clamp(1.8rem, 2vw, 2.4rem);
  font-weight: 900;
  letter-spacing: -0.05em;
  color: var(--primary);
}

.meta-list {
  list-style: none;
  padding: 0;
  margin: 16px 0 0;
  display: grid;
  gap: 10px;
  line-height: 1.7;
  color: var(--muted);
}

@media (max-width: 980px) {
  .profile-content {
    grid-template-columns: 1fr;
  }

  .profile-body {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
