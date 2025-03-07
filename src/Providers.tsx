import CrystalQueryClientProvider from "@/containers/MyRoadQueryClientProvider";
import CrystalStore from "@/store/store";
import CrystalThemeProvider from "@/style/CrystalThemeProvider";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { FC, PropsWithChildren } from "react";
import { Provider } from "react-redux";
import createCache from "@emotion/cache";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const cache = createCache({
  key: "material-ui-rtl",
  stylisPlugins: [rtlPlugin],
});

const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Provider store={CrystalStore}>
      <CacheProvider value={cache}>
        <CrystalQueryClientProvider>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <CrystalThemeProvider>{children}</CrystalThemeProvider>
            <ReactQueryDevtools
              initialIsOpen={false}
              position="right"
              buttonPosition="bottom-right"
            />
          </LocalizationProvider>
        </CrystalQueryClientProvider>
      </CacheProvider>
    </Provider>
  );
};

export default Providers;
