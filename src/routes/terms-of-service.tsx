import { Navigate, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/terms-of-service")({
  component: TermsAlias,
});

function TermsAlias() {
  return <Navigate to="/termos-de-servico" replace />;
}
