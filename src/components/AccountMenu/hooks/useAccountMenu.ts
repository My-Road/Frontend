import { logout, selectUser } from "@/features/User";
import useMediaQuery from "@/hooks/useMediaQuery";
import { clearSession } from "@/lib/session";
import getAvatarAbbreviation from "@/utils/getAvatarAbbreviation";
import { MouseEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

const useAccountMenu = () => {
  const dispatch = useDispatch();

  const { isMobile } = useMediaQuery();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const {
    userName,
    // avatarUrl,
    fullName,
    // roles,
  } = useSelector(selectUser);

  const avatarUrl = "";
  // const role = useAppSelector(selectUserRole);

  const userInitial = getAvatarAbbreviation(userName ?? "");

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const navigate = useNavigate();

  const handleLogOut = () => {
    clearSession();
    dispatch(logout());
    navigate("/");
  };

  return {
    isMobile,
    anchorEl,
    open,
    userName,
    avatarUrl,
    fullName,
    // role,
    userInitial,
    handleClick,
    handleClose,
    handleLogOut,
  };
};

export default useAccountMenu;
