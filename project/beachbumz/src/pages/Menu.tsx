import React, { useMemo } from "react";
import menuData from "../data/menu.json"; // your JSON
import { Link } from "react-router-dom";

const categoriesOrder = ["Appetizers","Paninis","Pasta","Seafood","Calzones","Pizzas","Desserts","Kids Menu"];

const Pill: React.FC<{label:string, target:string, active?:boolean}> = ({label, target}) => (
  <a href={`#${encodeURIComponent(target)}`} className="shrink-0 snap-start px-4 py-2 rounded-full bg-white/5 text-white/90 hover:text-turquoise border border-white/10">
    {label}
  </a>
);

const Menu: React.FC = () => {
  const cats = useMemo(() => categoriesOrder.filter(c => (menuData as any).Menu[c]), []);

  return (
    <div className="max-w-6xl mx-auto px-4 pt-24 pb-16">
      <Link to="/" className="inline-block text-turquoise underline underline-offset-4 mb-6">{`← Back to Home`}</Link>
      <h1 className="font-display text-white text-4xl mb-6">Menu</h1>

      {/* category pills */}
      <div className="flex overflow-x-auto no-scrollbar gap-3 -mx-4 px-4 py-2 snap-x">
        {cats.map((c) => <Pill key={c} label={c} target={c} />)}
      </div>

      <hr className="my-6 border-white/10" />

      {/* sections */}
      <div className="space-y-10">
        {cats.map((c) => (
          <section key={c}>
            <h2 id={encodeURIComponent(c)} className="menu-anchor font-display text-3xl text-white mb-5">{c}</h2>
            <div className="space-y-4">
              {(menuData as any).Menu[c].map((item: any, idx: number) => (
                <div key={idx} className="rounded-xl bg-white/5 border border-white/10 px-4 sm:px-6 py-4 text-white/90">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-lg sm:text-xl font-semibold">{item.name}</h3>
                    {item.price && <span className="text-turquoise font-semibold">${item.price}</span>}
                  </div>
                  {item.description && <p className="mt-1 text-white/70">{item.description}</p>}
                  {item.prices && (
                    <div className="mt-3 flex flex-wrap gap-3">
                      {Object.entries(item.prices).map(([size, price]) => (
                        <span key={size} className="inline-flex items-center rounded-full border border-white/10 px-3 py-1 text-sm text-white/80">
                          <b className="mr-2">{size}</b> {price as string}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Menu;
