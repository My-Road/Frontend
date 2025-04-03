import { FC } from "react";
import { useSelector } from "react-redux";
import {
  selectUserEmail,
  selectIsLoggedIn,
  selectUser
} from "@/features/User";

const Home: FC = () => {
  const userEmail = useSelector(selectUserEmail);
  const isLogged = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  return (
    <div>
      Welcome {userEmail}
      {isLogged && <div style={{ display: "block" }}>Hello World with id {user.uid}</div>}
    </div>
  );
};

export default Home;