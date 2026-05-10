import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

export const Route = createFileRoute("/")({
  component: Index,
});

function Logo() {
  return (
    <svg width="18" height="18" viewBox="0 0 256 256" fill="none">
      <path
        fill="rgb(84, 84, 84)"
        d="M 160 88 L 194 34 L 216 0 L 256 0 L 256 40 L 221.5 93.5 L 200 128 L 256 128 L 256 256 L 96 256 L 96 168 L 64.246 220 L 40 256 L 0 256 L 0 216 L 34 162 L 56 128 L 0 128 L 0 0 L 160 0 Z"
      />
    </svg>
  );
}

const perfumes = [
  {
    name: "Asad",
    brand: "Lattafa",
    notes: "Âmbar · Baunilha · Madeira",
    price: "R$ 289",
    gradient: "from-amber-900 via-yellow-800 to-black",
  },
  {
    name: "Yara",
    brand: "Lattafa",
    notes: "Tangerina · Orquídea · Almíscar",
    price: "R$ 249",
    gradient: "from-pink-900 via-rose-800 to-purple-950",
  },
  {
    name: "Khamrah",
    brand: "Lattafa",
    notes: "Canela · Tâmara · Praliné",
    price: "R$ 329",
    gradient: "from-orange-900 via-red-900 to-amber-950",
  },
  {
    name: "Oud Mood",
    brand: "Lattafa",
    notes: "Oud · Açafrão · Patchouli",
    price: "R$ 369",
    gradient: "from-stone-800 via-neutral-900 to-black",
  },
  {
    name: "Fakhar",
    brand: "Lattafa",
    notes: "Maçã · Damasco · Couro",
    price: "R$ 279",
    gradient: "from-yellow-900 via-amber-800 to-stone-900",
  },
  {
    name: "Bade'e Al Oud",
    brand: "Lattafa",
    notes: "Açafrão · Rosa · Oud",
    price: "R$ 419",
    gradient: "from-purple-950 via-indigo-950 to-black",
  },
];

function Index() {
  const navLinks = ["Story", "Products", "Help", "Support"];
  const [scrollY, setScrollY] = useState(0);
  const catalogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative bg-[#f0f0ee]">
      {/* HERO */}
      <section className="relative h-screen overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-contain animate-[fadeIn_1.2s_ease-in-out]"
          src="/perfume.mp4"
        />

        <div className="relative z-10 flex flex-col h-full">
          <nav className="flex items-center justify-center pt-4 sm:pt-6 px-4 sm:px-8 gap-2 sm:gap-3">
            <div
              className="flex items-center justify-center rounded-full w-10 h-10 sm:w-11 sm:h-11 shrink-0"
              style={{ backgroundColor: "#EDEDED" }}
            >
              <Logo />
            </div>
            <div
              className="flex items-center gap-4 sm:gap-10 rounded-xl px-4 sm:px-8 py-2.5 sm:py-3"
              style={{ backgroundColor: "#EDEDED" }}
            >
              {navLinks.map((link) => (
                <a
                  key={link}
                  href="#catalog"
                  className="text-[12px] sm:text-[14px] font-medium text-gray-700 hover:text-gray-900 transition-colors duration-200"
                >
                  {link}
                </a>
              ))}
            </div>
          </nav>

          <div className="flex-1 flex items-end pb-10 sm:pb-16 lg:pb-20 px-6 sm:px-12 md:px-20 lg:px-28">
            <div className="max-w-xs">
              <a
                href="#catalog"
                className="inline-flex items-center gap-1.5 text-[11.5px] font-medium text-blue-500 hover:text-blue-600 transition-colors mb-3 group"
              >
                Coleção exclusiva 2026
                <span className="inline-block transition-transform duration-200 group-hover:translate-x-0.5">
                  →
                </span>
              </a>
              <h1 className="text-[1.5rem] sm:text-[1.75rem] leading-[1.15] font-medium text-gray-900 tracking-tight mb-3">
                Fragrâncias árabes que contam histórias eternas.
              </h1>
              <p className="text-[13px] text-gray-400 font-normal mb-3">
                Descubra a essência do oriente.
              </p>
              <a
                href="#catalog"
                className="inline-flex items-center gap-2 text-[13px] font-medium text-blue-500 border border-blue-400 rounded-full px-5 py-2.5 hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all duration-200 group"
              >
                Ver catálogo
                <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                  →
                </span>
              </a>
            </div>
          </div>

          {/* scroll indicator */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-gray-500 text-xs animate-bounce">
            ↓ scroll
          </div>
        </div>
      </section>

      {/* CATALOG with parallax */}
      <section
        id="catalog"
        ref={catalogRef}
        className="relative py-24 px-6 sm:px-12 md:px-20 lg:px-28 bg-[#f0f0ee]"
      >
        <div
          className="max-w-6xl mx-auto mb-16"
          style={{
            transform: `translateY(${Math.max(0, (scrollY - 400) * -0.15)}px)`,
          }}
        >
          <p className="text-[11.5px] font-medium text-blue-500 uppercase tracking-widest mb-3">
            Catálogo
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-medium text-gray-900 tracking-tight max-w-3xl">
            Uma fragrância para cada momento da sua vida.
          </h2>
        </div>

        <div className="-mx-6 sm:-mx-12 md:-mx-20 lg:-mx-28">
          <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory px-6 sm:px-12 md:px-20 lg:px-28 pb-6 scrollbar-hide">
            {perfumes.map((p) => (
              <article
                key={p.name}
                className="group relative shrink-0 snap-start overflow-hidden rounded-2xl w-[280px] sm:w-[320px] md:w-[360px] aspect-[3/4] cursor-pointer"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${p.gradient} group-hover:scale-105 transition-transform duration-700`}
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
                <div className="relative z-10 h-full flex flex-col justify-between p-6 text-white">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] opacity-70">
                      {p.brand}
                    </p>
                    <h3 className="text-3xl font-semibold mt-1">{p.name}</h3>
                  </div>
                  <div>
                    <p className="text-[12px] opacity-80 mb-2">{p.notes}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-medium">{p.price}</span>
                      <span className="inline-flex items-center gap-1 text-[12px] font-medium border border-white/40 rounded-full px-3 py-1.5 group-hover:bg-white group-hover:text-black transition-all">
                        Comprar
                        <span className="group-hover:translate-x-0.5 transition-transform">
                          →
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <footer className="max-w-6xl mx-auto mt-32 pt-10 border-t border-gray-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-[12px] text-gray-500">
            © 2026 Lattafa Perfumes. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-[12px] text-gray-700">
            <a href="#" className="hover:text-gray-900">Instagram</a>
            <a href="#" className="hover:text-gray-900">TikTok</a>
            <a href="#" className="hover:text-gray-900">Contato</a>
          </div>
        </footer>
      </section>
    </div>
  );
}
