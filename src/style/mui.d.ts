import { CrystalPalette } from "./types";

declare module "@mui/material" {
  interface Palette {
    userAvatar: CrystalPalette["userAvatar"];
    appMenu: CrystalPalette["appMenu"];
  }

  interface PaletteOptions {
    userAvatar: CrystalPalette["userAvatar"];
    appMenu: CrystalPalette["appMenu"];
  }

  interface Theme {
    mixins: AnharThemeMixins;
    palette: Palette;
  }
}
