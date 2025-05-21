import { TFunction } from "i18next";

export type StatusColor = "text.primary" | "error" | "success.main";

export function getPaymentStatusMessageAndColor(
  totalDue: number,
  remaining: number,
  t: TFunction
): { message: string; color: StatusColor } {
  if (totalDue === 0) {
    return { message: t("Messages.noPurchases"), color: "text.primary" };
  } else if (remaining > 0) {
    return { message: t("Messages.youHavePayToSupplier"), color: "error" };
  } else {
    return { message: t("Messages.fullyPaidToSupplier"), color: "success.main" }; 
  }
}

