import Image from 'next/image'
import Link from 'next/link'

export default function PrivacyPolicy() {
  return (
    <>
      {/* Navigation */}
      <nav className="w-full py-6 px-4 sm:px-8 max-w-7xl mx-auto flex items-center justify-center md:justify-between">
        <Link href="/" className="flex items-center justify-center md:justify-start">
          <Image 
            src="/logo.png" 
            alt="CLUVO Logo" 
            width={170} 
            height={42}
            className="h-16 w-auto transition-transform hover:scale-105 duration-300"
          />
        </Link>
        <div className="hidden md:flex items-center gap-4">
          <Link 
            className="border border-gray-300 dark:border-gray-600 hover:border-primary text-gray-700 dark:text-gray-300 hover:text-primary font-mono font-bold text-sm px-6 py-3 rounded transition-all duration-300 hover:scale-105 hover:shadow-md" 
            href="https://app.cluvoai.com"
          >
            Login
          </Link>
          <Link 
            className="bg-primary hover:bg-primary-dark text-white dark:text-deep-jungle font-mono font-bold text-sm px-6 py-3 rounded shadow-lg hover:shadow-glow transition-all duration-300 hover:scale-105" 
            href="https://app.cluvoai.com"
          >
            Sign Up
          </Link>
        </div>
      </nav>

      {/* Privacy Policy Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-8 py-12">
        <div className="mb-12">
          <h1 className="font-mono font-bold text-4xl sm:text-5xl text-deep-jungle dark:text-white mb-4">
            Privacy Policy
          </h1>
          <div className="flex flex-wrap gap-4 text-sm font-mono text-gray-500 dark:text-gray-400">
            <span>Effective Date: January 24, 2026</span>
            <span className="hidden sm:inline">•</span>
            <span>Last Updated: January 24, 2026</span>
          </div>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          {/* Section 1 */}
          <section className="mb-12">
            <h2 className="font-mono font-bold text-2xl text-deep-jungle dark:text-white mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-bold">1</span>
              Introduction
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Welcome to Cluvo (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We are committed to protecting your personal data and your business intelligence. This Privacy Policy explains how we collect, use, and safeguard your information when you use our SaaS platform (the &quot;Service&quot;).
            </p>
          </section>

          {/* Section 2 */}
          <section className="mb-12">
            <h2 className="font-mono font-bold text-2xl text-deep-jungle dark:text-white mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-bold">2</span>
              The Data We Collect
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              We collect data strictly to provide our forensic analysis service. This includes:
            </p>

            <div className="space-y-6">
              <div className="bg-gray-50 dark:bg-card-dark rounded-lg p-6 border border-gray-100 dark:border-gray-700">
                <h3 className="font-mono font-bold text-lg text-deep-jungle dark:text-white mb-3">A. Account & Identity Data</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li><strong>Identity:</strong> First name, last name, email address.</li>
                  <li><strong>Professional Info:</strong> Company name, role, and industry context.</li>
                  <li><strong>Billing Information:</strong> Processed securely by our payment provider; we do not store full credit card numbers.</li>
                </ul>
              </div>

              <div className="bg-gray-50 dark:bg-card-dark rounded-lg p-6 border border-gray-100 dark:border-gray-700">
                <h3 className="font-mono font-bold text-lg text-deep-jungle dark:text-white mb-3">B. Customer Content (Your Uploads)</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-3">This is the data you upload for analysis:</p>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li><strong>Media Files:</strong> Audio and video recordings of interviews.</li>
                  <li><strong>Transcripts:</strong> Text files or pasted text from conversations.</li>
                  <li><strong>Metadata:</strong> Speaker labels (e.g., &quot;Speaker A&quot;, &quot;Speaker B&quot;) and project names.</li>
                  <li><strong>AI Outputs:</strong> The analysis, grades, and insights generated by the Service.</li>
                </ul>
              </div>

              <div className="bg-gray-50 dark:bg-card-dark rounded-lg p-6 border border-gray-100 dark:border-gray-700">
                <h3 className="font-mono font-bold text-lg text-deep-jungle dark:text-white mb-3">C. Technical Usage Data</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Connection logs, IP addresses, browser type, and usage statistics to ensure the security and performance of the Service.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="mb-12">
            <h2 className="font-mono font-bold text-2xl text-deep-jungle dark:text-white mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-bold">3</span>
              How We Use Your Data
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              We use your data for the following purposes:
            </p>
            <ul className="space-y-3 text-gray-600 dark:text-gray-300 mb-6">
              <li><strong>Service Delivery:</strong> To transcribe audio, analyze text for biases, and generate reports.</li>
              <li><strong>Account Management:</strong> For authentication, billing, and customer support.</li>
              <li><strong>Service Improvement:</strong> To analyze aggregate usage patterns (e.g., feature popularity).</li>
              <li><strong>Security:</strong> To detect and prevent fraudulent activity.</li>
            </ul>

            <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-lg p-6 border border-emerald-200 dark:border-emerald-800">
              <h3 className="font-mono font-bold text-lg text-emerald-800 dark:text-emerald-300 mb-3 flex items-center gap-2">
                <span className="material-symbols-outlined">info</span>
                Important AI Disclaimer
              </h3>
              <p className="text-emerald-700 dark:text-emerald-300">
                We process your uploaded Customer Content (Audio and Transcripts) solely to provide the analysis you requested. <strong>We do not use your Customer Content to train our internal artificial intelligence models.</strong> Your proprietary data remains yours.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section className="mb-12">
            <h2 className="font-mono font-bold text-2xl text-deep-jungle dark:text-white mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-bold">4</span>
              Data Sharing & Sub-processors
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              To provide the Service, we may share data with trusted third-party service providers (&quot;Sub-processors&quot;) who act on our behalf. <strong>We do not sell your data to third parties.</strong>
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              We may transfer data to the following categories of recipients:
            </p>
            <ul className="space-y-3 text-gray-600 dark:text-gray-300 mb-6">
              <li><strong>Cloud Hosting & Infrastructure Providers:</strong> To host our servers, databases, and ensure secure storage.</li>
              <li><strong>AI & Natural Language Processors:</strong> To perform speech-to-text transcription and semantic analysis.</li>
              <li><strong>Payment Processors:</strong> To handle subscription billing and invoicing.</li>
              <li><strong>Analytics Providers:</strong> To understand website traffic and performance.</li>
            </ul>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              All Sub-processors are bound by strict Data Processing Agreements (DPAs) and confidentiality obligations. A detailed list of current Sub-processors is available upon specific request to <a href="mailto:contact@cluvoai.com" className="text-primary hover:underline">contact@cluvoai.com</a>.
            </p>
          </section>

          {/* Section 5 */}
          <section className="mb-12">
            <h2 className="font-mono font-bold text-2xl text-deep-jungle dark:text-white mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-bold">5</span>
              Data Retention
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              We retain your data only as long as necessary:
            </p>
            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
              <li><strong>Customer Content:</strong> Retained for the duration of your active subscription. You may delete a specific Project or File at any time, which triggers a hard delete from our systems.</li>
              <li><strong>Account Data:</strong> Retained for the duration of the contract plus applicable legal limitation periods (typically 3 years after the last contact).</li>
              <li><strong>Billing Records:</strong> Retained for 10 years to comply with French accounting laws.</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section className="mb-12">
            <h2 className="font-mono font-bold text-2xl text-deep-jungle dark:text-white mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-bold">6</span>
              International Transfers
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              As a company based in France, we primarily store data within the European Union (EU). However, some of our Sub-processors (e.g., AI providers) may be located in the United States. In such cases, we ensure that transfers are protected by appropriate safeguards, such as the Standard Contractual Clauses (SCCs) approved by the European Commission.
            </p>
          </section>

          {/* Section 7 */}
          <section className="mb-12">
            <h2 className="font-mono font-bold text-2xl text-deep-jungle dark:text-white mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-bold">7</span>
              Security
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              We implement robust technical and organizational measures to protect your data, including:
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="bg-gray-50 dark:bg-card-dark rounded-lg p-4 border border-gray-100 dark:border-gray-700 text-center">
                <span className="material-symbols-outlined text-primary text-3xl mb-2">lock</span>
                <h4 className="font-mono font-bold text-sm text-deep-jungle dark:text-white mb-1">Encryption</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400">Data encrypted at rest (AES-256) and in transit (TLS/HTTPS)</p>
              </div>
              <div className="bg-gray-50 dark:bg-card-dark rounded-lg p-4 border border-gray-100 dark:border-gray-700 text-center">
                <span className="material-symbols-outlined text-primary text-3xl mb-2">admin_panel_settings</span>
                <h4 className="font-mono font-bold text-sm text-deep-jungle dark:text-white mb-1">Access Control</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400">Strict limitations on infrastructure access</p>
              </div>
              <div className="bg-gray-50 dark:bg-card-dark rounded-lg p-4 border border-gray-100 dark:border-gray-700 text-center">
                <span className="material-symbols-outlined text-primary text-3xl mb-2">verified_user</span>
                <h4 className="font-mono font-bold text-sm text-deep-jungle dark:text-white mb-1">Regular Audits</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400">Periodic security reviews of code and infrastructure</p>
              </div>
            </div>
          </section>

          {/* Section 8 */}
          <section className="mb-12">
            <h2 className="font-mono font-bold text-2xl text-deep-jungle dark:text-white mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-bold">8</span>
              Your Rights (GDPR)
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              Under the General Data Protection Regulation (GDPR), you have the right to:
            </p>
            <ul className="space-y-3 text-gray-600 dark:text-gray-300 mb-6">
              <li><strong>Access</strong> the personal data we hold about you.</li>
              <li><strong>Rectify</strong> any inaccurate or incomplete data.</li>
              <li><strong>Request Erasure</strong> (&quot;Right to be Forgotten&quot;) of your data.</li>
              <li><strong>Restrict Processing</strong> of your data under certain conditions.</li>
              <li><strong>Data Portability:</strong> Receive your data in a structured, standard format.</li>
            </ul>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              To exercise these rights, please contact us at <a href="mailto:contact@cluvoai.com" className="text-primary hover:underline">contact@cluvoai.com</a>.
            </p>
          </section>

          {/* Section 9 */}
          <section className="mb-12">
            <h2 className="font-mono font-bold text-2xl text-deep-jungle dark:text-white mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-bold">9</span>
              User Responsibility regarding Consent
            </h2>
            <div className="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-6 border border-amber-200 dark:border-amber-800">
              <p className="text-amber-800 dark:text-amber-300">
                You act as the <strong>Data Controller</strong> for the third-party data (e.g., recordings of interviewees) you upload. By using Cluvo, you certify that you have obtained all necessary valid consents from the individuals recorded in your files to process their data via AI tools. Cluvo disclaims all liability for non-consensual processing of third-party data uploaded by the User.
              </p>
            </div>
          </section>

          {/* Section 10 */}
          <section className="mb-12">
            <h2 className="font-mono font-bold text-2xl text-deep-jungle dark:text-white mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-bold">10</span>
              Changes to this Policy
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              We may update this policy from time to time. The &quot;Last Updated&quot; date at the top of this page indicates when the latest revisions were made. Continued use of the Service implies acceptance of the updated policy.
            </p>
          </section>

          {/* Contact Section */}
          <section className="bg-gray-50 dark:bg-card-dark rounded-xl p-8 border border-gray-100 dark:border-gray-700">
            <h2 className="font-mono font-bold text-xl text-deep-jungle dark:text-white mb-4">Questions?</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <a 
              href="mailto:contact@cluvoai.com" 
              className="inline-flex items-center gap-2 text-primary hover:underline font-mono"
            >
              <span className="material-symbols-outlined">mail</span>
              contact@cluvoai.com
            </a>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-background-dark py-12 px-4 sm:px-8 border-t border-gray-100 dark:border-gray-800 mt-12">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-6">
          <Link href="/" className="flex items-center">
            <Image 
              src="/logo.png" 
              alt="CLUVO Logo" 
              width={150} 
              height={40}
              className="h-16 w-auto transition-transform hover:scale-110 duration-300"
            />
          </Link>
          <div className="flex items-center gap-4 text-sm">
            <Link 
              href="/privacy" 
              className="text-gray-500 dark:text-gray-400 hover:text-primary transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <span className="text-gray-300 dark:text-gray-600">•</span>
            <Link 
              href="/terms" 
              className="text-gray-500 dark:text-gray-400 hover:text-primary transition-colors duration-300"
            >
              Terms of Service
            </Link>
            <span className="text-gray-300 dark:text-gray-600">•</span>
            <Link 
              href="/security" 
              className="text-gray-500 dark:text-gray-400 hover:text-primary transition-colors duration-300"
            >
              Security
            </Link>
          </div>
          <div className="font-mono text-[10px] text-gray-400">
            © 2026 CLUVO Inc.
          </div>
        </div>
      </footer>
    </>
  )
}
