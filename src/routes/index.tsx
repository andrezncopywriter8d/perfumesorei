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

const INSTAGRAM_URL = "https://www.instagram.com/oreidoimportadoperfumes/";

const catalogProducts: { name: string; price: string }[] = [
  { name: "ASAD", price: "R$ 200,00" },
  { name: "ASA BURBON", price: "R$ 320,00" },
  { name: "ASAD ELIXIR", price: "R$ 320,00" },
  { name: "YARA ROSE", price: "R$ 200,00" },
  { name: "YARA TOUS", price: "R$ 200,00" },
  { name: "YARA ELIXIR", price: "R$ 320,00" },
  { name: "LIQUID BRUN", price: "R$ 370,00" },
  { name: "FAKAR GOLD", price: "R$ 220,00" },
  { name: "FAKHAR BLACK", price: "R$ 240,00" },
  { name: "FAKAR ROSE", price: "R$ 240,00" },
  { name: "FAKAR PLATINUM", price: "R$ 190,00" },
  { name: "ATTAR AL WESAL", price: "R$ 180,00" },
  { name: "KHAMRAH", price: "R$ 210,00" },
  { name: "VOUJE PARTY", price: "R$ 190,00" },
  { name: "EL FURSON", price: "R$ 180,00" },
  { name: "AL NOBLE WAZEER", price: "R$ 320,00" },
  { name: "MEITE", price: "R$ 200,00" },
  { name: "ANEESA", price: "R$ 200,00" },
  { name: "RAVE AU SOLEIL", price: "R$ 220,00" },
  { name: "CLUB DE NOIRL INTENSE", price: "R$ 330,00" },
  { name: "CLUB DE NOIRL WOMEN", price: "R$ 310,00" },
  { name: "APELT DIL", price: "R$ 210,00" },
  { name: "AVANT PERFUME", price: "R$ 200,00" },
  { name: "TORO", price: "R$ 190,00" },
  { name: "SABAH AL", price: "R$ 190,00" },
  { name: "VULCAN FEU", price: "R$ 420,00" },
  { name: "DURRAT", price: "R$ 190,00" },
  { name: "AMBER", price: "R$ 570,00" },
];

