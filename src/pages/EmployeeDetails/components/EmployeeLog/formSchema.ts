import * as yup from "yup";
import { EmployeeLogPayload } from "../../types";

export const employeeLogValidationSchema: yup.ObjectSchema<EmployeeLogPayload> = yup.object({
  createdByUserId: yup
    .number()
    .required("CreatedByUser is required"),

  employeeId: yup
    .number()
    .required("Employee is required"),

  notes: yup
    .string()
    .trim()
    .min(1, "Please enter the notes")
    .required("Please enter the notes"),

    date: yup
    .string()
    .required("Please select a date")
    .test("is-valid-date", "Please enter a valid date", (value) => {
      return value ? !isNaN(Date.parse(value)) : false;
    }),
  

  checkIn: yup
    .string()
    .matches(/^([01]\d|2[0-3]):([0-5]\d)(:[0-5]\d)?$/, "Check-in must be in HH:mm or HH:mm:ss format")
    .required("Check-in time is required"),

    checkOut: yup
    .string()
    .matches(/^([01]\d|2[0-3]):([0-5]\d)(:[0-5]\d)?$/, "Check-out must be in HH:mm or HH:mm:ss format")
    .required("Check-out time is required")
    .test(
      "is-after-checkin",
      "Check-out must be after check-in",
      function (value) {
        const { checkIn } = this.parent;
        if (!value || !checkIn) return true;

        const [checkInHour, checkInMinute] = checkIn.split(":").map(Number);
        const [checkOutHour, checkOutMinute] = value.split(":").map(Number);

        const checkInDate = new Date(0, 0, 0, checkInHour, checkInMinute);
        const checkOutDate = new Date(0, 0, 0, checkOutHour, checkOutMinute);
        if (checkOutDate <= checkInDate) {
          checkOutDate.setDate(checkOutDate.getDate() + 1);
        }

        return checkOutDate > checkInDate;
      }
    ),

    hourlyWage: yup
    .number()
    .typeError("Hourly wage must be a number")
    .min(0, "Hourly wage must be more than 0")
    .required("Hourly wage is required")  .test("no-spaces", "Hourly Wage must not contain spaces", function (_, ctx) {
        const original = ctx.originalValue;
        return typeof original === "string"
          ? /^\d+(\.\d{1,2})?$/.test(original)
          : true;
      }),
});
          