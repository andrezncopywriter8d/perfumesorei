import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  CreditCard,
  Flame,
  Heart,
  Headphones,
  Lock,
  Minus,
  PackageCheck,
  Plus,
  RotateCcw,
  Search,
  ShieldCheck,
  ShoppingBag,
  Star,
  Truck,
  User,
  ZoomIn,
} from "lucide-react";
import { useMemo, useState } from "react";
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
import silverScentImg from "@/assets/silver-scent.webp";
import vipBlackImg from "@/assets/212-vip-black.webp";
import vipRoseImg from "@/assets/212-vip-rose.webp";
import scandalPourHommeImg from "@/assets/scandal-pour-homme.webp";
import scandalPourHommeIntenseImg from "@/assets/scandal-pour-homme-intense.webp";
import invictusImg from "@/assets/invictus.webp";
import oneMillionImg from "@/assets/1-million.webp";
import oneMillionElixirImg from "@/assets/1-million-elixir.webp";
import afnan9amImg from "@/assets/afnan-9am.webp";
import laVieEstBelleImg from "@/assets/la-vie-est-belle.webp";
import goodGirlImg from "@/assets/good-girl.webp";
import libreImg from "@/assets/libre.webp";
import sauvageImg from "@/assets/sauvage.webp";

export const Route = createFileRoute("/produto/$slug")({
  component: ProductPage,
});

const INSTAGRAM_URL = "https://www.instagram.com/oreidoimportadoperfumes/";

type Product = {
  name: string;
  brand: string;
  price: string;
  image?: string;
  category: string;
  shortDescription: string;
  about: string;
  rating?: number;
  reviews?: number;
  sizes: string[];
};

function pendingProduct({
  name,
  brand,
  price,
  category,
  image,
  sizes = ["100ml"],
}: Pick<Product, "name" | "brand" | "price" | "category"> & { image?: string; sizes?: string[] }): Product {
  return {
    name,
    brand,
    price,
    image,
    category,
    shortDescription:
      "Perfume importado disponivel no catalogo O Rei do Importado. Imagem oficial em breve.",
    about:
      "Produto adicionado ao estoque atualizado. Em breve, esta pagina recebera foto e descricao olfativa completa.",
    rating: 5,
    reviews: 120,
    sizes,
  };
}

