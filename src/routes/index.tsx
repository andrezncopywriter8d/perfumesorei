import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GlowCard } from "@/components/ui/spotlight-card";
import lojaImg from "@/assets/loja.webp";
import { CinematicFooter } from "@/components/ui/motion-footer";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

function Reveal({
  children,
  className,
  y = 80,
  scale = 0.96,
}: {
  children: ReactNode;
  className?: string;
  y?: number;
  scale?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { y, opacity: 0, scale, filter: "blur(8px)" },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            end: "top 45%",
            scrub: 1.2,
          },
        }
      );
    }, el);
    return () => ctx.revert();
  }, [y, scale]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}


function SectionDivider({ label }: { label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["10%", "-30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.4, 0.7, 1], [0, 1, 1, 0]);
  const lineScale = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]);

  return (
    <div
      ref={ref}
      className="relative h-[40vh] overflow-hidden bg-[#070403] flex items-center"
    >
      <motion.div
        className="whitespace-nowrap text-[14vw] md:text-[10vw] font-light tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-200/20 via-amber-400/40 to-amber-700/10 select-none pointer-events-none"
        style={{
          x,
          opacity,
          fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
        }}
      >
        {label} — {label} — {label}
      </motion.div>
      <motion.div
        style={{ scaleX: lineScale }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[60%] h-px origin-left bg-gradient-to-r from-transparent via-amber-400/50 to-transparent"
      />
    </div>
  );
}

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
  const [search, setSearch] = useState("");
  const catalogRef = useRef<HTMLDivElement>(null);
  const filteredProducts = catalogProducts.filter((p) =>
    p.name.toLowerCase().includes(search.trim().toLowerCase())
  );

  return (
    <div className="relative bg-[#070403] text-white">
      {/* HERO */}
      <section className="relative min-h-screen w-full overflow-hidden bg-[#070403] text-white">
        {/* soft golden atmosphere on the right */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-[1]"
          style={{
            background:
              "radial-gradient(ellipse 55% 70% at 82% 55%, rgba(198,128,40,0.32), rgba(120,60,10,0.10) 45%, transparent 72%)",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-[1]"
          style={{
            background:
              "radial-gradient(ellipse 35% 45% at 88% 45%, rgba(232,170,75,0.18), transparent 70%)",
          }}
        />

        {/* lion — subtle background texture, fully faded into black */}
        <img
          src="/lion.png"
          alt=""
          aria-hidden="true"
          className="absolute right-[-4%] top-1/2 -translate-y-1/2 h-[55vh] md:h-[78vh] w-auto max-w-none z-[2] pointer-events-none select-none"
          style={{
            opacity: 0.32,
            filter: "saturate(0.7) contrast(0.95) brightness(0.78)",
            mixBlendMode: "screen",
            maskImage:
              "radial-gradient(ellipse 55% 70% at 65% 50%, #000 25%, rgba(0,0,0,0.5) 55%, transparent 85%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 55% 70% at 65% 50%, #000 25%, rgba(0,0,0,0.5) 55%, transparent 85%)",
          }}
        />

        {/* darken left + bottom to anchor text and merge lion + seamless fade into next section */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-[3]"
          style={{
            background:
              "linear-gradient(to right, #070403 0%, rgba(7,4,3,0.85) 25%, rgba(7,4,3,0.25) 50%, transparent 70%), linear-gradient(to top, #070403 0%, rgba(7,4,3,0.6) 12%, transparent 28%)",
          }}
        />

        {/* product video — hero protagonist */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[54%] md:-translate-y-1/2 z-[4] pointer-events-none h-[44vh] md:h-[80vh] max-h-[840px] aspect-square">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="w-full h-full object-contain animate-[fadeIn_1.4s_ease-in-out]"
            style={{
              filter:
                "drop-shadow(0 50px 60px rgba(0,0,0,0.9)) drop-shadow(0 0 80px rgba(214,135,30,0.15))",
            }}
          >
            <source src="/perfume.webm" type="video/webm" />
          </video>
        </div>

        {/* content — bottom-left, refined hierarchy */}
        <div className="absolute z-[5] left-6 right-6 bottom-10 md:left-[7vw] md:right-auto md:bottom-[10vh] md:max-w-[480px]">
          <span className="block text-[11px] md:text-[12px] font-medium text-amber-400/90 mb-4 md:mb-5 tracking-[0.18em] uppercase">
            Coleção exclusiva 2026
          </span>
          <h1
            className="text-white font-light tracking-[-0.025em] mb-6 [text-wrap:balance]"
            style={{
              fontSize: "clamp(30px, 3.2vw, 52px)",
              lineHeight: 1.08,
              fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
            }}
          >
            Fragrâncias árabes
            <br />
            que contam histórias
            <br />
            <em className="italic font-normal bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600 bg-clip-text text-transparent">eternas.</em>
          </h1>
          <p className="text-white/55 text-[14px] md:text-[15px] leading-[1.6] mb-8 max-w-[360px] tracking-wide">
            Descubra a essência do oriente.
          </p>
          <a
            href="#catalog"
            className="inline-flex items-center gap-3 text-[13px] font-medium text-amber-300 border border-amber-400/60 rounded-full px-7 py-3 backdrop-blur-sm hover:bg-amber-400/10 hover:border-amber-300 hover:text-amber-200 transition-all duration-500 tracking-wide"
          >
            Ver catálogo
            <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
          </a>
        </div>
      </section>

      <SectionDivider label="Catálogo" />

      {/* CATALOG with parallax */}
      <section
        id="catalog"
        ref={catalogRef}
        className="relative py-24 px-6 sm:px-12 md:px-20 lg:px-28 bg-[#070403]"
      >
        <Reveal className="max-w-6xl mx-auto mb-16">
          <p className="text-[11.5px] font-medium text-amber-400 uppercase tracking-widest mb-3">
            Catálogo
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-medium text-white tracking-tight max-w-3xl">
            Uma fragrância para cada momento da sua vida.
          </h2>
        </Reveal>

        <Reveal y={50} className="-mx-6 sm:-mx-12 md:-mx-20 lg:-mx-28 overflow-hidden group/marquee">
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
        </Reveal>

        <Reveal y={70}>
          <ContainerScroll
            titleComponent={
              <div className="mb-4">
                <p className="text-[11.5px] font-medium text-amber-400 uppercase tracking-widest mb-3">
                  Em movimento
                </p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white tracking-tight max-w-2xl mx-auto">
                  Veja as fragrâncias por dentro.
                </h2>
              </div>
            }
          >
            <div className="p-4 md:p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 h-full">
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
          </ContainerScroll>
        </Reveal>

        <SectionDivider label="Coleção" />

        {/* FULL CATALOG GRID */}
        <div className="max-w-6xl mx-auto mt-12">
          <Reveal className="mb-10 text-center">
            <p className="text-[11.5px] font-medium text-amber-400 uppercase tracking-widest mb-3">
              Catálogo
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white tracking-tight mb-3">
              O Rei do Importado Perfumes
            </h2>
            <p className="text-white/60 text-[14px]">
              Perfumes importados disponíveis
            </p>
          </Reveal>

          <div className="max-w-md mx-auto mb-10">
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar perfume..."
              className="w-full bg-white/[0.04] border border-amber-400/30 focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400/20 rounded-full px-5 py-3 text-[14px] text-white placeholder:text-white/40 transition-all"
            />
          </div>

          <Reveal y={50} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
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
          </Reveal>

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
          <Reveal y={60} className="overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
            <img
              src={lojaImg}
              alt="O Rei Importados — fachada da loja"
              className="w-full h-full object-cover aspect-[4/3]"
              loading="lazy"
            />
          </Reveal>
          <Reveal y={60}>
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
          </Reveal>
        </div>
      </section>

      <CinematicFooter />

    </div>
  );
}
