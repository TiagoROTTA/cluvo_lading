import Image from 'next/image'
import Link from 'next/link'

export default function SecurityCenter() {
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

      {/* Security Center Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-8 py-12">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-[10px] font-mono uppercase tracking-wider text-primary mb-6">
            <span className="material-symbols-outlined text-sm">verified_user</span>
            Security First
          </div>
          <h1 className="font-mono font-bold text-4xl sm:text-5xl text-deep-jungle dark:text-white mb-4">
            Trust & Security Center
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
            Your IP is our priority. We are built for privacy-first forensic analysis.
          </p>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          {/* Section 1 */}
          <section className="mb-16">
            <h2 className="font-mono font-bold text-2xl text-deep-jungle dark:text-white mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-bold">1</span>
              Security at a Glance
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              We treat your interview data as sensitive business intelligence. Our architecture is designed to meet the strict requirements of European GDPR and Enterprise security standards.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-gray-50 dark:bg-card-dark rounded-lg p-6 border border-gray-100 dark:border-gray-700 hover:border-primary/50 transition-colors duration-300">
                <div className="text-3xl mb-3">🇪🇺</div>
                <h3 className="font-mono font-bold text-lg text-deep-jungle dark:text-white mb-2">GDPR Compliant</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Native compliance for data sovereignty and user rights.
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-card-dark rounded-lg p-6 border border-gray-100 dark:border-gray-700 hover:border-primary/50 transition-colors duration-300">
                <div className="text-3xl mb-3">🔒</div>
                <h3 className="font-mono font-bold text-lg text-deep-jungle dark:text-white mb-2">End-to-End Encryption</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Your data is encrypted in transit and at rest.
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-card-dark rounded-lg p-6 border border-gray-100 dark:border-gray-700 hover:border-primary/50 transition-colors duration-300">
                <div className="text-3xl mb-3">🚫</div>
                <h3 className="font-mono font-bold text-lg text-deep-jungle dark:text-white mb-2">No AI Training</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  We do not use your proprietary data to train our models.
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-card-dark rounded-lg p-6 border border-gray-100 dark:border-gray-700 hover:border-primary/50 transition-colors duration-300">
                <div className="text-3xl mb-3">🛡️</div>
                <h3 className="font-mono font-bold text-lg text-deep-jungle dark:text-white mb-2">Role-Based Access</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Strict internal controls on who can access infrastructure.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section className="mb-16">
            <h2 className="font-mono font-bold text-2xl text-deep-jungle dark:text-white mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-bold">2</span>
              AI Safety & Data Privacy
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              The #1 concern for founders is intellectual property theft. Here is how we protect your ideas.
            </p>

            <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-xl p-8 border border-emerald-200 dark:border-emerald-800 mb-8">
              <h3 className="font-mono font-bold text-xl text-emerald-800 dark:text-emerald-300 mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined">memory</span>
                The &quot;Zero-Retention&quot; AI Pipeline
              </h3>
              <ul className="space-y-4 text-emerald-700 dark:text-emerald-300">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-lg mt-0.5">arrow_forward</span>
                  <span>When you upload a file, it is processed by our AI partners (OpenAI Enterprise / Deepgram) via secure APIs.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-lg mt-0.5">arrow_forward</span>
                  <span>We have signed <strong>&quot;Zero-Data-Retention&quot; agreements</strong>.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-lg mt-0.5">arrow_forward</span>
                  <span>The AI models analyze your text in real-time and return the result.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-lg mt-0.5">arrow_forward</span>
                  <span>They do not store your data to train their public models (like ChatGPT).</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-lg mt-0.5">check_circle</span>
                  <span><strong>Your competitors will never benefit from your insights.</strong></span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-card-dark rounded-lg p-6 border border-gray-100 dark:border-gray-700">
              <h3 className="font-mono font-bold text-lg text-deep-jungle dark:text-white mb-3 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">mic</span>
                Voice Data & Biometrics
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Voice data is processed solely for <strong>Diarization</strong> (separating speakers). We do not build persistent biometric profiles across different accounts. Your voice fingerprint is isolated to your specific project workspace.
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section className="mb-16">
            <h2 className="font-mono font-bold text-2xl text-deep-jungle dark:text-white mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-bold">3</span>
              Shared Responsibility Model
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              Security is a partnership. We secure the platform; you secure your usage.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-primary/5 dark:bg-primary/10 rounded-xl p-6 border border-primary/20">
                <div className="flex items-center gap-2 mb-4">
                  <span className="material-symbols-outlined text-primary">cloud</span>
                  <h3 className="font-mono font-bold text-lg text-deep-jungle dark:text-white">Cluvo&apos;s Responsibility</h3>
                </div>
                <p className="text-xs font-mono text-gray-500 dark:text-gray-400 mb-4 uppercase tracking-wider">The Processor</p>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-primary text-lg">check</span>
                    <span>Securing the Cloud Infrastructure (AWS/Vercel).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-primary text-lg">check</span>
                    <span>Encrypting the Database and File Storage.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-primary text-lg">check</span>
                    <span>Vetting AI Sub-processors.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-primary text-lg">check</span>
                    <span>Ensuring Application Code Security.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-amber-50/50 dark:bg-amber-900/10 rounded-xl p-6 border border-amber-200/50 dark:border-amber-800/30">
                <div className="flex items-center gap-2 mb-4">
                  <span className="material-symbols-outlined text-amber-600 dark:text-amber-400">person</span>
                  <h3 className="font-mono font-bold text-lg text-deep-jungle dark:text-white">Your Responsibility</h3>
                </div>
                <p className="text-xs font-mono text-gray-500 dark:text-gray-400 mb-4 uppercase tracking-wider">The Controller</p>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-amber-600 dark:text-amber-400 text-lg">check</span>
                    <span><strong>Obtaining Consent:</strong> Ensuring all speakers agreed to be recorded.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-amber-600 dark:text-amber-400 text-lg">check</span>
                    <span><strong>Access Management:</strong> Protecting your password and invite links.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-amber-600 dark:text-amber-400 text-lg">check</span>
                    <span><strong>Data Hygiene:</strong> Deleting old projects when they are no longer needed.</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="mb-16">
            <h2 className="font-mono font-bold text-2xl text-deep-jungle dark:text-white mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-bold">4</span>
              Infrastructure & Sub-processors
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              We rely on industry-standard, ISO 27001 certified infrastructure providers.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="text-left py-4 px-4 font-mono font-bold text-deep-jungle dark:text-white">Provider</th>
                    <th className="text-left py-4 px-4 font-mono font-bold text-deep-jungle dark:text-white">Function</th>
                    <th className="text-left py-4 px-4 font-mono font-bold text-deep-jungle dark:text-white">Location</th>
                    <th className="text-left py-4 px-4 font-mono font-bold text-deep-jungle dark:text-white">Compliance</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600 dark:text-gray-300">
                  <tr className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-card-dark transition-colors">
                    <td className="py-4 px-4 font-medium">Vercel / AWS</td>
                    <td className="py-4 px-4">Hosting & Database</td>
                    <td className="py-4 px-4">USA / EU</td>
                    <td className="py-4 px-4"><span className="text-xs font-mono bg-primary/10 text-primary px-2 py-1 rounded">SOC 2 Type II, ISO 27001</span></td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-card-dark transition-colors">
                    <td className="py-4 px-4 font-medium">Deepgram</td>
                    <td className="py-4 px-4">Audio Transcription</td>
                    <td className="py-4 px-4">USA</td>
                    <td className="py-4 px-4"><span className="text-xs font-mono bg-primary/10 text-primary px-2 py-1 rounded">SOC 2 Type II, HIPAA</span></td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-card-dark transition-colors">
                    <td className="py-4 px-4 font-medium">OpenAI</td>
                    <td className="py-4 px-4">Semantic Analysis</td>
                    <td className="py-4 px-4">USA</td>
                    <td className="py-4 px-4"><span className="text-xs font-mono bg-primary/10 text-primary px-2 py-1 rounded">SOC 2 Type II, Enterprise Privacy</span></td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-card-dark transition-colors">
                    <td className="py-4 px-4 font-medium">Stripe</td>
                    <td className="py-4 px-4">Payment Processing</td>
                    <td className="py-4 px-4">Global</td>
                    <td className="py-4 px-4"><span className="text-xs font-mono bg-primary/10 text-primary px-2 py-1 rounded">PCI-DSS Level 1</span></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-500 dark:text-gray-400 mt-6 italic">
              Data transfers to US providers are protected by Standard Contractual Clauses (SCCs).
            </p>
          </section>

          {/* Section 5 */}
          <section className="mb-16">
            <h2 className="font-mono font-bold text-2xl text-deep-jungle dark:text-white mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-bold">5</span>
              Compliance Resources
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              Need formal documentation for your legal team?
            </p>

            <div className="grid sm:grid-cols-3 gap-4 mb-12">
              <a 
                href="mailto:contact@cluvoai.com?subject=DPA Request" 
                className="bg-gray-50 dark:bg-card-dark rounded-lg p-6 border border-gray-100 dark:border-gray-700 hover:border-primary hover:shadow-lg transition-all duration-300 group"
              >
                <span className="material-symbols-outlined text-primary text-3xl mb-3 group-hover:scale-110 transition-transform">description</span>
                <h3 className="font-mono font-bold text-sm text-deep-jungle dark:text-white mb-1">DPA</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">Data Processing Agreement for B2B customers</p>
              </a>
              <Link 
                href="/privacy" 
                className="bg-gray-50 dark:bg-card-dark rounded-lg p-6 border border-gray-100 dark:border-gray-700 hover:border-primary hover:shadow-lg transition-all duration-300 group"
              >
                <span className="material-symbols-outlined text-primary text-3xl mb-3 group-hover:scale-110 transition-transform">policy</span>
                <h3 className="font-mono font-bold text-sm text-deep-jungle dark:text-white mb-1">Privacy Policy</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">How we handle your data</p>
              </Link>
              <Link 
                href="/terms" 
                className="bg-gray-50 dark:bg-card-dark rounded-lg p-6 border border-gray-100 dark:border-gray-700 hover:border-primary hover:shadow-lg transition-all duration-300 group"
              >
                <span className="material-symbols-outlined text-primary text-3xl mb-3 group-hover:scale-110 transition-transform">gavel</span>
                <h3 className="font-mono font-bold text-sm text-deep-jungle dark:text-white mb-1">Terms of Service</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">Terms and conditions</p>
              </Link>
            </div>

            {/* Vulnerability Report */}
            <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-8 border border-red-200 dark:border-red-800">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-red-600 dark:text-red-400 text-2xl">bug_report</span>
                <h3 className="font-mono font-bold text-xl text-red-800 dark:text-red-300">Report a Vulnerability</h3>
              </div>
              <p className="text-red-700 dark:text-red-300 mb-4">
                If you believe you have found a security vulnerability in Cluvo, please report it immediately to our security team. We value white-hat research and respond within 24 hours.
              </p>
              <a 
                href="mailto:contact@cluvoai.com?subject=Security Vulnerability Report" 
                className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-mono font-bold text-sm px-6 py-3 rounded transition-all duration-300 hover:scale-105"
              >
                <span className="material-symbols-outlined">mail</span>
                contact@cluvoai.com
              </a>
            </div>
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
