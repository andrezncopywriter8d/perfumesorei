import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GlowCard } from "@/components/ui/spotlight-card";
import lojaImg from "@/assets/loja.webp";
import asadImg from "@/assets/asad-new.png";
import asadBourbonImg from "@/assets/asad-bourbon.png";
import asadElixirImg from "@/assets/asad-elixir.png";
import yaraRoseImg from "@/assets/yara-rose.png";
import yaraTousImg from "@/assets/yara-tous.png";
import yaraElixirImg from "@/assets/yara-elixir.png";
import liquidBrunImg from "@/assets/liquid-brun.png";
import aneesaImg from "@/assets/aneesa.png";
import raveImg from "@/assets/rave.png";
import clubIntenseImg from "@/assets/club-intense.png";
import clubWomanImg from "@/assets/club-woman.png";
import avantImg from "@/assets/avant.png";
import toroImg from "@/assets/toro.png";
import sabahImg from "@/assets/sabah.png";
import vulcanImg from "@/assets/vulcan.png";
import durratImg from "@/assets/durrat.png";
import amberImg from "@/assets/amber.png";
import fakharImg from "@/assets/fakhar.png";
import elFursonImg from "@/assets/el-furson.png";
import alNobleWazeerImg from "@/assets/al-noble-wazeer.png";
import meitreImg from "@/assets/meitre.png";
import fakarGoldImg from "@/assets/fakar-gold.png";
import fakharBlackImg from "@/assets/fakhar-black.png";
import fakarRoseImg from "@/assets/fakar-rose.png";
import attarAlWesalImg from "@/assets/attar-al-wesal.png";
import khamrahImg from "@/assets/khamrah.png";
import voujePartyImg from "@/assets/vouje-party.png";
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
        },
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
    <div ref={ref} className="relative h-[40vh] overflow-hidden bg-[#070403] flex items-center">
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

const perfumes: {
  name: string;
  brand: string;
  notes: string;
  price: string;
  gradient: string;
  image?: string;
}[] = [
  {
    name: "Asad",
    brand: "Lattafa",
    notes: "Âmbar · Baunilha · Madeira",
    price: "R$ 289",
    gradient: "from-amber-900 via-yellow-900 to-[#1a0f0a]",
    image: asadImg,
  },
  {
    name: "Yara",
    brand: "Lattafa",
    notes: "Tangerina · Orquídea · Almíscar",
    price: "R$ 249",
    gradient: "from-amber-800 via-orange-950 to-[#1a0f0a]",
    image: yaraRoseImg,
  },
  {
    name: "Khamrah",
    brand: "Lattafa",
    notes: "Canela · Tâmara · Praliné",
    price: "R$ 329",
    gradient: "from-orange-900 via-amber-950 to-[#0a0506]",
    image: khamrahImg,
  },
  {
    name: "Asad Bourbon",
    brand: "Lattafa",
    price: "R$ 320",
    notes: "Baunilha / especiarias / ambar",
    gradient: "from-orange-950 via-[#3a1608] to-black",
    image: asadBourbonImg,
  },
  {
    name: "Fakhar",
    brand: "Lattafa",
    notes: "Maçã · Damasco · Couro",
    price: "R$ 279",
    gradient: "from-yellow-900 via-amber-900 to-[#1a0f0a]",
    image: fakharBlackImg,
  },
  {
    name: "Liquid Brun",
    brand: "French Avenue",
    notes: "Canela / cardamomo / baunilha",
    price: "R$ 370",
    gradient: "from-[#4a2118] via-[#27100d] to-black",
    image: liquidBrunImg,
  },
  {
    name: "Sabah AL",
    brand: "Al Wataniah",
    notes: "Ambar / frutas / madeiras",
    price: "R$ 190",
    gradient: "from-amber-950 via-[#2b170b] to-black",
    image: sabahImg,
  },
];

const INSTAGRAM_URL = "https://www.instagram.com/oreidoimportadoperfumes/";

