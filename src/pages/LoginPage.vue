<script setup lang="ts">
import BaseButton from '../components/BaseButton.vue'
</script>

<template>
  <div class="page-shell auth-shell">
    <div class="container auth-layout">
      <section class="auth-panel card">
        <span class="eyebrow">Welcome back</span>
        <h1>Sign in to your account</h1>

        <form class="auth-form">
          <label>
            <span>Email address</span>
            <input type="email" value="hello@example.com" />
          </label>
          <label>
            <span>Password</span>
            <input type="password" value="password" />
          </label>

          <div class="auth-row">
            <label class="checkbox-row"><input type="checkbox" checked /> Remember me</label>
            <a href="#">Forgot password?</a>
          </div>

          <BaseButton to="/dashboard">Continue</BaseButton>
        </form>
      </section>

      <section class="auth-side">
        <div class="card promo-card">
          <span class="eyebrow">Why people use LocalLink</span>
          <h2>Book help faster and stay in control</h2>
          <ul>
            <li>Verified local professionals</li>
            <li>Quick messaging and pricing</li>
            <li>Secure, simple booking flow</li>
          </ul>
        </div>
      </section>
    </div>
  </div>
</template>
