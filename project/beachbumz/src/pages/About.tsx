import React, { useEffect } from 'react';
import { Users, Award, Heart, MapPin, Clock, Utensils } from 'lucide-react';

const About = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('fade-in-up');
      }),
      { threshold: 0.15 }
    );
    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const milestones = [
    { year: '2018', event: 'Beach Bumz Opens', description: 'Started as a small pizzeria with big dreams' },
    { year: '2019', event: 'Community Favorite', description: 'Became a go to for families and game nights' },
    { year: '2021', event: 'Menu Expansion', description: 'Wings, subs, salads, and more fan picks' },
    { year: '2024', event: 'Liquor License', description: 'Full bar service with coastal cocktails' },
  ];

  const values = [
    { icon: <Heart className="h-5 w-5" />, title: 'Hospitality', text: 'Friendly service and honest portions' },
    { icon: <Utensils className="h-5 w-5" />, title: 'Quality', text: 'Fresh dough, premium cheeses, real ingredients' },
    { icon: <Award className="h-5 w-5" />, title: 'Consistency', text: 'What you loved last time tastes the same today' },
  ];

  return (
    <div className="min-h-screen bg-ocean-blue">
      {/* Hero */}
      <section className="relative pt-28 pb-16 text-center">
        <h1 className="font-display text-5xl md:text-6xl text-white mb-3 zoom-in">OUR STORY</h1>
        <p className="text-sandy-beige text-lg md:text-xl max-w-2xl mx-auto animate-on-scroll">
          Comfort food with a coastal soul. Beach Bumz blends pub energy with family dining so everyone feels at home.
        </p>
      </section>

      {/* Stats */}
      <section className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
        {[
          { icon: <Users className="h-6 w-6" />, label: 'Guests Served', value: '25k+' },
          { icon: <Clock className="h-6 w-6" />, label: 'Years', value: '12+' },
          { icon: <Award className="h-6 w-6" />, label: 'Rating', value: '4.8★' },
          { icon: <MapPin className="h-6 w-6" />, label: 'City', value: 'Morehead City' },
        ].map((s, i) => (
          <div key={i} className="animate-on-scroll rounded-2xl bg-white/5 border border-white/10 p-5 text-center">
            <div className="flex justify-center text-turquoise mb-2">{s.icon}</div>
            <div className="text-2xl font-semibold text-white">{s.value}</div>
            <div className="text-sm text-sandy-beige">{s.label}</div>
          </div>
        ))}
      </section>

      {/* Values */}
      <section className="max-w-5xl mx-auto px-4 mb-16 grid md:grid-cols-3 gap-6">
        {values.map((v, i) => (
          <div key={i} className="animate-on-scroll rounded-2xl p-6 border border-white/10 bg-white/5">
            <div className="flex items-center gap-2 text-turquoise mb-2">{v.icon}<span className="font-semibold text-white">{v.title}</span></div>
            <p className="text-sandy-beige">{v.text}</p>
          </div>
        ))}
      </section>

      {/* Timeline */}
      <section className="max-w-4xl mx-auto px-4 mb-20">
        <h2 className="text-white font-display text-3xl md:text-4xl mb-6 text-center animate-on-scroll">Milestones</h2>
        <div className="relative">
          <div className="absolute left-1.5 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-white/10" />
          <div className="space-y-8">
            {milestones.map((m, i) => (
              <div key={i} className="animate-on-scroll relative md:grid md:grid-cols-2 md:gap-8">
                <div className="flex md:justify-end">
                  <div className="text-turquoise font-semibold">{m.year}</div>
                </div>
                <div>
                  <div className="text-white font-semibold">{m.event}</div>
                  <div className="text-sandy-beige">{m.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit card */}
      <section className="max-w-4xl mx-auto px-4 pb-24">
        <div className="animate-on-scroll rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <div className="text-white font-semibold text-xl mb-1">Visit Us</div>
            <div className="text-sandy-beige flex items-center gap-2"><MapPin className="h-4 w-4" /> 5167 Hwy 70, Morehead City, NC</div>
            <div className="text-sandy-beige flex items-center gap-2"><Clock className="h-4 w-4" /> Daily 11 AM to close</div>
          </div>
          <a
            href="htt
