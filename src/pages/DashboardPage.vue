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
