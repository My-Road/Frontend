import { House } from "lucide-react";
import GroupsIcon from "@mui/icons-material/Groups";
import BadgeTwoToneIcon from '@mui/icons-material/BadgeTwoTone';
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
    {
      label: "Employess",
      link: "/me/employees",
      Icon: () => <BadgeTwoToneIcon />,
    },
  ];

  return {
    appMenuItems,
  };
};

export default useAppMenuNavigation;
