// MUI
import {
  Divider,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
} from "@mui/material";

// icons
import PasswordIcon from "@mui/icons-material/Password";
import UserIcon from "@mui/icons-material/PermIdentity";
import LogoutIcon from "@mui/icons-material/PowerSettingsNew";

// project imports
import { useNavigate } from "react-router";

import useAccountContext from "./context/useAccountContext";
// import { selectIsEmployeeUser } from "@/features/user";

interface IProps {
  handleClose: () => void;
}

const ProfileTab = ({ handleClose }: IProps) => {
  const navigate = useNavigate();

  const { onLogOut } = useAccountContext();
  // const isEmployeeUser = useAppSelector(selectIsEmployeeUser);

  const handleProfileClick = () => {
    // navigate("/me/employee-profile");
    setTimeout(() => {
      handleClose();
    }, 600);
  };

  const handleChangePassword = () => {
    navigate("/me/change-password");
    setTimeout(() => {
      handleClose();
    }, 600);
  };

  return (
    <MenuList>
      <MenuItem onClick={handleProfileClick}>
        <ListItemIcon>
          <UserIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>Profile</ListItemText>
      </MenuItem>

      <MenuItem onClick={handleChangePassword}>
        <ListItemIcon>
          <PasswordIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>Change password</ListItemText>
      </MenuItem>

      <Divider />

      <MenuItem onClick={onLogOut}>
        <ListItemIcon>
          <LogoutIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>Logout</ListItemText>
      </MenuItem>
    </MenuList>
  );
};

export default ProfileTab;
