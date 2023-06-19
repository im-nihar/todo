import { useEffect } from "react";

export default function Home() {
  const daysList = [
    { day: "Day 0", msg: "She Left" },
    {
      day: "Day 1",
      msg: "First Day without Her",
      dayWent: "Did Shopping, ate lunch, went for a walk",
    },
    { day: "Day 2", msg: "" },
    { day: "Day 3", msg: "" },
  ];

  useEffect(() => {
    console.log("daysList", daysList);
  }, []);
  return (
    <div>
      {daysList.map((element, index) => (
        <div key={index}>
          <h3>{element.msg}</h3>
          <h3>{element.dayWent}</h3>
          <h2>{element.day}</h2>
        </div>
      ))}
    </div>
  );
}
