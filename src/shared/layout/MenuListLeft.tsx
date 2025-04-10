import { ShoppingBagIcon } from "@heroicons/react/20/solid";
import { iconHome, iconInfo, iconSetting, iconUserGroup } from "./iconHero";

interface IMenuLeft {
  name: string;
  href?: string;
  icon?: React.ReactNode | SVGElement;
  menuchild?: IMenuLeft[];
}

export const menuLeftItem: IMenuLeft[] = [
  { name: "Home", href: "/", icon: iconHome },
  { name: "About", href: "/about", icon: iconInfo },
  {
    name: "users",
    href: "/users",
    icon: iconUserGroup,
    menuchild: [
      { name: "List User", href: "/users/list-user" },
      { name: "Create User", href: "/users/create-user" },
    ],
  },
  {
    name: "Product",
    href: "/product",
    icon: <ShoppingBagIcon className="w-6 h-6" />,
    menuchild: [
      { name: "List Product", href: "/product/list-product" },
      { name: "Create Product", href: "/product/create-product" },
    ],
  },
  { name: "Settings", href: "/settings", icon: iconSetting },
];
