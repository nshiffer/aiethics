<template>
  <div>
    <!-- Hero Section -->
    <section class="relative overflow-hidden mb-12">
      <div class="absolute inset-0 bg-gradient-to-br from-primary/5 via-dark-light to-dark-dark z-0"></div>
      <div class="relative z-10 py-16 md:py-24">
        <div class="max-w-4xl mx-auto px-4 text-center">
          <h1 class="text-4xl md:text-6xl font-bold mb-6 glow-text">
            AI <span class="text-primary">Ethics</span> Resource Center
          </h1>
          <p class="text-xl md:text-2xl mb-8 text-gray-300">
            A comprehensive guide to ethical considerations in artificial intelligence
          </p>
          <div class="flex flex-wrap justify-center gap-4">
            <router-link to="/naming-conventions" class="btn btn-primary">
              Explore Topics
            </router-link>
            <router-link to="/about" class="btn bg-dark hover:bg-dark-light text-white">
              Learn More
            </router-link>
          </div>
        </div>
      </div>
      
      <!-- Animated Background Effect -->
      <div class="absolute inset-0 z-0 opacity-20">
        <div class="absolute top-0 left-1/4 w-px h-full bg-primary animate-pulse" style="animation-delay: 0.5s;"></div>
        <div class="absolute top-0 left-2/4 w-px h-full bg-secondary animate-pulse" style="animation-delay: 0.8s;"></div>
        <div class="absolute top-0 left-3/4 w-px h-full bg-accent animate-pulse" style="animation-delay: 0.2s;"></div>
        <div class="absolute top-1/4 left-0 w-full h-px bg-primary animate-pulse" style="animation-delay: 1.2s;"></div>
        <div class="absolute top-2/4 left-0 w-full h-px bg-secondary animate-pulse" style="animation-delay: 0.7s;"></div>
        <div class="absolute top-3/4 left-0 w-full h-px bg-accent animate-pulse" style="animation-delay: 1.5s;"></div>
      </div>
    </section>

    <!-- Main Content -->
    <section>
      <div class="max-w-7xl mx-auto">
        <!-- Ethics Topics -->
        <div class="mb-16">
          <div class="flex items-center mb-8">
            <h2 class="text-3xl font-bold">Ethics Topics</h2>
            <div class="ml-4 flex-grow h-px neon-line"></div>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- Naming Conventions Card -->
            <router-link to="/naming-conventions" class="group">
              <div class="futuristic-border h-full">
                <div class="relative z-10 bg-dark-light h-full p-6 rounded-lg">
                  <h3 class="text-xl font-bold mb-3 group-hover:text-primary-light transition-colors">
                    AI Naming Conventions
                  </h3>
                  <p class="text-gray-400">
                    Explore how naming patterns for AI products can influence our ethical perception and treatment of technology. Learn guidelines to avoid unintentional humanization.
                  </p>
                </div>
              </div>
            </router-link>
            
            <!-- Bias Considerations Card -->
            <router-link to="/bias-considerations" class="group">
              <div class="futuristic-border h-full">
                <div class="relative z-10 bg-dark-light h-full p-6 rounded-lg">
                  <h3 class="text-xl font-bold mb-3 group-hover:text-primary-light transition-colors">
                    Bias in Training Data
                  </h3>
                  <p class="text-gray-400">
                    Understand the critical issue of bias in AI training data and its impact on fairness and equity. Discover approaches for identifying and mitigating bias.
                  </p>
                </div>
              </div>
            </router-link>
            
            <!-- Freedom of Thought Card -->
            <router-link to="/freedom-of-thought" class="group">
              <div class="futuristic-border h-full">
                <div class="relative z-10 bg-dark-light h-full p-6 rounded-lg">
                  <h3 class="text-xl font-bold mb-3 group-hover:text-primary-light transition-colors">
                    Freedom of Thought
                  </h3>
                  <p class="text-gray-400">
                    Examine how AI systems can impact human autonomy and freedom of thought. Learn about the ethical implications of persuasive AI design.
                  </p>
                </div>
              </div>
            </router-link>
            
            <!-- Advertising and Branding Card -->
            <router-link to="/advertising-and-branding" class="group">
              <div class="futuristic-border h-full">
                <div class="relative z-10 bg-dark-light h-full p-6 rounded-lg">
                  <h3 class="text-xl font-bold mb-3 group-hover:text-primary-light transition-colors">
                    Advertising & Branding
                  </h3>
                  <p class="text-gray-400">
                    Investigate ethical considerations in marketing and branding AI products. Learn about responsible advertising and avoiding misleading claims.
                  </p>
                </div>
              </div>
            </router-link>
          </div>
        </div>
        
        <!-- Practical Guides -->
        <div class="mb-16">
          <div class="flex items-center mb-8">
            <h2 class="text-3xl font-bold">Practical Guides</h2>
            <div class="ml-4 flex-grow h-px neon-line"></div>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <!-- Building AI Apps Card -->
            <router-link to="/building-ai-apps" class="group">
              <div class="card h-full border-l-2 border-primary group-hover:border-primary-light transition-colors">
                <h3 class="text-xl font-bold mb-3 group-hover:text-primary-light transition-colors">Building AI Apps</h3>
                <p class="text-gray-400">
                  Ethical guidelines for developers creating AI applications.
                </p>
              </div>
            </router-link>
            
            <!-- Using AI Apps Card -->
            <router-link to="/using-ai-apps" class="group">
              <div class="card h-full border-l-2 border-primary group-hover:border-primary-light transition-colors">
                <h3 class="text-xl font-bold mb-3 group-hover:text-primary-light transition-colors">Using AI Apps</h3>
                <p class="text-gray-400">
                  Best practices for users interacting with AI applications.
                </p>
              </div>
            </router-link>
            
            <!-- Integrating with AI Card -->
            <router-link to="/integrating-with-ai" class="group">
              <div class="card h-full border-l-2 border-primary group-hover:border-primary-light transition-colors">
                <h3 class="text-xl font-bold mb-3 group-hover:text-primary-light transition-colors">Integrating with AI</h3>
                <p class="text-gray-400">
                  Ethical approaches to integrating AI into existing systems.
                </p>
              </div>
            </router-link>
            
            <!-- Providing Data Card -->
            <router-link to="/providing-data" class="group">
              <div class="card h-full border-l-2 border-primary group-hover:border-primary-light transition-colors">
                <h3 class="text-xl font-bold mb-3 group-hover:text-primary-light transition-colors">Providing Data</h3>
                <p class="text-gray-400">
                  Responsible practices for sharing data with AI systems.
                </p>
              </div>
            </router-link>
          </div>
        </div>
        
        <!-- Call to Action -->
        <div class="bg-dark-light rounded-lg p-8 relative overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10"></div>
          <div class="relative z-10">
            <h2 class="text-2xl md:text-3xl font-bold mb-4">Join the Conversation</h2>
            <p class="text-lg mb-6 max-w-3xl">
              Ethical AI development requires ongoing dialogue and collaboration. Explore our resources and contribute to this important discussion.
            </p>
            <div class="flex flex-wrap gap-4">
              <router-link to="/about" class="btn btn-primary">
                Learn More
              </router-link>
              <a href="https://github.com/nshiffer/aiethics" target="_blank" rel="noopener" class="btn bg-dark hover:bg-dark-light text-white flex items-center">
                <svg class="h-5 w-5 mr-1" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path>
                </svg>
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>

<style scoped>
@keyframes pulse {
  0%, 100% {
    opacity: 0.3;
  }
  50% {
    opacity: 0.6;
  }
}

.animate-pulse {
  animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style> 