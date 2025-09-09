import React from 'react';
import { ExternalLink } from 'lucide-react';

export function FreeCuts() {
  return (
    <section className="bg-ink text-bone min-h-[92svh]">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 copper-gradient opacity-30 blur-2xl"></div>
        <div className="relative max-w-6xl mx-auto px-6 py-16">
          <h1 className="text-4xl md:text-5xl font-black">Free Community Cuts</h1>
          <p className="mt-3 text-white/80 max-w-2xl">We host free haircut events for neighbors in need. Coverage by KSWO highlighted this mission of service.</p>
          <a href="https://www.kswo.com/2025/06/19/good-news-local-barber-aims-help-community-with-free-cuts-those-need/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 mt-5 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15">
            Read the KSWO story <ExternalLink size={16}/>
          </a>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6 pb-16 grid md:grid-cols-3 gap-6">
        {[
          { title:'Back-to-school drive', desc:'Fresh starts and fresh fades.'},
          { title:'Veterans appreciation', desc:'Cuts for service members and families.'},
          { title:'Neighborhood pop-ups', desc:'Find us around Lawton all year.'},
        ].map((c, i)=>(
          <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-2xl float-in">
            <h3 className="font-semibold text-white mb-1">{c.title}</h3>
            <p className="text-white/70 text-sm">{c.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
