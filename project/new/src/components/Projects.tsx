import { useState } from 'react';
import { X } from 'lucide-react';
import { projects } from '../data/content';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" className="bg-black py-24">
      <div className="max-w-[1320px] mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-white text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Recent Work
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Solutions built for real businesses with measurable outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <button
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group relative overflow-hidden bg-black border border-white/10 hover:border-white/30 transition-all duration-200 text-left"
              aria-label={`View ${project.title} case study`}
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <img
                  src={project.coverImage}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:brightness-110 transition-all duration-200"
                />
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-200" />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs text-gray-400 tracking-wide"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-white text-xl font-medium mb-2 tracking-wide">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {project.summary}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-8 overflow-y-auto"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="max-w-4xl w-full bg-black border border-white/20 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors z-10"
              aria-label="Close case study"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="aspect-[16/9] relative overflow-hidden">
              <img
                src={selectedProject.coverImage}
                alt={selectedProject.title}
                className="w-full h-full object-cover grayscale"
              />
            </div>

            <div className="p-12">
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedProject.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs text-gray-400 tracking-wide"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h2 className="text-white text-3xl font-bold mb-6 tracking-tight">
                {selectedProject.title}
              </h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-white text-sm font-medium mb-2 tracking-wide uppercase">
                    The Problem
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {selectedProject.problem}
                  </p>
                </div>

                <div>
                  <h3 className="text-white text-sm font-medium mb-2 tracking-wide uppercase">
                    The Solution
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {selectedProject.solution}
                  </p>
                </div>

                <div>
                  <h3 className="text-white text-sm font-medium mb-2 tracking-wide uppercase">
                    Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.stack.map((tech, index) => (
                      <span
                        key={index}
                        className="text-gray-400 text-sm border border-white/10 px-3 py-1"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-white text-sm font-medium mb-2 tracking-wide uppercase">
                    Outcomes
                  </h3>
                  <ul className="space-y-2">
                    {selectedProject.outcomes.map((outcome, index) => (
                      <li key={index} className="text-gray-400 leading-relaxed flex items-start gap-2">
                        <span className="text-white mt-1">•</span>
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <button
                onClick={() => {
                  setSelectedProject(null);
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="mt-8 bg-white text-black px-8 py-4 text-sm font-medium tracking-wide hover:bg-gray-200 transition-all duration-200"
              >
                Start Your Project
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
