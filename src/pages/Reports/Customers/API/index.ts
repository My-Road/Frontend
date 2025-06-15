import { axiosInstance } from "@/config/axios.config";
import { SearchParams } from "@/types";
import { SearchResponseForOrders } from "../types";

export const searchCustomersOrdersAPI = async (params?: SearchParams) => {
  const res = await axiosInstance.post<SearchParams>(
    `/api/v1/order/search`,
    params
  );
  return res.data as SearchResponseForOrders;
};

export const downloadCustomerReport = async (params?: SearchParams) => {
  const res = await axiosInstance.post(`/api/v1/report/orders-report`, params, {
    responseType: "blob",
  });

  const url = window.URL.createObjectURL(new Blob([res.data]));
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", "customer_orders_report.pdf");
  document.body.appendChild(link);
  link.click();
  link.remove();
};
