'use client'

import { useEffect, useRef, useState } from 'react'

export default function PipelineTimeline() {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([])
  const stepRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers = stepRefs.current.map((ref, index) => {
      if (!ref) return null

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleSteps((prev) => {
                if (!prev.includes(index)) {
                  return [...prev, index]
                }
                return prev
              })
            }
          })
        },
        {
          threshold: 0.2, // Trigger when 20% of the element is visible
          rootMargin: '-50px',
        }
      )

      observer.observe(ref)
      return observer
    })

    return () => {
      observers.forEach((observer) => observer?.disconnect())
    }
  }, [])

  return (
    <div className="w-full flex flex-col items-center py-20">
      <div className="w-full max-w-[960px] px-6 pb-12 relative">
        {/* Vertical timeline line - desktop */}
        <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gray-200 dark:bg-gray-700 -ml-[1px] hidden md:block z-0"></div>

        {/* Step 1: Dump Your Data */}
        <div 
          ref={(el) => { stepRefs.current[0] = el }}
          className={`relative z-10 flex flex-col md:flex-row gap-8 md:gap-16 mb-24 items-start group transition-all duration-700 ${
            visibleSteps.includes(0) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Desktop number badge */}
          <div className={`hidden md:flex absolute left-1/2 -translate-x-1/2 top-0 size-10 bg-white dark:bg-card-dark border-4 border-primary rounded-full items-center justify-center shadow-lg transition-all duration-500 ${
            visibleSteps.includes(0) ? 'scale-100 rotate-0' : 'scale-0 rotate-180'
          }`}>
            <span className="text-sm font-bold text-deep-jungle dark:text-white">1</span>
          </div>
          
          {/* Mobile number badge */}
          <div className={`md:hidden absolute left-[40px] -translate-x-1/2 top-0 size-8 bg-white dark:bg-card-dark border-4 border-primary rounded-full flex items-center justify-center z-10 transition-all duration-500 ${
            visibleSteps.includes(0) ? 'scale-100 rotate-0' : 'scale-0 rotate-180'
          }`}>
            <span className="text-xs font-bold text-deep-jungle dark:text-white">1</span>
          </div>
          
          {/* Text content */}
          <div className="flex-1 md:text-right pt-2 pl-16 md:pl-0 md:pr-12 order-2 md:order-1 w-full md:w-auto">
            <h2 className="font-mono font-bold text-3xl mb-3 text-deep-jungle dark:text-white">Dump Your Data</h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">Upload raw interviews, messy notes, or scattered customer feedback. We accept all formats, from audio files to scribbles.</p>
            <div className="flex flex-wrap gap-2 md:justify-end">
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-xs font-bold rounded text-gray-500 dark:text-gray-400">.MP3</span>
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-xs font-bold rounded text-gray-500 dark:text-gray-400">.TXT</span>
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-xs font-bold rounded text-gray-500 dark:text-gray-400">.DOCX</span>
            </div>
          </div>
          
          {/* Visual content */}
          <div className="flex-1 pl-16 md:pl-12 order-3 md:order-2 w-full">
            <div className="border-2 border-dashed border-primary/40 bg-emerald-50/30 dark:bg-emerald-900/10 rounded-xl p-8 flex flex-col items-center justify-center text-center min-h-[240px]">
              <div className="size-16 bg-white dark:bg-card-dark rounded-full shadow-md flex items-center justify-center mb-4 text-primary">
                <span className="material-symbols-outlined text-4xl">cloud_upload</span>
              </div>
              <h3 className="font-bold text-lg mb-1 text-deep-jungle dark:text-white">Drag &amp; Drop Files</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">or browse your computer</p>
            </div>
          </div>
        </div>

        {/* Step 2: The Noise Filter */}
        <div 
          ref={(el) => { stepRefs.current[1] = el }}
          className={`relative z-10 flex flex-col md:flex-row gap-8 md:gap-16 mb-24 items-start group transition-all duration-700 ${
            visibleSteps.includes(1) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Desktop number badge */}
          <div className={`hidden md:flex absolute left-1/2 -translate-x-1/2 top-0 size-10 bg-white dark:bg-card-dark border-4 border-primary rounded-full items-center justify-center shadow-lg transition-all duration-500 ${
            visibleSteps.includes(1) ? 'scale-100 rotate-0' : 'scale-0 rotate-180'
          }`}>
            <span className="text-sm font-bold text-deep-jungle dark:text-white">2</span>
          </div>
          
          {/* Mobile number badge */}
          <div className={`md:hidden absolute left-[40px] -translate-x-1/2 top-0 size-8 bg-white dark:bg-card-dark border-4 border-primary rounded-full flex items-center justify-center z-10 transition-all duration-500 ${
            visibleSteps.includes(1) ? 'scale-100 rotate-0' : 'scale-0 rotate-180'
          }`}>
            <span className="text-xs font-bold text-deep-jungle dark:text-white">2</span>
          </div>
          
          {/* Visual content */}
          <div className="flex-1 pl-16 md:pl-0 md:pr-12 w-full order-3 md:order-1">
            <div className="bg-white dark:bg-[#0B2D26] border border-gray-100 dark:border-gray-700 shadow-xl rounded-xl p-6 relative overflow-hidden">
              <div className="flex flex-col items-center gap-2">
                <div className="flex gap-2 w-full justify-center flex-wrap opacity-50">
                  <span className="px-2 py-1 bg-gray-200 rounded text-[10px] text-gray-500 line-through">&quot;Ideally...&quot;</span>
                  <span className="px-2 py-1 bg-gray-200 rounded text-[10px] text-gray-500">&quot;Nice to have&quot;</span>
                  <span className="px-2 py-1 bg-gray-200 rounded text-[10px] text-gray-500 line-through">&quot;Maybe later&quot;</span>
                  <span className="px-2 py-1 bg-gray-200 rounded text-[10px] text-gray-500">&quot;Cool feature&quot;</span>
                </div>
                <div 
                  className="w-full max-w-[180px] h-24 bg-gray-100 dark:bg-gray-700 flex items-center justify-center my-2 relative"
                  style={{ clipPath: 'polygon(0 0, 100% 0, 65% 100%, 35% 100%)' }}
                >
                  <span className="material-symbols-outlined text-4xl text-gray-300 animate-bounce">filter_alt</span>
                </div>
                <div className="flex gap-2 w-full justify-center">
                  <span className="px-3 py-1 bg-primary text-deep-jungle font-bold text-xs rounded shadow-sm border border-black/10">&quot;Too expensive&quot;</span>
                  <span className="px-3 py-1 bg-primary text-deep-jungle font-bold text-xs rounded shadow-sm border border-black/10">&quot;Can&apos;t solve X&quot;</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Text content */}
          <div className="flex-1 pt-2 pl-16 md:pl-12 order-2 md:order-2 w-full md:w-auto">
            <h2 className="font-mono font-bold text-3xl mb-3 text-deep-jungle dark:text-white">The Noise Filter</h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">We automatically separate polite compliments from brutal honesty. &apos;Nice to haves&apos; get filtered out. &apos;Must haves&apos; get pushed through.</p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm font-medium text-deep-jungle dark:text-white">
                <span className="size-6 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 flex items-center justify-center material-symbols-outlined text-[10px] leading-none">close</span>
                <span>Polite Fluff</span>
              </li>
              <li className="flex items-center gap-3 text-sm font-medium text-deep-jungle dark:text-white">
                <span className="size-6 rounded-full bg-primary/20 dark:bg-primary/30 text-primary-dark dark:text-primary flex items-center justify-center material-symbols-outlined text-[10px] leading-none">check</span>
                <span>Real Pain Points</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Step 3: The Sort */}
        <div 
          ref={(el) => { stepRefs.current[2] = el }}
          className={`relative z-10 flex flex-col md:flex-row gap-4 md:gap-16 mb-24 items-start group transition-all duration-700 ${
            visibleSteps.includes(2) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Desktop number badge */}
          <div className={`hidden md:flex absolute left-1/2 -translate-x-1/2 top-0 size-10 bg-white dark:bg-card-dark border-4 border-primary rounded-full items-center justify-center shadow-lg transition-all duration-500 ${
            visibleSteps.includes(2) ? 'scale-100 rotate-0' : 'scale-0 rotate-180'
          }`}>
            <span className="text-sm font-bold text-deep-jungle dark:text-white">3</span>
          </div>
          
          {/* Mobile number badge */}
          <div className={`md:hidden absolute left-[40px] -translate-x-1/2 top-0 size-8 bg-white dark:bg-card-dark border-4 border-primary rounded-full flex items-center justify-center z-10 transition-all duration-500 ${
            visibleSteps.includes(2) ? 'scale-100 rotate-0' : 'scale-0 rotate-180'
          }`}>
            <span className="text-xs font-bold text-deep-jungle dark:text-white">3</span>
          </div>
          
          {/* Text content */}
          <div className="flex-1 md:text-right pt-2 pl-16 md:pl-0 md:pr-12 order-2 md:order-1 w-full md:w-auto">
            <h2 className="font-mono font-bold text-3xl mb-3 text-deep-jungle dark:text-white">The Sort</h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">Actionable data is sorted into two distinct buckets. Know exactly what to build and what to scrap immediately.</p>
          </div>
          
          {/* Visual content */}
          <div className="flex-1 pl-16 md:pl-12 order-3 md:order-2 w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Ignore List */}
            <div className="bg-gray-50 dark:bg-[#0B2D26] border border-gray-100 dark:border-gray-700 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-4 border-b border-gray-200 dark:border-gray-600 pb-2">
                <span className="material-symbols-outlined text-red-500">cancel</span>
                <h4 className="font-bold text-sm text-gray-500 uppercase">Ignore List</h4>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 opacity-50">
                  <span className="material-symbols-outlined text-red-400 text-lg mt-0.5">close</span>
                  <span className="text-sm leading-tight text-gray-500 line-through">&quot;The logo color is weird&quot;</span>
                </li>
                <li className="flex items-start gap-2 opacity-50">
                  <span className="material-symbols-outlined text-red-400 text-lg mt-0.5">close</span>
                  <span className="text-sm leading-tight text-gray-500 line-through">&quot;Ideally it would make coffee&quot;</span>
                </li>
              </ul>
            </div>
            
            {/* Keep List */}
            <div className="bg-white dark:bg-card-dark border-2 border-primary rounded-xl p-4 shadow-[4px_4px_0_0_rgb(16,214,149)]">
              <div className="flex items-center gap-2 mb-4 border-b border-gray-100 dark:border-gray-700 pb-2">
                <span 
                  className="material-symbols-outlined text-emerald-700"
                  style={{ fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}
                >
                  check_circle
                </span>
                <h4 className="font-bold text-sm text-deep-jungle dark:text-white uppercase">Keep List</h4>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-primary-dark text-lg mt-0.5 font-bold">check</span>
                  <span className="text-sm leading-tight font-medium text-deep-jungle dark:text-white">&quot;Syncing fails on mobile&quot;</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-primary-dark text-lg mt-0.5 font-bold">check</span>
                  <span className="text-sm leading-tight font-medium text-deep-jungle dark:text-white">&quot;Reporting is too slow&quot;</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Step 4: The Translation */}
        <div 
          ref={(el) => { stepRefs.current[3] = el }}
          className={`relative z-10 flex flex-col md:flex-row gap-4 md:gap-16 mb-24 items-start group transition-all duration-700 ${
            visibleSteps.includes(3) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Desktop number badge */}
          <div className={`hidden md:flex absolute left-1/2 -translate-x-1/2 top-0 size-10 bg-white dark:bg-card-dark border-4 border-primary rounded-full items-center justify-center shadow-lg transition-all duration-500 ${
            visibleSteps.includes(3) ? 'scale-100 rotate-0' : 'scale-0 rotate-180'
          }`}>
            <span className="text-sm font-bold text-deep-jungle dark:text-white">4</span>
          </div>
          
          {/* Mobile number badge */}
          <div className={`md:hidden absolute left-[40px] -translate-x-1/2 top-0 size-8 bg-white dark:bg-card-dark border-4 border-primary rounded-full flex items-center justify-center z-10 transition-all duration-500 ${
            visibleSteps.includes(3) ? 'scale-100 rotate-0' : 'scale-0 rotate-180'
          }`}>
            <span className="text-xs font-bold text-deep-jungle dark:text-white">4</span>
          </div>
          
          {/* Visual content */}
          <div className="flex-1 pl-16 md:pl-0 md:pr-12 w-full order-3 md:order-1">
            <div className="bg-white dark:bg-[#0B2D26] border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden shadow-lg flex flex-col max-w-sm mx-auto md:ml-auto md:mr-0">
              <div className="bg-gray-50 dark:bg-black/20 px-4 py-2 border-b border-gray-100 dark:border-gray-700 flex items-center gap-2">
                <div className="flex gap-1">
                  <div className="size-2.5 rounded-full bg-red-400"></div>
                  <div className="size-2.5 rounded-full bg-yellow-400"></div>
                  <div className="size-2.5 rounded-full bg-green-400"></div>
                </div>
              </div>
              <div className="p-4 flex flex-col gap-4 bg-gray-50/50 dark:bg-black/20">
                <div className="flex gap-3">
                  <div className="size-8 rounded-full bg-gray-200 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-gray-500 text-sm">person</span>
                  </div>
                  <div className="bg-white dark:bg-[#0B2D26] border border-gray-100 dark:border-gray-700 p-3 rounded-r-xl rounded-bl-xl shadow-sm">
                    <p className="text-xs text-gray-400 mb-1 font-mono uppercase">Customer Said</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300 italic">&quot;It&apos;s definitely an interesting approach to the problem...&quot;</p>
                  </div>
                </div>
                <div className="flex justify-center -my-2 z-10">
                  <span className="material-symbols-outlined text-gray-300 text-lg">arrow_downward</span>
                </div>
                <div className="flex gap-3 flex-row-reverse">
                  <div className="size-8 rounded-full bg-deep-jungle flex items-center justify-center shrink-0">
                    <span className="text-primary font-bold text-xs">AI</span>
                  </div>
                  <div className="bg-primary/20 border border-primary/30 p-3 rounded-l-xl rounded-br-xl shadow-sm">
                    <p className="text-xs text-emerald-800 dark:text-emerald-700 mb-1 font-mono uppercase font-bold flex items-center gap-1">
                      <span className="material-symbols-outlined text-[10px]">bolt</span>
                      Cluvo Insight
                    </p>
                    <p className="text-sm font-bold text-deep-jungle dark:text-white">They won&apos;t buy it. &quot;Interesting&quot; usually means irrelevant.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Text content */}
          <div className="flex-1 pt-2 pl-16 md:pl-12 order-2 md:order-2 w-full md:w-auto">
            <h2 className="font-mono font-bold text-3xl mb-3 text-deep-jungle dark:text-white">The Translation</h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">Humans are notoriously bad at telling the truth. Our engine translates polite feedback into raw business reality.</p>
          </div>
        </div>

        {/* Step 5: Share with Investors */}
        <div 
          ref={(el) => { stepRefs.current[4] = el }}
          className={`relative z-10 flex flex-col md:flex-row gap-4 md:gap-16 items-start group transition-all duration-700 ${
            visibleSteps.includes(4) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Desktop number badge */}
          <div className={`hidden md:flex absolute left-1/2 -translate-x-1/2 top-0 size-10 bg-white dark:bg-card-dark border-4 border-primary rounded-full items-center justify-center shadow-lg transition-all duration-500 ${
            visibleSteps.includes(4) ? 'scale-100 rotate-0' : 'scale-0 rotate-180'
          }`}>
            <span className="text-sm font-bold text-deep-jungle dark:text-white">5</span>
          </div>
          
          {/* Mobile number badge */}
          <div className={`md:hidden absolute left-[40px] -translate-x-1/2 top-0 size-8 bg-white dark:bg-card-dark border-4 border-primary rounded-full flex items-center justify-center z-10 transition-all duration-500 ${
            visibleSteps.includes(4) ? 'scale-100 rotate-0' : 'scale-0 rotate-180'
          }`}>
            <span className="text-xs font-bold text-deep-jungle dark:text-white">5</span>
          </div>
          
          {/* Text content */}
          <div className="flex-1 md:text-right pt-2 pl-16 md:pl-0 md:pr-12 order-2 md:order-1 w-full md:w-auto">
            <h2 className="font-mono font-bold text-3xl mb-3 text-deep-jungle dark:text-white">Share with Investors</h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">Export your findings into a clean, data-backed report. Prove your market demand to investors with a single, un-biased source of truth.</p>
          </div>
          
          {/* Visual content */}
          <div className="flex-1 pl-16 md:pl-12 w-full order-3 md:order-2">
            <div className="bg-white dark:bg-card-dark border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden shadow-lg p-8 relative flex items-center justify-center min-h-[260px] group-hover:border-primary/30 transition-colors duration-300">
              <div className="absolute inset-0 bg-gray-50/50 dark:bg-black/20"></div>
              <div className="relative z-10 w-44 bg-white dark:bg-card-dark border border-gray-100 dark:border-gray-700 shadow-xl rounded-lg p-5 flex flex-col gap-3 transform group-hover:-rotate-1 transition-transform duration-500">
                <div className="flex items-center gap-2 mb-1">
                  <div className="size-6 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                    <span className="material-symbols-outlined text-[14px] text-gray-500 dark:text-gray-400">description</span>
                  </div>
                  <div className="h-2 w-12 bg-gray-100 dark:bg-gray-700 rounded"></div>
                </div>
                <div className="space-y-2">
                  <div className="h-1.5 w-full bg-gray-50 dark:bg-gray-800 rounded"></div>
                  <div className="h-1.5 w-full bg-gray-50 dark:bg-gray-800 rounded"></div>
                  <div className="h-1.5 w-3/4 bg-gray-50 dark:bg-gray-800 rounded"></div>
                </div>
                <div className="mt-4 flex items-end gap-1.5 h-16 border-b border-gray-100 dark:border-gray-700 pb-1">
                  <div className="w-1/4 h-[30%] bg-primary/20 rounded-t-sm"></div>
                  <div className="w-1/4 h-[50%] bg-primary/40 rounded-t-sm"></div>
                  <div className="w-1/4 h-[40%] bg-primary/30 rounded-t-sm"></div>
                  <div className="w-1/4 h-[80%] bg-primary rounded-t-sm"></div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white dark:bg-card-dark rounded-full p-1 shadow-lg border border-gray-50 dark:border-gray-700 flex items-center justify-center">
                  <span 
                    className="material-symbols-outlined text-4xl text-amber-400"
                    style={{ fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}
                  >
                    verified
                  </span>
                </div>
              </div>
              <div className="absolute top-1/2 right-12 -translate-y-1/2 md:right-16 z-20">
                <div className="bg-white dark:bg-card-dark p-3 rounded-full shadow-lg border border-gray-100 dark:border-gray-700 text-primary-dark group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                  <span className="material-symbols-outlined">share</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
