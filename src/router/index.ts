import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '../pages/HomePage.vue'
import ServicesPage from '../pages/ServicesPage.vue'
import LoginPage from '../pages/LoginPage.vue'
import DashboardPage from '../pages/DashboardPage.vue'
import MessagingPage from '../pages/MessagingPage.vue'
import ListingCreatePage from '../pages/ListingCreatePage.vue'
import ProviderProfilePage from '../pages/ProviderProfilePage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: HomePage },
    { path: '/services', name: 'services', component: ServicesPage },
    { path: '/login', name: 'login', component: LoginPage },
    { path: '/dashboard', name: 'dashboard', component: DashboardPage },
    { path: '/messaging', name: 'messaging', component: MessagingPage },
    { path: '/new-listing', name: 'new-listing', component: ListingCreatePage },
    { path: '/provider/:id?', name: 'provider', component: ProviderProfilePage, props: true },
  ],
  scrollBehavior() {
    return { top: 0, left: 0, behavior: 'smooth' }
  },
})

export default router
