// src/pages/Content.tsx
import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PlayIcon, CheckBadgeIcon } from '@heroicons/react/24/solid';
import { videos } from '../data/sampleData';

type PlatformId = 'all' | 'youtube' | 'instagram' | 'tiktok' | 'twitter' | 'discord';

const PLATFORMS: { id: PlatformId; name: string; color: string; icon: React.ReactNode }[] = [
  {
    id: 'youtube',
    name: 'YouTube',
    color: 'text-red-500',
    icon: (
      <svg viewBox="0 0 576 512" className="w-6 h-6 fill-current">
        <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
      </svg>
    ),
  },
  {
    id: 'instagram',
    name: 'Instagram',
    color: 'text-pink-500',
    icon: (
      <svg viewBox="0 0 448 512" className="w-6 h-6 fill-current">
        <path d="M224,202.66A53.34,53.34,0,1,0,277.34,256,53.38,53.38,0,0,0,224,202.66ZM398.8,80A79.2,79.2,0,0,0,368,67.2C340.8,64,283.2,64,224,64S107.2,64,80,67.2A79.2,79.2,0,0,0,49.2,80,79.2,79.2,0,0,0,16,110.8C12.8,138,12.8,195.6,12.8,254.8S12.8,371.6,16,398.8A79.2,79.2,0,0,0,49.2,429.6,79.2,79.2,0,0,0,80,442.4C107.2,445.6,164.8,448,224,448s116.8-2.4,144-5.6a79.2,79.2,0,0,0,30.8-12.8,79.2,79.2,0,0,0,30.8-30.8c3.2-27.2,5.6-84.8,5.6-144S402.4,138,399.2,110.8A79.2,79.2,0,0,0,398.8,80ZM224,338.6A82.6,82.6,0,1,1,306.6,256,82.7,82.7,0,0,1,224,338.6ZM342.6,160a19.2,19.2,0,1,1,19.2-19.2A19.2,19.2,0,0,1,342.6,160Z" />
      </svg>
    ),
  },
  {
    id: 'tiktok',
    name: 'TikTok',
    color: 'text-cyan-400',
    icon: (
      <svg viewBox="0 0 448 512" className="w-6 h-6 fill-current">
        <path d="M448,209.9a210.1,210.1,0,0,1-122.7-39.5V352.8A159.2,159.2,0,1,1,166,194.5V260A96.9,96.9,0,1,0,230.9,354V0h94.3a117.8,117.8,0,0,0,1.9,21.3,122.2,122.2,0,0,0,25.8,53.5,123.6,123.6,0,0,0,88.1,44.9Z" />
      </svg>
    ),
  },
  {
    id: 'twitter',
    name: 'X',
    color: 'text-white',
    icon: (
      <svg viewBox="0 0 512 512" className="w-6 h-6 fill-current">
        <path d="M389.2 48H470L304.4 246.1 500 464H350.9L232.3 324.5 97.9 464H16.2L192.4 251.5 0 48h153.1l106.3 121.5L389.2 48z" />
      </svg>
    ),
  },
  {
    id: 'discord',
    name: 'Discord',
    color: 'text-indigo-400',
    icon: (
      <svg viewBox="0 0 640 512" className="w-6 h-6 fill-current">
        <path d="M524.5 69.8a1.5 1.5 0 00-.8-.7A485 485 0 00404.1 32a1.8 1.8 0 00-1.9.9 337 337 0 00-14.9 30.6 447.8 447.8 0 00-134.4 0 309.5 309.5 0 00-15.1-30.6 1.9 1.9 0 00-1.9-.9A483.7 483.7 0 00115.5 69.8a1.7 1.7 0 00-.8.7C39.1 183.7 18.2 294.7 28.4 404.4a2 2 0 00.8 1.3 487.7 487.7 0 00146.8 74.2 1.9 1.9 0 002.1-.7 349 349 0 0029-48.8 1.9 1.9 0 00-1-2.6 321.2 321.2 0 01-45.9-21.9 1.9 1.9 0 01-.2-3.1 253.7 253.7 0 009.1-7.1 1.8 1.8 0 011.9-.3c96.2 43.9 200.4 43.9 295.5 0a1.8 1.8 0 011.9.2 240.9 240.9 0 009.1 7.2 1.9 1.9 0 01-.2 3.1 301.4 301.4 0 01-45.9 21.8 1.9 1.9 0 00-1 2.6 391.1 391.1 0 0030 48.8 1.9 1.9 0 002.1.7A486 486 0 00610.7 405.7a1.9 1.9 0 00.8-1.3C623.7 277.6 590 167.5 524.5 69.8zM222.5 337.6c-29 0-52.9-26.6-52.9-59.2s23.4-59.2 52.9-59.2c29.7 0 53.3 26.8 52.9 59.2 0 32.6-23.4 59.2-52.9 59.2zm195.4 0c-29 0-52.9-26.6-52.9-59.2s23.4-59.2 52.9-59.2c29.7 0 53.3 26.8 52.9 59.2 0 32.6-23.2 59.2-52.9 59.2z" />
      </svg>
    ),
  },
];

