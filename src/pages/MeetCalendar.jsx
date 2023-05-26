import React, { useState } from "react";
import moment from "jalali-moment";

const listDaysWeeks = [
  {
    title: "شنبه",
  },
  {
    title: "یکشنبه",
  },
  {
    title: "دوشنبه",
  },
  {
    title: "سه شنبه",
  },
  {
    title: "چهارشنبه",
  },
  {
    title: "پنج شنبه",
  },
  {
    title: "جمعه",
  },
];

const MeetCalendar = () => {
  console.log(moment().jMonth());

  return (
    <main className="font-vazirmatn">
      <div className="w-[500px] h-[500px] mx-auto my-10 shadow-xl p-5 border rounded-md flex flex-col">
        <div className="flex items-center justify-between mb-5 border px-4 py-2 border-teal-500 rounded-3xl">
          <button>ماه قبل</button>
          <div>
            <button>{moment().locale("fa").format("MMMM")}</button>
            <span className="mx-2">|</span>
            <button className="font-shabnam`">
              {moment().locale("fa").format("YYYY")}
            </button>
          </div>
          <button>ماه بعد</button>
        </div>
        <div className="w-full h-full flex flex-col">
          <div className="flex justify-between mb-3">
            {listDaysWeeks.map((item, index) => (
              <button className="font-vazirmatnBold">{item.title}</button>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-3 h-full">
            {[...new Array(moment().jDaysInMonth())].map((item, index) => {
              return (
                <button className="w-full grid-cols-1 hover:bg-teal-500 hover:text-white font-shabnam">
                  {moment()
                    .add(index - 3, "days")
                    .format("jD")}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
};

export default MeetCalendar;
