<script setup lang="ts">
import { dashboardStats, listings } from '../data/mockData'
</script>

<template>
  <div class="page-shell page-shell--tight">
    <div class="container">
      <section class="page-header dashboard-header">
        <div>
          <span class="eyebrow">Provider dashboard</span>
          <h1>Your performance overview</h1>
        </div>
        <button type="button" class="btn btn-primary btn-sm">Export report</button>
      </section>

      <section class="stats-grid">
        <div v-for="stat in dashboardStats" :key="stat.label" class="card stat-card">
          <span>{{ stat.label }}</span>
          <strong>{{ stat.value }}</strong>
          <small>{{ stat.change }}</small>
        </div>
      </section>

      <section class="dashboard-grid">
        <div class="card panel">
          <div class="panel-header">
            <h3>Recent listings</h3>
            <a href="#">Manage all</a>
          </div>

          <div class="list-stack">
            <div v-for="listing in listings.slice(0, 3)" :key="listing.id" class="mini-item">
              <img :src="listing.image" :alt="listing.title" />
              <div>
                <strong>{{ listing.title }}</strong>
                <small>{{ listing.location }}</small>
              </div>
              <span>{{ listing.price }}</span>
            </div>
          </div>
        </div>

        <div class="card panel">
          <div class="panel-header">
            <h3>Booking activity</h3>
            <a href="#">Review</a>
          </div>

          <div class="activity-list">
            <div>
              <span class="dot dot-green"></span>
              <div>
                <strong>New inquiry</strong>
                <small>Interior painting • 15 mins ago</small>
              </div>
            </div>
            <div>
              <span class="dot dot-purple"></span>
              <div>
                <strong>Quote sent</strong>
                <small>Private yoga • 1 hour ago</small>
              </div>
            </div>
            <div>
              <span class="dot dot-gold"></span>
              <div>
                <strong>Message replied</strong>
                <small>Website setup • Today</small>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.page-header {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 16px;
}

.page-header h1 {
  margin: 0;
  font-size: clamp(2.2rem, 3vw, 3.3rem);
  line-height: 1.05;
  letter-spacing: -0.06em;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;
  margin-top: 18px;
}

.stat-card {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px 18px;
}

.stat-card strong {
  font-size: 2rem;
  letter-spacing: -0.05em;
}

.stat-card small {
  color: var(--success);
  font-weight: 700;
}

.dashboard-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 20px;
  margin-top: 24px;
}

.panel {
  padding: 18px 18px 12px;
}

.panel-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 18px;
}

.panel-header h3 {
  margin: 0;
  font-size: 1.35rem;
}

.panel-header small,
.list-stack small,
.activity-list small {
  color: var(--muted);
}

.list-stack,
.activity-list {
  display: grid;
  gap: 12px;
}

.mini-item {
  display: grid;
  grid-template-columns: 54px 1fr auto;
  gap: 12px;
  align-items: center;
  padding: 12px 8px;
  border-radius: 14px;
  background: var(--surface-muted);
  border: 1px solid var(--border);
}

.mini-item img {
  width: 54px;
  height: 54px;
  border-radius: 12px;
  object-fit: cover;
}

.activity-list > div {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 0;
  border-bottom: 1px solid rgba(214, 220, 243, 0.9);
}

.activity-list > div:last-child {
  border-bottom: 0;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  display: inline-block;
}

.dot-green {
  background: var(--success);
}

.dot-purple {
  background: var(--primary);
}

.dot-gold {
  background: #f1b24a;
}

@media (max-width: 980px) {
  .dashboard-grid,
  .stats-grid {
    grid-template-columns: 1fr;
  }

  .page-header {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
