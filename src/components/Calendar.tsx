import { useEffect, useState } from 'react';

const daysOfWeek = ['Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa', 'Do'];

function getWeekDates(date: Date) {
  const currentDay = date.getDay();
  const startOfWeek = new Date(date);
  startOfWeek.setDate(date.getDate() - currentDay + (currentDay === 0 ? -6 : 1));
  const weekDates = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(startOfWeek);
    d.setDate(startOfWeek.getDate() + i);
    return d;
  });
  return weekDates;
}

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [weekDays, setWeekDays] = useState<Date[]>([]);

  useEffect(() => {
    const dates = getWeekDates(currentDate);
    setWeekDays(dates);
  }, [currentDate]);

  const getFormattedDate = () => {
    const options: Intl.DateTimeFormatOptions = { month: 'short', year: 'numeric' };
    return new Intl.DateTimeFormat('en-Mx', options).format(currentDate);
  };

  return (
    <div className="flex flex-col gap-2">
      <span className="font-bold">{getFormattedDate().toUpperCase()}</span>
      <div className="grid grid-cols-7 xl:w-1/2 gap-2">
        {daysOfWeek.map((day) => (
          <div key={day} className="flex flex-col col-span-1 items-center justify-center gap-2">
            <span className="font-semibold">{day}</span>
          </div>
        ))}
        {weekDays.map((date, index) => (
          <div
            key={index}
            className="relative flex flex-col hover:bg-neutral-600 rounded-lg cursor-pointer transition-all ease-in-out duration-300 col-span-1 items-center justify-center gap-2">
            <span className="opacity-75">{date.getDate()}</span>
            {date.getDate() === currentDate.getDate() && (
              <div className="absolute -bottom-3 w-2 h-2 bg-yellow-400 rounded-full"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
