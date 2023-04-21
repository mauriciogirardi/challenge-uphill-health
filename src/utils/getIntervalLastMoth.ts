import dayjs from "dayjs";
const FORMAT_DATE = "YYYY-MM-DD";

export function getIntervalLastMonth() {
  const currentDate = dayjs();
  const lastMonthStartDate = currentDate
    .subtract(1, "month")
    .startOf("month")
    .format(FORMAT_DATE);
  const endMonthStartDate = currentDate
    .subtract(1, "month")
    .endOf("month")
    .format(FORMAT_DATE);

  return {
    lastMonthStartDate,
    endMonthStartDate,
  };
}
