import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "OREI PERFUMES" },
      { name: "description", content: "Perfumes importados e fragrâncias árabes selecionadas pelo O Rei do Importado Perfumes." },
      { name: "author", content: "OREI PERFUMES" },
      { property: "og:title", content: "OREI PERFUMES" },
      { property: "og:description", content: "Perfumes importados e fragrâncias árabes selecionadas pelo O Rei do Importado Perfumes." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@oreidoimportadoperfumes" },
      { name: "twitter:title", content: "OREI PERFUMES" },
      { name: "twitter:description", content: "Perfumes importados e fragrâncias árabes selecionadas pelo O Rei do Importado Perfumes." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/cb8b2b22-32a8-41d9-a1c0-b658b6bcdf27/id-preview-3ea9235a--d2dab7e0-32dd-45b4-8820-184b4a0cf930.lovable.app-1778380391118.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/cb8b2b22-32a8-41d9-a1c0-b658b6bcdf27/id-preview-3ea9235a--d2dab7e0-32dd-45b4-8820-184b4a0cf930.lovable.app-1778380391118.png" },
    ],
    links: [
      {
        rel: "icon",
        type: "image/svg+xml",
        href: "/favicon.svg",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32.png",
      },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png",
      },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700;800;900&family=Poppins:wght@300;400;500;600;700;800&display=swap",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
      <WhatsAppSupportButton />
    </QueryClientProvider>
  );
}

function WhatsAppSupportButton() {
  return (
    <a
      href="https://wa.me/8695131637"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-support-button"
      aria-label="Falar com o suporte pelo WhatsApp"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 32 32"
        className="whatsapp-support-icon"
      >
        <path d="M16.01 3.2c-7.05 0-12.79 5.66-12.79 12.62 0 2.22.59 4.39 1.7 6.3L3.1 28.8l6.91-1.78a12.97 12.97 0 0 0 6 1.5h.01c7.05 0 12.79-5.66 12.79-12.63 0-3.37-1.33-6.54-3.74-8.93a12.78 12.78 0 0 0-9.06-3.76Zm0 23.18h-.01a10.8 10.8 0 0 1-5.5-1.5l-.39-.23-4.1 1.06 1.1-3.9-.26-.4a10.25 10.25 0 0 1-1.61-5.59c0-5.78 4.83-10.48 10.77-10.48 2.88 0 5.59 1.1 7.62 3.11a10.35 10.35 0 0 1 3.16 7.44c0 5.79-4.83 10.49-10.78 10.49Zm5.9-7.85c-.32-.16-1.91-.93-2.2-1.04-.3-.1-.52-.16-.74.16-.21.32-.85 1.04-1.04 1.25-.19.21-.38.24-.7.08-.33-.16-1.38-.5-2.63-1.61-.97-.86-1.63-1.92-1.82-2.24-.19-.32-.02-.5.14-.66.15-.15.33-.38.49-.56.16-.19.21-.32.32-.53.11-.22.05-.4-.03-.56-.08-.16-.73-1.73-1-2.37-.26-.62-.53-.54-.73-.55h-.63c-.21 0-.56.08-.85.4-.29.32-1.11 1.07-1.11 2.61 0 1.54 1.14 3.03 1.3 3.24.16.21 2.25 3.37 5.45 4.73.76.32 1.35.51 1.82.65.76.24 1.46.2 2.01.12.61-.09 1.91-.77 2.18-1.52.27-.75.27-1.39.19-1.52-.08-.13-.29-.21-.62-.37Z" />
      </svg>
    </a>
  );
}
