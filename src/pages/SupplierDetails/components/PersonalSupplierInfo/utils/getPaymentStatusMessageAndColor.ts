import { TFunction } from "i18next";

export function getPaymentStatusMessageAndColor(
  totalDue: number,
  remaining: number,
  t: TFunction
): { message: string; bgColor: string; textColor: string } {
  if (totalDue === 0) {
    return {
      message: t("Messages.noPurchases"),
      bgColor: "#e0e0e0",
      textColor: "#000",
    };
  } else if (remaining > 0) {
    return {
      message: t("Messages.youHavePayToSupplier"),
      bgColor: "#f44336",
      textColor: "#fff",
    };
  } else {
    return {
      message: t("Messages.fullyPaidToSupplier"),
      bgColor: "#2e7d32",
      textColor: "#fff",
    };
  }
}
