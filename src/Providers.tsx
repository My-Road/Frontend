import MyRoadQueryClientProvider from "@/containers/MyRoadQueryClientProvider";
import MyRoad from "@/store/store";
import MyRoadThemeProvider from "@/style/MyRoadThemeProvider";
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
    <Provider store={MyRoad}>
      <CacheProvider value={cache}>
        <MyRoadQueryClientProvider>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <MyRoadThemeProvider>{children}</MyRoadThemeProvider>
            <ReactQueryDevtools
              initialIsOpen={false}
              position="right"
              buttonPosition="bottom-right"
            />
          </LocalizationProvider>
        </MyRoadQueryClientProvider>
      </CacheProvider>
    </Provider>
  );
};

export default Providers;
