import { createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Banknote, CreditCard, Search, ShoppingBag, Truck, User } from "lucide-react";
import { Suspense, lazy, useEffect, useRef, useState, type ReactNode } from "react";
import { GlowCard } from "@/components/ui/spotlight-card";
import { Button } from "@/components/ui/button-1";
import lojaImg from "@/assets/loja.webp";
import asadImg from "@/assets/asad-new.webp";
import asadBourbonImg from "@/assets/asad-bourbon.webp";
import asadElixirImg from "@/assets/asad-elixir.webp";
import yaraRoseImg from "@/assets/yara-rose.webp";
import yaraTousImg from "@/assets/yara-tous.webp";
import yaraElixirImg from "@/assets/yara-elixir.webp";
import liquidBrunImg from "@/assets/liquid-brun.webp";
import aneesaImg from "@/assets/aneesa.webp";
import raveImg from "@/assets/rave.webp";
import clubIntenseImg from "@/assets/club-intense.webp";
import clubWomanImg from "@/assets/club-woman.webp";
import avantImg from "@/assets/avant.webp";
import toroImg from "@/assets/toro.webp";
import sabahImg from "@/assets/sabah.webp";
import vulcanImg from "@/assets/vulcan.webp";
import durratImg from "@/assets/durrat.webp";
import amberImg from "@/assets/amber.webp";
import fakharImg from "@/assets/fakhar.webp";
import elFursonImg from "@/assets/el-furson.webp";
import alNobleWazeerImg from "@/assets/al-noble-wazeer.webp";
import meitreImg from "@/assets/meitre.webp";
import fakarGoldImg from "@/assets/fakar-gold.webp";
import fakharBlackImg from "@/assets/fakhar-black.webp";
import fakarRoseImg from "@/assets/fakar-rose.webp";
import attarAlWesalImg from "@/assets/attar-al-wesal.webp";
import khamrahImg from "@/assets/khamrah.webp";
import voujePartyImg from "@/assets/vouje-party.webp";

