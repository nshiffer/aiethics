<template>
  <div class="app-container">
    <header class="bg-dark-light border-b border-dark sticky top-0 z-10">
      <div class="container mx-auto px-4 py-4">
        <div class="flex flex-col md:flex-row md:items-center md:justify-between">
          <div class="flex items-center justify-between">
            <router-link to="/" class="flex items-center space-x-2">
              <span class="text-2xl font-bold glow-text">AI<span class="text-primary">Ethics</span></span>
            </router-link>
            <button @click="isMobileMenuOpen = !isMobileMenuOpen" class="md:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path v-if="isMobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          
          <!-- Search Bar -->
          <div class="md:flex-1 md:mx-8 my-4 md:my-0">
            <div class="relative">
              <input 
                type="text" 
                v-model="searchQuery"
                @focus="isSearchFocused = true"
                @blur="setTimeout(() => { isSearchFocused = false }, 200)"
                placeholder="Search topics..." 
                class="w-full py-2 px-4 pl-10 rounded-lg bg-dark border border-dark-light focus:ring-1 focus:ring-primary focus:outline-none"
              />
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 absolute left-3 top-2.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              
              <!-- Search Results -->
              <div v-if="isSearchFocused && filteredSearchResults.length > 0" class="absolute top-full left-0 w-full mt-2 bg-dark-light border border-dark rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto">
                <router-link 
                  v-for="result in filteredSearchResults" 
                  :key="result.path" 
                  :to="result.path"
                  @click="searchQuery = ''"
                  class="block px-4 py-3 hover:bg-dark transition-colors border-b border-dark-light last:border-b-0">
                  <div class="font-semibold">{{ result.title }}</div>
                  <div class="text-sm text-gray-400">{{ result.description }}</div>
                </router-link>
              </div>
            </div>
          </div>
          
          <!-- Desktop Navigation -->
          <nav class="hidden md:flex md:items-center space-x-1">
            <router-link to="/about" class="px-3 py-2 rounded-md hover:bg-dark transition-colors">About</router-link>
            <a href="https://github.com/nshiffer/aiethics" target="_blank" rel="noopener" 
               class="flex items-center px-3 py-2 rounded-md hover:bg-dark transition-colors">
              <svg class="h-5 w-5 mr-1" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path>
              </svg>
              GitHub
            </a>
          </nav>
        </div>
        
        <!-- Mobile Navigation Menu -->
        <div v-if="isMobileMenuOpen" class="md:hidden mt-4 pb-2">
          <div class="grid grid-cols-2 gap-2">
            <div class="col-span-2 font-semibold text-primary-light mb-2">Ethics Topics</div>
            <router-link to="/naming-conventions" @click="isMobileMenuOpen = false" class="block px-3 py-2 rounded-md hover:bg-dark">Naming Conventions</router-link>
            <router-link to="/bias-considerations" @click="isMobileMenuOpen = false" class="block px-3 py-2 rounded-md hover:bg-dark">Bias in AI</router-link>
            <router-link to="/freedom-of-thought" @click="isMobileMenuOpen = false" class="block px-3 py-2 rounded-md hover:bg-dark">Freedom of Thought</router-link>
            <router-link to="/advertising-and-branding" @click="isMobileMenuOpen = false" class="block px-3 py-2 rounded-md hover:bg-dark">Advertising & Branding</router-link>
            
            <div class="col-span-2 font-semibold text-primary-light mt-4 mb-2">Practical Guides</div>
            <router-link to="/building-ai-apps" @click="isMobileMenuOpen = false" class="block px-3 py-2 rounded-md hover:bg-dark">Building AI Apps</router-link>
            <router-link to="/using-ai-apps" @click="isMobileMenuOpen = false" class="block px-3 py-2 rounded-md hover:bg-dark">Using AI Apps</router-link>
            <router-link to="/integrating-with-ai" @click="isMobileMenuOpen = false" class="block px-3 py-2 rounded-md hover:bg-dark">Integrating with AI</router-link>
            <router-link to="/providing-data" @click="isMobileMenuOpen = false" class="block px-3 py-2 rounded-md hover:bg-dark">Providing Data</router-link>
            
            <div class="col-span-2 mt-4">
              <router-link to="/about" @click="isMobileMenuOpen = false" class="block px-3 py-2 rounded-md hover:bg-dark">About</router-link>
              <a href="https://github.com/nshiffer/aiethics" target="_blank" rel="noopener" class="flex items-center px-3 py-2 rounded-md hover:bg-dark">
                <svg class="h-5 w-5 mr-1" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path>
                </svg>
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>

    <main class="container mx-auto px-4 py-8">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <footer class="bg-dark-light border-t border-dark py-8">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 class="text-lg font-semibold mb-4">Ethics Topics</h3>
            <ul class="space-y-2">
              <li><router-link to="/naming-conventions" class="hover:text-primary-light">Naming Conventions</router-link></li>
              <li><router-link to="/bias-considerations" class="hover:text-primary-light">Bias Considerations</router-link></li>
              <li><router-link to="/freedom-of-thought" class="hover:text-primary-light">Freedom of Thought</router-link></li>
              <li><router-link to="/advertising-and-branding" class="hover:text-primary-light">Advertising & Branding</router-link></li>
            </ul>
          </div>
          <div>
            <h3 class="text-lg font-semibold mb-4">Practical Guides</h3>
            <ul class="space-y-2">
              <li><router-link to="/building-ai-apps" class="hover:text-primary-light">Building AI Apps</router-link></li>
              <li><router-link to="/using-ai-apps" class="hover:text-primary-light">Using AI Apps</router-link></li>
              <li><router-link to="/integrating-with-ai" class="hover:text-primary-light">Integrating with AI</router-link></li>
              <li><router-link to="/providing-data" class="hover:text-primary-light">Providing Data</router-link></li>
            </ul>
          </div>
          <div>
            <h3 class="text-lg font-semibold mb-4">Resources</h3>
            <ul class="space-y-2">
              <li><a href="#" class="hover:text-primary-light">Glossary</a></li>
              <li><a href="#" class="hover:text-primary-light">Best Practices</a></li>
              <li><a href="#" class="hover:text-primary-light">References</a></li>
            </ul>
          </div>
          <div>
            <h3 class="text-lg font-semibold mb-4">About</h3>
            <p class="text-sm text-gray-400 mb-4">
              AI Ethics Resource Center is a comprehensive guide to ethical considerations in artificial intelligence.
            </p>
            <div class="flex space-x-4">
              <a href="https://github.com/nshiffer/aiethics" target="_blank" rel="noopener" class="text-gray-400 hover:text-white">
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div class="mt-8 pt-8 border-t border-dark text-center text-sm text-gray-400">
          <p>&copy; {{ new Date().getFullYear() }} AI Ethics Resource Center. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      isMobileMenuOpen: false,
      searchQuery: '',
      isSearchFocused: false,
      searchableContent: [
        {
          title: 'AI Naming Conventions',
          path: '/naming-conventions',
          description: 'Guidelines for naming AI products to avoid humanization',
          keywords: ['naming', 'anthropomorphism', 'humanization', 'products']
        },
        {
          title: 'Bias in AI',
          path: '/bias-considerations',
          description: 'Understanding and mitigating bias in training data and AI systems',
          keywords: ['bias', 'fairness', 'training data', 'discrimination', 'equity']
        },
        {
          title: 'Freedom of Thought',
          path: '/freedom-of-thought',
          description: 'Protecting human autonomy and freedom of thought in AI interactions',
          keywords: ['freedom', 'autonomy', 'manipulation', 'persuasion', 'choice']
        },
        {
          title: 'AI Advertising & Branding',
          path: '/advertising-and-branding',
          description: 'Ethical considerations in marketing and advertising AI products',
          keywords: ['advertising', 'marketing', 'branding', 'messaging', 'claims']
        },
        {
          title: 'Building AI Apps',
          path: '/building-ai-apps',
          description: 'Ethical guidelines for developers building AI applications',
          keywords: ['development', 'building', 'coding', 'software', 'apps']
        },
        {
          title: 'Using AI Apps',
          path: '/using-ai-apps',
          description: 'Best practices for users of AI applications',
          keywords: ['using', 'consumer', 'application', 'interaction', 'user']
        },
        {
          title: 'Integrating with AI',
          path: '/integrating-with-ai',
          description: 'Ethical integration of AI into existing systems and workflows',
          keywords: ['integration', 'api', 'system', 'workflow', 'connection']
        },
        {
          title: 'Providing Data to AI',
          path: '/providing-data',
          description: 'Responsible practices for sharing data with AI systems',
          keywords: ['data', 'privacy', 'sharing', 'collection', 'consent']
        },
        {
          title: 'About AI Ethics Resource Center',
          path: '/about',
          description: 'About this resource and its purpose',
          keywords: ['about', 'information', 'purpose', 'mission', 'goal']
        }
      ]
    }
  },
  computed: {
    filteredSearchResults() {
      if (!this.searchQuery.trim()) return []
      
      const query = this.searchQuery.toLowerCase().trim()
      return this.searchableContent.filter(item => {
        // Check title and description
        if (item.title.toLowerCase().includes(query) || 
            item.description.toLowerCase().includes(query)) {
          return true
        }
        
        // Check keywords
        return item.keywords.some(keyword => keyword.toLowerCase().includes(query))
      })
    }
  }
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style> 