const productImages: Record<string, string> = {
  ASAD: asadImg,
  "ASA BURBON": asadBourbonImg,
  "ASAD ELIXIR": asadElixirImg,
  "YARA ROSE": yaraRoseImg,
  "YARA TOUS": yaraTousImg,
  "YARA ELIXIR": yaraElixirImg,
  "LIQUID BRUN": liquidBrunImg,
  ANEESA: aneesaImg,
  "RAVE AU SOLEIL": raveImg,
  "CLUB DE NOIRL INTENSE": clubIntenseImg,
  "CLUB DE NOIRL WOMEN": clubWomanImg,
  "AVANT PERFUME": avantImg,
  TORO: toroImg,
  "SABAH AL": sabahImg,
  "VULCAN FEU": vulcanImg,
  DURRAT: durratImg,
  AMBER: amberImg,
  "FAKAR PLATINUM": fakharImg,
  "FAKAR GOLD": fakarGoldImg,
  "FAKHAR BLACK": fakharBlackImg,
  "FAKAR ROSE": fakarRoseImg,
  "ATTAR AL WESAL": attarAlWesalImg,
  KHAMRAH: khamrahImg,
  "VOUJE PARTY": voujePartyImg,
  "EL FURSON": elFursonImg,
  "AL NOBLE WAZEER": alNobleWazeerImg,
  MEITE: meitreImg,
};

type GenderFilter = "todos" | "masculino" | "feminino";
type ProductGender = "masculino" | "feminino" | "unissex";

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

const productGenders: Record<string, ProductGender> = {
  ASAD: "masculino",
  "ASA BURBON": "masculino",
  "ASAD ELIXIR": "masculino",
  "YARA ROSE": "feminino",
  "YARA TOUS": "feminino",
  "YARA ELIXIR": "feminino",
  "LIQUID BRUN": "masculino",
  "FAKAR GOLD": "feminino",
  "FAKHAR BLACK": "masculino",
  "FAKAR ROSE": "feminino",
  "FAKAR PLATINUM": "masculino",
  "ATTAR AL WESAL": "unissex",
  KHAMRAH: "unissex",
  "VOUJE PARTY": "feminino",
  "EL FURSON": "masculino",
  "AL NOBLE WAZEER": "masculino",
  MEITE: "masculino",
  ANEESA: "feminino",
  "RAVE AU SOLEIL": "masculino",
  "CLUB DE NOIRL INTENSE": "masculino",
  "CLUB DE NOIRL WOMEN": "feminino",
  "APELT DIL": "feminino",
  "AVANT PERFUME": "masculino",
  TORO: "masculino",
  "SABAH AL": "feminino",
  "VULCAN FEU": "masculino",
  DURRAT: "feminino",
  AMBER: "unissex",
};

const catalogAccents = [
  "from-amber-300 via-orange-500 to-yellow-600",
  "from-rose-200 via-pink-400 to-amber-400",
  "from-slate-200 via-zinc-500 to-amber-300",
  "from-orange-200 via-amber-500 to-red-700",
  "from-yellow-200 via-amber-400 to-stone-600",
  "from-fuchsia-300 via-rose-500 to-orange-400",
];

