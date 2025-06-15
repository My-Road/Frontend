import { axiosInstance } from "@/config/axios.config";
import { SearchParams } from "@/types";
import { SearchResponseForPurchases } from "@/pages/Reports/Purchases/types";

export const searchPurchasesAPI = async ( params?: SearchParams) => {
  const res = await axiosInstance.post<SearchParams>(
    `/api/v1/purchases/search`,
    params
  );
  return res.data as SearchResponseForPurchases;
};

export const downloadPurchasesReport = async (params?: SearchParams) => {
  const res = await axiosInstance.post(`/api/v1/report/purchase-report`, params, {
    responseType: "blob",
  });

  const url = window.URL.createObjectURL(new Blob([res.data]));
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", "Purchases_report.pdf");
  document.body.appendChild(link);
  link.click();
  link.remove();
};
