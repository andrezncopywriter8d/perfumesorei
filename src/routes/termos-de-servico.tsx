import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, termsData } from "@/lib/legal-pages";

export const Route = createFileRoute("/termos-de-servico")({
  head: () => ({
    meta: [
      { title: "Termos de Servico | APIOFICIAL CELLSHOP" },
      {
        name: "description",
        content: "Termos de Servico do APIOFICIAL CELLSHOP e do site O Rei do Importado.",
      },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return <LegalPage data={termsData} />;
}
