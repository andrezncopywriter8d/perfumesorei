"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

const STYLES = `
.cinematic-footer-wrapper {
  -webkit-font-smoothing: antialiased;
  --pill-bg-1: color-mix(in oklch, white 6%, transparent);
  --pill-bg-2: color-mix(in oklch, white 2%, transparent);
  --pill-border: color-mix(in oklch, white 10%, transparent);
  --pill-bg-1-hover: color-mix(in oklch, white 14%, transparent);
  --pill-bg-2-hover: color-mix(in oklch, white 4%, transparent);
  --pill-border-hover: color-mix(in oklch, #f59e0b 60%, transparent);
}

@keyframes footer-scroll-marquee {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}
.animate-footer-scroll-marquee { animation: footer-scroll-marquee 40s linear infinite; }

.footer-bg-grid {
  background-size: 60px 60px;
  background-image:
    linear-gradient(to right, color-mix(in oklch, white 4%, transparent) 1px, transparent 1px),
    linear-gradient(to bottom, color-mix(in oklch, white 4%, transparent) 1px, transparent 1px);
  mask-image: linear-gradient(to bottom, transparent, black 30%, black 70%, transparent);
  -webkit-mask-image: linear-gradient(to bottom, transparent, black 30%, black 70%, transparent);
}

.footer-aurora {
  background: radial-gradient(circle at 50% 50%,
    color-mix(in oklch, #f59e0b 22%, transparent) 0%,
    color-mix(in oklch, #b45309 14%, transparent) 40%,
    transparent 70%);
}

.footer-glass-pill {
  background: linear-gradient(145deg, var(--pill-bg-1) 0%, var(--pill-bg-2) 100%);
  border: 1px solid var(--pill-border);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}
.footer-glass-pill:hover {
  background: linear-gradient(145deg, var(--pill-bg-1-hover) 0%, var(--pill-bg-2-hover) 100%);
  border-color: var(--pill-border-hover);
  color: #fbbf24;
}

.footer-giant-bg-text {
  font-size: 22vw;
  line-height: 0.8;
  font-weight: 900;
  letter-spacing: -0.05em;
  color: transparent;
  -webkit-text-stroke: 1px color-mix(in oklch, white 8%, transparent);
  background: linear-gradient(180deg, color-mix(in oklch, #f59e0b 22%, transparent) 0%, transparent 70%);
  -webkit-background-clip: text;
  background-clip: text;
}

.footer-text-glow {
  background: linear-gradient(180deg, #fff 0%, color-mix(in oklch, #fbbf24 60%, transparent) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0 0 24px color-mix(in oklch, #f59e0b 30%, transparent));
}

@media (max-width: 768px) {
  .cinematic-footer-wrapper {
    content-visibility: auto;
    contain-intrinsic-size: 720px;
  }

  .footer-aurora {
    width: 125vw !important;
    height: 125vw !important;
    opacity: 0.42 !important;
  }

  .footer-bg-grid {
    background-size: 84px 84px;
    opacity: 0.55;
  }

  .footer-glass-pill {
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
  }

  .footer-giant-bg-text {
    font-size: 34vw;
    bottom: 6vw;
  }

  .footer-text-glow {
    filter: none;
  }
}
`;

type MagneticButtonProps = React.HTMLAttributes<HTMLElement> & {
  as?: React.ElementType;
  href?: string;
  target?: string;
  rel?: string;
};

const MagneticButton = React.forwardRef<HTMLElement, MagneticButtonProps>(
  ({ className, children, as: Component = "button", ...props }, forwardedRef) => {
    return (
      <Component
        ref={(node: HTMLElement | null) => {
          if (typeof forwardedRef === "function") forwardedRef(node);
          else if (forwardedRef) (forwardedRef as React.MutableRefObject<HTMLElement | null>).current = node;
        }}
        className={cn("cursor-pointer transition-transform duration-200 hover:-translate-y-0.5", className)}
        {...props}
      >
        {children}
      </Component>
    );
  }
);
MagneticButton.displayName = "MagneticButton";

const MarqueeItem = () => (
  <div className="flex shrink-0 gap-12 pr-12 text-white/40 text-sm uppercase tracking-[0.3em]">
    <span>Fragrâncias árabes ✦</span>
    <span>Lattafa Oficial ✦</span>
    <span>Entrega para todo Brasil ✦</span>
    <span>Atendimento na loja ✦</span>
    <span>Coleção 2026 ✦</span>
  </div>
);

export interface CinematicFooterProps {
  brand?: string;
  tagline?: string;
  giantText?: string;
  links?: { label: string; href: string }[];
  ctaLabel?: string;
  ctaHref?: string;
}

export function CinematicFooter({
  brand = "O REI",
  tagline = "Fragrâncias que contam histórias eternas.",
  giantText = "O REI",
  links = [
    { label: "Catálogo", href: "#catalog" },
    { label: "Localização", href: "https://share.google/OkcIQzpngPsggMKWr" },
    { label: "Instagram", href: "https://www.instagram.com/oreidoimportadoperfumes/" },
    { label: "TikTok", href: "#" },
  ],
  ctaLabel = "Visite nossa loja",
  ctaHref = "https://share.google/OkcIQzpngPsggMKWr",
}: CinematicFooterProps) {
  return (
    <>
      <style>{STYLES}</style>
      <footer
        className="cinematic-footer-wrapper relative isolate overflow-hidden bg-[#0a0506] text-white pt-32 pb-12"
      >
        <div className="absolute inset-0 footer-bg-grid pointer-events-none" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[1100px] max-h-[1100px] footer-aurora pointer-events-none opacity-70" />

        <div
          aria-hidden
          className="footer-giant-bg-text absolute inset-x-0 bottom-[-4vw] text-center select-none pointer-events-none"
        >
          {giantText}
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-12">
          <div className="text-center mb-16">
            <p className="text-[11.5px] font-medium text-amber-400 uppercase tracking-[0.4em] mb-5">
              {brand}
            </p>
            <h2 className="footer-text-glow text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight max-w-3xl mx-auto leading-[1.05]">
              {tagline}
            </h2>
            <div className="mt-10 flex justify-center">
              <MagneticButton
                as="a"
                href={ctaHref}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-glass-pill inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-[13px] font-medium text-white/90"
              >
                {ctaLabel}
                <span>→</span>
              </MagneticButton>
            </div>
          </div>

          <div
            className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-20"
          >
            {links.map((link) => (
              <MagneticButton
                key={link.label}
                as="a"
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="footer-glass-pill rounded-full px-5 py-2.5 text-[12.5px] font-medium text-white/70"
              >
                {link.label}
              </MagneticButton>
            ))}
          </div>

          <div className="overflow-hidden mb-12 [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
            <div className="flex w-max animate-footer-scroll-marquee">
              <MarqueeItem />
              <MarqueeItem />
              <MarqueeItem />
              <MarqueeItem />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10 text-[12px] text-white/40">
            <p>© {new Date().getFullYear()} {brand} Importados. Todos os direitos reservados.</p>
            <p>Feito com cuidado em Teresina — PI</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default CinematicFooter;
