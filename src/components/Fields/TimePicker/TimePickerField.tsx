import { useField, useFormikContext } from "formik";
import { TimePicker } from "@mui/x-date-pickers";
import { useTranslation } from "react-i18next";
import dayjs from "dayjs";

interface Props {
  name: string;
  label?: string;
  format?: string; 
}

const TimePickerField = ({ name, label, format = "HH:mm" }: Props) => {
  const { t } = useTranslation("translation");
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);

  return (
    <TimePicker
      value={field.value ? dayjs(field.value, format) : null}
      onChange={(val) => {
        setFieldValue(name, val ? val.format(format) : "");
      }}
      ampm={false}
      label={label || t(`Textfields.${name}`)}
      format={format}
      slotProps={{
        textField: {
          fullWidth: true,
          size: "small",
          error: !!(meta.touched && meta.error),
          helperText:
            meta.touched && meta.error
              ? t(`TextfieldErrors.${meta.error}`) || meta.error
              : "",
        },
      }}
    />
  );
};

export default TimePickerField;
