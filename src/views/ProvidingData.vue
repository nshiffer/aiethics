<template>
  <div>
    <!-- Header -->
    <div class="mb-12">
      <h1 class="text-4xl font-bold mb-4">Providing Data to AI Systems</h1>
      <div class="neon-line mb-6"></div>
      <p class="text-xl text-gray-300">
        Ethical considerations when sharing, licensing, or contributing data for AI development and use.
      </p>
    </div>

    <!-- Main Content -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <!-- Main Article Column -->
      <div class="lg:col-span-2">
        <section class="mb-12">
          <h2 class="text-2xl font-bold mb-4">Data Sharing Decisions and Impact</h2>
          <p>
            Data is the foundation of AI systems. Every decision to share data—whether as an individual, organization, or community—shapes how AI systems develop and what they can do. These decisions carry ethical weight and downstream consequences that deserve careful consideration.
          </p>
          
          <div class="card my-6">
            <h3 class="text-xl font-bold mb-3">Types of Data Contributions</h3>
            <div class="space-y-4">
              <div>
                <h4 class="font-bold text-primary-light">Direct Contributions</h4>
                <p>
                  Deliberately providing data specifically for AI development or training.
                </p>
                <ul class="list-disc pl-6 mt-2 space-y-1">
                  <li>Participating in data collection initiatives or annotation projects</li>
                  <li>Uploading content to platforms that explicitly use it for AI training</li>
                  <li>Licensing existing datasets for AI research or development</li>
                  <li>Contributing to open-source datasets or AI commons</li>
                </ul>
              </div>
              
              <div>
                <h4 class="font-bold text-primary-light">Indirect Contributions</h4>
                <p>
                  Data sharing that may be used for AI training, even when that's not the primary purpose.
                </p>
                <ul class="list-disc pl-6 mt-2 space-y-1">
                  <li>Publishing content online that may be crawled for training data</li>
                  <li>Using services that analyze user data to improve AI features</li>
                  <li>Creating publicly available content that might be used in training datasets</li>
                  <li>Interacting with AI systems that learn from user feedback</li>
                </ul>
              </div>
              
              <div>
                <h4 class="font-bold text-primary-light">Institutional Data Stewardship</h4>
                <p>
                  Organizations deciding how to handle data they collect or manage.
                </p>
                <ul class="list-disc pl-6 mt-2 space-y-1">
                  <li>Government agencies determining how to use public data</li>
                  <li>Companies deciding whether to share customer data with AI developers</li>
                  <li>Research institutions managing participant data for AI research</li>
                  <li>Cultural institutions digitizing and sharing historical collections</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div class="bg-dark-light border-l-4 border-secondary p-6 rounded-lg my-8">
            <h3 class="text-xl font-bold mb-2">Questions Before Providing Data</h3>
            <p class="mb-4">
              Before sharing data for AI purposes, consider:
            </p>
            <ul class="list-disc pl-6 space-y-2">
              <li>What specific purpose will this data serve?</li>
              <li>Who benefits from this data being used in AI systems?</li>
              <li>Could this data be used in ways I haven't anticipated or don't support?</li>
              <li>Does this data contain personal or sensitive information about others?</li>
              <li>Do I have legitimate rights to share this data for this purpose?</li>
              <li>What level of control will I retain after sharing?</li>
            </ul>
          </div>
        </section>
        
        <section class="mb-12">
          <h2 class="text-2xl font-bold mb-4">Informed Consent and Agency</h2>
          
          <div class="card mb-6">
            <h3 class="text-xl font-bold mb-3">Meaningful Consent</h3>
            <p>
              Ethical data collection requires genuine informed consent, not just technical compliance:
            </p>
            
            <ul class="list-disc pl-6 my-4 space-y-2">
              <li>
                <strong>Clear Purpose:</strong> Explicit explanation of how data will be used for AI development or training
              </li>
              <li>
                <strong>Understandable Terms:</strong> Consent requests in plain language that clearly explain implications
              </li>
              <li>
                <strong>Specific Consent:</strong> Separate consent for different types of data use rather than all-or-nothing approaches
              </li>
              <li>
                <strong>Temporal Consideration:</strong> Recognition that consent may have expiration dates or changing contexts
              </li>
              <li>
                <strong>Practical Choice:</strong> Real options to decline without severe penalties or service degradation
              </li>
            </ul>
            
            <div class="bg-dark p-4 rounded-lg mt-4">
              <p class="text-sm text-gray-300">
                <strong>Example:</strong> Instead of "By using this service you agree to all data collection," more ethical approaches might offer: "We'd like to use your data to train our AI systems to improve language translation. Here's what that means, what we will and won't do with your data, and how to opt out at any time."
              </p>
            </div>
          </div>
          
          <div class="card mb-6">
            <h3 class="text-xl font-bold mb-3">Proxied Consent and Representation</h3>
            <p>
              Special considerations apply when data represents or impacts others:
            </p>
            
            <ul class="list-disc pl-6 my-4 space-y-2">
              <li>Images or information that include others beyond the person providing consent</li>
              <li>Cultural works that represent community knowledge or practices</li>
              <li>Data from dependents or those with limited capacity for consent</li>
              <li>Organizational data that contains information about multiple stakeholders</li>
            </ul>
            
            <p class="mt-4">
              In these cases, consider whether additional consent or consultation is needed, and whether you have legitimate authority to share the data.
            </p>
          </div>
          
          <div class="card mb-6">
            <h3 class="text-xl font-bold mb-3">Ongoing Control</h3>
            <p>
              Ethical data stewardship extends beyond initial consent:
            </p>
            
            <ul class="list-disc pl-6 my-4 space-y-2">
              <li>
                <strong>Withdrawal Rights:</strong> Clear mechanisms to withdraw data from future AI training or use
              </li>
              <li>
                <strong>Transparency Tools:</strong> Ways for contributors to see how their data is being used
              </li>
              <li>
                <strong>Update Mechanisms:</strong> Ability to correct or update contributed data
              </li>
              <li>
                <strong>Sunset Provisions:</strong> Clear terms for when data will no longer be used
              </li>
            </ul>
          </div>
        </section>
        
        <section class="mb-12">
          <h2 class="text-2xl font-bold mb-4">Data Rights and Ownership</h2>
          
          <div class="card mb-6">
            <h3 class="text-xl font-bold mb-3">Legal and Ethical Rights Frameworks</h3>
            <p>
              Understanding different perspectives on data rights:
            </p>
            
            <ul class="list-disc pl-6 my-4 space-y-2">
              <li>
                <strong>Copyright and IP:</strong> Legal protections for creative works and intellectual property
              </li>
              <li>
                <strong>Privacy Rights:</strong> Legal and ethical frameworks protecting personal information
              </li>
              <li>
                <strong>Indigenous Data Sovereignty:</strong> Rights of indigenous peoples to control data about their communities
              </li>
              <li>
                <strong>Commons Approaches:</strong> Collaborative governance models for shared data resources
              </li>
              <li>
                <strong>Public Domain:</strong> Resources freely available for common use without restrictions
              </li>
            </ul>
            
            <p class="mt-4">
              These different frameworks may sometimes conflict, requiring thoughtful navigation of competing values and perspectives.
            </p>
          </div>
          
          <div class="card mb-6">
            <h3 class="text-xl font-bold mb-3">Licensing and Terms</h3>
            <p>
              Explicit terms help clarify permissions and restrictions:
            </p>
            
            <ul class="list-disc pl-6 my-4 space-y-2">
              <li>
                <strong>Open Licenses:</strong> Frameworks like Creative Commons that specify permitted uses
              </li>
              <li>
                <strong>Restricted Licenses:</strong> Terms limiting data use to specific purposes or prohibiting certain applications
              </li>
              <li>
                <strong>Data Use Agreements:</strong> Contracts specifying terms of data sharing and limitations
              </li>
              <li>
                <strong>Purpose Limitations:</strong> Restrictions on how data can be used (e.g., non-commercial, educational, or research only)
              </li>
            </ul>
            
            <div class="bg-dark p-4 rounded-lg mt-4">
              <p class="text-sm text-gray-300">
                <strong>Example license consideration:</strong> A photographer might license their work under Creative Commons for human viewing and educational purposes, but specifically exclude AI training in their license terms.
              </p>
            </div>
          </div>
          
          <div class="card mb-6">
            <h3 class="text-xl font-bold mb-3">Attribution and Recognition</h3>
            <p>
              Acknowledging data sources and contributors:
            </p>
            
            <ul class="list-disc pl-6 my-4 space-y-2">
              <li>Credit for individuals whose data or creative works are used in AI development</li>
              <li>Recognition of communities who contribute cultural knowledge or practices</li>
              <li>Citation practices for datasets and their creators</li>
              <li>Compensation models for valuable data contributions</li>
            </ul>
          </div>
        </section>
        
        <section class="mb-12">
          <h2 class="text-2xl font-bold mb-4">Responsibility and Impact</h2>
          
          <div class="card mb-6">
            <h3 class="text-xl font-bold mb-3">Anticipating Downstream Effects</h3>
            <p>
              Consider how data contributions might shape AI systems and their impacts:
            </p>
            
            <ul class="list-disc pl-6 my-4 space-y-2">
              <li>How might this data influence AI system behavior?</li>
              <li>Could this data introduce or reinforce harmful biases?</li>
              <li>What gaps or limitations in this data might affect AI performance?</li>
              <li>How might this data be combined with other sources in unexpected ways?</li>
              <li>Could this data enable beneficial applications or harmful misuses?</li>
            </ul>
          </div>
          
          <div class="card mb-6">
            <h3 class="text-xl font-bold mb-3">Advancing Beneficial AI</h3>
            <p>
              Strategic data contributions to support positive outcomes:
            </p>
            
            <ul class="list-disc pl-6 my-4 space-y-2">
              <li>
                <strong>Addressing Gaps:</strong> Contributing data from underrepresented perspectives or use cases
              </li>
              <li>
                <strong>Quality Focus:</strong> Providing well-curated, accurate data with appropriate context
              </li>
              <li>
                <strong>Ethical Documentation:</strong> Including information about data limitations, sources, and intended uses
              </li>
              <li>
                <strong>Participatory Approaches:</strong> Involving affected communities in data collection and governance
              </li>
            </ul>
          </div>
        </section>
        
        <section class="mb-12">
          <h2 class="text-2xl font-bold mb-4">Case Studies: Ethical Data Provision</h2>
          
          <div class="card mb-6">
            <h3 class="text-xl font-bold mb-3">Case 1: Medical Imaging Dataset</h3>
            <p>
              A hospital consortium developed a shared dataset of anonymized medical images for AI research. Their ethical approach included:
            </p>
            
            <ul class="list-disc pl-6 my-4 space-y-2">
              <li>Obtaining specific consent from patients for AI research use beyond clinical care</li>
              <li>Creating tiered access levels with stricter requirements for more sensitive data</li>
              <li>Including diverse patient populations to ensure resulting AI would work equitably</li>
              <li>Establishing a governance committee with patient advocates to oversee data use</li>
              <li>Requiring that resulting AI applications be evaluated for accessibility and affordability</li>
              <li>Creating mechanisms for patients to withdraw their data if desired</li>
            </ul>
          </div>
          
          <div class="card mb-6">
            <h3 class="text-xl font-bold mb-3">Case 2: Cultural Heritage Digitization</h3>
            <p>
              A museum digitizing indigenous cultural artifacts for potential educational AI applications implemented:
            </p>
            
            <ul class="list-disc pl-6 my-4 space-y-2">
              <li>Collaborative governance with source communities determining appropriate uses</li>
              <li>Traditional knowledge labels indicating cultural protocols and restrictions</li>
              <li>Licensing that prohibited commercialization without explicit community consent</li>
              <li>Revenue sharing arrangements for any commercial applications</li>
              <li>Technical protection measures to prevent scraping or unauthorized use</li>
              <li>Regular review processes to assess impacts and adapt policies as needed</li>
            </ul>
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
              <li><a href="#" class="hover:text-primary-light">Data Sharing Decisions</a></li>
              <li><a href="#" class="hover:text-primary-light">Informed Consent</a></li>
              <li><a href="#" class="hover:text-primary-light">Data Rights</a></li>
              <li><a href="#" class="hover:text-primary-light">Responsibility & Impact</a></li>
              <li><a href="#" class="hover:text-primary-light">Case Studies</a></li>
              <li><a href="#" class="hover:text-primary-light">Resources</a></li>
            </ul>
          </div>
          
          <!-- Data Sharing Decision Framework -->
          <div class="card mb-6">
            <h3 class="text-xl font-bold mb-4">Data Sharing Decision Framework</h3>
            <p class="text-sm mb-4">Consider these factors when deciding whether to share data:</p>
            <div class="space-y-4">
              <div>
                <h4 class="font-semibold text-primary-light">Value & Purpose</h4>
                <ul class="text-sm pl-4 space-y-1">
                  <li>What beneficial purpose will this data serve?</li>
                  <li>Is the intended use aligned with your values?</li>
                  <li>Is AI the appropriate technology for this purpose?</li>
                </ul>
              </div>
              
              <div>
                <h4 class="font-semibold text-primary-light">Rights & Consent</h4>
                <ul class="text-sm pl-4 space-y-1">
                  <li>Do you have clear rights to share this data?</li>
                  <li>Have all relevant parties consented?</li>
                  <li>Is the consent process transparent and meaningful?</li>
                </ul>
              </div>
              
              <div>
                <h4 class="font-semibold text-primary-light">Control & Governance</h4>
                <ul class="text-sm pl-4 space-y-1">
                  <li>What control will you retain after sharing?</li>
                  <li>Can you withdraw the data if needed?</li>
                  <li>Who will have access and decision-making authority?</li>
                </ul>
              </div>
              
              <div>
                <h4 class="font-semibold text-primary-light">Impact & Risk</h4>
                <ul class="text-sm pl-4 space-y-1">
                  <li>What potential benefits might result?</li>
                  <li>What potential harms could occur?</li>
                  <li>Are there appropriate safeguards in place?</li>
                </ul>
              </div>
            </div>
          </div>
          
          <!-- Data Licensing Options -->
          <div class="card mb-6">
            <h3 class="text-xl font-bold mb-4">Common Data Licensing Approaches</h3>
            <div class="overflow-x-auto">
              <table class="w-full text-sm">
                <thead>
                  <tr class="border-b border-gray-700">
                    <th class="text-left py-2">Type</th>
                    <th class="text-left py-2">Use Cases</th>
                  </tr>
                </thead>
                <tbody class="text-gray-300">
                  <tr class="border-b border-gray-800">
                    <td class="py-2 pr-2">Public Domain (CC0)</td>
                    <td class="py-2">No restrictions, maximum reuse flexibility</td>
                  </tr>
                  <tr class="border-b border-gray-800">
                    <td class="py-2 pr-2">Attribution (CC-BY)</td>
                    <td class="py-2">Requires credit but allows reuse</td>
                  </tr>
                  <tr class="border-b border-gray-800">
                    <td class="py-2 pr-2">Share-Alike</td>
                    <td class="py-2">Derivatives must use same license</td>
                  </tr>
                  <tr class="border-b border-gray-800">
                    <td class="py-2 pr-2">Non-Commercial</td>
                    <td class="py-2">Prohibits commercial applications</td>
                  </tr>
                  <tr>
                    <td class="py-2 pr-2">AI-Specific</td>
                    <td class="py-2">Emerging licenses addressing AI training</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <!-- Further Reading -->
          <div class="card">
            <h3 class="text-xl font-bold mb-4">Further Reading</h3>
            <ul class="space-y-3">
              <li>
                <a href="#" class="block hover:bg-dark rounded p-2 transition-colors">
                  <p class="font-semibold">Data Dignity and Digital Labor</p>
                  <p class="text-sm text-gray-400">Journal of Data Ethics</p>
                </a>
              </li>
              <li>
                <a href="#" class="block hover:bg-dark rounded p-2 transition-colors">
                  <p class="font-semibold">Indigenous Data Sovereignty Principles</p>
                  <p class="text-sm text-gray-400">Global Indigenous Data Alliance</p>
                </a>
              </li>
              <li>
                <a href="#" class="block hover:bg-dark rounded p-2 transition-colors">
                  <p class="font-semibold">Participatory Data Stewardship</p>
                  <p class="text-sm text-gray-400">Ada Lovelace Institute</p>
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
        <router-link to="/bias-considerations" class="card hover:shadow-neon transition-shadow">
          <h3 class="text-xl font-bold mb-2">Bias in AI Training Data</h3>
          <p class="text-gray-400">Understanding how data choices impact fairness and representation.</p>
        </router-link>
        
        <router-link to="/integrating-with-ai" class="card hover:shadow-neon transition-shadow">
          <h3 class="text-xl font-bold mb-2">Integrating with AI</h3>
          <p class="text-gray-400">Approaches for connecting systems with AI capabilities.</p>
        </router-link>
        
        <router-link to="/building-ai-apps" class="card hover:shadow-neon transition-shadow">
          <h3 class="text-xl font-bold mb-2">Building Ethical AI Applications</h3>
          <p class="text-gray-400">Guidance for developers creating AI systems.</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProvidingData'
}
</script> 