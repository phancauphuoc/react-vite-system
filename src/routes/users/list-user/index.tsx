import { createFileRoute } from "@tanstack/react-router";
import { AgGridReact } from "ag-grid-react";
import { useState } from "react";
import { ColDef } from "ag-grid-community";
import { dataListUser, IRowDataUser } from "../../../entities/users/listUser";
import { BookmarkIcon } from "@heroicons/react/24/outline";

export const Route = createFileRoute("/users/list-user/")({
  component: ListUser,
});

function ListUser() {
  const [rowData, setRowData] = useState<IRowDataUser[]>(dataListUser);

  const columnDefs: ColDef<IRowDataUser>[] = [
    { field: "id", headerName: "ID" },
    { field: "name", headerName: "Name" },
    { field: "email", headerName: "Email" },
    { field: "birthDaty", headerName: "BirthDay" },
    { field: "gender", headerName: "Gender" },
  ];

  return (
    <>
      <div className="bg-white border-b border-b-gray-150 px-6 py-5 flex flex-col gap-2.5">
        <h1 className="h1 font-bold text-xl flex items-center gap-2.5">
          List User
          <button
            type="button"
            className="btn btn-light-outline min-w-fit rounded-full flex items-center justify-center size-8 p-0"
            title="Bookmark this page"
          >
            <BookmarkIcon className="w-6 h-6" />
          </button>
        </h1>
        <hr className="border-gray-200 mb-2.5" />
      </div>
      <AgGridReact rowData={rowData} columnDefs={columnDefs} />
    </>
  );
}
