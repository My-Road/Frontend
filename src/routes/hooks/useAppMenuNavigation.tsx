import { House } from "lucide-react";

import { IAppMenuItem } from "@/types";

const useAppMenuNavigation = () => {
  const appMenuItems: IAppMenuItem[] = [
    {
      label: "Home",
      link: "/me",
      Icon: () => <House />,
    },
  ];

  return {
    appMenuItems,
  };
};

export default useAppMenuNavigation;
