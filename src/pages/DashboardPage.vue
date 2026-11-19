<script setup lang="ts">
import { dashboardStats, listings } from '../data/mockData'
</script>

<template>
  <div class="page-shell page-shell--tight">
    <div class="w-full flex flex-col gap-6">
      <section class="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
        <div>
          <span class="text-sm font-bold text-primary">Provider dashboard</span>
          <h1 class="mt-1 text-3xl sm:text-4xl font-bold tracking-tight">Your performance overview</h1>
        </div>
        <button type="button" class="btn btn-primary btn-sm">Export report</button>
      </section>

      <section class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        <div v-for="stat in dashboardStats" :key="stat.label" class="stats w-full bg-base-100 border border-base-300 shadow-sm">
          <div class="stat">
            <div class="stat-title">{{ stat.label }}</div>
            <div class="stat-value text-3xl">{{ stat.value }}</div>
            <div class="stat-desc text-success font-semibold">{{ stat.change }}</div>
          </div>
        </div>
      </section>

      <section class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div class="card bg-base-100 border border-base-300 shadow-sm lg:col-span-2">
          <div class="card-body">
            <div class="flex items-center justify-between gap-3">
              <h2 class="card-title">Recent listings</h2>
              <RouterLink to="/services" class="link link-primary text-sm">Manage all</RouterLink>
            </div>

            <div class="overflow-x-auto">
              <table class="table table-auto table-zebra table-pin-rows">
                <thead>
                  <tr>
                    <th>Listing</th>
                    <th>Location</th>
                    <th class="text-right">Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="listing in listings.slice(0, 3)" :key="listing.id">
                    <td>
                      <div class="flex items-center gap-3">
                        <img :src="listing.image" :alt="listing.title" class="h-12 w-12 rounded-lg object-cover" />
                        <strong>{{ listing.title }}</strong>
                      </div>
                    </td>
                    <td>{{ listing.location }}</td>
                    <td class="text-right font-semibold min-w-20 whitespace-nowrap">{{ listing.price }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div class="card bg-base-100 border border-base-300 shadow-sm">
          <div class="card-body">
            <div class="flex items-center justify-between gap-3">
              <h2 class="card-title">Booking activity</h2>
              <RouterLink to="/messaging" class="link link-primary text-sm">Review</RouterLink>
            </div>

            <ul class="list gap-1">
              <li class="list-row">
                <span class="status status-success"></span>
                <div>
                <strong>New inquiry</strong>
                  <div class="text-sm text-base-content/60">Interior painting • 15 mins ago</div>
              </div>
              </li>
              <li class="list-row">
                <span class="status status-primary"></span>
                <div>
                <strong>Quote sent</strong>
                  <div class="text-sm text-base-content/60">Private yoga • 1 hour ago</div>
              </div>
              </li>
              <li class="list-row">
                <span class="status status-warning"></span>
                <div>
                <strong>Message replied</strong>
                  <div class="text-sm text-base-content/60">Website setup • Today</div>
              </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

