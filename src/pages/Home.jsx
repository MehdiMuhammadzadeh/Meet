import { Calendar, DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import gregorian from "react-date-object/calendars/gregorian";
import arabic from "react-date-object/calendars/arabic";
import persian_fa from "react-date-object/locales/persian_fa";

const weekDays = [
  "شنبه",
  "یکشنبه",
  "دوشنبه",
  "سه شنبه",
  "چهارشنبه",
  "پنج شنبه",
  "جمعه",
];

const Home = () => {
  return (
    <main className="flex justify-center items-center mt-10">
      <Calendar
        className="my-calendar"
        monthYearSeparator="|"
        formatMonth={(month, year) => {
          return "ماه: " + month;
        }}
        formatYear={(year, month) => {
          return "سال: " + year;
        }}
        mapDays={CalenderDaysItem}
        weekDays={weekDays}
        calendar={persian}
        locale={persian_fa}
      />
    </main>
  );
};

export default Home;

const CalenderDaysItem = ({ date, today, isSameDate }) => {
  // const newGregorian = new DateObject(date).convert(persian, gregorian)
  // const newArabic = new DateObject(date).convert(persian, arabic)

  return {
    children: (
      <button
        className={`w-full h-full ${
          !isSameDate(date, today) ? "bg-gray-200" : "bg-blue-500"
        } m-1 rounded hover:text-white hover:bg-teal-500`}
      >
        {date.format("D")}
        {/* {newGregorian.format("D")} */}
        {/* {newArabic.format("D")} */}
      </button>
    ),
  };
};
