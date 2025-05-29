import { House } from "lucide-react";
import GroupsIcon from "@mui/icons-material/Groups";
import BadgeTwoToneIcon from "@mui/icons-material/BadgeTwoTone";
import { IAppMenuItem } from "@/types";
import InventorySharpIcon from "@mui/icons-material/InventorySharp";
import AppRegistrationRoundedIcon from '@mui/icons-material/AppRegistrationRounded';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import { useAppSelector } from "@/store";
import { selectUserRole } from "@/features/User";

const useAppMenuNavigation = () => {
  const userRole = useAppSelector(selectUserRole)
  const isForAdminOrManager = userRole === "Admin" || userRole === "Manager" 
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
      useIsVisible: () => isForAdminOrManager
    },
    {
      label: "Employees",
      link: "/me/employees",
      Icon: () => <BadgeTwoToneIcon />,
      useIsVisible: () => isForAdminOrManager
    },
    {
      label: "Suppliers",
      link: "/me/suppliers",
      Icon: () => <InventorySharpIcon />,
      useIsVisible: () => isForAdminOrManager
    },
    {
      label: "User Registration",
      link: "/me/register",
      Icon: () => <AppRegistrationRoundedIcon />,
      useIsVisible: () => !isForAdminOrManager
    },
    {
      label: "Reports",
      Icon: () => <ReceiptLongIcon/>,
      items: [{
        label: "Customers Reports",
        link: "/me/reports/customers-orders"
      }]
    }
  ];

  return {
    appMenuItems,
  };
};

export default useAppMenuNavigation;
