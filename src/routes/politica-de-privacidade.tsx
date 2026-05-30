import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, privacyPolicyData } from "@/lib/legal-pages";

export const Route = createFileRoute("/politica-de-privacidade")({
  head: () => ({
    meta: [
      { title: "Politica de Privacidade | APIOFICIAL CELLSHOP" },
      {
        name: "description",
        content: "Politica de Privacidade do APIOFICIAL CELLSHOP e do site O Rei do Importado.",
      },
    ],
  }),
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
  return <LegalPage data={privacyPolicyData} />;
}
