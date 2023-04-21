import dayjs from "dayjs";
const FORMAT_DATE = "YYYY-MM-DD";

export function getIntervalLastYear() {
  const currentDate = dayjs();
  const lastYearStartDate = currentDate
    .subtract(1, "year")
    .startOf("year")
    .format(FORMAT_DATE);
  const endYearStartDate = currentDate
    .subtract(1, "year")
    .endOf("year")
    .format(FORMAT_DATE);

  return {
    lastYearStartDate,
    endYearStartDate,
  };
}
