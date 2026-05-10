import { createFileRoute } from "@tanstack/react-router";
import { StorefrontPage } from "./index";

export const Route = createFileRoute("/virtual")({
  component: VirtualStore,
});

function VirtualStore() {
  return <StorefrontPage virtual />;
}
