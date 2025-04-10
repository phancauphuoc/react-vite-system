import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/users/list-user/")({
  component: ListUser,
});

function ListUser() {
  return <div className="p-2">Hello from List User!</div>;
}
