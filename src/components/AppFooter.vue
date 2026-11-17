<script setup lang="ts">
import Logo from '../assets/logo.png';
</script>

<template>
  <footer class="site-footer">
    <div class="container footer-inner">
      <div>
        <div class="brand footer-brand">
          <img :src="Logo" class="brand-logo"/>
        </div>
        <p>Find trusted local help for everyday tasks, home projects, and care services.</p>
      </div>

      <div class="footer-links">
        <div>
          <h4>Explore</h4>
          <ul>
            <li><RouterLink to="/services">Browse services</RouterLink></li>
            <li><RouterLink to="/dashboard">Dashboard</RouterLink></li>
            <li><RouterLink to="/new-listing">Create listing</RouterLink></li>
          </ul>
        </div>
        <div>
          <h4>Company</h4>
          <ul>
            <li><RouterLink to="/">About</RouterLink></li>
            <li><RouterLink to="/messaging">Support</RouterLink></li>
            <li><RouterLink to="/login">Sign in</RouterLink></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  margin-top: 30px;
  background: #101b2d;
  color: white;
}

.footer-inner {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 24px;
  padding: 36px 0 46px;
}

.footer-brand {
  margin-bottom: 12px;
  color: white;
}

.site-footer p,
.footer-links li,
.footer-links a {
  color: rgba(226, 233, 255, 0.8);
}

.footer-links {
  display: flex;
  gap: 58px;
}

.footer-links h4 {
  margin: 0 0 12px;
  color: white;
  font-size: 0.92rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.footer-links ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 12px;
}

.site-footer .brand-logo {
  filter: hue-rotate(523deg) invert(100%);
}

@media (max-width: 980px) {
  .footer-inner {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>