function Index() {
  const [search, setSearch] = useState("");
  const [genderFilter, setGenderFilter] = useState<GenderFilter>("todos");
  const catalogRef = useRef<HTMLDivElement>(null);
  const filteredProducts = catalogProducts.filter((p) => {
    const gender = productGenders[p.name] ?? "unissex";
    const matchesSearch = p.name.toLowerCase().includes(search.trim().toLowerCase());
    const matchesGender =
      genderFilter === "todos" || gender === genderFilter || gender === "unissex";

    return matchesSearch && matchesGender;
  });

  return (
    <div className="relative bg-[#070403] text-white">
      <section className="relative min-h-screen w-full overflow-hidden bg-[#070403] text-white">
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

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-[3]"
          style={{
            background:
              "linear-gradient(to right, #070403 0%, rgba(7,4,3,0.85) 25%, rgba(7,4,3,0.25) 50%, transparent 70%), linear-gradient(to top, #070403 0%, rgba(7,4,3,0.6) 12%, transparent 28%)",
          }}
        />

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
            <em className="italic font-normal bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600 bg-clip-text text-transparent">
              eternas.
            </em>
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

        <Reveal
          y={50}
          className="-mx-6 sm:-mx-12 md:-mx-20 lg:-mx-28 overflow-hidden group/marquee"
        >
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
                {p.image && (
                  <img
                    src={p.image}
                    alt={p.name}
                    className="absolute inset-0 w-full h-full object-contain p-4 -z-10 opacity-95 group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                )}
                <div className="relative z-10 text-white">
                  <p className="text-[10px] uppercase tracking-[0.2em] opacity-70">{p.brand}</p>
                  <h3 className="text-3xl font-semibold mt-1">{p.name}</h3>
                </div>
                <div className="relative z-10 text-white">
                  <p className="text-[12px] opacity-80 mb-2">{p.notes}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-medium">{p.price}</span>
                    <span className="inline-flex items-center gap-1 text-[12px] font-medium border border-white/40 rounded-full px-3 py-1.5 group-hover:bg-white group-hover:text-black transition-all">
                      Comprar
                      <span className="group-hover:translate-x-0.5 transition-transform">→</span>
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

        <div className="relative mx-auto mt-20 max-w-7xl overflow-hidden rounded-[2rem] border border-amber-300/15 bg-[linear-gradient(135deg,rgba(255,255,255,0.075),rgba(255,255,255,0.018)_42%,rgba(251,146,60,0.08))] px-4 py-8 shadow-[0_40px_120px_rgba(0,0,0,0.55)] sm:px-7 md:px-10">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(251,191,36,0.22),transparent_34%),radial-gradient(circle_at_92%_8%,rgba(244,63,94,0.16),transparent_30%),linear-gradient(180deg,rgba(7,4,3,0.28),rgba(7,4,3,0.76))]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-amber-200/70 to-transparent"
          />
          <Reveal className="relative z-10 mb-10 text-center">
            <p className="text-[11.5px] font-medium text-amber-400 uppercase tracking-widest mb-3">
              Catálogo
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white tracking-tight mb-3">
              O Rei do Importado Perfumes
            </h2>
            <p className="text-white/60 text-[14px]">Perfumes importados disponíveis</p>
          </Reveal>

          <div className="relative z-10 max-w-2xl mx-auto mb-10">
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar perfume..."
              className="h-13 w-full rounded-2xl border border-white/12 bg-black/35 px-5 text-[15px] text-white shadow-inner shadow-black/30 outline-none transition-all placeholder:text-white/38 focus:border-amber-300/70 focus:ring-4 focus:ring-amber-300/15"
            />
            <div className="mt-4 grid grid-cols-3 gap-2 rounded-2xl border border-white/10 bg-black/25 p-1.5 backdrop-blur-md">
              {[
                { id: "todos", label: "Todos" },
                { id: "masculino", label: "Masculino" },
                { id: "feminino", label: "Feminino" },
              ].map((option) => {
                const isActive = genderFilter === option.id;

                return (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => setGenderFilter(option.id as GenderFilter)}
                    className={`min-h-11 rounded-xl px-3 text-[11px] font-bold uppercase tracking-[0.13em] transition-all focus:outline-none focus:ring-4 focus:ring-amber-300/20 ${
                      isActive
                        ? "bg-gradient-to-r from-amber-300 via-orange-400 to-amber-500 text-black shadow-[0_12px_26px_rgba(245,158,11,0.22)]"
                        : "text-white/58 hover:bg-white/[0.06] hover:text-white"
                    }`}
                    aria-pressed={isActive}
                  >
                    {option.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="relative z-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProducts.map((p, index) => {
              const accent = catalogAccents[index % catalogAccents.length];
              const gender = productGenders[p.name] ?? "unissex";
              const genderLabel =
                gender === "masculino"
                  ? "Masculino"
                  : gender === "feminino"
                    ? "Feminino"
                    : "Unissex";

              return (
                <article
                  key={p.name}
                  className="group relative flex min-h-[430px] flex-col overflow-hidden rounded-[1.6rem] border border-white/10 bg-[#120b08]/86 shadow-[0_24px_70px_rgba(0,0,0,0.34)] transition-all duration-300 hover:-translate-y-1 hover:border-amber-200/45 hover:shadow-[0_34px_90px_rgba(217,119,6,0.18)]"
                >
                  <div
                    aria-hidden="true"
                    className={`absolute inset-0 bg-gradient-to-br ${accent} opacity-[0.16] transition-opacity duration-300 group-hover:opacity-[0.28]`}
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-px rounded-[1.55rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.09),rgba(255,255,255,0.02)_44%,rgba(0,0,0,0.28))]"
                  />
                  <div className="relative mx-3 mt-3 aspect-[1/1.08] bg-[radial-gradient(circle_at_50%_22%,rgba(255,255,255,0.16),transparent_30%),linear-gradient(145deg,rgba(251,191,36,0.16),rgba(12,7,5,0.2)_42%,rgba(0,0,0,0.4))] flex flex-col items-center justify-center overflow-hidden rounded-[1.25rem] border border-white/10">
                    <div
                      aria-hidden="true"
                      className={`absolute inset-x-8 bottom-5 h-12 rounded-full bg-gradient-to-r ${accent} opacity-30 blur-2xl`}
                    />
                    {productImages[p.name] ? (
                      <img
                        src={productImages[p.name]}
                        alt={p.name}
                        loading="lazy"
                        className="relative z-10 h-[94%] w-[94%] object-contain p-1 drop-shadow-[0_26px_24px_rgba(0,0,0,0.55)] transition-transform duration-500 group-hover:scale-[1.09]"
                      />
                    ) : (
                      <>
                        <div className="w-12 h-12 rounded-full border border-amber-400/40 flex items-center justify-center mb-3">
                          <span className="text-amber-400 text-lg">✦</span>
                        </div>
                        <span className="text-[10px] uppercase tracking-[0.25em] text-amber-400/70">
                          Imagem em breve
                        </span>
                      </>
                    )}
                  </div>
                  <div className="relative p-5 flex flex-col flex-1">
                    <div className="mb-4 flex items-start justify-between gap-3">
                      <div>
                        <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-amber-200/62">
                          {genderLabel}
                        </p>
                        <h3 className="text-[19px] sm:text-[20px] font-semibold text-white leading-tight">
                          {p.name}
                        </h3>
                      </div>
                      <span className="rounded-full border border-white/10 bg-white/[0.06] px-2.5 py-1 text-[10px] font-semibold text-white/62">
                        #{String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div className="mt-auto">
                      <div className="mb-4 flex items-end justify-between gap-3 border-t border-white/10 pt-4">
                        <div>
                          <p className="text-[10px] uppercase tracking-[0.18em] text-white/42">
                            Preco
                          </p>
                          <p className="text-[24px] font-bold leading-none text-amber-200">
                            {p.price}
                          </p>
                        </div>
                        <span
                          className={`h-8 w-8 rounded-full bg-gradient-to-br ${accent} opacity-90 shadow-lg shadow-amber-950/50`}
                        />
                      </div>
                      <a
                        href={INSTAGRAM_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex min-h-12 w-full items-center justify-center rounded-xl bg-gradient-to-r ${accent} px-4 text-center text-[11px] font-bold uppercase tracking-[0.14em] text-black transition-all duration-300 hover:brightness-110 focus:outline-none focus:ring-4 focus:ring-amber-300/25`}
                      >
                        Comprar pelo Instagram
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
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
              Conheça nossa coleção pessoalmente. Atendimento exclusivo, experimente as fragrâncias
              árabes ao vivo e sinta cada nota antes de levar para casa.
            </p>
            <p className="text-white/60 text-[13px] mb-8">📞 (86) 988100164</p>
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
