<template>
  <div>
    <!-- Header -->
    <div class="mb-12">
      <h1 class="text-4xl font-bold mb-4">AI Advertising & Branding</h1>
      <div class="neon-line mb-6"></div>
      <p class="text-xl text-gray-300">
        Ethical considerations in marketing and branding AI products and services.
      </p>
    </div>

    <!-- Main Content -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <!-- Main Article Column -->
      <div class="lg:col-span-2">
        <section class="mb-12">
          <h2 class="text-2xl font-bold mb-4">The Challenge of AI Marketing</h2>
          <p>
            Marketing AI products and services presents unique ethical challenges. AI capabilities can be complex and difficult to explain, creating a significant knowledge gap between developers and consumers. Meanwhile, the rapid advancement of AI technologies and their growing cultural prominence creates incentives for companies to make grand claims about their products.
          </p>
          <p class="mt-4">
            This combination of factors—technical complexity, knowledge asymmetry, and competitive pressure—creates conditions where misleading marketing can easily occur, whether intentionally or unintentionally. Responsible AI advertising requires careful consideration of how products are represented, what claims are made, and how consumer expectations are managed.
          </p>
          
          <div class="card my-6">
            <h3 class="text-xl font-bold mb-3">Common Problematic Practices</h3>
            <div class="space-y-4">
              <div>
                <h4 class="font-bold text-primary-light">Capability Exaggeration</h4>
                <p>
                  Presenting AI systems as more capable, autonomous, or intelligent than they actually are, often by implying general intelligence or understanding that doesn't exist.
                </p>
              </div>
              
              <div>
                <h4 class="font-bold text-primary-light">Anthropomorphic Misrepresentation</h4>
                <p>
                  Using human-like characteristics, names, or personas in ways that mislead users about the nature of the system and create false impressions about its capabilities.
                </p>
              </div>
              
              <div>
                <h4 class="font-bold text-primary-light">Opacity About Limitations</h4>
                <p>
                  Failing to clearly communicate the limitations, error rates, or constraints of AI systems, leaving users with unrealistic expectations.
                </p>
              </div>
              
              <div>
                <h4 class="font-bold text-primary-light">Algorithmic Promises</h4>
                <p>
                  Making unjustified claims about algorithmic objectivity, fairness, or lack of bias without sufficient evidence or transparency.
                </p>
              </div>
              
              <div>
                <h4 class="font-bold text-primary-light">Data Privacy Obscuration</h4>
                <p>
                  Using vague or misleading language about how user data is collected, stored, or utilized by AI systems.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section class="mb-12">
          <h2 class="text-2xl font-bold mb-4">Ethical Advertising Principles</h2>
          
          <div class="card mb-6">
            <h3 class="text-xl font-bold mb-3">Truthful Representation</h3>
            <p>
              AI capabilities should be described accurately, with clear distinctions between:
            </p>
            
            <ul class="list-disc pl-6 my-4 space-y-2">
              <li>What the system can currently do</li>
              <li>What it might do in the future with development</li>
              <li>What remains beyond its capabilities</li>
            </ul>
            
            <div class="mt-4 bg-dark rounded-lg p-4">
              <p class="font-mono text-sm text-gray-300 mb-2">Problematic claim:</p>
              <p class="font-mono text-primary mb-4">"Our AI understands your needs and thinks like a human financial advisor."</p>
              <p class="font-mono text-sm text-gray-300 mb-2">More ethical representation:</p>
              <p class="font-mono text-accent">"Our AI analyzes financial data patterns to provide recommendations based on parameters set by human financial experts."</p>
            </div>
          </div>
          
          <div class="card mb-6">
            <h3 class="text-xl font-bold mb-3">Transparency About Limitations</h3>
            <p>
              Clear communication about the system's constraints, potential errors, and circumstances where human oversight is necessary.
            </p>
            
            <div class="mt-4 bg-dark rounded-lg p-4">
              <p class="font-mono text-sm text-gray-300 mb-2">Problematic omission:</p>
              <p class="font-mono text-primary mb-4">"Our AI diagnoses skin conditions with medical precision."</p>
              <p class="font-mono text-sm text-gray-300 mb-2">More ethical representation:</p>
              <p class="font-mono text-accent">"Our AI helps identify potential skin conditions with XX% accuracy for common conditions, but should be used as a supplementary tool for healthcare professionals, not as a definitive diagnosis."</p>
            </div>
          </div>
          
          <div class="card mb-6">
            <h3 class="text-xl font-bold mb-3">Evidence-Based Claims</h3>
            <p>
              Marketing claims about AI performance, accuracy, or benefits should be supported by robust evidence, with methodologies and limitations clearly disclosed.
            </p>
            
            <ul class="list-disc pl-6 my-4 space-y-2">
              <li>Performance metrics should be relevant to real-world usage scenarios</li>
              <li>Test conditions and benchmark choices should be transparently explained</li>
              <li>Comparative claims require fair and representative comparisons</li>
              <li>Statistical claims should include appropriate context and confidence intervals</li>
            </ul>
          </div>
          
          <div class="card mb-6">
            <h3 class="text-xl font-bold mb-3">Clear Disclosure of Human Involvement</h3>
            <p>
              Accurate representation of the role humans play in:
            </p>
            
            <ul class="list-disc pl-6 my-4 space-y-2">
              <li>Training and developing the AI</li>
              <li>Reviewing, editing, or filtering AI outputs</li>
              <li>Making final decisions or overriding AI recommendations</li>
              <li>Providing backup or support when AI systems fail</li>
            </ul>
            
            <div class="mt-4 bg-dark rounded-lg p-4">
              <p class="font-mono text-sm text-gray-300 mb-2">Problematic claim:</p>
              <p class="font-mono text-primary mb-4">"Content fully generated by AI with no human interference."</p>
              <p class="font-mono text-sm text-gray-300 mb-2">More ethical representation:</p>
              <p class="font-mono text-accent">"Content initially generated by AI, with human editors reviewing for accuracy, quality, and alignment with our values."</p>
            </div>
          </div>
          
          <div class="card mb-6">
            <h3 class="text-xl font-bold mb-3">Responsible Use of Anthropomorphism</h3>
            <p>
              If using human-like characteristics in marketing:
            </p>
            
            <ul class="list-disc pl-6 my-4 space-y-2">
              <li>Avoid language that explicitly claims or strongly implies consciousness, emotions, or understanding</li>
              <li>Ensure personification doesn't mislead about capabilities or autonomy</li>
              <li>Consider whether anthropomorphism serves a legitimate user experience purpose</li>
              <li>Be particularly cautious with vulnerable populations (e.g., children, elderly, those with cognitive impairments)</li>
            </ul>
          </div>
          
          <div class="card mb-6">
            <h3 class="text-xl font-bold mb-3">Data Usage Transparency</h3>
            <p>
              Clear communication about:
            </p>
            
            <ul class="list-disc pl-6 my-4 space-y-2">
              <li>What user data is collected and how it's used</li>
              <li>Whether user interactions train or improve the AI</li>
              <li>Who has access to data provided to the system</li>
              <li>How long data is retained and user control options</li>
            </ul>
          </div>
        </section>
        
        <section class="mb-12">
          <h2 class="text-2xl font-bold mb-4">Regulations and Standards</h2>
          
          <div class="bg-dark-light border-l-4 border-secondary p-6 rounded-lg my-8">
            <h3 class="text-xl font-bold mb-2">Emerging Regulatory Frameworks</h3>
            <p class="mb-4">
              While regulations specifically addressing AI advertising are still evolving, several existing frameworks may apply:
            </p>
            <ul class="list-disc pl-6 space-y-2">
              <li>
                <strong>Consumer protection laws</strong> prohibiting false or misleading advertising in many jurisdictions
              </li>
              <li>
                <strong>Industry-specific regulations</strong> for sectors like healthcare, finance, and education
              </li>
              <li>
                <strong>EU AI Act</strong> may impose transparency requirements for high-risk AI systems
              </li>
              <li>
                <strong>Sectoral guidelines</strong> from organizations like IEEE, ISO, and industry associations
              </li>
            </ul>
          </div>
          
          <p>
            As AI regulation continues to develop, companies should stay informed about evolving obligations and adopt a proactive approach to ethical marketing that goes beyond minimum compliance.
          </p>
        </section>
        
        <section class="mb-12">
          <h2 class="text-2xl font-bold mb-4">Case Studies</h2>
          
          <div class="card mb-6">
            <h3 class="text-xl font-bold mb-3">Chatbot Healthcare Claims</h3>
            <p>
              A mental health chatbot company advertised its service as providing "therapy" and claimed its AI could "understand emotions" and offer "personalized therapeutic interventions." However, the system was primarily based on scripted responses with limited personalization. After regulatory scrutiny, the company revised its marketing to describe the service as a "support tool" that could help users practice coping strategies between professional therapy sessions, with clearer disclosure about its limitations.
            </p>
          </div>
          
          <div class="card mb-6">
            <h3 class="text-xl font-bold mb-3">Self-Driving Capability Representation</h3>
            <p>
              Several autonomous vehicle companies have faced criticism for naming and marketing features in ways that implied greater autonomy than their systems actually provided. Terms like "autopilot" and "full self-driving" created consumer confusion about the need for driver attention and intervention. Some jurisdictions have now implemented regulations requiring more precise descriptions of automated driving capabilities and clearer communication about driver responsibilities.
            </p>
          </div>
          
          <div class="card mb-6">
            <h3 class="text-xl font-bold mb-3">AI-Generated Content Disclosure</h3>
            <p>
              A digital media company used AI to generate news articles but initially presented them without disclosure, using human bylines. After public criticism, the company implemented a transparent labeling system for AI-generated or AI-assisted content, with clear information about the level of human review and editing involved in each piece.
            </p>
          </div>
        </section>
      </div>
      
      <!-- Sidebar Column -->
      <div class="lg:col-span-1">
        <div class="sticky top-24">
          <!-- Table of Contents -->
          <div class="card mb-6">
            <h3 class="text-xl font-bold mb-4">Table of Contents</h3>
            <ul class="space-y-2">
              <li><a href="#" class="hover:text-primary-light">The Challenge of AI Marketing</a></li>
              <li><a href="#" class="hover:text-primary-light">Ethical Advertising Principles</a></li>
              <li><a href="#" class="hover:text-primary-light">Regulations and Standards</a></li>
              <li><a href="#" class="hover:text-primary-light">Case Studies</a></li>
              <li><a href="#" class="hover:text-primary-light">Best Practices</a></li>
              <li><a href="#" class="hover:text-primary-light">Further Reading</a></li>
            </ul>
          </div>
          
          <!-- Marketing Ethics Checklist -->
          <div class="card mb-6">
            <h3 class="text-xl font-bold mb-4">Marketing Ethics Checklist</h3>
            <p class="text-sm mb-4">Key questions to consider when creating AI marketing materials:</p>
            <ul class="space-y-3">
              <li class="flex items-start">
                <span class="text-accent mr-2">✓</span>
                <span>Are capability claims accurate and evidence-based?</span>
              </li>
              <li class="flex items-start">
                <span class="text-accent mr-2">✓</span>
                <span>Are system limitations clearly disclosed?</span>
              </li>
              <li class="flex items-start">
                <span class="text-accent mr-2">✓</span>
                <span>Is human involvement transparently communicated?</span>
              </li>
              <li class="flex items-start">
                <span class="text-accent mr-2">✓</span>
                <span>Does anthropomorphic language avoid implying consciousness?</span>
              </li>
              <li class="flex items-start">
                <span class="text-accent mr-2">✓</span>
                <span>Is data usage clearly explained?</span>
              </li>
              <li class="flex items-start">
                <span class="text-accent mr-2">✓</span>
                <span>Are performance metrics relevant and contextualized?</span>
              </li>
              <li class="flex items-start">
                <span class="text-accent mr-2">✓</span>
                <span>Would a non-technical user correctly understand what the system does?</span>
              </li>
            </ul>
          </div>
          
          <!-- Red Flags -->
          <div class="card mb-6 border-l-4 border-primary">
            <h3 class="text-xl font-bold mb-4">Marketing Red Flags</h3>
            <p class="text-sm mb-4">
              Warning signs that AI marketing may be misleading:
            </p>
            <ul class="space-y-3">
              <li class="flex items-start">
                <span class="text-primary mr-2">⚠️</span>
                <span>Claims of "understanding" or "thinking" that imply consciousness</span>
              </li>
              <li class="flex items-start">
                <span class="text-primary mr-2">⚠️</span>
                <span>Vague, unquantified performance claims</span>
              </li>
              <li class="flex items-start">
                <span class="text-primary mr-2">⚠️</span>
                <span>Absence of information about limitations or error rates</span>
              </li>
              <li class="flex items-start">
                <span class="text-primary mr-2">⚠️</span>
                <span>Hiding human involvement in system outputs</span>
              </li>
              <li class="flex items-start">
                <span class="text-primary mr-2">⚠️</span>
                <span>Unclear or buried data collection practices</span>
              </li>
            </ul>
          </div>
          
          <!-- Further Reading -->
          <div class="card">
            <h3 class="text-xl font-bold mb-4">Further Reading</h3>
            <ul class="space-y-3">
              <li>
                <a href="#" class="block hover:bg-dark rounded p-2 transition-colors">
                  <p class="font-semibold">Truth, Lies, and Automation</p>
                  <p class="text-sm text-gray-400">Journal of Marketing Ethics, 2023</p>
                </a>
              </li>
              <li>
                <a href="#" class="block hover:bg-dark rounded p-2 transition-colors">
                  <p class="font-semibold">Advertising Standards for AI Products</p>
                  <p class="text-sm text-gray-400">International Consumer Protection Forum</p>
                </a>
              </li>
              <li>
                <a href="#" class="block hover:bg-dark rounded p-2 transition-colors">
                  <p class="font-semibold">The Impact of AI Anthropomorphism on Consumer Perception</p>
                  <p class="text-sm text-gray-400">Consumer Psychology Research Initiative</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Related Topics -->
    <div class="mt-16">
      <h2 class="text-2xl font-bold mb-6">Related Topics</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <router-link to="/naming-conventions" class="card hover:shadow-neon transition-shadow">
          <h3 class="text-xl font-bold mb-2">Naming Conventions</h3>
          <p class="text-gray-400">Ethical approaches to naming AI products and services.</p>
        </router-link>
        
        <router-link to="/freedom-of-thought" class="card hover:shadow-neon transition-shadow">
          <h3 class="text-xl font-bold mb-2">Freedom of Thought</h3>
          <p class="text-gray-400">How marketing can impact human autonomy and decision-making.</p>
        </router-link>
        
        <router-link to="/using-ai-apps" class="card hover:shadow-neon transition-shadow">
          <h3 class="text-xl font-bold mb-2">Using AI Apps</h3>
          <p class="text-gray-400">Evaluating AI products beyond marketing claims.</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdvertisingAndBranding'
}
</script> 