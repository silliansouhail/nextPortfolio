"use client";
import React, { useEffect, useState } from "react";

const TextBanner = () => {
  const [loopNumber, setLoopNumber] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delet, setDelet] = useState(300 - Math.random() * 100);
  const toChange = [
    "A Web Developer",
    "A Web Designer",
    "A FullStack Developer",
    "A UI/UX Designer",
  ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delet);

    return () => {
      clearInterval(ticker);
    };
  });

  const tick = () => {
    let i = loopNumber % toChange.length;
    let fullText = toChange[i];
    let newText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(newText);

    if (isDeleting) {
      setDelet((prevDelet) => prevDelet / 2);
    }

    if (!isDeleting && newText === fullText) {
      setIsDeleting(true);
      setDelet(period);
    } else if (isDeleting && newText === "") {
      setIsDeleting(false);
      setLoopNumber(loopNumber + 1);
      setDelet(500);
    }
  };

  return <span className="text-crimson font-bold">{text}</span>;
};

export default TextBanner;
