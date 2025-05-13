import { useField, useFormikContext } from "formik";
import { DatePicker } from "@mui/x-date-pickers"; 
import { useTranslation } from "react-i18next";
import dayjs, { Dayjs } from "dayjs";

interface Props {
  name: string;
  label?: string;
  minDate?: Dayjs;
  maxDate?: Dayjs;
  disabled?: boolean;
}

const DatePickerField = ({ name, label, minDate, maxDate, disabled }: Props) => {
  const { t } = useTranslation("translation");
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);

  return (
    <DatePicker
      value={field.value ? dayjs(field.value) : null}
      onChange={(val) => {
        if (!disabled) {
          setFieldValue(name, val?.format("YYYY-MM-DD"));
        }
      }}
      minDate={minDate}
      maxDate={maxDate}
      label={label || t(`Textfields.${name}`)}
      disabled={disabled}
      slotProps={{
        textField: {
          fullWidth: true,
          size: "small",
          error: !!(meta.touched && meta.error),
          helperText: meta.touched && meta.error ? t(`TextfieldErrors.${meta.error}`) : "",
          disabled,
        },
      }}
    />
  );
};

export default DatePickerField;

