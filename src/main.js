import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './style.css'

// Import route components
import Home from './views/Home.vue'
import NamingConventions from './views/NamingConventions.vue'
import BiasConsiderations from './views/BiasConsiderations.vue'
import FreedomOfThought from './views/FreedomOfThought.vue'
import AdvertisingAndBranding from './views/AdvertisingAndBranding.vue'
import BuildingAIApps from './views/BuildingAIApps.vue'
import UsingAIApps from './views/UsingAIApps.vue'
import IntegratingWithAI from './views/IntegratingWithAI.vue'
import ProvidingData from './views/ProvidingData.vue'
import About from './views/About.vue'

// Define routes
const routes = [
  { 
    path: '/', 
    component: Home,
    meta: { title: 'AI Ethics Resource Center' }
  },
  { 
    path: '/naming-conventions', 
    component: NamingConventions,
    meta: { title: 'AI Naming Conventions | AI Ethics' }
  },
  { 
    path: '/bias-considerations', 
    component: BiasConsiderations,
    meta: { title: 'Bias in AI | AI Ethics' }
  },
  { 
    path: '/freedom-of-thought', 
    component: FreedomOfThought,
    meta: { title: 'Freedom of Thought | AI Ethics' }
  },
  { 
    path: '/advertising-and-branding', 
    component: AdvertisingAndBranding,
    meta: { title: 'AI Advertising & Branding | AI Ethics' }
  },
  { 
    path: '/building-ai-apps', 
    component: BuildingAIApps,
    meta: { title: 'Building AI Apps | AI Ethics' }
  },
  { 
    path: '/using-ai-apps', 
    component: UsingAIApps,
    meta: { title: 'Using AI Apps | AI Ethics' }
  },
  { 
    path: '/integrating-with-ai', 
    component: IntegratingWithAI,
    meta: { title: 'Integrating with AI | AI Ethics' }
  },
  { 
    path: '/providing-data', 
    component: ProvidingData,
    meta: { title: 'Providing Data to AI | AI Ethics' }
  },
  { 
    path: '/about', 
    component: About,
    meta: { title: 'About | AI Ethics' }
  }
]

// Create router
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

// Update document title on route change
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'AI Ethics Resource Center'
  next()
})

// Create and mount the app
createApp(App)
  .use(router)
  .mount('#app') 