const products: Product[] = [
  {
    name: "ASAD",
    brand: "Lattafa",
    price: "R$ 200,00",
    image: asadImg,
    category: "Masculino",
    shortDescription:
      "Uma fragrancia marcante e sofisticada, feita para quem deseja intensidade, presenca e elegancia.",
    about:
      "Asad e uma experiencia olfativa envolvente e poderosa. Sua abertura especiada evolui para um coracao doce e amadeirado, finalizando com uma base profunda e marcante.",
    rating: 5,
    reviews: 598,
    sizes: ["100ml", "200ml"],
  },
  {
    name: "ASA BURBON",
    brand: "Lattafa",
    price: "R$ 320,00",
    image: asadBourbonImg,
    category: "Masculino",
    shortDescription:
      "Um perfume intenso, adocicado e sofisticado, com assinatura elegante para noites especiais.",
    about:
      "Asad Bourbon combina especiarias, doçura cremosa e madeiras nobres em uma fragrancia luxuosa, encorpada e inesquecivel.",
    rating: 5,
    reviews: 598,
    sizes: ["100ml", "200ml"],
  },
  {
    name: "ASAD ELIXIR",
    brand: "Lattafa",
    price: "R$ 320,00",
    image: asadElixirImg,
    category: "Masculino",
    shortDescription:
      "Elixir moderno, quente e envolvente, com muita presenca e acabamento premium.",
    about:
      "Asad Elixir entrega uma evolucao rica, com brilho especiado no topo, corpo ambarado e base de alta fixacao.",
    rating: 5,
    reviews: 421,
    sizes: ["100ml", "200ml"],
  },
  { name: "YARA ROSE", brand: "Lattafa", price: "R$ 200,00", image: yaraRoseImg, category: "Feminino", shortDescription: "Doce, feminino e luminoso, perfeito para uma assinatura delicada.", about: "Yara Rose une flores cremosas, frutas suaves e almíscar elegante em uma fragrancia facil de amar.", rating: 5, reviews: 384, sizes: ["100ml"] },
  { name: "YARA TOUS", brand: "Lattafa", price: "R$ 200,00", image: yaraTousImg, category: "Feminino", shortDescription: "Tropical, cremosa e sofisticada, com uma presença alegre e memoravel.", about: "Yara Tous mistura frutas tropicais, flores suaves e fundo cremoso para uma fragrancia feminina e marcante.", rating: 5, reviews: 376, sizes: ["100ml"] },
  { name: "YARA ELIXIR", brand: "Lattafa", price: "R$ 320,00", image: yaraElixirImg, category: "Feminino", shortDescription: "Versao mais intensa e luxuosa da linha Yara.", about: "Yara Elixir entrega doçura refinada, corpo floral e uma base aveludada de alta fixacao.", rating: 5, reviews: 332, sizes: ["100ml"] },
  { name: "LIQUID BRUN", brand: "French Avenue", price: "R$ 370,00", image: liquidBrunImg, category: "Masculino", shortDescription: "Quente, especiado e extremamente elegante.", about: "Liquid Brun combina canela, cardamomo, baunilha e madeiras em um perfume sofisticado e sedutor.", rating: 5, reviews: 267, sizes: ["100ml"] },
  { name: "FAKAR GOLD", brand: "Lattafa", price: "R$ 220,00", image: fakarGoldImg, category: "Feminino", shortDescription: "Dourado, moderno e envolvente.", about: "Fakar Gold traz uma aura brilhante, adocicada e elegante para quem busca presenca sem exagero.", rating: 5, reviews: 245, sizes: ["100ml"] },
  { name: "FAKHAR BLACK", brand: "Lattafa", price: "R$ 240,00", image: fakharBlackImg, category: "Masculino", shortDescription: "Amadeirado, limpo e muito versatil.", about: "Fakhar Black e uma fragrancia masculina de impacto, com frescor, madeira e assinatura sofisticada.", rating: 5, reviews: 412, sizes: ["100ml"] },
  { name: "FAKAR ROSE", brand: "Lattafa", price: "R$ 240,00", image: fakarRoseImg, category: "Feminino", shortDescription: "Floral, elegante e marcante.", about: "Fakar Rose une delicadeza floral e fundo moderno para uma fragrancia feminina premium.", rating: 5, reviews: 214, sizes: ["100ml"] },
  { name: "FAKAR PLATINUM", brand: "Lattafa", price: "R$ 190,00", image: fakharImg, category: "Masculino", shortDescription: "Fresco e sofisticado para uso diario.", about: "Fakar Platinum entrega limpeza, elegancia e uma base amadeirada equilibrada.", rating: 5, reviews: 198, sizes: ["100ml"] },
  { name: "ATTAR AL WESAL", brand: "Al Wataniah", price: "R$ 180,00", image: attarAlWesalImg, category: "Unissex", shortDescription: "Arabico, envolvente e cheio de personalidade.", about: "Attar Al Wesal traz uma assinatura oriental com doçura equilibrada e ótima presenca.", rating: 5, reviews: 205, sizes: ["100ml"] },
  { name: "KHAMRAH", brand: "Lattafa", price: "R$ 210,00", image: khamrahImg, category: "Unissex", shortDescription: "Doce, especiado e viciante.", about: "Khamrah combina canela, tâmaras, praline e baunilha em uma experiencia quente e irresistivel.", rating: 5, reviews: 689, sizes: ["100ml"] },
  { name: "VOUJE PARTY", brand: "Lattafa", price: "R$ 190,00", image: voujePartyImg, category: "Feminino", shortDescription: "Divertido, jovem e chamativo.", about: "Vouje Party e uma fragrancia vibrante, feita para momentos leves, doces e marcantes.", rating: 5, reviews: 177, sizes: ["100ml"] },
  { name: "EL FURSON", brand: "Lattafa", price: "R$ 180,00", image: elFursonImg, category: "Masculino", shortDescription: "Oriental, potente e cheio de presença.", about: "El Furson combina especiarias e madeiras com uma base densa e masculina.", rating: 5, reviews: 164, sizes: ["100ml"] },
  { name: "AL NOBLE WAZEER", brand: "Lattafa", price: "R$ 320,00", image: alNobleWazeerImg, category: "Masculino", shortDescription: "Nobre, forte e elegante.", about: "Al Noble Wazeer entrega um perfil oriental sofisticado, com ótimo desempenho e rastro.", rating: 5, reviews: 253, sizes: ["100ml"] },
  { name: "MEITE", brand: "Maison Alhambra", price: "R$ 200,00", image: meitreImg, category: "Masculino", shortDescription: "Elegancia moderna com assinatura importada.", about: "Meite traz equilíbrio entre frescor, especiarias e madeira em uma composicao refinada.", rating: 5, reviews: 142, sizes: ["100ml"] },
  { name: "ANEESA", brand: "Lattafa", price: "R$ 200,00", image: aneesaImg, category: "Feminino", shortDescription: "Delicado, feminino e envolvente.", about: "Aneesa combina maciez, flores e fundo confortável para uma assinatura elegante.", rating: 5, reviews: 186, sizes: ["100ml"] },
  { name: "RAVE AU SOLEIL", brand: "Rave", price: "R$ 220,00", image: raveImg, category: "Masculino", shortDescription: "Solar, moderno e marcante.", about: "Rave Au Soleil tem brilho cítrico, corpo aromático e final limpo com presença.", rating: 5, reviews: 136, sizes: ["100ml"] },
  { name: "CLUB DE NOIRL INTENSE", brand: "Armaf", price: "R$ 330,00", image: clubIntenseImg, category: "Masculino", shortDescription: "Um clássico masculino intenso, elegante e poderoso.", about: "Club de Noirl Intense combina cítricos, fumaça e madeiras em uma assinatura forte e reconhecida.", rating: 5, reviews: 731, sizes: ["105ml"] },
  { name: "CLUB DE NOIRL WOMEN", brand: "Armaf", price: "R$ 310,00", image: clubWomanImg, category: "Feminino", shortDescription: "Elegante, feminino e sofisticado.", about: "Club de Noirl Women entrega flores, frutas e fundo moderno com muita classe.", rating: 5, reviews: 292, sizes: ["105ml"] },
  { name: "AVANT PERFUME", brand: "Maison Alhambra", price: "R$ 200,00", image: avantImg, category: "Masculino", shortDescription: "Versatil, moderno e muito usavel.", about: "Avant Perfume traz frescor elegante, corpo aromatico e fundo amadeirado.", rating: 5, reviews: 155, sizes: ["100ml"] },
  { name: "TORO", brand: "Maison Alhambra", price: "R$ 190,00", image: toroImg, category: "Masculino", shortDescription: "Marcante, quente e masculino.", about: "Toro tem presença forte e assinatura oriental para quem gosta de perfumes encorpados.", rating: 5, reviews: 121, sizes: ["100ml"] },
  { name: "SABAH AL", brand: "Al Wataniah", price: "R$ 190,00", image: sabahImg, category: "Feminino", shortDescription: "Ambarado, frutado e elegante.", about: "Sabah Al mistura frutas, âmbar e madeiras em uma fragrancia envolvente.", rating: 5, reviews: 174, sizes: ["100ml"] },
  { name: "VULCAN FEU", brand: "French Avenue", price: "R$ 420,00", image: vulcanImg, category: "Masculino", shortDescription: "Premium, intenso e explosivo.", about: "Vulcan Feu entrega calor, especiarias e uma base sofisticada de alta performance.", rating: 5, reviews: 201, sizes: ["100ml"] },
  { name: "DURRAT", brand: "Al Wataniah", price: "R$ 190,00", image: durratImg, category: "Feminino", shortDescription: "Doce, macio e elegante.", about: "Durrat combina acordes delicados com fundo confortável e assinatura feminina.", rating: 5, reviews: 149, sizes: ["100ml"] },
  { name: "AMBER", brand: "Arabiyat", price: "R$ 570,00", image: amberImg, category: "Unissex", shortDescription: "Luxuoso, ambarado e profundo.", about: "Amber e uma fragrancia rica, intensa e sofisticada, feita para quem busca exclusividade.", rating: 5, reviews: 118, sizes: ["100ml"] },
  pendingProduct({ name: "ASAD BOURBON EDP 100ML", brand: "Lattafa", price: "R$ 320,00", category: "Masculino" }),
  pendingProduct({ name: "ASAD ELIXIR EDP 100ML", brand: "Lattafa", price: "R$ 320,00", category: "Masculino" }),
  pendingProduct({ name: "YARA ELIXIR EDP 100ML", brand: "Lattafa", price: "R$ 320,00", category: "Feminino" }),
  pendingProduct({ name: "YARA MOI EDP 100ML", brand: "Lattafa", price: "R$ 220,00", category: "Feminino" }),
  pendingProduct({ name: "YARA EDP 100ML", brand: "Lattafa", price: "R$ 250,00", category: "Feminino" }),
  pendingProduct({ name: "LIQUID BRUN EDP 100ML", brand: "French Avenue", price: "R$ 370,00", category: "Masculino" }),
  pendingProduct({ name: "FAKHAR GOLD EXTRAIT EDP 100ML", brand: "Lattafa", price: "R$ 220,00", category: "Feminino" }),
  pendingProduct({ name: "FAKHAR ROSE", brand: "Lattafa", price: "R$ 240,00", category: "Feminino" }),
  pendingProduct({ name: "FAKHAR PLATINUM", brand: "Lattafa", price: "R$ 190,00", category: "Masculino" }),
  pendingProduct({ name: "FAKHAR F EDP 100ML", brand: "Lattafa", price: "R$ 320,00", category: "Feminino" }),
  pendingProduct({ name: "CLUB DE NUIT F EDP 105ML UAE", brand: "Armaf", price: "R$ 310,00", category: "Feminino", sizes: ["105ml"] }),
  pendingProduct({ name: "SABAH AL WARD EDP", brand: "Al Wataniah", price: "R$ 190,00", category: "Feminino" }),
  pendingProduct({ name: "ORIENTICA ROYAL AMBER EDP 80ML", brand: "Orientica", price: "R$ 550,00", category: "Unissex", sizes: ["80ml"] }),
  pendingProduct({ name: "KING OF ARABIA EDP 100ML", brand: "Lattafa", price: "R$ 350,00", category: "Masculino" }),
  pendingProduct({ name: "HAWAS BLACK EDP 100ML", brand: "Rasasi", price: "R$ 350,00", category: "Masculino" }),
  pendingProduct({ name: "SALVO EDP 100ML", brand: "Maison Alhambra", price: "R$ 230,00", category: "Masculino" }),
  pendingProduct({ name: "THARWAH GOLD EDP 100ML", brand: "Lattafa", price: "R$ 410,00", category: "Unissex" }),
  pendingProduct({ name: "VENENO BIANCO EDP 100ML", brand: "French Avenue", price: "R$ 420,00", category: "Unissex" }),
  pendingProduct({ name: "SILVER SCENT EDT 100ML", brand: "Jacques Bogart", price: "R$ 220,00", image: silverScentImg, category: "Masculino" }),
  pendingProduct({ name: "212 VIP BLACK EDP 100ML", brand: "Carolina Herrera", price: "R$ 650,00", image: vipBlackImg, category: "Masculino" }),
  pendingProduct({ name: "212 VIP ROSE EDP 80ML", brand: "Carolina Herrera", price: "R$ 650,00", image: vipRoseImg, category: "Feminino", sizes: ["80ml"] }),
  pendingProduct({ name: "SCANDAL POUR HOMME EDT 100ML", brand: "Jean Paul Gaultier", price: "R$ 650,00", image: scandalPourHommeImg, category: "Masculino" }),
  pendingProduct({ name: "SCANDAL POUR HOMME EDP INTENSE 100ML", brand: "Jean Paul Gaultier", price: "R$ 750,00", image: scandalPourHommeIntenseImg, category: "Masculino" }),
  pendingProduct({ name: "INVICTUS EDT 100ML", brand: "Paco Rabanne", price: "R$ 550,00", image: invictusImg, category: "Masculino" }),
  pendingProduct({ name: "1 MILLION EDT 100ML", brand: "Paco Rabanne", price: "R$ 550,00", image: oneMillionImg, category: "Masculino" }),
  pendingProduct({ name: "1 MILLION ELIXIR PARFUM INTENSE 100ML", brand: "Paco Rabanne", price: "R$ 700,00", image: oneMillionElixirImg, category: "Masculino" }),
  pendingProduct({ name: "AFNAN 9AM EDT 100ML", brand: "Afnan", price: "R$ 250,00", image: afnan9amImg, category: "Unissex" }),
  pendingProduct({ name: "LA VIE EST BELLE EDP 100ML", brand: "Lancome", price: "R$ 700,00", image: laVieEstBelleImg, category: "Feminino" }),
  pendingProduct({ name: "GOOD GIRL EDP 80ML", brand: "Carolina Herrera", price: "R$ 700,00", image: goodGirlImg, category: "Feminino", sizes: ["80ml"] }),
  pendingProduct({ name: "LIBRE EDP 90ML", brand: "Yves Saint Laurent", price: "R$ 900,00", image: libreImg, category: "Feminino", sizes: ["90ml"] }),
  pendingProduct({ name: "SAUVAGE EDP 100ML", brand: "Dior", price: "R$ 850,00", image: sauvageImg, category: "Masculino" }),
];

