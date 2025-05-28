
export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  role: number;
  isActive : boolean;
}

export interface SearchParams {
  page?: number;
  pageSize?: number;
  filters?: string;
  sorts?: string
}

export interface SearchResponseForUsers extends SearchParams {
  items: User[];
  totalCount: number;
}
