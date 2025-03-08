// MUI
import {
  Button,
  CardContent,
  Grid,
  IconButton,
  Menu,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";

import { TabContext, TabPanel } from "@mui/lab";

// icons
import LogoutIcon from "@mui/icons-material/PowerSettingsNew";

// project imports
import UserAvatar from "@/components/UserAvatar";
import { FC } from "react";
import ProfileTab from "./ProfileTab";
import { AccountMenuContext } from "./context/AccountMenuContext";
import useAccountMenu from "./hooks/useAccountMenu";
import { menuSlotProps } from "./styles";
import classes from "./styles.module.css";
//   import { useLocation } from "react-router"

const AccountMenu: FC = () => {
  const {
    anchorEl,
    open,
    userName,
    fullName,
    userInitial,
    // role,
    isMobile,
    handleClick,
    handleClose,
    handleLogOut,
  } = useAccountMenu();

  // const { pathname } = useLocation()

  // // close menu on route change
  // useEffect(() => {
  //   return () => {
  //     handleClose()
  //   }
  // }, [pathname])

  return (
    <AccountMenuContext.Provider
      value={{
        onClose: handleClose,
        onLogOut: handleLogOut,
      }}
    >
      <Tooltip title="Account settings">
        <Button
          onClick={handleClick}
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          startIcon={<UserAvatar fullName={fullName!} initials={userInitial} />}
          sx={{
            textTransform: "none",
            color: (theme) => theme.palette.grey[50],
          }}
        >
          {!isMobile && userName}
        </Button>
      </Tooltip>

      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        // onClick={handleClose}
        slotProps={menuSlotProps}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        // anchorPosition={}
      >
        <CardContent sx={{ width: "350px" }}>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item>
              <Stack direction="row" spacing={1.25} alignItems="center">
                <UserAvatar fullName={fullName ?? ""} initials={userInitial} />
                <Stack>
                  <Typography variant="subtitle2">{fullName}</Typography>
                  {/* <Typography variant="caption" color="textSecondary">
                    {role}
                  </Typography> */}
                </Stack>
              </Stack>
            </Grid>

            <Grid item>
              <Tooltip title="Logout">
                <IconButton size="large" onClick={handleLogOut}>
                  <LogoutIcon />
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
        </CardContent>

        <TabContext value={"profile"}>
          <TabPanel
            value="profile"
            classes={{
              root: classes.tabPanelRoot,
            }}
          >
            <ProfileTab handleClose={handleClose} />
          </TabPanel>
        </TabContext>
      </Menu>
    </AccountMenuContext.Provider>
  );
};

export default AccountMenu;