function Index() {
  const [scrollY, setScrollY] = useState(0);
  const [search, setSearch] = useState("");
  const catalogRef = useRef<HTMLDivElement>(null);
  const filteredProducts = catalogProducts.filter((p) =>
    p.name.toLowerCase().includes(search.trim().toLowerCase())
  );

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative bg-gradient-to-br from-[#1a0f0a] via-[#2a1810] to-[#0a0506] text-white">
      {/* HERO */}
      <section
        className="relative min-h-screen overflow-hidden flex items-center"
        style={{
          background:
            "radial-gradient(circle at 85% 45%, rgba(160,87,12,0.42), transparent 32%), linear-gradient(90deg, #020202 0%, #050202 55%, #170b02 100%)",
        }}
      >
        {/* warm glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-0 -right-[10%] w-[55%] h-full blur-3xl z-[1]"
          style={{
            background:
              "radial-gradient(circle, rgba(218,130,22,0.28), transparent 65%)",
          }}
        />

        {/* lion */}
        <img
          src="/lion.png"
          alt=""
          aria-hidden="true"
          className="absolute right-0 top-0 h-full w-[85%] sm:w-[75%] md:w-[65%] object-cover object-left z-[2] pointer-events-none"
          style={{
            opacity: 1,
            maskImage:
              "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.6) 12%, #000 30%, #000 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.6) 12%, #000 30%, #000 100%)",
          }}
        />

        {/* product video */}
        <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-[50%] md:-translate-x-[40%] z-[4] pointer-events-none h-[55vh] sm:h-[65vh] md:h-[72vh] max-h-[720px] aspect-square">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="w-full h-full object-contain animate-[fadeIn_1.2s_ease-in-out]"
            style={{ filter: "drop-shadow(0 40px 55px rgba(0,0,0,0.75))" }}
          >
            <source src="/perfume.webm" type="video/webm" />
          </video>
        </div>

        {/* bottom fade to hide product base */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[35%] z-[3]"
          style={{
            background:
              "linear-gradient(to top, #020202 0%, rgba(2,2,2,0.85) 35%, transparent 100%)",
          }}
        />

        {/* content */}
        <div className="relative z-[5] w-full px-6 sm:px-12 md:px-20 lg:px-28">
          <div className="max-w-[460px] mt-auto md:mt-[42vh]">
            <span className="block text-[14px] font-semibold text-blue-500 mb-4">
              Coleção exclusiva 2026 —
            </span>
            <h1 className="text-[38px] sm:text-[48px] md:text-[56px] lg:text-[62px] leading-[0.98] font-extrabold tracking-[-0.04em] text-white mb-5 drop-shadow-lg">
              Fragrâncias árabes
              <br />
              que contam histórias
              <br />
              eternas.
            </h1>
            <p className="text-white/70 text-[17px] mb-7">
              Descubra a essência do oriente.
            </p>
            <a
              href="#catalog"
              className="inline-flex items-center gap-2 text-[14px] font-semibold text-blue-500 border-[1.5px] border-blue-500 rounded-full px-7 py-3.5 hover:bg-blue-500 hover:text-white hover:shadow-[0_0_30px_rgba(0,120,255,0.35)] transition-all duration-300"
            >
              Ver catálogo
              <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
            </a>
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

        {/* FULL CATALOG GRID */}
        <div className="max-w-6xl mx-auto mt-32">
          <div className="mb-10 text-center">
            <p className="text-[11.5px] font-medium text-amber-400 uppercase tracking-widest mb-3">
              Catálogo
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white tracking-tight mb-3">
              O Rei do Importado Perfumes
            </h2>
            <p className="text-white/60 text-[14px]">
              Perfumes importados disponíveis
            </p>
          </div>

          <div className="max-w-md mx-auto mb-10">
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar perfume..."
              className="w-full bg-white/[0.04] border border-amber-400/30 focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400/20 rounded-full px-5 py-3 text-[14px] text-white placeholder:text-white/40 transition-all"
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
            {filteredProducts.map((p) => (
              <article
                key={p.name}
                className="group relative flex flex-col rounded-2xl border border-amber-400/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] hover:border-amber-500/50 hover:shadow-lg hover:shadow-amber-500/10 transition-all duration-300 overflow-hidden"
              >
                <div className="relative aspect-square bg-gradient-to-br from-[#1a0f0a] via-[#0f0805] to-[#0a0506] flex flex-col items-center justify-center overflow-hidden border-b border-amber-400/10">
                  <div className="w-12 h-12 rounded-full border border-amber-400/40 flex items-center justify-center mb-3">
                    <span className="text-amber-400 text-lg">✦</span>
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-amber-400/70">
                    Imagem em breve
                  </span>
                </div>
                <div className="p-4 sm:p-5 flex flex-col flex-1">
                  <h3 className="text-[14px] sm:text-[15px] font-semibold text-white leading-tight mb-3 min-h-[2.5em]">
                    {p.name}
                  </h3>
                  <div className="mt-auto">
                    <p className="text-[18px] font-bold text-amber-400 mb-3">
                      {p.price}
                    </p>
                    <a
                      href={INSTAGRAM_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-center w-full text-[11px] font-semibold tracking-wider uppercase bg-gradient-to-r from-amber-500 to-amber-400 text-black rounded-md py-2.5 hover:from-amber-400 hover:to-amber-300 transition-all"
                    >
                      Comprar pelo Instagram
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <p className="text-center text-white/50 mt-10 text-[14px]">
              Nenhum perfume encontrado.
            </p>
          )}

          <p className="text-center text-white/50 text-[12px] mt-12">
            Consulte disponibilidade antes de finalizar o pedido.
            <br />
            Instagram:{" "}
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 hover:text-amber-300"
            >
              @oreidoimportadoperfumes
            </a>
          </p>
        </div>

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
