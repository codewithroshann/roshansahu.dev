"use client"
import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const Footer = () => {
  const footerRef = useRef();
  useGSAP(() => {
    gsap.from(footerRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.8,
      ease: "power3.out",
      filter: "blur(10px)",
    });
  });

  return (
    <div ref={footerRef}
      className="flex justify-between mt-5 text-zinc-500 text-xs absolute bottom-0 w-full  py-2 
    "
    >
      <div>Codewithroshan.dev</div>
      <div>Built With Nexj.js</div>
    </div>
  );
};

export default Footer;
