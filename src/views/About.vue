<template>
  <div>
    <!-- Header -->
    <div class="mb-12">
      <h1 class="text-4xl font-bold mb-4">About the AI Ethics Resource Center</h1>
      <div class="neon-line mb-6"></div>
      <p class="text-xl text-gray-300">
        A comprehensive guide to ethical considerations in artificial intelligence.
      </p>
    </div>

    <!-- Main Content -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <!-- Main Article Column -->
      <div class="lg:col-span-2">
        <section class="mb-12">
          <h2 class="text-2xl font-bold mb-4">Our Mission</h2>
          <p>
            The AI Ethics Resource Center aims to provide accessible, comprehensive information about ethical considerations in artificial intelligence development, deployment, and use. We believe that ethical reflection should be built into every stage of AI development and application, not added as an afterthought.
          </p>
          <p class="mt-4">
            Our goal is to empower developers, organizations, policymakers, and users with the knowledge and frameworks they need to make informed decisions about AI technologies. By fostering a broader understanding of AI ethics, we hope to contribute to the development of AI systems that benefit humanity while respecting fundamental rights and values.
          </p>
        </section>
        
        <section class="mb-12">
          <h2 class="text-2xl font-bold mb-4">Key Areas of Focus</h2>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div class="card h-full">
              <h3 class="text-xl font-bold mb-3">Foundational Ethics</h3>
              <ul class="list-disc pl-6 space-y-1">
                <li>Ethical frameworks for AI</li>
                <li>Values alignment</li>
                <li>Responsibility and accountability</li>
                <li>Transparency in AI systems</li>
                <li>Justice and fairness</li>
              </ul>
            </div>
            
            <div class="card h-full">
              <h3 class="text-xl font-bold mb-3">Development Practices</h3>
              <ul class="list-disc pl-6 space-y-1">
                <li>Bias identification and mitigation</li>
                <li>Responsible data collection and use</li>
                <li>Testing and validation methods</li>
                <li>Privacy-preserving techniques</li>
                <li>Safety and security measures</li>
              </ul>
            </div>
            
            <div class="card h-full">
              <h3 class="text-xl font-bold mb-3">Governance & Policy</h3>
              <ul class="list-disc pl-6 space-y-1">
                <li>Regulatory approaches</li>
                <li>Industry standards</li>
                <li>Organizational ethics programs</li>
                <li>Impact assessments</li>
                <li>International cooperation</li>
              </ul>
            </div>
            
            <div class="card h-full">
              <h3 class="text-xl font-bold mb-3">Social Impact</h3>
              <ul class="list-disc pl-6 space-y-1">
                <li>Labor and economic effects</li>
                <li>Social disparities and equity</li>
                <li>Public perception and trust</li>
                <li>Cultural considerations</li>
                <li>Human-AI interaction</li>
              </ul>
            </div>
          </div>
        </section>
        
        <section class="mb-12">
          <h2 class="text-2xl font-bold mb-4">Using This Resource</h2>
          
          <div class="card mb-6">
            <h3 class="text-xl font-bold mb-3">For Developers</h3>
            <p>
              Explore practical guidelines for building ethical AI systems, from data collection and model training to deployment and monitoring. Our resources provide concrete strategies for addressing common ethical challenges in AI development.
            </p>
            <div class="mt-4">
              <router-link to="/building-ai-apps" class="btn btn-primary">Building AI Apps</router-link>
            </div>
          </div>
          
          <div class="card mb-6">
            <h3 class="text-xl font-bold mb-3">For Organizations</h3>
            <p>
              Learn about frameworks for evaluating and integrating AI systems, developing organizational AI ethics policies, and conducting ethical impact assessments. Our resources help organizations use AI responsibly and sustainably.
            </p>
            <div class="mt-4">
              <router-link to="/integrating-with-ai" class="btn btn-primary">Integrating with AI</router-link>
            </div>
          </div>
          
          <div class="card mb-6">
            <h3 class="text-xl font-bold mb-3">For Users</h3>
            <p>
              Discover how to evaluate AI products, protect your data and privacy, understand AI limitations, and maintain human autonomy when using AI-powered tools and services.
            </p>
            <div class="mt-4">
              <router-link to="/using-ai-apps" class="btn btn-primary">Using AI Apps</router-link>
            </div>
          </div>
          
          <div class="card mb-6">
            <h3 class="text-xl font-bold mb-3">For Data Providers</h3>
            <p>
              Understand the ethical implications of providing data to AI systems, the importance of informed consent, and best practices for ensuring your data contributes to ethical AI development.
            </p>
            <div class="mt-4">
              <router-link to="/providing-data" class="btn btn-primary">Providing Data</router-link>
            </div>
          </div>
        </section>
        
        <section class="mb-12">
          <h2 class="text-2xl font-bold mb-4">Contributing to This Resource</h2>
          <p>
            The AI Ethics Resource Center is an open-source project hosted on GitHub. We welcome contributions from experts and practitioners in AI ethics, development, policy, and related fields. To contribute:
          </p>
          
          <ul class="list-disc pl-6 my-4 space-y-2">
            <li>
              <strong>Submit content:</strong> Propose new topics, case studies, or resources through GitHub issues.
            </li>
            <li>
              <strong>Improve existing content:</strong> Submit pull requests to enhance, update, or correct information.
            </li>
            <li>
              <strong>Share feedback:</strong> Help us improve by suggesting enhancements or reporting issues.
            </li>
            <li>
              <strong>Spread the word:</strong> Share this resource with colleagues, students, and communities interested in AI ethics.
            </li>
          </ul>
          
          <div class="mt-6">
            <a href="https://github.com/nshiffer/aiethics" target="_blank" rel="noopener" class="btn btn-primary flex items-center">
              <svg class="h-5 w-5 mr-1" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path>
              </svg>
              Contribute on GitHub
            </a>
          </div>
        </section>
      </div>
      
      <!-- Sidebar Column -->
      <div class="lg:col-span-1">
        <div class="sticky top-24">
          <!-- Table of Contents -->
          <div class="card mb-6">
            <h3 class="text-xl font-bold mb-4">Navigation</h3>
            <ul class="space-y-3">
              <li>
                <div class="font-semibold text-primary-light mb-2">Ethics Topics</div>
                <ul class="pl-4 space-y-1">
                  <li><router-link to="/naming-conventions" class="hover:text-primary-light">Naming Conventions</router-link></li>
                  <li><router-link to="/bias-considerations" class="hover:text-primary-light">Bias in AI</router-link></li>
                  <li><router-link to="/freedom-of-thought" class="hover:text-primary-light">Freedom of Thought</router-link></li>
                  <li><router-link to="/advertising-and-branding" class="hover:text-primary-light">Advertising & Branding</router-link></li>
                </ul>
              </li>
              
              <li>
                <div class="font-semibold text-primary-light mb-2">Practical Guides</div>
                <ul class="pl-4 space-y-1">
                  <li><router-link to="/building-ai-apps" class="hover:text-primary-light">Building AI Apps</router-link></li>
                  <li><router-link to="/using-ai-apps" class="hover:text-primary-light">Using AI Apps</router-link></li>
                  <li><router-link to="/integrating-with-ai" class="hover:text-primary-light">Integrating with AI</router-link></li>
                  <li><router-link to="/providing-data" class="hover:text-primary-light">Providing Data</router-link></li>
                </ul>
              </li>
            </ul>
          </div>
          
          <!-- Resources -->
          <div class="card mb-6">
            <h3 class="text-xl font-bold mb-4">Additional Resources</h3>
            <ul class="space-y-3">
              <li class="flex items-start">
                <span class="text-accent mr-2">•</span>
                <a href="#" class="hover:text-primary-light">AI Ethics Guidelines Database</a>
              </li>
              <li class="flex items-start">
                <span class="text-accent mr-2">•</span>
                <a href="#" class="hover:text-primary-light">Ethics Assessment Toolkit</a>
              </li>
              <li class="flex items-start">
                <span class="text-accent mr-2">•</span>
                <a href="#" class="hover:text-primary-light">Case Study Repository</a>
              </li>
              <li class="flex items-start">
                <span class="text-accent mr-2">•</span>
                <a href="#" class="hover:text-primary-light">AI Ethics Glossary</a>
              </li>
              <li class="flex items-start">
                <span class="text-accent mr-2">•</span>
                <a href="#" class="hover:text-primary-light">Research Publications</a>
              </li>
            </ul>
          </div>
          
          <!-- Contact -->
          <div class="card">
            <h3 class="text-xl font-bold mb-4">Contact Us</h3>
            <p class="mb-4">
              Have questions, suggestions, or feedback about this resource? Reach out through one of the following channels:
            </p>
            <ul class="space-y-3">
              <li class="flex items-start">
                <span class="text-primary-light mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <a href="mailto:contact@example.com" class="hover:text-primary-light">contact@example.com</a>
              </li>
              <li class="flex items-start">
                <span class="text-primary-light mr-2">
                  <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path>
                  </svg>
                </span>
                <a href="https://github.com/nshiffer/aiethics/issues" target="_blank" rel="noopener" class="hover:text-primary-light">GitHub Issues</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutPage'
}
</script> 