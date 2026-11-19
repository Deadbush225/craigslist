<script setup lang="ts">
import BaseButton from '../components/BaseButton.vue'
</script>

<template>
  <div class="page-shell page-shell--tight">
    <div class="container form-layout">
      <section class="card form-card">
        <span class="eyebrow">Create a listing</span>
        <h1>Post a service for local buyers</h1>

        <form class="listing-form">
          <fieldset class="fieldset">
            <legend class="fieldset-legend">Listing details</legend>
            <div class="field-row two-up">
              <label for="listing-title">
                <span>Title</span>
                <input id="listing-title" type="text" class="input input-bordered w-full" value="Residential painting service" />
              </label>
              <label for="listing-category">
                <span>Category</span>
                <select id="listing-category" class="select select-bordered w-full">
                  <option>Home services</option>
                  <option>Design</option>
                  <option>Tech help</option>
                </select>
              </label>
            </div>
          </fieldset>

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

<style scoped>
.form-layout {
  max-width: 900px;
}

.form-card {
  padding: 22px;
}

.listing-form {
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-top: 16px;
}

.listing-form label {
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-weight: 700;
  color: var(--text);
}

.listing-form input,
.listing-form select,
.listing-form textarea {
  width: 100%;
  padding: 12px 14px;
  background: var(--surface-muted);
  border: 1px solid var(--border);
  color: var(--text);
  outline: none;
  border-radius: 12px;
}

.field-row {
  display: grid;
  gap: 18px;
}

.two-up {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.upload-box {
  display: grid;
  place-items: center;
  min-height: 110px;
  border: 1.5px dashed var(--border);
  border-radius: 16px;
  background: rgba(77, 70, 231, 0.03);
  color: var(--primary);
  font-weight: 700;
}

.form-actions {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
}

@media (max-width: 980px) {
  .two-up {
    grid-template-columns: 1fr;
  }

  .form-actions {
    flex-direction: column;
    align-items: stretch;
  }
}
</style>
