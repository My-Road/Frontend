import { House } from "lucide-react";
import GroupsIcon from "@mui/icons-material/Groups";
import BadgeTwoToneIcon from "@mui/icons-material/BadgeTwoTone";
import { IAppMenuItem } from "@/types";
import InventorySharpIcon from "@mui/icons-material/InventorySharp";
import AppRegistrationRoundedIcon from "@mui/icons-material/AppRegistrationRounded";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import { useAppSelector } from "@/store";
import { selectUserRole } from "@/features/User";
import GroupIcon from "@mui/icons-material/Group";
const useAppMenuNavigation = () => {
  const userRole = useAppSelector(selectUserRole);
  const isAdmin = userRole === "Admin";
  const isFactoryOwner = userRole === "FactoryOwner";
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
      label: "Employees",
      link: "/me/employees",
      Icon: () => <BadgeTwoToneIcon />,
    },
    {
      label: "Suppliers",
      link: "/me/suppliers",
      Icon: () => <InventorySharpIcon />,
    },
    {
      label: "Reports",
      Icon: () => <ReceiptLongIcon />,
      items: [
        {
          label: "Customers Reports",
          link: "/me/reports/customers-orders",
        },
        {
          label: "Employees Reports",
          link: "/me/reports/employees-logs",
        },
        {
          label: "Purchases Reports",
          link: "/me/reports/purchases",
        },
      ],
      useIsVisible: () => isFactoryOwner || isAdmin,
    },
    {
      label: "Users",
      link: "/me/users",
      Icon: () => <GroupIcon />,
      useIsVisible: () => isFactoryOwner,
    },
    {
      label: "User Registration",
      link: "/me/register",
      Icon: () => <AppRegistrationRoundedIcon />,
      useIsVisible: () => isFactoryOwner,
    },
  ];

  return {
    appMenuItems,
  };
};

export default useAppMenuNavigation;
