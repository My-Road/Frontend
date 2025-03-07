import Cookies from "js-cookie";

export const setSession = (token: string) => {
  Cookies.set(import.meta.env.VITE_TOKEN_ACCESS_KEY, token, {
    expires: 10 / 24,
  });
};

export const getSession = () => {
  return Cookies.get(import.meta.env.VITE_TOKEN_ACCESS_KEY);
};

export const clearSession = () => {
  Cookies.remove(import.meta.env.VITE_TOKEN_ACCESS_KEY);
};

export const setRefreshSession = (token: string) => {
  Cookies.set(import.meta.env.VITE_REFRESH_TOKEN_ACCESS_KEY, token, {
    expires: 1 / 24,
  });
};

export const getRefreshSession = () => {
  return Cookies.get(import.meta.env.VITE_REFRESH_TOKEN_ACCESS_KEY);
};

export const clearRefreshSession = () => {
  Cookies.remove(import.meta.env.VITE_REFRESH_TOKEN_ACCESS_KEY);
};
