export const textSlicer = (text: string) => {
  if (text.length <= 150) return text;

  let slicedText = text.substring(0, 150);

  const nextSpaceIndex = text.indexOf(" ", 150);

  if (nextSpaceIndex !== -1) {
    slicedText = text.substring(0, nextSpaceIndex);
  }

  return slicedText + "...";
};

export const formatCamelCaseText = (text: string): string => {
  const capitalized = text.charAt(0).toUpperCase() + text.slice(1);

  const formatted = capitalized.replace(/([A-Z])/g, " $1").trim();

  return formatted;
};

export const isEmptyString = (value: string): boolean =>
  value.trim().length === 0;

export const getDayDate = (datee: string) => {
  const date = new Date(datee);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

export const getTime = (datee: string) => {
  const date = new Date(datee);
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  return `${hours}:${minutes}`; // Format: HH:mm:ss
};

export const omitEmptyValues = (obj: Record<string, string | number>) => {
  return Object.fromEntries(
    Object.entries(obj).filter(
      ([, value]) => value !== "" && value !== null && value !== 0
    )
  );
};

export const removeKeys = <
  T extends Record<string, string | number | boolean | Date>
>(
  keysToRemove: (keyof T)[],
  obj: T
): Partial<T> =>
  Object.fromEntries(
    Object.entries(obj).filter(
      ([key]) => !keysToRemove.includes(key as keyof T)
    )
  ) as Partial<T>;