const noteGroups = [
  {
    title: "Notas de Topo",
    notes: [
      { name: "Pimenta Rosa", color: "from-rose-500 to-red-950" },
      { name: "Lavanda", color: "from-violet-300 to-purple-950" },
      { name: "Mirra", color: "from-amber-700 to-stone-950" },
    ],
  },
  {
    title: "Notas de Coração",
    notes: [
      { name: "Cacau", color: "from-stone-500 to-[#1d0d06]" },
      { name: "Noz-moscada", color: "from-[#c8a17b] to-[#2b170b]" },
      { name: "Davana", color: "from-lime-200 to-emerald-950" },
    ],
  },
  {
    title: "Notas de Base",
    notes: [
      { name: "Baunilha", color: "from-yellow-50 to-yellow-800" },
      { name: "Âmbar", color: "from-amber-300 to-orange-950" },
      { name: "Vetiver", color: "from-stone-500 to-neutral-950" },
    ],
  },
];

function slugify(name: string) {
  return name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function parsePrice(price: string) {
  return Number(price.replace(/[^\d,]/g, "").replace(",", "."));
}

function formatCurrency(value: number) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function titleCase(value: string) {
  return value
    .toLowerCase()
    .split(" ")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function getProduct(slug: string) {
  return products.find((product) => slugify(product.name) === slug) ?? products[0];
}

function ProductPage() {
  const { slug } = Route.useParams();
  const product = getProduct(slug);
  const [selectedImage, setSelectedImage] = useState(product.image);
  const [quantity, setQuantity] = useState(1);
  const [favorite, setFavorite] = useState(false);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0] ?? "100ml");

  const priceValue = parsePrice(product.price);
  const oldPrice = formatCurrency(priceValue * 1.28);
  const pixPrice = formatCurrency(priceValue);
  const related = useMemo(
    () => products.filter((item) => item.name !== product.name),
    [product.name],
  );
  const gallery = [product.image, product.image, product.image, product.image].filter(Boolean) as string[];

  return (
    <main className="min-h-screen bg-[#050403] font-[Poppins,system-ui,sans-serif] text-[#f5f0e8]">
      <ProductTopBar />
      <ProductHeader />

      <section className="mx-auto max-w-[1440px] px-4 pb-20 pt-5 sm:px-6 lg:px-10">
        <nav className="mb-7 flex flex-wrap items-center gap-2 text-[12px] text-white/48">
          <a href="/" className="transition-colors hover:text-amber-200">Início</a>
          <span className="text-amber-300/70">›</span>
          <a href="/#catalog" className="transition-colors hover:text-amber-200">Catálogo</a>
          <span className="text-amber-300/70">›</span>
          <span className="text-white/78">{titleCase(product.name)}</span>
        </nav>

        <section className="grid gap-8 lg:grid-cols-[minmax(0,1.06fr)_minmax(420px,0.94fr)] lg:items-start">
          <div className="grid gap-4 sm:grid-cols-[86px_minmax(0,1fr)]">
            <div className="order-2 flex gap-3 overflow-x-auto pb-2 sm:order-1 sm:flex-col sm:overflow-visible sm:pb-0">
              {gallery.map((image, index) => (
                <button
                  key={`${image}-${index}`}
                  type="button"
                  onClick={() => setSelectedImage(image)}
                  className={`h-20 w-20 shrink-0 overflow-hidden rounded-xl border bg-[#120d09] transition-all sm:h-[92px] sm:w-[86px] ${
                    selectedImage === image && index === 0
                      ? "border-amber-300 shadow-[0_0_22px_rgba(212,175,55,0.28)]"
                      : "border-white/12 hover:border-amber-300/50"
                  }`}
                >
                  <img src={image} alt="" className="h-full w-full object-contain p-1.5" />
                </button>
              ))}
            </div>

            <div className="relative order-1 h-[520px] overflow-hidden rounded-[1.45rem] border border-amber-300/22 bg-[radial-gradient(circle_at_58%_42%,rgba(212,175,55,0.18),transparent_36%),linear-gradient(145deg,#17110c,#070504_62%,#120906)] shadow-[0_34px_110px_rgba(0,0,0,0.55)] sm:order-2 lg:h-[620px]">
              <div className="absolute left-5 top-5 z-10 inline-flex items-center gap-2 rounded-xl border border-white/12 bg-black/40 px-3 py-2 text-[12px] font-semibold text-amber-100 backdrop-blur">
                <Flame className="h-4 w-4 fill-amber-300 text-amber-300" />
                Mais Vendido
              </div>
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_84%,rgba(245,197,66,0.34),transparent_34%)]" />
              {selectedImage ? (
                <img
                  src={selectedImage}
                  alt={product.name}
                  className="absolute inset-0 z-[1] h-full w-full scale-[1.16] object-contain p-4 drop-shadow-[0_34px_42px_rgba(0,0,0,0.72)] lg:p-8"
                />
              ) : (
                <div className="grid h-full place-items-center text-amber-200/70">
                  Imagem em breve
                </div>
              )}
              <button
                type="button"
                className="absolute bottom-5 right-5 z-10 grid h-11 w-11 place-items-center rounded-full border border-amber-300/35 bg-black/45 text-amber-200 backdrop-blur transition hover:border-amber-100 hover:bg-amber-300/10"
                aria-label="Zoom da imagem"
              >
                <ZoomIn className="h-5 w-5" />
              </button>
            </div>
          </div>

          <aside className="rounded-[1.45rem] border border-amber-300/14 bg-[linear-gradient(145deg,rgba(255,255,255,0.055),rgba(10,7,5,0.78)_42%,rgba(55,31,9,0.14))] p-5 shadow-[0_28px_80px_rgba(0,0,0,0.34)] sm:p-7">
            <p className="mb-3 font-[Montserrat,Poppins,system-ui,sans-serif] text-[12px] font-black uppercase tracking-[0.26em] text-amber-300">{product.brand}</p>
            <h1 className="font-[Montserrat,Poppins,system-ui,sans-serif] text-[42px] font-black leading-[0.96] tracking-[-0.055em] text-[#fff8eb] sm:text-6xl">
              {titleCase(product.name)}
            </h1>
            <div className="mt-4 flex flex-wrap items-center gap-2 text-[13px] text-white/58">
              <span className="flex text-amber-300">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" />
                ))}
              </span>
              <span>({product.reviews ?? 300} avaliações)</span>
            </div>
            <p className="mt-5 max-w-xl text-[15px] leading-7 text-white/64">{product.shortDescription}</p>

            <div className="mt-7">
              <p className="text-[15px] text-white/42 line-through">{oldPrice}</p>
              <p className="mt-1 bg-[linear-gradient(180deg,#ffe99d,#d4af37_52%,#99670c)] bg-clip-text text-[44px] font-black leading-none text-transparent">
                {product.price}
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-3">
                <span className="rounded-lg border border-emerald-400/35 bg-emerald-500/10 px-3 py-1.5 text-[12px] font-extrabold text-emerald-400">
                  PREÇO FINAL NO PIX
                </span>
                <span className="text-[15px] font-bold text-amber-200">{pixPrice} no PIX</span>
              </div>
              <div className="mt-3 inline-flex items-center gap-3 rounded-lg border border-white/12 bg-black/24 px-4 py-2 text-[13px] text-white/70">
                <CreditCard className="h-4 w-4 text-amber-300" />
                em até 18x com juros • consulte a taxa
              </div>
            </div>

            <div className="mt-7">
              <p className="mb-3 text-[13px] text-white/68">Tamanho:</p>
              <div className="flex gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setSelectedSize(size)}
                    className={`h-11 min-w-20 rounded-lg border px-4 text-[13px] font-semibold transition ${
                      selectedSize === size
                        ? "border-amber-300 bg-amber-300/10 text-amber-100"
                        : "border-white/14 bg-black/20 text-white/62 hover:border-amber-300/50"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-7 grid gap-4 sm:grid-cols-[120px_1fr]">
              <div>
                <p className="mb-3 text-[13px] text-white/68">Quantidade:</p>
                <div className="grid h-13 grid-cols-3 overflow-hidden rounded-lg border border-white/14 bg-black/22">
                  <button type="button" onClick={() => setQuantity((value) => Math.max(1, value - 1))} className="grid place-items-center text-white/72 hover:bg-white/8">
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="grid place-items-center border-x border-white/10 text-[16px] font-semibold">{quantity}</span>
                  <button type="button" onClick={() => setQuantity((value) => value + 1)} className="grid place-items-center text-white/72 hover:bg-white/8">
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <div className="flex items-end">
                <button
                  type="button"
                  onClick={() => window.open(INSTAGRAM_URL, "_blank", "noopener,noreferrer")}
                  className="flex h-14 w-full items-center justify-center gap-3 rounded-xl bg-[linear-gradient(180deg,#ffe37d,#d4a62b_55%,#a46d08)] text-[14px] font-black uppercase tracking-[0.12em] text-[#130b02] shadow-[0_18px_42px_rgba(212,175,55,0.24)] transition hover:-translate-y-0.5 hover:brightness-110"
                >
                  <Lock className="h-5 w-5" />
                  Comprar
                </button>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setFavorite((value) => !value)}
              className={`mt-4 flex h-13 w-full items-center justify-center gap-3 rounded-xl border text-[12px] font-extrabold uppercase tracking-[0.11em] transition ${
                favorite
                  ? "border-amber-200 bg-amber-300/10 text-amber-100"
                  : "border-amber-300/45 bg-transparent text-amber-200 hover:bg-amber-300/8"
              }`}
            >
              <Heart className={`h-5 w-5 ${favorite ? "fill-current" : ""}`} />
              Adicionar à lista de desejos
            </button>
          </aside>
        </section>

        <SecurityStrip />
        <FragranceSection product={product} />
        <RelatedProducts products={related} />
        <BenefitsStrip />
      </section>
    </main>
  );
}

function ProductTopBar() {
  return (
    <div className="border-b border-amber-300/14 bg-black px-4 py-2 text-[11px] text-white/70">
      <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap gap-5">
          <span className="inline-flex items-center gap-2"><Truck className="h-3.5 w-3.5 text-amber-300" />Envio para todo o Brasil</span>
          <span className="inline-flex items-center gap-2"><CreditCard className="h-3.5 w-3.5 text-amber-300" />Até 18x com juros no cartão</span>
        </div>
        <div className="flex gap-5">
          <a href={INSTAGRAM_URL} className="hover:text-amber-200">Atendimento</a>
          <a href="/#catalog" className="hover:text-amber-200">Rastrear pedido</a>
          <a href={INSTAGRAM_URL} className="hover:text-amber-200">WhatsApp</a>
        </div>
      </div>
    </div>
  );
}

function ProductHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-amber-300/14 bg-[#050403]/92 px-4 py-4 backdrop-blur-xl">
      <div className="mx-auto grid max-w-[1440px] items-center gap-4 lg:grid-cols-[260px_1fr_360px]">
        <a href="/" className="flex items-center gap-3">
          <span className="grid h-12 w-12 place-items-center rounded-2xl border border-amber-300/45 font-[Montserrat,Poppins,system-ui,sans-serif] text-2xl font-black italic text-amber-200 shadow-[0_0_24px_rgba(212,175,55,0.12)]">O</span>
          <span>
            <strong className="block font-[Montserrat,Poppins,system-ui,sans-serif] text-2xl font-black leading-none tracking-[-0.04em] text-white">O REI</strong>
            <small className="text-[9px] font-bold uppercase tracking-[0.26em] text-amber-300">O Rei do Importado Perfumes</small>
          </span>
        </a>
        <nav className="hidden justify-center gap-8 text-[13px] font-semibold text-white/78 lg:flex">
          <a href="/" className="hover:text-amber-200">Início</a>
          <a href="/#catalog" className="hover:text-amber-200">Catálogo</a>
          <a href="/#catalog" className="hover:text-amber-200">Coleções</a>
          <a href="/#sobre" className="hover:text-amber-200">Sobre nós</a>
          <a href="/#contato" className="hover:text-amber-200">Contato</a>
        </nav>
        <div className="flex items-center gap-3">
          <label className="hidden h-11 flex-1 items-center gap-2 border-b border-amber-300/30 text-white/50 md:flex">
            <input className="w-full bg-transparent text-[13px] outline-none placeholder:text-white/38" placeholder="Buscar perfumes..." />
            <Search className="h-5 w-5 text-amber-300" />
          </label>
          <a href={INSTAGRAM_URL} className="grid h-10 w-10 place-items-center text-amber-200"><User className="h-5 w-5" /></a>
          <a href="/#catalog" className="relative grid h-10 w-10 place-items-center text-amber-200">
            <ShoppingBag className="h-5 w-5" />
            <span className="absolute right-0 top-0 grid h-5 w-5 place-items-center rounded-full bg-amber-300 text-[11px] font-black text-black">0</span>
          </a>
        </div>
      </div>
    </header>
  );
}

function SecurityStrip() {
  const cards = [
    { icon: Truck, title: "Calcule o frete e prazo", text: "Digite seu CEP para ver o prazo de entrega", freight: true },
    { icon: ShieldCheck, title: "Compra 100% Segura", text: "Seus dados protegidos com criptografia" },
    { icon: PackageCheck, title: "Entrega Rápida", text: "Para todo o Brasil com rastreamento" },
    { icon: RotateCcw, title: "Troca e Devolução", text: "Até 7 dias após o recebimento" },
  ];

  return (
    <section className="mt-8 grid gap-4 lg:grid-cols-4">
      {cards.map(({ icon: Icon, title, text, freight }) => (
        <div key={title} className="rounded-2xl border border-amber-300/18 bg-black/36 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
          <div className="flex gap-4">
            <Icon className="h-8 w-8 shrink-0 text-amber-300" />
            <div>
              <h3 className="font-semibold text-white">{title}</h3>
              <p className="mt-1 text-[13px] leading-5 text-white/54">{text}</p>
              {freight && (
                <div className="mt-3 flex gap-2">
                  <input className="min-w-0 flex-1 rounded-lg border border-white/12 bg-black/32 px-3 py-2 text-[12px] outline-none placeholder:text-white/35 focus:border-amber-300/60" placeholder="00000-000" />
                  <button className="rounded-lg border border-amber-300/35 px-3 text-[12px] font-bold text-amber-200 hover:bg-amber-300/10">Calcular</button>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

function FragranceSection({ product }: { product: Product }) {
  return (
    <section className="mt-8 grid overflow-hidden rounded-2xl border border-amber-300/18 bg-[linear-gradient(135deg,rgba(255,255,255,0.045),rgba(8,5,3,0.94))] lg:grid-cols-[0.9fr_2.1fr]">
      <div className="border-b border-amber-300/14 bg-amber-300/[0.035] p-7 lg:border-b-0 lg:border-r">
        <h2 className="font-[Montserrat,Poppins,system-ui,sans-serif] text-3xl font-black tracking-[-0.045em] text-white">Sobre a Fragrância</h2>
        <p className="mt-5 text-[14px] leading-7 text-white/64">{product.about}</p>
      </div>
      <div className="grid gap-8 p-7 md:grid-cols-3">
        {noteGroups.map((group) => (
          <div key={group.title}>
            <h3 className="mb-5 font-[Montserrat,Poppins,system-ui,sans-serif] text-lg font-extrabold tracking-[-0.02em] text-white">{group.title}</h3>
            <div className="grid grid-cols-3 gap-3">
              {group.notes.map((note) => (
                <div key={note.name} className="text-center">
                  <div className={`mx-auto h-16 w-16 rounded-full border border-amber-300/55 bg-gradient-to-br ${note.color} shadow-[0_0_22px_rgba(212,175,55,0.18)]`} />
                  <p className="mt-2 text-[11px] leading-tight text-white/76">{note.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function RelatedProducts({ products: relatedProducts }: { products: Product[] }) {
  const carouselProducts = [...relatedProducts, ...relatedProducts];

  return (
    <section className="mt-12 overflow-hidden">
      <div className="mb-6 flex items-end justify-between gap-4">
        <h2 className="font-[Montserrat,Poppins,system-ui,sans-serif] text-3xl font-black tracking-[-0.055em] text-white sm:text-4xl">Produtos Relacionados</h2>
        <a href="/#catalog" className="hidden rounded-full border border-amber-300/35 px-5 py-2 text-[12px] font-bold text-amber-200 hover:bg-amber-300/10 sm:inline-flex">
          Ver todos <ArrowRight className="ml-2 h-4 w-4" />
        </a>
      </div>
      <div className="group/related relative -mx-4 overflow-hidden px-4">
        <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#050403] to-transparent" />
        <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#050403] to-transparent" />
        <div className="flex w-max gap-4 animate-[marquee_55s_linear_infinite] group-hover/related:[animation-play-state:paused] md:gap-6">
        {carouselProducts.map((product, index) => (
          <article key={`${product.name}-${index}`} className="group w-[178px] shrink-0 overflow-hidden rounded-2xl border border-amber-300/14 bg-[#120d09] p-3 transition hover:-translate-y-1 hover:border-amber-300/45 sm:w-[236px] md:w-[280px]">
            <div className="relative aspect-[1/1.08] overflow-hidden rounded-xl bg-[radial-gradient(circle_at_50%_28%,rgba(212,175,55,0.16),transparent_44%),#1a120c]">
              <button className="absolute right-2 top-2 z-10 grid h-8 w-8 place-items-center rounded-full bg-black/45 text-white/70 backdrop-blur"><Heart className="h-4 w-4" /></button>
              {product.image && <img src={product.image} alt={product.name} className="h-full w-full scale-[1.18] object-contain p-0 transition duration-500 group-hover:scale-[1.26]" />}
            </div>
            <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.18em] text-amber-300">{product.brand}</p>
            <h3 className="mt-1 min-h-10 font-[Montserrat,Poppins,system-ui,sans-serif] text-[14px] font-extrabold tracking-[-0.03em] text-white">{titleCase(product.name)}</h3>
            <p className="mt-2 text-[15px] font-black text-amber-200">{product.price}</p>
            <a href={`/produto/${slugify(product.name)}`} className="mt-4 flex h-10 items-center justify-center gap-2 rounded-lg bg-[linear-gradient(180deg,#ffe37d,#d4a62b)] text-[11px] font-black uppercase tracking-[0.08em] text-black">
              Ver detalhes <ShoppingBag className="h-4 w-4" />
            </a>
          </article>
        ))}
        </div>
      </div>
    </section>
  );
}

function BenefitsStrip() {
  const benefits = [
    { icon: BadgeCheck, title: "Produtos 100% Originais", text: "Garantia de procedência" },
    { icon: CreditCard, title: "Parcelamento em até 18x", text: "Com juros • consulte a taxa" },
    { icon: Headphones, title: "Atendimento Premium", text: "Suporte dedicado via WhatsApp" },
    { icon: Heart, title: "Satisfação Garantida", text: "Mais de 10 mil clientes satisfeitos" },
  ];

  return (
    <section className="mt-10 grid gap-3 rounded-2xl border border-amber-300/18 bg-black/36 p-4 md:grid-cols-4">
      {benefits.map(({ icon: Icon, title, text }) => (
        <div key={title} className="flex gap-3 p-3">
          <Icon className="h-7 w-7 shrink-0 text-amber-300" />
          <div>
            <h3 className="text-[14px] font-semibold text-amber-100">{title}</h3>
            <p className="text-[12px] text-white/50">{text}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
