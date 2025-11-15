// Projects.tsx
import { useState, useLayoutEffect, useRef } from 'react';
import { X } from 'lucide-react';
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

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cards,
        { autoAlpha: 0, y: 40 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
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
    <section id="projects" ref={sectionRef} className="bg-black py-24">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <p className="text-white/50 text-[11px] md:text-xs tracking-[0.3em] uppercase mb-4">
            Selected work
          </p>
          <h2 className="text-white text-3xl md:text-5xl font-semibold md:font-bold mb-6 tracking-tight">
            Websites and systems
            <br />
            built for real businesses.
          </h2>
          <p className="text-white/60 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed">
            From local service brands to lean online teams, we design and build clean,
            conversion ready websites and automations that make the business feel
            more premium and easier to run day to day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <button
              key={project.id}
              data-project-card
              onClick={() => setSelectedProject(project)}
              className="group relative overflow-hidden bg-black border border-white/10 hover:border-white/40 transition-all duration-200 text-left"
              aria-label={`View ${project.title} case study`}
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <img
                  src={project.coverImage}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:brightness-110 transition-all duration-200"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-[11px] text-white/50 tracking-[0.16em] uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-white text-lg md:text-xl font-medium mb-2 tracking-tight">
                  {project.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {project.summary}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-6 md:p-10 overflow-y-auto"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="max-w-4xl w-full bg-black border border-white/20 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 text-white hover:text-white/70 transition-colors z-10"
              aria-label="Close case study"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="aspect-[16/9] relative overflow-hidden border-b border-white/15">
              <img
                src={selectedProject.coverImage}
                alt={selectedProject.title}
                className="w-full h-full object-cover grayscale"
              />
            </div>

            <div className="p-8 md:p-12">
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedProject.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-[11px] text-white/50 tracking-[0.16em] uppercase"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h2 className="text-white text-2xl md:text-3xl font-semibold md:font-bold mb-6 tracking-tight">
                {selectedProject.title}
              </h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-white text-[11px] md:text-xs font-medium mb-2 tracking-[0.22em] uppercase">
                    Situation
                  </h3>
                  <p className="text-white/70 leading-relaxed text-sm md:text-base">
                    {selectedProject.problem}
                  </p>
                </div>

                <div>
                  <h3 className="text-white text-[11px] md:text-xs font-medium mb-2 tracking-[0.22em] uppercase">
                    Approach
                  </h3>
                  <p className="text-white/70 leading-relaxed text-sm md:text-base">
                    {selectedProject.solution}
                  </p>
                </div>

                <div>
                  <h3 className="text-white text-[11px] md:text-xs font-medium mb-2 tracking-[0.22em] uppercase">
                    Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.stack.map((tech, index) => (
                      <span
                        key={index}
                        className="text-white/70 text-xs border border-white/15 px-3 py-1"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-white text-[11px] md:text-xs font-medium mb-2 tracking-[0.22em] uppercase">
                    Outcomes
                  </h3>
                  <ul className="space-y-2">
                    {selectedProject.outcomes.map((outcome, index) => (
                      <li
                        key={index}
                        className="text-white/70 leading-relaxed text-sm md:text-base flex items-start gap-2"
                      >
                        <span className="text-white mt-1 text-xs">•</span>
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <button
                onClick={() => {
                  setSelectedProject(null);
                  document
                    .getElementById('contact')
                    ?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="mt-8 bg-white text-black px-8 md:px-10 py-3.5 md:py-4 text-[11px] md:text-sm font-medium tracking-[0.22em] uppercase hover:bg-black hover:text-white border border-white transition-colors duration-200"
              >
                Start a project with Built4You
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
