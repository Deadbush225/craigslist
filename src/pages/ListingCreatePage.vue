<script setup lang="ts">
import BaseButton from '../components/BaseButton.vue'
</script>

<template>
  <div class="page-shell compact-page">
    <div class="container form-layout">
      <section class="card form-card">
        <span class="eyebrow">Create a listing</span>
        <h1>Post a service for local buyers</h1>

        <form class="listing-form">
          <div class="field-row two-up">
            <label>
              <span>Title</span>
              <input type="text" value="Residential painting service" />
            </label>
            <label>
              <span>Category</span>
              <select>
                <option>Home services</option>
                <option>Design</option>
                <option>Tech help</option>
              </select>
            </label>
          </div>

          <div class="field-row two-up">
            <label>
              <span>Location</span>
              <input type="text" value="Quezon City" />
            </label>
            <label>
              <span>Price</span>
              <input type="text" value="₱2,400" />
            </label>
          </div>

          <label>
            <span>Service description</span>
            <textarea rows="5">I provide clean, high-quality wall repairs and painting for apartments and family homes.</textarea>
          </label>

          <label>
            <span>Photos</span>
            <div class="upload-box">+ Upload gallery</div>
          </label>

          <div class="form-actions">
            <BaseButton variant="secondary" to="/services">Cancel</BaseButton>
            <BaseButton to="/dashboard">Publish listing</BaseButton>
          </div>
        </form>
      </section>
    </div>
  </div>
</template>
