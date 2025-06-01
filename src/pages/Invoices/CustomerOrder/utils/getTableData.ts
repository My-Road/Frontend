import { Order } from "@/types";
import { TFunction } from "i18next";

export const getTableDate = (order: Order, t: TFunction) => {
  const tableData = [
    {
      label: "تاريخ الطلب",
      value: new Date(order.orderDate).toLocaleDateString(),
    },
    { label: t("Invoice.Labels.recipientName"), value: order.recipientName },
    {
      label: t("Invoice.Labels.recipientPhoneNumber"),
      value: order.recipientPhoneNumber,
    },
    { label: t("Invoice.Labels.quantity"), value: order.quantity },
    { label: t("Invoice.Labels.price"), value: order.price },
    {
      label: t("Invoice.Labels.totalDueAmount"),
      value: `${order.totalDueAmount} شيكل`,
    },
    {
      label: t("Invoice.Labels.notes"),
      value: order.notes?.trim() || "لا يوجد",
    },
    {
      label: t("Invoice.Labels.orderComplete"),
      value: order.isCompleted ? "نعم" : "لا",
    },
  ];

  return tableData;
};

export const getTableHeader = (order: Order, t: TFunction) => {
  const tableHeader = [
    {
      label: t("Invoice.Labels.customerName"),
      value: order.customer?.customerName?? "",
    },
    { label: t("Invoice.Labels.address"), value: order.customer?.address?? "" },
  ];
  return tableHeader;
};