const CinematicFooter = lazy(() =>
  import("@/components/ui/motion-footer").then((module) => ({
    default: module.CinematicFooter,
  })),
);
const ContainerScroll = lazy(() =>
  import("@/components/ui/container-scroll-animation").then((module) => ({
    default: module.ContainerScroll,
  })),
);

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
    let ctx: { revert: () => void } | undefined;
    let cancelled = false;

    Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(
      ([{ gsap }, { ScrollTrigger }]) => {
        if (cancelled) return;
        gsap.registerPlugin(ScrollTrigger);
        ctx = gsap.context(() => {
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
      },
    );

    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, [y, scale]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

const glowColors = ["orange", "orange", "red", "orange", "orange", "red"] as const;

export const Route = createFileRoute("/")({
  component: Index,
});

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
const CHECKOUT_BASE_URL = "https://oreidoimportado.site/checkout";

function getCheckoutUrl(productName: string) {
  const params = new URLSearchParams({ produto: productName });
  return `${CHECKOUT_BASE_URL}?${params.toString()}`;
}

function parsePrice(price: string) {
  return Number(price.replace(/[^\d,]/g, "").replace(",", "."));
}

function formatCurrency(value: number) {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

function PixIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="currentColor"
    >
      <path d="M7.05 3.8a2.3 2.3 0 0 1 3.25 0L12 5.5l1.7-1.7a2.3 2.3 0 0 1 3.25 0l3.25 3.25a2.3 2.3 0 0 1 0 3.25L18.5 12l1.7 1.7a2.3 2.3 0 0 1 0 3.25l-3.25 3.25a2.3 2.3 0 0 1-3.25 0L12 18.5l-1.7 1.7a2.3 2.3 0 0 1-3.25 0L3.8 16.95a2.3 2.3 0 0 1 0-3.25L5.5 12 3.8 10.3a2.3 2.3 0 0 1 0-3.25L7.05 3.8Zm1.63 1.63-3.25 3.25L8.75 12l-3.32 3.32 3.25 3.25L12 15.25l3.32 3.32 3.25-3.25L15.25 12l3.32-3.32-3.25-3.25L12 8.75 8.68 5.43Z" />
    </svg>
  );
}

function PriceCard({
  price,
  pixPrice,
  installmentPrice,
}: {
  price: string;
  pixPrice: string;
  installmentPrice: string;
}) {
  return (
    <div className="mb-4 rounded-3xl border border-amber-200/18 bg-[linear-gradient(145deg,rgba(255,255,255,0.10),rgba(18,12,8,0.92)_46%,rgba(92,52,15,0.74))] p-4 font-['Gilroy','Manrope',Inter,system-ui,sans-serif] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.14),0_18px_44px_rgba(0,0,0,0.34)]">
      <span className="inline-flex rounded-full border border-amber-300/65 bg-amber-200/13 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-[0.16em] text-amber-200">
        Preço
      </span>

      <p className="mt-3 bg-[linear-gradient(180deg,#fff7db,#f4ca62_42%,#b77917)] bg-clip-text text-[30px] font-black leading-none tracking-[-0.02em] text-transparent">
        {price}
      </p>

      <div className="mt-4 space-y-3">
        <div className="flex items-center gap-3">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-emerald-400/13 text-[#00d26a] ring-1 ring-emerald-300/18">
            <PixIcon className="h-5 w-5" />
          </span>
          <span className="text-[15px] font-extrabold leading-tight text-[#00d26a]">
            5% OFF no Pix
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white/9 text-white/62 ring-1 ring-white/10">
            <CreditCard className="h-5 w-5" strokeWidth={2.4} />
          </span>
          <span className="text-[14px] leading-tight text-white/62">
            ou <strong className="font-extrabold text-white">{installmentPrice}</strong>{" "}
            em 5x
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#00a650] text-white shadow-[0_10px_22px_rgba(0,166,80,0.24)]">
            <Banknote className="h-5 w-5" strokeWidth={2.4} />
          </span>
          <span className="bg-[linear-gradient(180deg,#59ffa1,#00a650)] bg-clip-text text-[20px] font-black leading-tight text-transparent">
            {pixPrice} <span className="text-[14px] font-semibold">sem juros</span>
          </span>
        </div>
      </div>

      <div className="mt-4 flex min-h-14 items-center justify-center gap-3 rounded-2xl border border-emerald-300/22 bg-[linear-gradient(180deg,rgba(0,166,80,0.18),rgba(0,166,80,0.08))] px-4 text-[#00d26a]">
        <Truck className="h-6 w-6" strokeWidth={2.5} />
        <span className="text-[18px] font-black leading-none">Frete grátis</span>
      </div>
    </div>
  );
}

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

type CatalogFilter = "todos" | "masculino" | "feminino" | "arabes" | "mais-vendidos" | "promocoes";
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

const catalogCategories: { id: CatalogFilter; label: string }[] = [
  { id: "todos", label: "Todos" },
  { id: "masculino", label: "Masculino" },
  { id: "feminino", label: "Feminino" },
  { id: "arabes", label: "Árabes" },
  { id: "mais-vendidos", label: "Mais vendidos" },
  { id: "promocoes", label: "Promoções" },
];

const bestSellerNames = new Set([
  "ASAD",
  "ASA BURBON",
  "ASAD ELIXIR",
  "YARA ROSE",
  "YARA TOUS",
  "LIQUID BRUN",
  "KHAMRAH",
  "CLUB DE NOIRL INTENSE",
]);

function matchesCatalogFilter(product: { name: string; price: string }, filter: CatalogFilter) {
  const gender = productGenders[product.name] ?? "unissex";
  const priceValue = parsePrice(product.price);

  if (filter === "todos") return true;
  if (filter === "masculino") return gender === "masculino" || gender === "unissex";
  if (filter === "feminino") return gender === "feminino" || gender === "unissex";
  if (filter === "arabes") return true;
  if (filter === "mais-vendidos") return bestSellerNames.has(product.name);
  if (filter === "promocoes") return priceValue <= 200;

  return true;
}

function Index() {
  return <StorefrontPage />;
}

function LuxuryHero({
  virtual,
}: {
  virtual: boolean;
}) {
  return (
    <section className="luxury-hero">
      <div className="hero-bg" aria-hidden="true" />
      <div className="marble-texture" aria-hidden="true" />
      <div className="hero-amber-glow" aria-hidden="true" />
      <div className="hero-bottom-glow" aria-hidden="true" />
      <div className="hero-particles" aria-hidden="true" />

      <header className="luxury-header">
        <a href="/" className="brand" aria-label="O Rei Luxury Perfumes">
          <div className="brand-fake-logo">O</div>
          <div className="brand-text">
            <strong>OREI</strong>
            <span>LUXURY PERFUMES</span>
          </div>
        </a>

        <nav className="hero-nav" aria-label="Navegação principal">
          <a className="active" href="/">
            Início
          </a>
          <a href="#catalog">Catálogo</a>
          <a href="#catalog">Coleções</a>
          <a href="#sobre">Sobre nós</a>
          <a href="#contato">Contato</a>
        </nav>

        <div className="hero-icons">
          <a href="#catalog-search" aria-label="Pesquisar">
            <Search size={23} />
          </a>
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" aria-label="Instagram">
            <User size={23} />
          </a>
          <a href="#catalog" className="bag-button" aria-label="Carrinho">
            <ShoppingBag size={23} />
            <span>0</span>
          </a>
        </div>
      </header>

      <main className="hero-content">
        <div className="hero-copy">
          <p className="hero-kicker">
            {virtual ? "LOJA VIRTUAL OFICIAL" : "COLEÇÃO EXCLUSIVA 2026"}
          </p>

          <h1>
            Fragrâncias
            <br />
            árabes que
            <br />
            contam histórias
            <br />
            <em>eternas.</em>
          </h1>

          <p className="hero-subtitle">
            {virtual
              ? "Compre online e receba em qualquer lugar do Brasil."
              : "Descubra a essência do oriente."}
          </p>

          <Button
            type="secondary"
            shape="rounded"
            size="large"
            shadow
            className="hero-button"
            suffix={<ArrowRight size={18} />}
            onClick={(event) => {
              event.preventDefault();
              document.getElementById("catalog")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            {virtual ? "Ver loja virtual" : "Ver catálogo"}
          </Button>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <img className="lion-image" src="/lion.webp" alt="" decoding="async" />
          <img
            className="perfume-image"
            src="/perfume-asad-transparent.png"
            alt=""
            decoding="async"
            fetchPriority="high"
          />
        </div>
      </main>

      <footer className="hero-footer">
        <div className="hero-pagination" aria-hidden="true">
          <span className="current">01</span>
          <span>02</span>
          <span>03</span>
        </div>

        <div className="hero-line" aria-hidden="true">
          <span />
        </div>

        <div className="hero-arrows">
          <button type="button" aria-label="Anterior">
            <ArrowLeft size={18} />
          </button>
          <button type="button" aria-label="Próximo">
            <ArrowRight size={18} />
          </button>
        </div>
      </footer>
    </section>
  );
}

export function StorefrontPage({ virtual = false }: { virtual?: boolean }) {
  const [search, setSearch] = useState("");
  const [catalogFilter, setCatalogFilter] = useState<CatalogFilter>("todos");
  const [visibleMobileProducts, setVisibleMobileProducts] = useState(4);
  const [isMobileCatalog, setIsMobileCatalog] = useState(false);
  const catalogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const handleChange = () => setIsMobileCatalog(mediaQuery.matches);

    handleChange();
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    setVisibleMobileProducts(4);
  }, [catalogFilter, search]);

  const filteredProducts = catalogProducts.filter((p) => {
    const matchesSearch = p.name.toLowerCase().includes(search.trim().toLowerCase());
    const matchesCategory = matchesCatalogFilter(p, catalogFilter);

    return matchesSearch && matchesCategory;
  });
  const visibleProducts = isMobileCatalog
    ? filteredProducts.slice(0, visibleMobileProducts)
    : filteredProducts;
  const hasMoreMobileProducts = isMobileCatalog && visibleProducts.length < filteredProducts.length;

  return (
    <div className="relative bg-[#070403] text-white">
      <LuxuryHero virtual={virtual} />

      <section
        id="catalog"
        ref={catalogRef}
        className="relative py-24 px-6 sm:px-12 md:px-20 lg:px-28 bg-[#070403]"
      >
        <Reveal className="max-w-6xl mx-auto mb-16">
          <p className="text-[11.5px] font-medium text-amber-400 uppercase tracking-widest mb-3">
            {virtual ? "Loja virtual" : "Catálogo"}
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-medium text-white tracking-tight max-w-4xl break-words [overflow-wrap:anywhere]">
            {virtual
              ? "Perfumes árabes importados com entrega para todo o Brasil"
              : "Os Mais Vendidos do @oreidoimportadoperfumes"}
          </h2>
          {virtual && (
            <p className="mt-5 max-w-2xl text-[14px] leading-relaxed text-white/60">
              Frete grátis para todo o Brasil em pedidos selecionados. Escolha sua fragrância,
              finalize no checkout seguro e receba seu perfume importado em casa.
            </p>
          )}
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
                    className="absolute inset-0 w-full h-full object-contain p-1 -z-10 opacity-95 scale-[1.16] group-hover:scale-[1.2] transition-transform duration-700"
                    loading="lazy"
                    decoding="async"
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
                      {virtual ? "Comprar online" : "Comprar"}
                      <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                    </span>
                  </div>
                </div>
              </GlowCard>
            ))}
          </div>
        </Reveal>

        <Reveal y={70}>
          <Suspense fallback={null}>
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
          </Suspense>
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
              {virtual ? "Ecommerce nacional" : "Catálogo"}
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white tracking-tight mb-3">
              {virtual ? "Loja virtual O Rei do Importado" : "O Rei do Importado Perfumes"}
            </h2>
            <p className="text-white/60 text-[14px]">
              {virtual
                ? "Perfumes importados com frete grátis para o Brasil todo"
                : "Perfumes importados disponíveis"}
            </p>
          </Reveal>

          <div className="catalog-toolbar relative z-10 max-w-2xl mx-auto mb-10">
            <input
              id="catalog-search"
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar perfume..."
              className="h-13 w-full rounded-2xl border border-white/12 bg-black/35 px-5 text-[15px] text-white shadow-inner shadow-black/30 outline-none transition-all placeholder:text-white/38 focus:border-amber-300/70 focus:ring-4 focus:ring-amber-300/15"
            />
            <div className="catalog-tabs mt-4 grid grid-cols-3 gap-2 rounded-2xl border border-white/10 bg-black/25 p-1.5 backdrop-blur-md">
              {catalogCategories.map((option) => {
                const isActive = catalogFilter === option.id;

                return (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => setCatalogFilter(option.id)}
                    className={`catalog-tab min-h-11 rounded-xl px-3 text-[11px] font-bold uppercase tracking-[0.13em] transition-all focus:outline-none focus:ring-4 focus:ring-amber-300/20 ${
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

          <div className="products-grid relative z-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {visibleProducts.map((p, index) => {
              const gender = productGenders[p.name] ?? "unissex";
              const priceValue = parsePrice(p.price);
              const pixPrice = formatCurrency(priceValue * 0.95);
              const installmentPrice = formatCurrency(priceValue / 5);
              const genderLabel =
                gender === "masculino"
                  ? "Masculino"
                  : gender === "feminino"
                    ? "Feminino"
                    : "Unissex";

              return (
                <article
                  key={p.name}
                  className="product-card group relative flex min-h-[430px] flex-col overflow-hidden rounded-[1.35rem] border border-white/10 bg-[#100b08]/92 shadow-[0_22px_58px_rgba(0,0,0,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:border-amber-200/38 hover:bg-[#15100c]/95 hover:shadow-[0_30px_80px_rgba(0,0,0,0.38)]"
                >
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.055),rgba(255,255,255,0.012)_46%,rgba(245,158,11,0.04))]"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-amber-100/32 to-transparent"
                  />
                  <div className="product-image-wrapper relative mx-2.5 mt-2.5 aspect-[1/1.03] bg-[radial-gradient(circle_at_50%_18%,rgba(255,255,255,0.12),transparent_34%),linear-gradient(145deg,rgba(255,255,255,0.055),rgba(22,17,13,0.8)_52%,rgba(0,0,0,0.34))] flex flex-col items-center justify-center overflow-hidden rounded-[1.05rem] border border-white/10">
                    <div
                      aria-hidden="true"
                      className="absolute inset-x-10 bottom-5 h-10 rounded-full bg-amber-200/18 blur-2xl"
                    />
                    {productImages[p.name] ? (
                      <img
                        src={productImages[p.name]}
                        alt={p.name}
                        loading="lazy"
                        decoding="async"
                        className="product-image relative z-10 h-[138%] w-[138%] object-contain p-0 drop-shadow-[0_28px_26px_rgba(0,0,0,0.58)] transition-transform duration-500 group-hover:scale-[1.04]"
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
                  <div className="product-card-body relative p-5 flex flex-col flex-1">
                    <div className="mb-4 flex items-start justify-between gap-3">
                      <div>
                        <p className="product-category mb-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-amber-200/62">
                          {genderLabel}
                        </p>
                        <h3 className="product-title text-[19px] sm:text-[20px] font-semibold text-white leading-tight">
                          {p.name}
                        </h3>
                      </div>
                      <span className="product-number rounded-full border border-white/10 bg-white/[0.06] px-2.5 py-1 text-[10px] font-semibold text-white/62">
                        #{String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div className="mt-auto">
                      {virtual ? (
                        <PriceCard
                          price={p.price}
                          pixPrice={pixPrice}
                          installmentPrice={installmentPrice}
                        />
                      ) : (
                        <div className="mb-4 flex items-end justify-between gap-3 border-t border-white/10 pt-4">
                          <div>
                            <p className="text-[10px] uppercase tracking-[0.18em] text-white/42">
                              Preco
                            </p>
                            <p className="product-price text-[24px] font-bold leading-none text-amber-200">
                              {p.price}
                            </p>
                          </div>
                        </div>
                      )}
                      <a
                        href={virtual ? getCheckoutUrl(p.name) : INSTAGRAM_URL}
                        target={virtual ? undefined : "_blank"}
                        rel={virtual ? undefined : "noopener noreferrer"}
                        className={`product-button flex min-h-12 w-full items-center justify-center rounded-xl px-4 text-center font-[Inter,system-ui,sans-serif] text-[12px] font-extrabold uppercase tracking-[0.08em] transition-all duration-300 focus:outline-none focus:ring-4 ${
                          virtual
                            ? "border border-[#3483fa]/70 bg-[linear-gradient(180deg,#5b9cff,#2563eb)] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.32),0_16px_36px_rgba(37,99,235,0.34)] hover:-translate-y-0.5 hover:border-[#9ec2ff] hover:bg-[linear-gradient(180deg,#6da8ff,#1d4ed8)] focus:ring-[#3483fa]/25"
                            : "border border-amber-200/35 bg-[linear-gradient(180deg,#f6d995,#c99022)] text-[#160d05] shadow-[inset_0_1px_0_rgba(255,255,255,0.45),0_12px_24px_rgba(201,144,34,0.12)] hover:border-amber-100/60 hover:bg-[linear-gradient(180deg,#ffe8aa,#d49a2d)] focus:ring-amber-300/20"
                        }`}
                      >
                        {virtual ? "Comprar agora" : "Comprar pelo Instagram"}
                        {virtual && <span className="ml-2 text-[15px] leading-none">→</span>}
                      </a>
                      {virtual && (
                        <p className="mt-3 text-center font-[Inter,system-ui,sans-serif] text-[11px] font-semibold text-[#00a650]">
                          Frete grátis para todo o Brasil
                        </p>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {hasMoreMobileProducts && (
            <div className="relative z-10 mt-7 flex justify-center md:hidden">
              <button
                type="button"
                onClick={() => setVisibleMobileProducts((current) => current + 4)}
                className="rounded-full border border-amber-200/45 bg-black/35 px-6 py-3 text-[12px] font-extrabold uppercase tracking-[0.12em] text-amber-200 shadow-[0_14px_34px_rgba(0,0,0,0.32)] backdrop-blur-md transition-all hover:border-amber-100 hover:bg-amber-300/10"
              >
                Ver mais perfumes
              </button>
            </div>
          )}

          {filteredProducts.length === 0 && (
            <p className="text-center text-white/50 mt-10 text-[14px]">
              Nenhum perfume encontrado.
            </p>
          )}

          <p className="text-center text-white/50 text-[12px] mt-12">
            {virtual
              ? "Oferta válida para compras online enquanto houver estoque."
              : "Consulte disponibilidade antes de finalizar o pedido."}
            <br />
            {virtual ? (
              <span>Entrega nacional com checkout seguro.</span>
            ) : (
              <>
                Instagram:{" "}
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 hover:text-amber-300"
                >
                  @oreidoimportadoperfumes
                </a>
              </>
            )}
          </p>
        </div>

        <div className="max-w-6xl mx-auto mt-32 grid md:grid-cols-2 gap-10 items-center">
          <Reveal y={60} className="overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
            <img
              src={lojaImg}
              alt="O Rei Importados — fachada da loja"
              className="w-full h-full object-cover aspect-[4/3]"
              loading="lazy"
              decoding="async"
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

      <Suspense fallback={null}>
        <CinematicFooter />
      </Suspense>
    </div>
  );
}
