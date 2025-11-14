import { useEffect, useState, useRef } from 'react';
import { metrics } from '../data/content';

function AnimatedCounter({ value, suffix }: { value: string; suffix: string }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const numericValue = parseFloat(value.replace(/[^0-9.]/g, ''));
    const duration = 2000;
    const steps = 60;
    const increment = numericValue / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= numericValue) {
        setCount(numericValue);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  const displayValue = value.includes('.')
    ? count.toFixed(1)
    : Math.floor(count).toString();

  return (
    <div ref={ref} className="text-white text-5xl md:text-6xl font-bold tracking-tight">
      {displayValue}
      {suffix}
    </div>
  );
}

export default function Metrics() {
  return (
    <section id="results" className="bg-black py-24 border-y border-white/10">
      <div className="max-w-[1320px] mx-auto px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <AnimatedCounter value={metric.value} suffix={metric.suffix} />
              <p className="text-gray-400 text-sm mt-4 tracking-wide uppercase">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
