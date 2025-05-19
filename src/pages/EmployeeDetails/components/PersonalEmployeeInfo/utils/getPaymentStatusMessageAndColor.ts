import { TFunction } from "i18next";

export type StatusColor = "text.primary" | "error" | "success.main";

export function getPaymentStatusMessageAndColor(
  totalDue: number,
  remaining: number,
  t: TFunction
): { message: string; color: StatusColor } {
  if (totalDue === 0) {
    return { message: t("Messages.noLogs"), color: "text.primary" };
  } else if (remaining > 0) {
    return { message: t("Messages.youHavePayToEmployee"), color: "error" };
  } else {
    return { message: t("Messages.fullyPaidToEmployee"), color: "success.main" }; 
  }
}