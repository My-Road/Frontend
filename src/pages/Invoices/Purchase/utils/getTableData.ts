import { Purchase } from "@/types";
import { TFunction } from "i18next";
export const getTableDate = (purchase: Purchase, t: TFunction) => {
  const tableData = [
    {
      label: "تاريخ الشراء",
      value: new Date(purchase.purchasesDate).toLocaleDateString(),
    },
    {
      label: t("Invoice.Labels.goodsDeliverer"),
      value: purchase.goodsDeliverer,
    },
    {
      label: t("Invoice.Labels.goodsDelivererPhoneNumber"),
      value: purchase.goodsDelivererPhoneNumber,
    },
    {
      label: t("Invoice.Labels.quantity"),
      value: purchase.quantity,
    },
    {
      label: t("Invoice.Labels.price"),
      value: purchase.price,
    },
     {
      label: t("Invoice.Labels.totalDueAmount"),
      value: `${purchase.totalDueAmount} شيكل`,
    },
    {
      label: t("Invoice.Labels.purchaseComplete"),
      value: purchase.isCompleted ? "نعم" : "لا",
    },
  ];

  return tableData;
};

export const getTableHeader = (purchase: Purchase, t: TFunction) => {
  const tableHeader = [
    {
      label: t("Invoice.Labels.supplierName"),
      value: purchase.supplier?.supplierName ?? "",
    },
    {
      label: t("Invoice.Labels.address"),
      value: purchase.supplier?.address ?? "",
    },
  ];
  return tableHeader;
};

