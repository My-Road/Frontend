import { FC } from "react";
import { useSelector } from "react-redux";
import {
  selectUserEmail,
  selectIsLoggedIn,
  selectUser
} from "@/features/User";
import { Box } from "@mui/material";

const Home: FC = () => {
  const userEmail = useSelector(selectUserEmail);
  const isLogged = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  return (
    <Box>
      Welcome {user.fullName}
      {isLogged && <Box style={{ display: "block" }}>Hello World with id {user.uid}</Box>}
      <Box>
        Email: {userEmail} 
        User Role: {user.userRole}
      </Box>
    </Box>
  );
};

export default Home;