<template>
  <div>
    <!-- Header -->
    <div class="mb-12">
      <h1 class="text-4xl font-bold mb-4">Bias in AI Training Data</h1>
      <div class="neon-line mb-6"></div>
      <p class="text-xl text-gray-300">
        Understanding, identifying, and mitigating bias in AI systems.
      </p>
    </div>

    <!-- Main Content -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <!-- Main Article Column -->
      <div class="lg:col-span-2">
        <section class="mb-12">
          <h2 class="text-2xl font-bold mb-4">Understanding Bias in AI</h2>
          <p>
            AI systems learn from data, which means they can inherit, amplify, or introduce biases present in their training datasets. These biases can lead to unfair or harmful outcomes when AI systems are deployed in the real world.
          </p>
          
          <div class="card my-6">
            <h3 class="text-xl font-bold mb-3">Types of Bias</h3>
            <div class="space-y-4">
              <div>
                <h4 class="font-bold text-primary-light">Historical Bias</h4>
                <p>
                  Occurs when training data reflects historical inequalities and societal prejudices.
                </p>
              </div>
              
              <div>
                <h4 class="font-bold text-primary-light">Representation Bias</h4>
                <p>
                  Results from underrepresentation or overrepresentation of certain groups in the training data.
                </p>
              </div>
              
              <div>
                <h4 class="font-bold text-primary-light">Measurement Bias</h4>
                <p>
                  Arises when the features chosen to represent a concept are flawed or incomplete.
                </p>
              </div>
              
              <div>
                <h4 class="font-bold text-primary-light">Aggregation Bias</h4>
                <p>
                  Occurs when a one-size-fits-all model is applied to different populations with different characteristics.
                </p>
              </div>
              
              <div>
                <h4 class="font-bold text-primary-light">Evaluation Bias</h4>
                <p>
                  Results from using biased benchmarks to measure system performance.
                </p>
              </div>
            </div>
          </div>
          
          <p>
            Bias can manifest in many different AI applications, from facial recognition and natural language processing to hiring algorithms and loan approval systems. The consequences can range from perpetuating stereotypes to denying opportunities and services to certain groups.
          </p>
        </section>
        
        <section class="mb-12">
          <h2 class="text-2xl font-bold mb-4">Identifying Bias</h2>
          
          <p>
            Detecting bias in AI systems requires intentional effort and specialized methods. Here are some approaches to identify potential bias:
          </p>
          
          <div class="card my-6">
            <h3 class="text-xl font-bold mb-3">Bias Detection Methods</h3>
            
            <div class="space-y-6">
              <div>
                <h4 class="font-bold text-accent">Data Analysis</h4>
                <ul class="list-disc pl-6 mt-2 space-y-1">
                  <li>Examine the demographic composition of training data</li>
                  <li>Identify missing or underrepresented groups</li>
                  <li>Look for correlations between protected attributes and outcomes</li>
                  <li>Analyze the distribution of labels across different groups</li>
                </ul>
              </div>
              
              <div>
                <h4 class="font-bold text-accent">Model Testing</h4>
                <ul class="list-disc pl-6 mt-2 space-y-1">
                  <li>Test model performance across different demographic groups</li>
                  <li>Apply counterfactual testing by changing only sensitive attributes</li>
                  <li>Use adversarial testing to find edge cases where bias emerges</li>
                  <li>Conduct sensitivity analysis to understand how inputs affect outputs</li>
                </ul>
              </div>
              
              <div>
                <h4 class="font-bold text-accent">Fairness Metrics</h4>
                <p class="mt-2">
                  Various mathematical measures can help quantify fairness and bias:
                </p>
                <ul class="list-disc pl-6 mt-2 space-y-1">
                  <li>Demographic parity: Ensures equal outcomes across groups</li>
                  <li>Equal opportunity: Ensures equal true positive rates across groups</li>
                  <li>Predictive parity: Ensures equal precision across groups</li>
                  <li>Disparate impact: Measures the ratio of favorable outcomes between groups</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        <section class="mb-12">
          <h2 class="text-2xl font-bold mb-4">Mitigating Bias</h2>
          
          <p>
            Addressing bias in AI systems requires a multi-faceted approach that spans the entire AI development lifecycle. Here are key strategies:
          </p>
          
          <div class="card my-6">
            <h3 class="text-xl font-bold mb-3">Pre-processing Strategies</h3>
            <p>
              Interventions applied to the training data before model training:
            </p>
            <ul class="list-disc pl-6 mt-2 space-y-1">
              <li>Balanced dataset collection to ensure representation</li>
              <li>Data augmentation for underrepresented groups</li>
              <li>Reweighing instances to counteract historical imbalances</li>
              <li>Removing sensitive attributes while preserving useful information</li>
            </ul>
          </div>
          
          <div class="card my-6">
            <h3 class="text-xl font-bold mb-3">In-processing Strategies</h3>
            <p>
              Modifications to the learning algorithm during training:
            </p>
            <ul class="list-disc pl-6 mt-2 space-y-1">
              <li>Adversarial debiasing to prevent the model from learning protected attributes</li>
              <li>Adding fairness constraints to the optimization objective</li>
              <li>Using regularization techniques that penalize biased predictions</li>
              <li>Applying transfer learning from unbiased domains</li>
            </ul>
          </div>
          
          <div class="card my-6">
            <h3 class="text-xl font-bold mb-3">Post-processing Strategies</h3>
            <p>
              Adjustments made to the model's outputs after training:
            </p>
            <ul class="list-disc pl-6 mt-2 space-y-1">
              <li>Calibrating prediction thresholds separately for different groups</li>
              <li>Rejecting certain predictions based on fairness criteria</li>
              <li>Adding human oversight for sensitive decisions</li>
              <li>Implementing feedback loops to improve fairness over time</li>
            </ul>
          </div>
          
          <div class="bg-dark-light border-l-4 border-secondary p-6 rounded-lg my-8">
            <h3 class="text-xl font-bold mb-2">Beyond Technical Solutions</h3>
            <p>
              Technical approaches alone aren't sufficient to address bias. Organizations should also:
            </p>
            <ul class="list-disc pl-6 mt-2 space-y-1">
              <li>Establish diverse and inclusive teams</li>
              <li>Conduct ethical reviews throughout development</li>
              <li>Engage with affected communities and stakeholders</li>
              <li>Implement governance frameworks for responsible AI</li>
              <li>Promote transparency in how AI systems work and make decisions</li>
            </ul>
          </div>
        </section>
        
        <section class="mb-12">
          <h2 class="text-2xl font-bold mb-4">Case Studies</h2>
          
          <div class="card mb-6">
            <h3 class="text-xl font-bold mb-3">Facial Recognition</h3>
            <p>
              Several facial recognition systems have shown significantly higher error rates for women and people with darker skin tones. These disparities stem from training datasets that overrepresent certain demographics.
            </p>
            <p class="mt-2">
              Mitigation efforts include diversifying training data, using more sophisticated data augmentation techniques, and implementing fairness constraints during model training.
            </p>
          </div>
          
          <div class="card mb-6">
            <h3 class="text-xl font-bold mb-3">Natural Language Processing</h3>
            <p>
              Language models trained on internet text often reproduce and amplify stereotypes about gender, race, and other attributes. For example, they may associate certain professions more strongly with particular genders.
            </p>
            <p class="mt-2">
              Researchers have developed techniques like counterfactual data augmentation, bias statements, and debiasing word embeddings to address these issues.
            </p>
          </div>
          
          <div class="card mb-6">
            <h3 class="text-xl font-bold mb-3">Hiring Algorithms</h3>
            <p>
              AI tools used in recruitment have sometimes shown bias against certain candidates. In one notable case, a system trained on historical hiring data penalized resumes that included the word "women's" (as in "women's chess club").
            </p>
            <p class="mt-2">
              Organizations are now implementing more rigorous testing, focusing on skills-based assessment, and maintaining human oversight in the hiring process.
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
              <li><a href="#" class="hover:text-primary-light">Understanding Bias in AI</a></li>
              <li><a href="#" class="hover:text-primary-light">Identifying Bias</a></li>
              <li><a href="#" class="hover:text-primary-light">Mitigating Bias</a></li>
              <li><a href="#" class="hover:text-primary-light">Case Studies</a></li>
              <li><a href="#" class="hover:text-primary-light">Best Practices</a></li>
              <li><a href="#" class="hover:text-primary-light">Further Reading</a></li>
            </ul>
          </div>
          
          <!-- Key Metrics -->
          <div class="card mb-6">
            <h3 class="text-xl font-bold mb-4">Key Fairness Metrics</h3>
            <div class="space-y-4">
              <div>
                <h4 class="font-semibold text-primary-light">Demographic Parity</h4>
                <p class="text-sm">
                  P(Ŷ=1|A=0) = P(Ŷ=1|A=1)
                </p>
                <p class="text-sm text-gray-400">
                  The likelihood of a positive prediction should be the same regardless of the sensitive attribute.
                </p>
              </div>
              
              <div>
                <h4 class="font-semibold text-primary-light">Equal Opportunity</h4>
                <p class="text-sm">
                  P(Ŷ=1|Y=1,A=0) = P(Ŷ=1|Y=1,A=1)
                </p>
                <p class="text-sm text-gray-400">
                  True positive rates should be equal across groups.
                </p>
              </div>
              
              <div>
                <h4 class="font-semibold text-primary-light">Predictive Parity</h4>
                <p class="text-sm">
                  P(Y=1|Ŷ=1,A=0) = P(Y=1|Ŷ=1,A=1)
                </p>
                <p class="text-sm text-gray-400">
                  Precision should be equal across groups.
                </p>
              </div>
            </div>
          </div>
          
          <!-- Best Practices Summary -->
          <div class="card mb-6">
            <h3 class="text-xl font-bold mb-4">Best Practices</h3>
            <ul class="space-y-3">
              <li class="flex items-start">
                <span class="text-accent mr-2">✓</span>
                <span>Audit training data for representation and bias</span>
              </li>
              <li class="flex items-start">
                <span class="text-accent mr-2">✓</span>
                <span>Apply multiple fairness metrics during evaluation</span>
              </li>
              <li class="flex items-start">
                <span class="text-accent mr-2">✓</span>
                <span>Test model performance across demographic groups</span>
              </li>
              <li class="flex items-start">
                <span class="text-accent mr-2">✓</span>
                <span>Document limitations and potential biases</span>
              </li>
              <li class="flex items-start">
                <span class="text-accent mr-2">✓</span>
                <span>Establish ongoing monitoring for emerging bias</span>
              </li>
            </ul>
          </div>
          
          <!-- Further Reading -->
          <div class="card">
            <h3 class="text-xl font-bold mb-4">Further Reading</h3>
            <ul class="space-y-3">
              <li>
                <a href="#" class="block hover:bg-dark rounded p-2 transition-colors">
                  <p class="font-semibold">Fairness and Abstraction in Sociotechnical Systems</p>
                  <p class="text-sm text-gray-400">ACM Conference on Fairness, Accountability, and Transparency</p>
                </a>
              </li>
              <li>
                <a href="#" class="block hover:bg-dark rounded p-2 transition-colors">
                  <p class="font-semibold">Algorithmic Bias Detection and Mitigation</p>
                  <p class="text-sm text-gray-400">Nature Machine Intelligence</p>
                </a>
              </li>
              <li>
                <a href="#" class="block hover:bg-dark rounded p-2 transition-colors">
                  <p class="font-semibold">Fairness in Machine Learning: Lessons from Political Philosophy</p>
                  <p class="text-sm text-gray-400">Machine Learning Journal</p>
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
        <router-link to="/building-ai-apps" class="card hover:shadow-neon transition-shadow">
          <h3 class="text-xl font-bold mb-2">Building AI Apps</h3>
          <p class="text-gray-400">Implementing fairness measures in AI development.</p>
        </router-link>
        
        <router-link to="/providing-data" class="card hover:shadow-neon transition-shadow">
          <h3 class="text-xl font-bold mb-2">Providing Data</h3>
          <p class="text-gray-400">Best practices for creating balanced, representative datasets.</p>
        </router-link>
        
        <router-link to="/integrating-with-ai" class="card hover:shadow-neon transition-shadow">
          <h3 class="text-xl font-bold mb-2">Integrating with AI</h3>
          <p class="text-gray-400">Evaluating third-party AI systems for potential bias.</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BiasConsiderations'
}
</script> 