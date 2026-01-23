import Image from 'next/image'
import Link from 'next/link'

export default function TermsOfService() {
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

      {/* Terms of Service Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-8 py-12">
        <div className="mb-12">
          <h1 className="font-mono font-bold text-4xl sm:text-5xl text-deep-jungle dark:text-white mb-2">
            Terms of Service
          </h1>
          <p className="text-lg text-gray-500 dark:text-gray-400 font-mono mb-4">
            Conditions Générales d&apos;Utilisation (CGU)
          </p>
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
              Description of Service
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              Cluvo is an artificial intelligence platform designed to analyze user interviews (&quot;Customer Discovery&quot;). It provides transcription, sentiment analysis, and bias detection services.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              The Company reserves the right to modify or discontinue features of the Service at any time.
            </p>
          </section>

          {/* Section 2 */}
          <section className="mb-12">
            <h2 className="font-mono font-bold text-2xl text-deep-jungle dark:text-white mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-bold">2</span>
              User Accounts & Access
            </h2>
            <div className="space-y-4">
              <div className="bg-gray-50 dark:bg-card-dark rounded-lg p-6 border border-gray-100 dark:border-gray-700">
                <h3 className="font-mono font-bold text-lg text-deep-jungle dark:text-white mb-2">Credentials</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Users are responsible for maintaining the confidentiality of their login information. The Company is not liable for any loss due to stolen credentials.
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-card-dark rounded-lg p-6 border border-gray-100 dark:border-gray-700">
                <h3 className="font-mono font-bold text-lg text-deep-jungle dark:text-white mb-2">Professional Use</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  The Service is intended for professional use (B2B). Users warrant that they are acting in a professional capacity.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="mb-12">
            <h2 className="font-mono font-bold text-2xl text-deep-jungle dark:text-white mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-bold">3</span>
              User Obligations & Data Ethics
            </h2>
            <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4 border border-red-200 dark:border-red-800 mb-6">
              <p className="text-red-700 dark:text-red-300 text-sm font-mono">
                <strong>⚠️ CRITICAL SECTION:</strong> This is the most important section regarding your liability.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 dark:bg-card-dark rounded-lg p-6 border border-gray-100 dark:border-gray-700">
                <h3 className="font-mono font-bold text-lg text-deep-jungle dark:text-white mb-3">A. Responsibility for Content</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-3">
                  The User acts as the <strong>Data Controller</strong> for all content uploaded (audio, video, text). The User warrants that:
                </p>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• They own the intellectual property rights to the uploaded content.</li>
                  <li>• <strong>Consent:</strong> They have obtained explicit, valid consent from all recorded participants to record and process their voice and data via AI tools.</li>
                  <li>• The content does not violate any laws (e.g., hate speech, defamation, illegal acts).</li>
                </ul>
              </div>

              <div className="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-6 border border-amber-200 dark:border-amber-800">
                <h3 className="font-mono font-bold text-lg text-amber-800 dark:text-amber-300 mb-3 flex items-center gap-2">
                  <span className="material-symbols-outlined">gavel</span>
                  B. Prohibition of Secret Recording
                </h3>
                <p className="text-amber-800 dark:text-amber-300">
                  The User is <strong>strictly prohibited</strong> from uploading recordings made without the knowledge and consent of the participants. Cluvo disclaims all liability for any illegal interception or recording of communications by the User.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-card-dark rounded-lg p-6 border border-gray-100 dark:border-gray-700">
                <h3 className="font-mono font-bold text-lg text-deep-jungle dark:text-white mb-3">C. Fair Use</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Users on &quot;Unlimited&quot; plans agree to a fair use policy. The Company reserves the right to throttle or terminate accounts that exhibit abnormal usage patterns (e.g., automated scraping, reselling the API) that jeopardize the Service&apos;s stability.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="mb-12">
            <h2 className="font-mono font-bold text-2xl text-deep-jungle dark:text-white mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-bold">4</span>
              Intellectual Property
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-gray-50 dark:bg-card-dark rounded-lg p-6 border border-gray-100 dark:border-gray-700">
                <div className="flex items-center gap-2 mb-3">
                  <span className="material-symbols-outlined text-primary">copyright</span>
                  <h3 className="font-mono font-bold text-lg text-deep-jungle dark:text-white">Cluvo&apos;s IP</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  The platform, code, algorithms, &quot;Mom Test&quot; scoring logic, and design are the exclusive property of SAS Cluvo.
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-card-dark rounded-lg p-6 border border-gray-100 dark:border-gray-700">
                <div className="flex items-center gap-2 mb-3">
                  <span className="material-symbols-outlined text-primary">person</span>
                  <h3 className="font-mono font-bold text-lg text-deep-jungle dark:text-white">User&apos;s IP</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  The User retains full ownership of the uploaded interviews and the specific insights derived from them. The User grants Cluvo a limited, non-exclusive license to process this data solely for the purpose of providing the Service.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section className="mb-12">
            <h2 className="font-mono font-bold text-2xl text-deep-jungle dark:text-white mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-bold">5</span>
              Financial Conditions
            </h2>
            <div className="space-y-4">
              <div className="bg-gray-50 dark:bg-card-dark rounded-lg p-6 border border-gray-100 dark:border-gray-700">
                <h3 className="font-mono font-bold text-lg text-deep-jungle dark:text-white mb-2">Subscriptions</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Paid plans are billed in advance (monthly or yearly).
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-card-dark rounded-lg p-6 border border-gray-100 dark:border-gray-700">
                <h3 className="font-mono font-bold text-lg text-deep-jungle dark:text-white mb-2">Renewal</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Subscriptions renew automatically unless cancelled at least 24 hours before the end of the current period.
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-card-dark rounded-lg p-6 border border-gray-100 dark:border-gray-700">
                <h3 className="font-mono font-bold text-lg text-deep-jungle dark:text-white mb-2">No Refunds</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  As a B2B service, Cluvo does not offer a &quot;cooling-off period&quot; (Droit de rétractation) for professional subscriptions once the service has started, unless otherwise required by law.
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-card-dark rounded-lg p-6 border border-gray-100 dark:border-gray-700">
                <h3 className="font-mono font-bold text-lg text-deep-jungle dark:text-white mb-2">Price Changes</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Cluvo reserves the right to change pricing with a 30-day notice. Continued use implies acceptance of the new price.
                </p>
              </div>
            </div>
          </section>

          {/* Section 6 */}
          <section className="mb-12">
            <h2 className="font-mono font-bold text-2xl text-deep-jungle dark:text-white mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-bold">6</span>
              Limitation of Liability
            </h2>
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800 mb-6">
              <p className="text-blue-700 dark:text-blue-300 text-sm font-mono">
                <strong>The &quot;AI&quot; Clause</strong>
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-gray-50 dark:bg-card-dark rounded-lg p-6 border border-gray-100 dark:border-gray-700">
                <h3 className="font-mono font-bold text-lg text-deep-jungle dark:text-white mb-2">&quot;Best Effort&quot; Obligation</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Cluvo is subject to an obligation of means (obligation de moyens), not results. We do not guarantee 100% accuracy of transcriptions or AI analysis.
                </p>
              </div>
              <div className="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-6 border border-amber-200 dark:border-amber-800">
                <h3 className="font-mono font-bold text-lg text-amber-800 dark:text-amber-300 mb-2">No Business Advice</h3>
                <p className="text-amber-800 dark:text-amber-300">
                  The &quot;Mom Test Grade&quot; and AI insights are for <strong>informational purposes only</strong>. Cluvo is not responsible for business decisions (e.g., pivoting, investing) made based on the Service&apos;s output.
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-card-dark rounded-lg p-6 border border-gray-100 dark:border-gray-700">
                <h3 className="font-mono font-bold text-lg text-deep-jungle dark:text-white mb-2">Service Availability</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We strive for 99.9% uptime but are not liable for downtime caused by third-party providers (AWS, OpenAI) or force majeure.
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-card-dark rounded-lg p-6 border border-gray-100 dark:border-gray-700">
                <h3 className="font-mono font-bold text-lg text-deep-jungle dark:text-white mb-2">Liability Cap</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  To the extent permitted by law, Cluvo&apos;s total liability shall not exceed the amount paid by the User during the 12 months preceding the incident.
                </p>
              </div>
            </div>
          </section>

          {/* Section 7 */}
          <section className="mb-12">
            <h2 className="font-mono font-bold text-2xl text-deep-jungle dark:text-white mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-bold">7</span>
              Data Protection (GDPR)
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              The processing of personal data is governed by our <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              In the relationship between Cluvo and the User:
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-gray-50 dark:bg-card-dark rounded-lg p-6 border border-gray-100 dark:border-gray-700 text-center">
                <span className="material-symbols-outlined text-primary text-3xl mb-2">person</span>
                <h4 className="font-mono font-bold text-sm text-deep-jungle dark:text-white mb-1">The User</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400">Data Controller of the interview data</p>
              </div>
              <div className="bg-gray-50 dark:bg-card-dark rounded-lg p-6 border border-gray-100 dark:border-gray-700 text-center">
                <span className="material-symbols-outlined text-primary text-3xl mb-2">precision_manufacturing</span>
                <h4 className="font-mono font-bold text-sm text-deep-jungle dark:text-white mb-1">Cluvo</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400">Data Processor</p>
              </div>
            </div>
          </section>

          {/* Section 8 */}
          <section className="mb-12">
            <h2 className="font-mono font-bold text-2xl text-deep-jungle dark:text-white mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-bold">8</span>
              Termination
            </h2>
            <div className="space-y-4">
              <div className="bg-gray-50 dark:bg-card-dark rounded-lg p-6 border border-gray-100 dark:border-gray-700">
                <h3 className="font-mono font-bold text-lg text-deep-jungle dark:text-white mb-2">By User</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  You may cancel your subscription at any time via the dashboard. Your access continues until the end of the billing cycle.
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-card-dark rounded-lg p-6 border border-gray-100 dark:border-gray-700">
                <h3 className="font-mono font-bold text-lg text-deep-jungle dark:text-white mb-2">By Cluvo</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We may suspend or terminate your account immediately if you violate these Terms (e.g., uploading illegal content or abusing the API).
                </p>
              </div>
            </div>
          </section>

          {/* Section 9 */}
          <section className="mb-12">
            <h2 className="font-mono font-bold text-2xl text-deep-jungle dark:text-white mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-bold">9</span>
              Applicable Law & Jurisdiction
            </h2>
            <div className="bg-gray-50 dark:bg-card-dark rounded-lg p-6 border border-gray-100 dark:border-gray-700">
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                These Terms are governed by <strong>French Law</strong>.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Any dispute relating to the interpretation or execution of these Terms shall be subject to the exclusive jurisdiction of the courts of <strong>Compiègne</strong> (or the competent court within the jurisdiction of the Court of Appeal of Amiens), failing an amicable solution.
              </p>
            </div>
          </section>

          {/* Contact Section */}
          <section className="bg-gray-50 dark:bg-card-dark rounded-xl p-8 border border-gray-100 dark:border-gray-700">
            <h2 className="font-mono font-bold text-xl text-deep-jungle dark:text-white mb-4">Questions?</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              If you have any questions about these Terms of Service, please contact us:
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
