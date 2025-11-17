// Projects.tsx
import { useState, useLayoutEffect, useRef } from 'react';
import { X, ArrowUpRight } from 'lucide-react';
import { projects } from '../data/content';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const el = sectionRef.current;
    if (!el) return;

    const cards = el.querySelectorAll('[data-project-card]');
    const header = el.querySelector('[data-projects-header]');
    const body = el.querySelector('[data-projects-body]');

    const ctx = gsap.context(() => {
      // Intro copy animation
      gsap.fromTo(
        [header, body],
        { autoAlpha: 0, y: 30 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.12,
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            end: 'top 55%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Card stagger
      gsap.fromTo(
        cards,
        { autoAlpha: 0, y: 40, rotateX: 6 },
        {
          autoAlpha: 1,
          y: 0,
          rotateX: 0,
          duration: 0.9,
          ease: 'power3.out',
          stagger: 0.12,
          scrollTrigger: {
            trigger: el,
            start: 'top 75%',
            end: 'top 35%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative bg-black py-24 md:py-28"
    >
      {/* Background treatment */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(137,91,253,0.16),_transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(15,118,110,0.14),_transparent_55%)]" />
        <div className="absolute inset-0 opacity-25 mix-blend-soft-light bg-[linear-gradient(to_right,_rgba(255,255,255,0.08)_1px,_transparent_1px),linear-gradient(to_bottom,_rgba(255,255,255,0.06)_1px,_transparent_1px)] bg-[size:120px_120px]" />
      </div>

      <div className="relative max-w-[1200px] mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-4 py-1 mb-5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#895bfd]" />
            <span className="text-[10px] md:text-[11px] tracking-[0.3em] uppercase text-white/60">
              Built4You case studies
            </span>
          </div>

          <h2
            data-projects-header
            className="text-white text-3xl md:text-5xl font-semibold md:font-bold mb-5 tracking-tight leading-tight"
          >
            Automations and systems
            <br />
            built to feel premium in practice.
          </h2>

          <p
            data-projects-body
            className="text-white/60 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Real projects for real operators. Each build pairs a clean, modern surface with an
            underlying system that makes the business easier to run, easier to scale, and
            more comfortable to show off.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3 text-[10px] md:text-[11px] tracking-[0.25em] uppercase text-white/40">
            <span className="rounded-full border border-white/15 bg-white/[0.03] px-3 py-1">
              Local brands
            </span>
            <span className="rounded-full border border-white/15 bg-white/[0.03] px-3 py-1">
              Lean teams
            </span>
            <span className="rounded-full border border-white/15 bg-white/[0.03] px-3 py-1">
              Automation-led builds
            </span>
          </div>
        </div>

        {/* Project grid */}
        <div className="relative">
          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-8">
            {projects.map((project, index) => (
              <button
                key={project.id}
                data-project-card
                onClick={() => setSelectedProject(project)}
                className="group relative overflow-hidden rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#895bfd]/60 hover:bg-white/[0.04] transition-all duration-300 text-left backdrop-blur-sm"
                aria-label={`View ${project.title} case study`}
              >
                {/* Top visual */}
                <div className="aspect-[16/11] relative overflow-hidden rounded-t-2xl">
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:brightness-110 transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Top-left tag strip */}
                  <div className="absolute top-4 left-4 flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 2).map((tag, tIndex) => (
                      <span
                        key={tIndex}
                        className="text-[9px] tracking-[0.22em] uppercase text-white/70 bg-black/40 border border-white/20 px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Corner case index */}
                  <div className="absolute bottom-4 right-4 text-[10px] tracking-[0.25em] uppercase text-white/70">
                    Case {String(index + 1).padStart(2, '0')}
                  </div>
                </div>

                {/* Content block */}
                <div className="p-6 md:p-7">
                  <h3 className="text-white text-lg md:text-xl font-medium mb-2 tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-5">
                    {project.summary}
                  </p>

                  <div className="flex items-center justify-between text-[10px] md:text-[11px]">
                    <span className="text-white/40 tracking-[0.2em] uppercase">
                      View full build
                    </span>
                    <span className="inline-flex items-center gap-1 text-white/70 group-hover:text-white transition-colors duration-200">
                      <span className="tracking-[0.22em] uppercase">Open</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                    </span>
                  </div>

                  {/* Subtle bottom glow */}
                  <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-x-6 -bottom-8 h-24 bg-gradient-to-t from-[#895bfd]/35 via-transparent to-transparent blur-2xl" />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Case study modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4 md:p-8"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative max-w-5xl w-full bg-black/90 border border-white/20 rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(0,0,0,0.9)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top chrome */}
            <div className="relative border-b border-white/15 bg-gradient-to-r from-white/5 via-white/0 to-white/5 px-6 md:px-8 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="flex h-2 w-2 rounded-full bg-emerald-400" />
                <span className="text-[10px] md:text-[11px] tracking-[0.3em] uppercase text-white/55">
                  Built4You case study
                </span>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-white/60 hover:text-white transition-colors"
                aria-label="Close case study"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Hero image */}
            <div className="aspect-[16/9] relative overflow-hidden border-b border-white/15">
              <img
                src={selectedProject.coverImage}
                alt={selectedProject.title}
                className="w-full h-full object-cover grayscale"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
              <div className="absolute left-6 bottom-6 md:left-10 md:bottom-8">
                <div className="flex flex-wrap gap-2 mb-2">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-[9px] md:text-[10px] tracking-[0.22em] uppercase text-white/70 bg-black/60 border border-white/30 px-2.5 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="text-white text-xl md:text-3xl font-semibold md:font-bold tracking-tight">
                  {selectedProject.title}
                </h2>
              </div>
            </div>

            {/* Body */}
            <div className="p-6 md:p-10 space-y-8 md:space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
                {/* Situation */}
                <div className="md:col-span-2 space-y-3">
                  <h3 className="text-white text-[10px] md:text-xs font-medium tracking-[0.26em] uppercase">
                    Situation
                  </h3>
                  <p className="text-white/70 leading-relaxed text-sm md:text-base">
                    {selectedProject.problem}
                  </p>
                </div>

                {/* Stack */}
                <div className="space-y-3">
                  <h3 className="text-white text-[10px] md:text-xs font-medium tracking-[0.26em] uppercase">
                    Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.stack.map((tech, index) => (
                      <span
                        key={index}
                        className="text-white/75 text-[11px] border border-white/20 rounded-full px-3 py-1 bg-white/[0.03]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                {/* Approach */}
                <div className="space-y-3">
                  <h3 className="text-white text-[10px] md:text-xs font-medium tracking-[0.26em] uppercase">
                    Approach
                  </h3>
                  <p className="text-white/70 leading-relaxed text-sm md:text-base">
                    {selectedProject.solution}
                  </p>
                </div>

                {/* Outcomes */}
                <div className="space-y-3">
                  <h3 className="text-white text-[10px] md:text-xs font-medium tracking-[0.26em] uppercase">
                    Outcomes
                  </h3>
                  <ul className="space-y-2.5">
                    {selectedProject.outcomes.map((outcome, index) => (
                      <li
                        key={index}
                        className="text-white/70 leading-relaxed text-sm md:text-base flex items-start gap-2"
                      >
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#895bfd]" />
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* CTA row */}
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 pt-4 border-t border-white/10">
                <p className="text-white/45 text-[11px] md:text-xs tracking-[0.22em] uppercase text-center md:text-left">
                  Ready for a system that feels as composed on the inside as it looks on the outside.
                </p>

                <button
                  onClick={() => {
                    setSelectedProject(null);
                    document
                      .getElementById('contact')
                      ?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="
                    group relative rounded-full
                    px-8 md:px-10 py-3.5
                    text-[11px] md:text-sm font-medium
                    tracking-[0.26em] uppercase
                    text-white
                    bg-[#895bfd]/25
                    border border-[#895bfd]/50
                    backdrop-blur-md
                    hover:bg-[#895bfd]/40 hover:border-[#895bfd]/70
                    transition-all duration-200
                    inline-flex items-center gap-2
                  "
                >
                  <span>Start a project with Built4You</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
