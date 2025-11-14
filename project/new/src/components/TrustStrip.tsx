export default function TrustStrip() {
  const clients = [
    'CLIENT ONE',
    'CLIENT TWO',
    'CLIENT THREE',
    'CLIENT FOUR',
    'CLIENT FIVE',
    'CLIENT SIX',
  ];

  return (
    <section className="bg-black border-y border-white/10 py-12 overflow-hidden">
      <div className="relative">
        <div className="flex animate-scroll-slow">
          {[...clients, ...clients, ...clients].map((client, index) => (
            <div
              key={index}
              className="flex-shrink-0 px-12 text-gray-600 text-sm tracking-[0.3em] uppercase font-medium"
            >
              {client}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
