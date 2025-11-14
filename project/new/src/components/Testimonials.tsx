import { testimonials } from '../data/content';

export default function Testimonials() {
  return (
    <section className="bg-black py-24 border-t border-white/10">
      <div className="max-w-[1320px] mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-white text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Client Success Stories
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Real feedback from businesses we've helped transform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-black border border-white/10 p-8 hover:border-white/20 transition-all duration-200"
            >
              <p className="text-gray-300 text-base leading-relaxed mb-8 italic">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full grayscale object-cover"
                />
                <div>
                  <div className="text-white font-medium text-sm">
                    {testimonial.author}
                  </div>
                  <div className="text-gray-400 text-xs">
                    {testimonial.role} • {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
