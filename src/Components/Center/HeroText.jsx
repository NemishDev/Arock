import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const HeroText = () => {

  const textRef = useRef(null);

  useGSAP(() => {

    let clutter = "";

    const splittedText = textRef.current.textContent.split("");

    splittedText.forEach((e) => {
      clutter += `<span>${e}</span>`;
    });

    textRef.current.innerHTML = clutter;

    gsap.from("h1 span", {
      y: 100,
      opacity: 0,
      delay: 2.15,
      stagger: 0.12
    });

  });

  return (
    <div>
      <h1
        ref={textRef}
        className="whitespace-nowrap font-black text-center font-[u8] uppercase text-[21vw] leading-[17vw]"
      >
        Arock
      </h1>
    </div>
  );
};

export default HeroText;