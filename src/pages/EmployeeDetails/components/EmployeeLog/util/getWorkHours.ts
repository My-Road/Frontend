export function getWorkHours(checkIn?: string, checkOut?: string): number | null {
  if (!checkIn || !checkOut) return null;
  const [inHours, inMinutes] = checkIn.split(":").map(Number);
  const [outHours, outMinutes] = checkOut.split(":").map(Number);
  const start = inHours * 60 + inMinutes;
  const end = outHours * 60 + outMinutes;
  let diffMinutes = end - start;
  if (diffMinutes < 0) diffMinutes += 24 * 60;
  return diffMinutes / 60;
}