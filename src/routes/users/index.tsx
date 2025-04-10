import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/users/")({
  component: Users,
});

function Users() {
  return <div className="p-2">Hello from Users!</div>;
}
