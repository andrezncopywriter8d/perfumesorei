import { Navigate, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy-policy")({
  component: PrivacyPolicyAlias,
});

function PrivacyPolicyAlias() {
  return <Navigate to="/politica-de-privacidade" replace />;
}
