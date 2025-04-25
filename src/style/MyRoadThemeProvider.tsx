import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { PropsWithChildren } from "react";
import MyRoadTheme from "./MyRoadTheme";

const MyRoadThemeProvider = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider theme={MyRoadTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default MyRoadThemeProvider;
