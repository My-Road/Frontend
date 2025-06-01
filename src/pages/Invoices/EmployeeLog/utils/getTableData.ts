import { EmployeeLog } from "@/types";
import { TFunction } from "i18next";

export const getTableDate = (log: EmployeeLog, t: TFunction) => {
  const tableData = [
    {
      label: t("Invoice.Labels.logDate"),
      value: new Date(log.date).toLocaleDateString(),
    },
    { label: t("Invoice.Labels.checkIn"), value: log.checkIn },
    {
      label: t("Invoice.Labels.checkOut"),
      value: log.checkOut,
    },
    { label: t("Invoice.Labels.hourlyWage"), value: log.hourlyWage },
    { label: t("Invoice.Labels.totalHours"), value: log.totalHours },
    { label: t("Invoice.Labels.dailyWage"), value: log.dailyWage },
    {
      label: t("Invoice.Labels.notes"),
      value: log.notes?.trim() || "لا يوجد",
    },
    {
      label: t("Invoice.Labels.employeeLogComplete"),
      value: log.isCompleted ? "نعم" : "لا",
    },
  ];

  return tableData;
};

export const getTableHeader = (log: EmployeeLog, t: TFunction) => {
  const tableHeader = [
    {
      label: t("Invoice.Labels.employeeName"),
      value: log.employee?.employeeName?? "",
    },
    { label: t("Invoice.Labels.address"), value: log.employee?.address?? "" },
  ];
  return tableHeader;
};
