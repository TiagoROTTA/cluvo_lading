'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const handleScrollToWaitlist = (e: React.MouseEvent<HTMLAnchorElement>) => {
    handleScrollToSection(e, 'coming-soon')
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      stage: formData.get('stage') as string,
      description: formData.get('description') as string,
    }

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Failed to submit')
      }

      setIsSubmitted(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      {/* Navigation */}
      <nav className="w-full py-6 px-4 sm:px-8 max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Image 
            src="/logo.png" 
            alt="CLUVO Logo" 
            width={170} 
            height={42}
            className="h-10 w-auto"
          />
        </div>
        <div className="hidden md:flex items-center gap-8 font-medium text-sm text-gray-600 dark:text-gray-300">
          <a className="hover:text-primary transition-colors" href="#methodology" onClick={(e) => handleScrollToSection(e, 'methodology')}>Methodology</a>
          <a className="hover:text-primary transition-colors" href="#features" onClick={(e) => handleScrollToSection(e, 'features')}>Features</a>
          <a className="hover:text-primary transition-colors" href="#coming-soon" onClick={(e) => handleScrollToSection(e, 'coming-soon')}>Coming Soon</a>
        </div>
        <div className="flex items-center gap-6">
          <a className="bg-primary hover:bg-primary-dark text-white dark:text-deep-jungle font-mono font-bold text-sm px-6 py-3 rounded shadow-lg hover:shadow-glow transition-all flex items-center gap-2" href="#waitlist" onClick={handleScrollToWaitlist}>
            Join the Waiting List
          </a>
        </div>
      </nav>

      {/* Header Section */}
      <header className="relative pt-12 pb-20 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-card-dark text-[10px] font-mono uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-6">
              <span className="w-2 h-2 rounded-full bg-primary"></span>
              Currently in Private Beta
            </div>
            <h1 className="font-mono font-bold text-5xl sm:text-6xl leading-[1.1] text-deep-jungle dark:text-white mb-6">
              Don&apos;t Pitch a <span className="relative inline-block">Hallucination
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-soft-coral" preserveAspectRatio="none" viewBox="0 0 100 10">
                  <path d="M0 5 Q 5 10 10 5 T 20 5 T 30 5 T 40 5 T 50 5 T 60 5 T 70 5 T 80 5 T 90 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="3"></path>
                </svg>
              </span>. <br/>
              Prove <span className="text-primary">Demand</span>.
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-10 leading-relaxed max-w-lg">
              CLUVO is in private beta. Join our exclusive waitlist to turn customer conversations into investor-grade evidence and stop accepting polite lies.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 mb-10 max-w-md" id="waitlist">
              <input 
                className="flex-grow px-4 py-4 rounded bg-white dark:bg-card-dark border border-gray-200 dark:border-gray-700 focus:ring-primary focus:border-primary font-mono text-sm" 
                placeholder="Enter your work email" 
                required 
                type="email"
              />
              <button 
                className="bg-primary hover:bg-primary-dark text-white dark:text-deep-jungle font-mono font-bold text-sm px-8 py-4 rounded shadow-lg hover:shadow-glow transition-all flex items-center justify-center gap-2 whitespace-nowrap" 
                type="submit"
              >
                Join the Waiting List <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </button>
            </form>
            <div className="mt-8">
              <p className="text-xs font-mono uppercase text-gray-400 mb-4 tracking-widest">Early traction from founders at</p>
              <div className="flex items-center gap-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                <span className="font-bold text-xl font-serif">Y Combinator</span>
                <span className="font-bold text-xl italic font-serif">Techstars</span>
                <span className="font-bold text-xl font-mono">500</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-10 -right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-soft-coral/10 rounded-full blur-3xl"></div>
            <div className="relative bg-white dark:bg-card-dark rounded-xl shadow-soft border border-gray-100 dark:border-gray-700 overflow-hidden">
              <div className="bg-gray-50 dark:bg-black/20 px-6 py-3 border-b border-gray-100 dark:border-gray-700 flex justify-between items-center">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-soft-coral"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-primary"></div>
                </div>
                <span className="font-mono text-xs text-gray-400">beta_preview.json</span>
              </div>
              <div className="p-6 sm:p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <div className="text-[10px] font-mono uppercase text-gray-400 mb-1">Project</div>
                    <h3 className="font-semibold text-xl text-deep-jungle dark:text-white">SaaS Analytics Platform</h3>
                  </div>
                  <div className="flex items-center gap-1 px-2 py-1 bg-green-50 dark:bg-green-900/30 border border-green-100 dark:border-green-800 rounded text-[10px] font-mono text-green-700 dark:text-green-400">
                    <span className="material-symbols-outlined text-sm">check_circle</span> HYPOTHESIS VALIDATED
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-gray-50 dark:bg-black/20 p-4 rounded border border-gray-100 dark:border-gray-700">
                    <div className="text-[10px] font-mono uppercase text-gray-400 mb-2">Confidence Score</div>
                    <div className="text-3xl font-mono font-bold text-deep-jungle dark:text-white">94<span className="text-sm text-gray-400 font-normal">/100</span></div>
                  </div>
                  <div className="bg-gray-50 dark:bg-black/20 p-4 rounded border border-gray-100 dark:border-gray-700">
                    <div className="text-[10px] font-mono uppercase text-gray-400 mb-2">Pain Point Intensity</div>
                    <div className="text-3xl font-mono font-bold text-deep-jungle dark:text-white">High</div>
                  </div>
                </div>
                <div className="mb-2">
                  <div className="flex justify-between text-[10px] font-mono uppercase text-gray-400 mb-2">
                    <span>Customer Interviews</span>
                    <span>12/15 Completed</span>
                  </div>
                  <div className="h-2 w-full bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-4/5 rounded-full"></div>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-700 font-mono text-xs text-gray-500 dark:text-gray-400 flex items-center gap-2">
                  <span className="text-primary">&gt;_</span> Generating Beta Report...
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Methodology Banner */}
      <div className="border-y border-gray-100 dark:border-gray-800 bg-emerald-50/30 dark:bg-emerald-900/10 py-4" id="methodology">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-wrap justify-center items-center gap-8 text-xs font-mono text-gray-500 uppercase tracking-wide">
          <span className="text-gray-400">Scientific Methodology:</span>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-sm">menu_book</span> The Mom Test
          </div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-sm">rocket_launch</span> Lean Startup
          </div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-sm">science</span> Bias Filtering
          </div>
        </div>
      </div>

      {/* Old Way vs CLUVO Way Section */}
      <section className="py-20 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-mono font-bold text-3xl sm:text-4xl text-deep-jungle dark:text-white mb-4">
            The Old Way vs. The CLUVO Way
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Stop relying on false positives. CLUVO uses behavioral markers to identify true intent before you write a single line of code.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-red-50/30 dark:bg-red-900/10 rounded-xl p-8 border border-red-100 dark:border-red-900/30 relative">
            <div className="absolute top-4 right-4 bg-red-100 dark:bg-red-900/40 text-red-600 dark:text-red-300 text-[10px] font-mono font-bold px-2 py-1 rounded">
              FALSE POSITIVE
            </div>
            <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-900/40 flex items-center justify-center text-red-500 mb-6">
              <span className="material-symbols-outlined">close</span>
            </div>
            <h3 className="font-bold text-lg mb-2 text-deep-jungle dark:text-white">The Old Way</h3>
            <p className="font-mono text-sm text-gray-500 mb-6">&quot;Would you buy this if we built it?&quot;</p>
            <div className="bg-white dark:bg-black/20 p-4 rounded border border-red-100 dark:border-red-900/20 italic text-gray-600 dark:text-gray-300 mb-4 font-serif">
              &quot;Yeah, totally! I&apos;d love that. Ping me when you launch.&quot;
            </div>
            <p className="text-xs text-red-500 font-mono">RESULT: Compliments aren&apos;t cash. They won&apos;t actually pay.</p>
          </div>
          <div className="bg-emerald-50/30 dark:bg-emerald-900/10 rounded-xl p-8 border border-primary/30 relative shadow-sm">
            <div className="absolute top-4 right-4 bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 text-[10px] font-mono font-bold px-2 py-1 rounded">
              EVIDENCE-BASED
            </div>
            <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center text-emerald-600 mb-6">
              <span className="material-symbols-outlined">check</span>
            </div>
            <h3 className="font-bold text-lg mb-2 text-deep-jungle dark:text-white">The CLUVO Way</h3>
            <p className="font-mono text-sm text-gray-500 mb-6">Analyze friction points, not opinions.</p>
            <div className="bg-white dark:bg-black/20 p-4 rounded border border-primary/20 font-mono text-xs text-gray-600 dark:text-gray-300 mb-4 space-y-2">
              <div className="flex gap-2">
                <span className="text-primary">&gt;</span>
                <span>Evidence: User current workflow is 4 hours/day manual.</span>
              </div>
              <div className="flex gap-2">
                <span className="text-primary">&gt;</span>
                <span>Action: User requested to connect for a 2nd deep dive.</span>
              </div>
            </div>
            <p className="text-xs text-emerald-600 font-mono">RESULT: High Intent. Validated pain point intensity is High.</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-emerald-50/30 dark:bg-emerald-900/10 py-20 px-4 sm:px-8" id="features">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="font-mono font-bold text-3xl sm:text-4xl text-deep-jungle dark:text-white mb-4">
              Rigorous Validation Tools
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-xl">
              The engine that makes sure you never build for &quot;polite lies&quot; again.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-card-dark p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="w-10 h-10 rounded bg-primary text-white flex items-center justify-center mb-6 shadow-glow">
                <span className="material-symbols-outlined">psychology_alt</span>
              </div>
              <h3 className="font-bold text-lg text-deep-jungle dark:text-white mb-3">The Mom Test Guardrails</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">
                AI detects when you are pitching instead of listening. It flags leading questions and speculative &quot;future&quot; answers instantly.
              </p>
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-900/30 p-3 rounded text-[10px] text-red-500 flex gap-2 items-start">
                <span className="material-symbols-outlined text-sm">warning</span>
                <span>Warning: &quot;Would you use...&quot; is speculative. Flagged.</span>
              </div>
            </div>
            <div className="bg-white dark:bg-card-dark p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="w-10 h-10 rounded border border-primary text-primary flex items-center justify-center mb-6">
                <span className="material-symbols-outlined">lock_person</span>
              </div>
              <h3 className="font-bold text-lg text-deep-jungle dark:text-white mb-3">Evidence Locker</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">
                Force yourself to be honest. Hypothesis cards stay &apos;Unverified&apos; until you tag specific timestamps from your interview videos as proof.
              </p>
              <div className="flex gap-2">
                <div className="h-8 flex-1 bg-gray-100 dark:bg-gray-700 rounded flex items-center justify-center">
                  <span className="material-symbols-outlined text-xs text-gray-400">check_circle</span>
                </div>
                <div className="h-8 flex-1 bg-gray-100 dark:bg-gray-700 border border-dashed border-primary/50 flex items-center justify-center">
                  <span className="material-symbols-outlined text-xs text-primary">add</span>
                </div>
                <div className="h-8 flex-1 bg-gray-50 dark:bg-gray-800 rounded flex items-center justify-center">
                  <span className="material-symbols-outlined text-xs text-gray-300">lock</span>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-card-dark p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="w-10 h-10 rounded border border-primary text-primary flex items-center justify-center mb-6">
                <span className="material-symbols-outlined">visibility</span>
              </div>
              <h3 className="font-bold text-lg text-deep-jungle dark:text-white mb-3">Investor Guest View</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">
                Stop writing decks that investors ignore. Share a link to your Evidence Locker so they can see the demand for themselves.
              </p>
              <div className="bg-gray-50 dark:bg-black/20 p-3 rounded border border-gray-100 dark:border-gray-700">
                <div className="flex justify-between text-[8px] font-mono text-primary mb-1">
                  <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> investor_access: ACTIVE</span>
                </div>
                <div className="h-1.5 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-2/3 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-24 px-4 sm:px-8 max-w-7xl mx-auto" id="coming-soon">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-mono font-bold text-3xl sm:text-4xl text-deep-jungle dark:text-white mb-6">
              Coming Soon: Private Beta Early Access
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
              We are currently onboarding founders in small cohorts to ensure the highest quality validation for every project. Join the waitlist today for:
            </p>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-1">
                  <span className="material-symbols-outlined text-sm font-bold">check</span>
                </div>
                <div>
                  <h4 className="font-bold text-deep-jungle dark:text-white">Priority Onboarding</h4>
                  <p className="text-sm text-gray-500">Skip the queue when we open the next cohort of public accounts.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-1">
                  <span className="material-symbols-outlined text-sm font-bold">check</span>
                </div>
                <div>
                  <h4 className="font-bold text-deep-jungle dark:text-white">Founder for Life Pricing</h4>
                  <p className="text-sm text-gray-500">Locked-in early adopter rates that will never increase for your account.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-1">
                  <span className="material-symbols-outlined text-sm font-bold">check</span>
                </div>
                <div>
                  <h4 className="font-bold text-deep-jungle dark:text-white">Direct Feature Input</h4>
                  <p className="text-sm text-gray-500">Shape the product roadmap directly with our core engineering team.</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="bg-white dark:bg-card-dark p-10 rounded-2xl border-2 border-primary shadow-glow relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4">
              <span className="material-symbols-outlined text-6xl text-primary/10">rocket_launch</span>
            </div>
            {!isSubmitted ? (
              <>
                <h3 className="font-mono font-bold text-2xl text-deep-jungle dark:text-white mb-2">Secure Your Spot</h3>
                <p className="text-sm text-gray-500 mb-8">Join 200+ founders waiting to prove their demand.</p>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  {error && (
                    <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-3 text-sm text-red-600 dark:text-red-400">
                      {error}
                    </div>
                  )}
                  <div>
                    <label className="block text-[10px] font-mono uppercase text-gray-400 mb-2">Full Name</label>
                    <input 
                      name="name"
                      className="w-full px-4 py-3 rounded bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-gray-700 focus:ring-primary font-mono text-sm" 
                      placeholder="John Doe" 
                      type="text"
                      required
                      disabled={isLoading}
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono uppercase text-gray-400 mb-2">Work Email</label>
                    <input 
                      name="email"
                      className="w-full px-4 py-3 rounded bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-gray-700 focus:ring-primary font-mono text-sm" 
                      placeholder="name@company.com" 
                      type="email"
                      required
                      disabled={isLoading}
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono uppercase text-gray-400 mb-2">Startup Stage</label>
                    <select 
                      name="stage"
                      className="w-full px-4 py-3 rounded bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-gray-700 focus:ring-primary focus:border-primary font-mono text-sm text-gray-900 dark:text-gray-100"
                      required
                      disabled={isLoading}
                    >
                      <option value="">Select your stage</option>
                      <option value="Idea / Pre-MVP">Idea / Pre-MVP</option>
                      <option value="MVP / Building">MVP / Building</option>
                      <option value="Early Traction">Early Traction</option>
                      <option value="Scaling / Growth">Scaling / Growth</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono uppercase text-gray-400 mb-2">Project URL / Description</label>
                    <input 
                      name="description"
                      className="w-full px-4 py-3 rounded bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-gray-700 focus:ring-primary font-mono text-sm" 
                      placeholder="What are you building?" 
                      type="text"
                      disabled={isLoading}
                    />
                  </div>
                  <button 
                    className="w-full bg-primary hover:bg-primary-dark text-white dark:text-deep-jungle font-mono font-bold py-4 rounded shadow-lg transition-all mt-4 disabled:opacity-50 disabled:cursor-not-allowed" 
                    type="submit"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Submitting...' : 'Join the Waiting List'}
                  </button>
                  <p className="text-[10px] text-center text-gray-400 mt-4 font-mono">
                    <span className="material-symbols-outlined text-[10px] align-middle">lock</span> Your data is only used for beta updates.
                  </p>
                </form>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <span className="material-symbols-outlined text-5xl text-primary">check_circle</span>
                </div>
                <h3 className="font-mono font-bold text-2xl text-deep-jungle dark:text-white mb-4">
                  You&apos;re On The List!
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  Thank you for joining the waiting list. We&apos;ll reach out soon with exclusive early access to CLUVO.
                </p>
                <div className="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-lg p-4">
                  <p className="text-sm font-mono text-emerald-700 dark:text-emerald-400 flex items-center justify-center gap-2">
                    <span className="text-primary">&gt;_</span> Status: Confirmed
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-emerald-50/30 dark:bg-emerald-900/10 py-24 px-4 sm:px-8">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-mono font-bold text-3xl text-deep-jungle dark:text-white mb-4">
            Ready to stop guessing?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-10 font-mono text-sm">Be the first to know when we expand the beta.</p>
          <a 
            className="inline-flex w-full sm:w-auto bg-primary hover:bg-primary-dark text-white dark:text-deep-jungle font-mono font-bold text-lg px-8 py-4 rounded shadow-lg hover:shadow-glow transition-all items-center justify-center gap-3" 
            href="#waitlist"
            onClick={handleScrollToWaitlist}
          >
            Join the Waiting List <span className="material-symbols-outlined">terminal</span>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white dark:bg-background-dark py-12 px-4 sm:px-8 border-t border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center">
            <Image 
              src="/logo.png" 
              alt="CLUVO Logo" 
              width={150} 
              height={40}
              className="h-10 w-auto"
            />
          </div>
          <div className="flex gap-8 font-mono text-xs text-gray-500">
            <a className="hover:text-primary transition-colors" href="#">Pre-Seed Metrics</a>
            <a className="hover:text-primary transition-colors" href="#">GDPR Compliance</a>
            <a className="hover:text-primary transition-colors" href="#waitlist" onClick={handleScrollToWaitlist}>Request Access</a>
          </div>
          <div className="font-mono text-[10px] text-gray-400">
            © 2024 CLUVO Inc. All systems normal.
          </div>
        </div>
      </footer>
    </>
  )
}

