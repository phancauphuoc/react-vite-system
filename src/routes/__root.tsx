import { createRootRoute, Outlet } from "@tanstack/react-router";
import MenuLeft from "../shared/layout/MenuLeft";
import MenuTop from "../shared/layout/MenuTop";

export const Route = createRootRoute({
  component: () => (
    <div className="flex h-screen">
      {/* <div className="w-64 bg-gray-800 text-white"> */}
      <MenuLeft />
      {/* </div> */}
      <div className="flex-1 overflow-auto">
        <MenuTop />
        <Outlet /> {/* Đây là chỗ render các route con */}
      </div>
    </div>
  ),
});
