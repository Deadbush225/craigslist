<script setup lang="ts">
import BaseButton from '../components/BaseButton.vue'
</script>

<template>
  <div class="page-shell auth-shell">
    <div class="container auth-layout">
      <div class="card auth-card">
        <div class="auth-header">
          <span class="material-symbols-outlined">lock</span>
          <h1>Welcome back</h1>
          <p>Sign in to manage your listings and messages</p>
        </div>

        <div class="auth-tabs">
          <button type="button" class="auth-tab auth-tab--active">Log In</button>
          <button type="button" class="auth-tab">Create Account</button>
        </div>

        <form class="auth-form">
          <label>
            <span>Email or Mobile</span>
            <div class="field-with-icon">
              <span class="material-symbols-outlined">mail</span>
              <input type="text" placeholder="user@craigslist.com.ph or mobile" />
            </div>
          </label>

          <label>
            <span>Password</span>
            <div class="field-with-icon">
              <span class="material-symbols-outlined">key</span>
              <input type="password" placeholder="••••••••••••" />
              <button type="button" class="password-toggle" aria-label="Toggle password visibility">
                <span class="material-symbols-outlined">visibility</span>
              </button>
            </div>
          </label>

          <div class="auth-row">
            <label class="checkbox-row"><input type="checkbox" checked /> Remember for 30 days</label>
            <a href="#">Forgot password?</a>
          </div>

          <BaseButton to="/dashboard">Log In</BaseButton>
        </form>

        <div class="divider"><span>or continue with</span></div>

        <div class="social-row">
          <button type="button" class="social-button">Google</button>
          <button type="button" class="social-button">Apple</button>
        </div>
      </div>

      <div class="promo-side">
        <div class="card promo-card">
          <span class="eyebrow">Why people use Craigslist</span>
          <h2>Book help faster and stay in control</h2>
          <ul>
            <li>Verified local professionals</li>
            <li>Quick messaging and pricing</li>
            <li>Secure, simple booking flow</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
