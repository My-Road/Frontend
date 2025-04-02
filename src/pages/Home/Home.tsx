import { FC } from "react";
import { useSelector } from "react-redux";
import { selectUserEmail } from "@/features/User";

const Home: FC = () => {
  const userEmail = useSelector(selectUserEmail); 
  return <div>Welcome {userEmail}</div>;
};

export default Home;
