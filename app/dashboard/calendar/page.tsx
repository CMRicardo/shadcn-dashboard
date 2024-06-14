"use client";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

export default function Page() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [multipleDates, setMultipleDates] = useState<Date[] | undefined>([]);
  const smallDate = date?.toLocaleDateString("en-IN", {
    day: "numeric",
    weekday: "long",
    month: "long",
  });

  return (
    <div className="sm:flex sm:flex-row md:flex-cols md:flex-wrap gap-4">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
        weekStartsOn={1}
        disabled={(date) => date.getDay() === 0 || date.getDay() === 6}
      />
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
        weekStartsOn={1}
        disabled={(date) => date > new Date()}
      />
      <Calendar
        mode="multiple"
        selected={multipleDates}
        onSelect={setMultipleDates}
        className="rounded-md border"
        weekStartsOn={1}
      />
      <div>
        <h1 className="text-3xl">Info</h1>
        <div className="border-b"></div>
        <p>Selected date: {smallDate}</p>
        <p>
          Multiple dates:{" "}
          {multipleDates
            ?.map((date) => date.toLocaleDateString("en-IN"))
            .join(", ")}
        </p>
      </div>
    </div>
  );
}
