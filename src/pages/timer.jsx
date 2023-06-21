import { useEffect, useState } from "react";

export default function Timer() {
  const leftTime = Date.UTC(2023, 5, 19, 1, 45, 25);
  const currentTime = Date.now();
  const [time, setTime] = useState(null);
  //   const sinceLeft = currentTime - leftTime;

  const [sinceLeft, setSinceLeft] = useState(currentTime - leftTime);

  function convertMilliseconds(milliseconds) {
    const oneSecond = 1000;
    const oneMinute = oneSecond * 60;
    const oneHour = oneMinute * 60;
    const oneDay = oneHour * 24;
    const oneWeek = oneDay * 7;

    const weeks = Math.floor(milliseconds / oneWeek);
    milliseconds %= oneWeek;

    const days = Math.floor(milliseconds / oneDay);
    milliseconds %= oneDay;

    const hours = Math.floor(milliseconds / oneHour);
    milliseconds %= oneHour;

    const minutes = Math.floor(milliseconds / oneMinute);
    milliseconds %= oneMinute;

    const seconds = Math.floor(milliseconds / oneSecond);

    return {
      weeks,
      days,
      hours,
      minutes,
      seconds,
    };
  }

  function doStuff() {
    const currentTime2 = Date.now();
    const convertedTime = convertMilliseconds(sinceLeft);
    console.log("convertedTime", convertedTime);
    setTime(convertedTime);
    console.log("sinceLeft-->>", sinceLeft);
    setSinceLeft(currentTime2 - leftTime);
  }

  useEffect(() => {
    const interval = setInterval(
      () =>
        // setTime(Date.now())
        doStuff(),
      1000
    );

    return () => {
      clearInterval(interval);
    };
  }, [sinceLeft]);

  return (
    <div>
      {/* <h1>
        {Object.keys(time).forEach((key) => (
          <div>{time[key]}</div>
        ))}
      </h1> */}
      {time ? (
        <div style={{ display: "flex" }}>
          <p style={{ margin: "2px" }}>{time?.weeks}</p>
          <p style={{ margin: "2px" }}>{time?.days}</p>
          <p style={{ margin: "2px" }}>{time?.hours}</p>
          <p style={{ margin: "2px" }}>{time?.minutes}</p>
          <p style={{ margin: "2px" }}>{time?.seconds}</p>
        </div>
      ) : (
        <div>No Time</div>
      )}
      <div>{leftTime}</div>
      <div>{currentTime}</div>
      <div>{sinceLeft}</div>
    </div>
  );
}
