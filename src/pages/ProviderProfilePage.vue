<script setup lang="ts">
import { computed, ref } from 'vue'
import BaseButton from '../components/BaseButton.vue'
import { providers } from '../data/mockData'

const props = defineProps<{ id?: string }>()

const provider = computed(() => {
  return providers.find((item) => String(item.id) === String(props.id)) ?? providers[0]
})

const galleryItems = [
  {
    image: 'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=1200&q=80',
    label: 'Featured project',
    caption: 'Modern bathroom refresh with coordinated fixtures and warm neutral finishes.',
  },
  {
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
    label: 'Room styling',
    caption: 'A practical living room layout designed around storage and natural light.',
  },
  {
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80',
    label: 'Before & after',
    caption: 'A compact home office transformed into a calm, functional workspace.',
  },
  {
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
    label: 'Completed work',
    caption: 'Layered lighting, color planning, and finishing details for a refreshed home.',
  },
]

const activeGalleryIndex = ref(0)
const activeGalleryItem = computed(() => galleryItems[activeGalleryIndex.value])

function showGalleryItem(index: number) {
  activeGalleryIndex.value = index
}

function moveGallery(direction: number) {
  activeGalleryIndex.value =
    (activeGalleryIndex.value + direction + galleryItems.length) % galleryItems.length
}

const rateCard = [
  { service: 'Initial consultation', scope: 'First 60 minutes', price: '₱550', note: 'Waived when booked' },
  { service: 'Room styling session', scope: 'Per room package', price: '₱1,800–₱3,500', note: 'Planning + curated list' },
  { service: 'Color planning', scope: 'One room / palette', price: '₱1,200', note: 'Includes finish samples' },
  { service: 'Full-space refresh', scope: 'Turnkey styling', price: 'From ₱4,500', note: 'Quoted after assessment' },
]

const coverageAreas = ['Makati', 'Taguig / BGC', 'Mandaluyong', 'Pasig', 'Quezon City', 'San Juan']
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
        <main class="profile-main">
          <section class="card profile-section">
            <div class="section-heading">
              <div>
                <h2>Verified work gallery</h2>
                <p>Recent projects documented across Metro Manila</p>
              </div>
              <span class="counter">Image {{ activeGalleryIndex + 1 }} of {{ galleryItems.length }}</span>
            </div>
            <div class="gallery-feature">
              <img :src="activeGalleryItem.image" :alt="activeGalleryItem.caption" />
              <div class="gallery-caption">
                <div>
                  <strong>{{ activeGalleryItem.label }}</strong>
                  <p>{{ activeGalleryItem.caption }}</p>
                </div>
                <div class="gallery-controls">
                  <button type="button" aria-label="Previous gallery image" @click="moveGallery(-1)">←</button>
                  <button type="button" aria-label="Next gallery image" @click="moveGallery(1)">→</button>
                </div>
              </div>
            </div>
            <div class="gallery-thumbnails">
              <button
                v-for="(item, index) in galleryItems"
                :key="item.image"
                type="button"
                :class="{ 'is-active': index === activeGalleryIndex }"
                :aria-label="`Show gallery image ${index + 1}`"
                @click="showGalleryItem(index)"
              >
                <img :src="item.image" :alt="item.label" />
              </button>
            </div>
          </section>

          <section class="card profile-section">
            <div class="section-heading">
              <div>
                <h2>Standard rate card & upfront pricing</h2>
                <p>Transparent Philippine Peso rates before work begins.</p>
              </div>
              <span class="verified-label">Transparent PHP rates</span>
            </div>
            <div class="rate-table">
              <div class="rate-row rate-row--header">
                <span>Service</span><span>Standard scope</span><span>Fixed cost / rate</span>
              </div>
              <div v-for="rate in rateCard" :key="rate.service" class="rate-row">
                <div><strong>{{ rate.service }}</strong><small>{{ rate.note }}</small></div>
                <span>{{ rate.scope }}</span>
                <strong class="rate-price">{{ rate.price }}</strong>
              </div>
            </div>
            <p class="rate-footnote">Free quote consultation available. Senior citizen and PWD discounts honored on standard labor.</p>
          </section>

          <section class="card profile-section">
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
        </main>

        <aside class="profile-sidebar">
          <section class="card profile-side">
          <h3>Service details</h3>
          <div class="detail-list">
            <div><span>Average response</span><strong>{{ provider.responseTime.replace('Usually replies in ', '') }}</strong></div>
            <div><span>Operating hours</span><strong>Mon–Sat, 8 AM–7 PM</strong></div>
            <div><span>Payment accepted</span><strong>Cash, GCash, Maya, bank transfer</strong></div>
            <div><span>Core coverage</span><strong>Metro Manila / NCR</strong></div>
          </div>
          <div class="price-summary">
            <span>Starting rate</span>
            <strong>{{ provider.price }}</strong>
          </div>
          <ul class="meta-list">
            <li>Free quote consultation</li>
            <li>Flexible scheduling</li>
            <li>Verified provider profile</li>
          </ul>
          </section>

          <section class="card coverage-card">
          <div class="section-heading">
            <h3>Operating service radius</h3>
            <span class="counter">Updated today</span>
          </div>
          <div class="coverage-map">
            <div>
              <strong>Metro Manila dispatch core</strong>
              <span>Avg. 20 min arrival time</span>
            </div>
          </div>
          <span class="coverage-label">Frequent municipal coverage</span>
          <div class="coverage-tags">
            <span v-for="area in coverageAreas" :key="area">{{ area }}</span>
          </div>
          </section>
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
  grid-template-columns: minmax(0, 1.45fr) minmax(280px, 0.55fr);
  gap: 20px;
  margin-top: 22px;
}