export default function Content() {
  const [platform, setPlatform] = useState<PlatformId>('all');
  const [lightbox, setLightbox] = useState<any>(null);

  const filtered = useMemo(
    () => videos.filter(v => platform === 'all' || v.platform === platform),
    [platform]
  );

  return (
    <div className="min-h-screen pb-24">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-black to-black" />
        <div className="absolute -top-32 -right-32 w-[40rem] h-[40rem] rounded-full bg-gradient-to-tr from-neon-violet/20 to-neon-cyan/20 blur-3xl opacity-40" />
        <div className="max-w-7xl mx-auto px-6 pt-28 pb-12 relative z-10">
          <div className="flex flex-col md:flex-row md:items-center gap-8">
            {/* Avatar */}
            <div className="shrink-0">
              <div className="w-28 h-28 rounded-2xl overflow-hidden ring-2 ring-white/10 shadow-xl bg-white/5 grid place-items-center">
                <span className="text-3xl">🎥</span>
              </div>
            </div>

            {/* Title and Bio */}
            <div className="flex-1">
              <div className="flex items-center gap-3">
                <h1 className="text-4xl md:text-5xl font-display font-black tracking-tight text-white">
                  Creator Hub
                </h1>
                <CheckBadgeIcon className="w-7 h-7 text-cyan-400" />
              </div>
              <p className="mt-3 text-gray-300 max-w-2xl">
                All my latest across YouTube, Instagram, TikTok, X, and Discord in one clean feed.
              </p>

              {/* Social button row */}
              <div className="mt-6 grid grid-cols-3 sm:grid-cols-5 gap-3 max-w-xl">
                {PLATFORMS.map(p => (
                  <SocialButton
                    key={p.id}
                    onClick={() => setPlatform(p.id)}
                    active={platform === p.id}
                    colorClass={p.color}
                  >
                    {p.icon}
                  </SocialButton>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feed */}
      <section className="mt-6">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="flex items-end justify-between mb-6"
          >
            <h2 className="text-2xl md:text-3xl font-display font-black">
              <span className="gradient-text">Latest</span> Posts
            </h2>
            <span className="text-sm text-gray-400">{filtered.length} items</span>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((video, i) => (
              <motion.article
                key={video.id}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                className="glass-panel overflow-hidden group"
                onClick={() => setLightbox(video)}
              >
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <PlayIcon className="h-16 w-16 text-white drop-shadow-lg" />
                  </div>

                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="px-2 py-1 rounded bg-black/70 text-white text-xs">
                      {video.platform.toUpperCase()}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3 px-2 py-1 rounded bg-black/70 text-white text-xs">
                    {video.duration}
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-white font-semibold line-clamp-2">{video.title}</h3>
                  <div className="mt-2 flex items-center justify-between text-xs text-gray-400">
                    <span>{video.views} views</span>
                    <span>{new Date(video.date).toLocaleDateString()}</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            key="lb"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 p-4 grid place-items-center"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="w-full max-w-4xl glass-panel overflow-hidden relative"
              onClick={e => e.stopPropagation()}
            >
              <div className="aspect-video relative bg-black">
                <img src={lightbox.thumbnail} alt={lightbox.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <PlayIcon className="h-20 w-20 text-white/80" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white">{lightbox.title}</h3>
                <div className="mt-2 flex items-center justify-between text-sm text-gray-400">
                  <span>{lightbox.views} views</span>
                  <span className="uppercase">{lightbox.platform}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* Inline component for animated social buttons */
function SocialButton({
  children,
  onClick,
  active,
  colorClass,
}: {
  children: React.ReactNode;
  onClick: () => void;
  active: boolean;
  colorClass: string;
}) {
  return (
    <button
      onClick={onClick}
      className={[
        'relative overflow-hidden rounded-full p-4 backdrop-blur border transition-all duration-300 group',
        active ? 'border-white/40 bg-white/10 shadow-lg' : 'border-white/10 bg-black/30 hover:bg-white/5',
      ].join(' ')}
      aria-pressed={active}
    >
      <span
        className={[
          'relative z-10 block',
          colorClass,
          active ? 'opacity-100' : 'opacity-80 group-hover:opacity-100',
        ].join(' ')}
      >
        {children}
      </span>
      <span className="pointer-events-none absolute inset-0 translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </button>
  );
}
