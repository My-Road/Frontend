import { House } from "lucide-react";
import GroupsIcon from "@mui/icons-material/Groups";

import { IAppMenuItem } from "@/types";

const useAppMenuNavigation = () => {
  const appMenuItems: IAppMenuItem[] = [
    {
      label: "Home",
      link: "/me",
      Icon: () => <House />,
    },
    {
      label: "Customers",
      link: "/me/customers",
      Icon: () => <GroupsIcon />,
    },
  ];

  return {
    appMenuItems,
  };
};

export default useAppMenuNavigation;
