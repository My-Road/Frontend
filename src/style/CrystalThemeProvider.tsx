import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { PropsWithChildren } from "react";
import anharTheme from "./crystalTheme";

const CrystalThemeProvider = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider theme={anharTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default CrystalThemeProvider;
