import { BookmarkIcon } from "@heroicons/react/24/outline";
import { createFileRoute } from "@tanstack/react-router";
import { AboutSearchHeader } from "../features/about";

export const Route = createFileRoute("/about")({
  component: About,
});

function About() {
  return (
    <>
      <div className="bg-white border-b border-b-gray-150 px-6 py-5">
        <div className="flex items-center pb-2">
          <h1 className="text-2xl font-bold">About</h1>
          <button
            type="button"
            className="btn btn-light-outline min-w-fit rounded-full size-8 p-0"
            title="Bookmark this page"
          >
            <BookmarkIcon className="w-7 h-7" />
          </button>
        </div>
        <AboutSearchHeader />
      </div>
    </>
  );
}
