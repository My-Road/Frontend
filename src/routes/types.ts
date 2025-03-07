export interface PageAccessRight {
  role: string;
}

export type PageAccessName = "Home";

export interface RouteConfigs {
  title: string;
  pageAccessName?: PageAccessName;
}
