import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { GlowCard } from "@/components/ui/spotlight-card";
import lojaImg from "@/assets/loja.jpg";
import { CinematicFooter } from "@/components/ui/motion-footer";

const glowColors = ["orange", "orange", "red", "orange", "orange", "red"] as const;

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
    gradient: "from-amber-900 via-yellow-900 to-[#1a0f0a]",
  },
  {
    name: "Yara",
    brand: "Lattafa",
    notes: "Tangerina · Orquídea · Almíscar",
    price: "R$ 249",
    gradient: "from-amber-800 via-orange-950 to-[#1a0f0a]",
  },
  {
    name: "Khamrah",
    brand: "Lattafa",
    notes: "Canela · Tâmara · Praliné",
    price: "R$ 329",
    gradient: "from-orange-900 via-amber-950 to-[#0a0506]",
  },
  {
    name: "Oud Mood",
    brand: "Lattafa",
    notes: "Oud · Açafrão · Patchouli",
    price: "R$ 369",
    gradient: "from-[#3a2418] via-[#1a0f0a] to-black",
  },
  {
    name: "Fakhar",
    brand: "Lattafa",
    notes: "Maçã · Damasco · Couro",
    price: "R$ 279",
    gradient: "from-yellow-900 via-amber-900 to-[#1a0f0a]",
  },
  {
    name: "Bade'e Al Oud",
    brand: "Lattafa",
    notes: "Açafrão · Rosa · Oud",
    price: "R$ 419",
    gradient: "from-amber-950 via-[#2a1810] to-black",
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
    <div className="relative bg-gradient-to-br from-[#1a0f0a] via-[#2a1810] to-[#0a0506] text-white">
      {/* HERO */}
      <section className="hero-section relative h-screen min-h-[680px] overflow-hidden">
        <div className="hero-product-glow" aria-hidden="true" />
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="hero-product-video animate-[fadeIn_1.2s_ease-in-out]"
        >
          <source src="/perfume.webm" type="video/webm" />
        </video>

        <div className="relative z-10 flex flex-col h-full">

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
              <h1 className="text-[1.5rem] sm:text-[1.75rem] leading-[1.15] font-medium text-white tracking-tight mb-3 drop-shadow-lg">
                Fragrâncias árabes que contam histórias eternas.
              </h1>
              <p className="text-[13px] text-white/70 font-normal mb-3">
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
            
          </div>
        </div>
      </section>

      {/* CATALOG with parallax */}
      <section
        id="catalog"
        ref={catalogRef}
        className="relative py-24 px-6 sm:px-12 md:px-20 lg:px-28 bg-[#0a0506]"
      >
        <div
          className="max-w-6xl mx-auto mb-16"
          style={{
            transform: `translateY(${Math.max(0, (scrollY - 400) * -0.15)}px)`,
          }}
        >
          <p className="text-[11.5px] font-medium text-amber-400 uppercase tracking-widest mb-3">
            Catálogo
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-medium text-white tracking-tight max-w-3xl">
            Uma fragrância para cada momento da sua vida.
          </h2>
        </div>

        <div className="-mx-6 sm:-mx-12 md:-mx-20 lg:-mx-28 overflow-hidden group/marquee">
          <div className="flex gap-6 w-max animate-[marquee_40s_linear_infinite] group-hover/marquee:[animation-play-state:paused] px-6">
            {[...perfumes, ...perfumes].map((p, idx) => (
              <GlowCard
                key={`${p.name}-${idx}`}
                customSize
                glowColor={glowColors[idx % glowColors.length]}
                className="group shrink-0 w-[280px] sm:w-[320px] md:w-[360px] aspect-[3/4] cursor-pointer overflow-hidden"
              >
                <div
                  className={`absolute inset-0 -z-10 bg-gradient-to-br ${p.gradient} rounded-2xl group-hover:scale-105 transition-transform duration-700`}
                />
                <div className="absolute inset-0 -z-10 bg-black/20 rounded-2xl group-hover:bg-black/10 transition-colors duration-500" />
                <div className="relative z-10 text-white">
                  <p className="text-[10px] uppercase tracking-[0.2em] opacity-70">
                    {p.brand}
                  </p>
                  <h3 className="text-3xl font-semibold mt-1">{p.name}</h3>
                </div>
                <div className="relative z-10 text-white">
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
              </GlowCard>
            ))}
          </div>
        </div>

        {/* VIDEO CATALOG */}
        <div className="max-w-6xl mx-auto mt-32">
          <p className="text-[11.5px] font-medium text-amber-400 uppercase tracking-widest mb-3">
            Em movimento
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white tracking-tight mb-10 max-w-2xl">
            Veja as fragrâncias por dentro.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {["/catalog-1.mp4", "/catalog-2.mp4", "/catalog-3.mp4"].map((src) => (
              <div
                key={src}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 aspect-[9/16] shadow-xl"
              >
                <video
                  src={src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>
            ))}
          </div>
        </div>

        {/* LOCATION */}
        <div className="max-w-6xl mx-auto mt-32 grid md:grid-cols-2 gap-10 items-center">
          <div className="overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
            <img
              src={lojaImg}
              alt="O Rei Importados — fachada da loja"
              className="w-full h-full object-cover aspect-[4/3]"
              loading="lazy"
            />
          </div>
          <div>
            <p className="text-[11.5px] font-medium text-amber-400 uppercase tracking-widest mb-3">
              Visite nossa loja
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white tracking-tight mb-5">
              O Rei Importados
            </h2>
            <p className="text-white/70 text-[14px] leading-relaxed mb-6 max-w-md">
              Conheça nossa coleção pessoalmente. Atendimento exclusivo, experimente as
              fragrâncias árabes ao vivo e sinta cada nota antes de levar para casa.
            </p>
            <p className="text-white/60 text-[13px] mb-8">📞 (98) 98810-0184</p>
            <a
              href="https://share.google/OkcIQzpngPsggMKWr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[13px] font-medium text-amber-400 border border-amber-400/60 rounded-full px-5 py-2.5 hover:bg-amber-400 hover:text-black transition-all duration-200 group"
            >
              Ver no Google Maps
              <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                →
              </span>
            </a>
          </div>
        </div>
      </section>

      <CinematicFooter />

    </div>
  );
}
