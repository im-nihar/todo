import { useEffect } from "react";

export default function Home() {
  const daysList = [
    {
      day: "Day 0",
      msg: "She Left",
      dayWent: "Bit hard to digest.",
    },
    {
      day: "Day 1",
      msg: "First Day without Her",
      dayWent: "Did Shopping, ate lunch, went for a walk",
    },
    {
      day: "Day 2",
      msg: "Reality Started Hitting",
      dayWent:
        "Ate lunch alone. Went to her room to get flowers and waterbottle. Dayyum! Reality Hits!",
    },
    {
      day: "Day 3",
      msg: "Wish she was here",
      dayWent:
        "Did eveything alone today. Just had a few calls today. Enjoyed the calls.",
    },
    {
      day: "Day 4",
      msg: "Phone case arrived",
      dayWent:
        "She cried today because of some nonsense fight (not because of me though). No calls till dinner time. Did eveything alone today",
    },
  ];

  // useEffect(() => {
  //   console.log("daysList", daysList);
  // }, []);

  return (
    <div>
      {daysList.map((element, index) => (
        <div key={index}>
          <h2>{element.day}</h2>
          <h3>{element.msg}</h3>
          <h3>{element.dayWent}</h3>
        </div>
      ))}
    </div>
  );
}
