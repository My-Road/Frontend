export interface AddCustomerPayLoad {
  fullName: string;
  email: string;
  phoneNumber: string;
  address: string;
}

export interface Customer {
  fullName: string;
  email: string;
  phoneNumber: string;
  address: string;
  totalPaidAmount: number;
  totalDueAmount: number;
  isDeleted: boolean;
  deletedAt: string | null;
  remainingAmount: number;
  orders: any[];
  customerPayments: any[];
  id: number;
}

export interface SearchResponse {
  items: Customer[];
  totalCount: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

export interface SearchParams {
  page?: number;
  pageSize?: number;
  filters?: string;
  sorts?: string
}
