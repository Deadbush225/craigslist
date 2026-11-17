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
    </div>
  </div>
</template>

<style scoped>
.auth-shell,
.auth-layout {
  display: block;
}

.auth-card {
  padding: 24px;
}

.auth-header {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
}

.auth-header .material-symbols-outlined {
  width: 48px;
  height: 48px;
  display: grid;
  place-items: center;
  border-radius: 14px;
  background: var(--primary-soft);
  color: var(--primary);
}

.auth-header h1 {
  margin: 0;
  font-size: clamp(2rem, 2.8vw, 2.8rem);
  letter-spacing: -0.05em;
}

.auth-header p {
  margin: 0;
  color: var(--muted);
}

.auth-tabs {
  display: flex;
  gap: 10px;
  margin-top: 18px;
  margin-bottom: 12px;
}

.auth-tab {
  border: 1px solid var(--border);
  background: rgba(255,255,255,0.75);
  border-radius: 999px;
  padding: 8px 14px;
  color: var(--muted);
  font-weight: 700;
}

.auth-tab--active {
  background: var(--primary);
  color: white;
  border-color: transparent;
}

.field-with-icon {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 12px;
  background: var(--surface-muted);
  border: 1px solid var(--border);
  border-radius: 12px;
}

.field-with-icon input {
  border: 0;
  background: transparent;
  outline: none;
  padding: 12px 0;
  width: 100%;
}

.password-toggle {
  border: 0;
  background: transparent;
  color: var(--muted);
}

.divider {
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 18px 0;
  color: var(--muted);
  text-transform: uppercase;
  font-size: 0.72rem;
  letter-spacing: 0.08em;
}

.divider::before,
.divider::after {
  content: '';
  flex: 1;
  height: 1px;
  background: var(--border);
}

.social-row {
  display: flex;
  gap: 12px;
}

.social-button {
  flex: 1;
  padding: 12px 14px;
  border-radius: 12px;
  border: 1px solid var(--border);
  background: rgba(255,255,255,0.7);
  font-weight: 700;
}

.auth-layout {
  display: flex;
  align-items: center;
  justify-content: center;
}

.auth-form {
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-top: 16px;
}

.auth-form label {
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-weight: 700;
  color: var(--text);
}

.auth-form input,
.auth-form textarea {
  width: 100%;
  border: 0;
  background: transparent;
  color: var(--text);
  outline: none;
  padding: 0;
  font: inherit;
}

.auth-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
}

.checkbox-row {
  display: inline-flex;
  flex-direction: row !important;
  align-items: center;
  gap: 8px;
  font-weight: 600 !important;
}

.auth-row a,
.auth-form span {
  color: var(--muted);
}

.auth-row a {
  color: var(--primary);
  font-weight: 700;
}
</style>