.profile-main {
  display: grid;
  gap: 20px;
}

.profile-section,
.profile-side,
.coverage-card {
  padding: 24px;
}

.profile-section > p {
  line-height: 1.8;
  color: var(--muted);
}

.section-heading {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 16px;
}

.section-heading h2,
.section-heading h3 {
  margin: 0;
}

.section-heading p {
  margin: 6px 0 0;
  color: var(--muted);
  font-size: 0.86rem;
}

.counter,
.verified-label {
  padding: 6px 9px;
  border-radius: 6px;
  background: var(--surface-strong);
  color: var(--muted);
  font-size: 0.7rem;
  font-weight: 800;
  white-space: nowrap;
}

.verified-label {
  background: rgba(25, 176, 120, 0.12);
  color: #0c8d5b;
}

.gallery-feature {
  position: relative;
  height: 360px;
  overflow: hidden;
  border-radius: 10px;
  background: var(--surface-strong);
}

.gallery-feature > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.gallery-caption {
  position: absolute;
  right: 16px;
  bottom: 16px;
  left: 16px;
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 16px;
  padding: 12px 14px;
  border-radius: 8px;
  color: white;
  background: rgba(19, 27, 46, 0.88);
}

.gallery-caption strong {
  color: #6cf8bb;
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.gallery-caption p {
  margin: 4px 0 0;
  font-size: 0.86rem;
}

.gallery-controls {
  display: flex;
  gap: 6px;
}

.gallery-controls button {
  width: 34px;
  height: 34px;
  border: 0;
  border-radius: 6px;
  color: var(--ink);
  background: white;
  cursor: pointer;
  font-size: 1.1rem;
}

.gallery-thumbnails {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
  margin-top: 8px;
}

.gallery-thumbnails button {
  height: 68px;
  padding: 0;
  overflow: hidden;
  border: 2px solid transparent;
  border-radius: 7px;
  opacity: 0.7;
  cursor: pointer;
}

.gallery-thumbnails button.is-active {
  border-color: var(--primary);
  opacity: 1;
}

.gallery-thumbnails img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.rate-table {
  display: grid;
  gap: 4px;
}

.rate-row {
  display: grid;
  grid-template-columns: 1.4fr 0.8fr 0.7fr;
  align-items: center;
  gap: 12px;
  padding: 13px 12px;
  border-radius: 7px;
  background: var(--surface);
}

.rate-row:nth-child(even) {
  background: var(--surface-strong);
}

.rate-row--header {
  color: var(--muted);
  background: var(--surface-strong) !important;
  font-size: 0.68rem;
  font-weight: 800;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.rate-row strong {
  display: block;
}

.rate-row small {
  display: block;
  margin-top: 3px;
  color: var(--muted);
}

.rate-row > span {
  color: var(--muted);
  font-size: 0.82rem;
}

.rate-price {
  text-align: right;
  font-size: 1.05rem;
}

.rate-footnote {
  margin: 14px 0 0;
  color: #0c8d5b;
  font-size: 0.78rem;
  font-weight: 700;
}

.profile-sidebar {
  display: grid;
  align-content: start;
  gap: 20px;
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

.detail-list {
  display: grid;
  gap: 14px;
  margin-top: 20px;
}

.detail-list div {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  font-size: 0.8rem;
}

.detail-list span {
  color: var(--muted);
}

.detail-list strong {
  text-align: right;
  font-size: 0.78rem;
}

.price-summary {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
  margin-top: 20px;
  padding-top: 18px;
  border-top: 1px solid var(--border);
}

.price-summary span {
  color: var(--muted);
  font-size: 0.8rem;
}

.price-summary strong {
  color: var(--primary);
  font-size: 1.55rem;
  letter-spacing: -0.05em;
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

.coverage-card .section-heading {
  align-items: center;
}

.coverage-card h3 {
  font-size: 1.05rem;
}

.coverage-map {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 175px;
  overflow: hidden;
  border-radius: 8px;
  background:
    linear-gradient(rgba(53, 37, 205, 0.12), rgba(53, 37, 205, 0.12)),
    url('https://images.unsplash.com/photo-1524666041070-9c876c8b3c4c?auto=format&fit=crop&w=900&q=80') center / cover;
}

.coverage-map > div {
  padding: 10px 14px;
  border-radius: 7px;
  text-align: center;
  background: rgba(255, 255, 255, 0.94);
  box-shadow: 0 3px 12px rgba(19, 27, 46, 0.16);
}

.coverage-map strong,
.coverage-map span {
  display: block;
}

.coverage-map strong {
  font-size: 0.78rem;
}

.coverage-map span {
  margin-top: 4px;
  color: #0c8d5b;
  font-size: 0.8rem;
  font-weight: 800;
}

.coverage-label {
  display: block;
  margin-top: 16px;
  color: var(--muted);
  font-size: 0.68rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.coverage-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 8px;
}

.coverage-tags span {
  padding: 6px 8px;
  border-radius: 5px;
  background: var(--surface-strong);
  color: var(--ink);
  font-size: 0.72rem;
  font-weight: 700;
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

@media (max-width: 620px) {
  .profile-section,
  .profile-side,
  .coverage-card {
    padding: 18px;
  }

  .gallery-feature {
    height: 300px;
  }

  .gallery-caption {
    align-items: flex-start;
    flex-direction: column;
  }

  .rate-row {
    grid-template-columns: 1fr 1fr;
  }

  .rate-row--header {
    display: none;
  }

  .rate-price {
    text-align: left;
  }
}
</style>
