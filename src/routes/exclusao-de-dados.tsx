import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, dataDeletionData } from "@/lib/legal-pages";

export const Route = createFileRoute("/exclusao-de-dados")({
  head: () => ({
    meta: [
      { title: "Exclusao de Dados | APIOFICIAL CELLSHOP" },
      {
        name: "description",
        content: "Instrucoes para solicitacao de exclusao de dados do APIOFICIAL CELLSHOP.",
      },
    ],
  }),
  component: DataDeletionPage,
});

function DataDeletionPage() {
  return <LegalPage data={dataDeletionData} />;
}
