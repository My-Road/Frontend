import { PaginationProps, SearchParams } from "@/types";

export const APP_SIDE_DRAWER_WIDTH = 240;

export const NAVBAR_HEIGHT = 64;

export const APP_LAYOUT_CONTAINER_ID = "myRoad-app-layout-container";

//remove it with deployment
export const MAIN_COLOR_HEX = "#1976d2";

export const FILTER_DELAY_TIME = 1000;

export const GRID_PAGE_SIZE_OPTIONS = [50, 100, 200];

export const DEFAULT_PAGE_SIZE = 50;

export const DEFAULT_PAGINATION_MODEL = {
  page: 0,
  pageSize: DEFAULT_PAGE_SIZE,
};

export const ROLES = [
    {
    name: "Admin",
    role: 2,
  },
  {
    name: "Manager",
    role: 3,
  },
];

export const DEFAULT_SEARCH_PARAMS: SearchParams = {
  page: 0,
  pageSize: 15,
  filters: "",
};


export const DEFAULT_PAGINATION_PROPS: PaginationProps = {
  page: 0,
  pageSize: 15,
};

