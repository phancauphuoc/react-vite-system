import { BookmarkIcon } from "@heroicons/react/24/outline";
import { createFileRoute } from "@tanstack/react-router";
import { AboutSearchHeader } from "../features/about";
import { AgGridReact } from "ag-grid-react";
import { ColDef } from "ag-grid-community";
import { useState } from "react";

export const Route = createFileRoute("/about")({
  component: About,
});

interface IrowData {
  make: string;
  model: string;
  price: number;
  electric: boolean;
}

function About() {
  const [rowData, setRowData] = useState<IrowData[]>([
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
  ]);

  const colDefs: ColDef<IrowData>[] = [
    { field: "make", headerName: "Make" },
    { field: "model", headerName: "Model" },
    { field: "price" },
    { field: "electric" },
  ];

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
      {/* <div className="h-[500px] px-6 py-5"> */}
      <AgGridReact
        rowData={rowData}
        columnDefs={colDefs}
        // className="min-h-[400px] h-[400px] w-full overflow-x-auto"
      />
      {/* </div> */}
    </>
  );
}
