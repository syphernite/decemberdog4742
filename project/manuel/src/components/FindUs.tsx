// src/components/FindUs.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Phone } from 'lucide-react';

const ADDRESS = '1303 SW 30th St, Lawton, OK 73505';

type DayRow = { day: string; location?: string; time?: string; closed?: boolean };

const SCHEDULE: DayRow[] = [
  { day: 'Monday', closed: true },
  { day: 'Tuesday', location: ADDRESS, time: '11:30 AM - 2:30 PM' },
  { day: 'Wednesday', location: ADDRESS, time: '11:00 AM - 3:00 PM' },
  { day: 'Thursday', location: ADDRESS, time: '11:30 AM - 2:30 PM' },
  { day: 'Friday', location: ADDRESS, time: '11:00 AM - 4:00 PM' },
  { day: 'Saturday', location: ADDRESS, time: '10:00 AM - 3:00 PM' },
  { day: 'Sunday', closed: true },
];

const dayOrder = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

function isOpenNow(rows: DayRow[]) {
  const now = new Date();
  const today = dayOrder[now.getDay()];
  const row = rows.find(r => r.day === today);
  if (!row || row.closed || !row.time) return false;

  const toMinutes = (t: string) => {
    const [time, ampm] = t.trim().split(' ');
    const [h, m = '0'] = time.split(':').map(Number);
    let hh = h % 12;
    if ((ampm ?? '').toUpperCase() === 'PM') hh += 12;
    return hh * 60 + Number(m);
  };

  const [startStr, endStr] = row.time.split('-').map(s => s.trim());
  const mins = now.getHours() * 60 + now.getMinutes();
  return mins >= toMinutes(startStr) && mins <= toMinutes(endStr);
}

const FindUs = () => {
  const open = isOpenNow(SCHEDULE);
  const MAP_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`;

  return (
    <motion.section
      id="findus"
      className="bg-neutral-50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4 }}
    >
      <div className="container mx-auto px-4 pt-24 md:pt-28 pb-16">
        {/* Page card */}
        <div className="mx-auto w-full max-w-5xl rounded-2xl bg-white/85 backdrop-blur-md shadow-2xl border border-white/60 ring-1 ring-black/5 p-6 md:p-10">
          {/* Heading */}
          <motion.div
            initial={{ y: 24, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="font-display text-5xl md:text-7xl font-normal text-black-deep tracking-tight">
              FIND US
            </h2>
            <p className="font-body text-lg md:text-xl text-black mt-3">
              Parked Tue–Sat at {ADDRESS}. Call for pickup.
            </p>
          </motion.div>

          {/* Two equal boxes */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Map */}
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="rounded-xl border border-black/10 bg-white shadow-lg overflow-hidden flex flex-col h-full min-h-[420px]"
            >
              <div className="p-6 border-b border-black/10">
                <div className="flex items-center gap-3">
                  <MapPin className="text-red-primary" />
                  <h3 className="font-display text-2xl text-black-deep">Live Location</h3>
                </div>
                <p className="text-sm text-gray-600 mt-2">{ADDRESS}</p>
              </div>
              <div className="flex-1">
                <iframe
                  title="Manuel Food Truck Location"
                  className="w-full h-full min-h-[260px]"
                  src={MAP_EMBED}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </motion.div>

            {/* Hours */}
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="rounded-xl border border-black/10 bg-white shadow-lg overflow-hidden flex flex-col h-full min-h-[420px]"
            >
              <div className="p-6 border-b border-black/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Clock className="text-red-primary" />
                  <h3 className="font-display text-2xl text-black-deep">Weekly Schedule</h3>
                </div>
                <div
                  className={`px-3 py-1 rounded-full text-xs font-bold ${
                    open ? 'bg-green-600 text-white' : 'bg-gray-300 text-black'
                  }`}
                >
                  {open ? 'OPEN NOW' : 'CLOSED'}
                </div>
              </div>

              <div className="flex-1 p-6 space-y-3">
                {SCHEDULE.map((row) => (
                  <div
                    key={row.day}
                    className="flex items-center justify-between rounded-lg px-4 py-3 bg-neutral-50 border border-black/10"
                  >
                    <div>
                      <div className="font-body font-semibold text-black-deep">{row.day}</div>
                      <div className="text-xs text-gray-600">
                        {row.closed ? '—' : row.location}
                      </div>
                    </div>
                    <div className="text-right text-sm text-gray-800">
                      {row.closed ? 'Closed' : row.time}
                    </div>
                  </div>
                ))}

                <div className="mt-2 rounded-md bg-red-primary/10 border border-red-primary/30 px-4 py-3 text-sm text-red-900">
                  Schedule may change for events or weather. Call to confirm.
                </div>
              </div>
            </motion.div>
          </div>

          {/* Single centered call button */}
          <div className="mt-8 flex justify-center">
            <motion.a
              href="tel:580-771-6373"
              className="w-full max-w-xl bg-red-primary hover:bg-red-dark text-white p-5 rounded-xl font-body font-bold flex items-center justify-center gap-3 shadow-lg border-2 border-red-primary/70"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.2), 0 8px 24px rgba(199,20,24,0.35)' }}
            >
              <Phone size={22} />
              <span>CALL TO ORDER: 580-771-6373</span>
            </motion.a>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default FindUs;
