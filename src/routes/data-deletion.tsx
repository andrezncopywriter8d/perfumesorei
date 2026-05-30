import { Navigate, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/data-deletion")({
  component: DataDeletionAlias,
});

function DataDeletionAlias() {
  return <Navigate to="/exclusao-de-dados" replace />;
}
