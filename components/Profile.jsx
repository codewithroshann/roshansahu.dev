"use client";
import React from "react";
import Image from "next/image";
import profileImg from "@/public/profile/Img.jpg";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const Profile = () => {
  const profileRef = useRef([]);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(profileRef.current, {
      opacity: 0,
      y: 50,
      filter: "blur(10px)",
      duration: 0.3,
      stagger: 0.2, // delay between each item
      ease: "power3.out",
    });
  });

  return (
    <>
      <section className="flex flex-col gap-3  ">
        <div
          ref={(el) => (profileRef.current[0] = el)}
          className="flex items-center gap-4 "
        >
          <div className="rounded-lg ">
            <Image
              className="rounded-full min-h-[120px] min-w-[120px] max-h-[130px] max-w-[130px]"
              src={profileImg}
              alt="profileImg-logo"
            />
          </div>
          <div className="flex  flex-col gap-2">
            <h1 className="dark:text-white text-black text-xl font-medium">
              Hey, I'm Roshan Sahu
            </h1>
            <p className="text-zinc-400 text-sm items-center  flex gap-1">
              <i className="ri-map-pin-line"></i> Bilaspur, Chhatishgarh, India
            </p>
            <div className="flex items-center flex-wrap gap-2 text-zinc-300">
              <a
                href=""
                target="_blank"
                className="flex gap-0.5 text-sm items-center hover:text-white hover:scale-105  transition-all duration-200 ease-in-out"
              >
                <i className="ri-linkedin-box-fill text-lg"></i>
                Linkedin
              </a>
              /
              <a
                href="https://github.com/codewithroshann"
                target="_blank"
                className="flex gap-0.5 text-sm items-center hover:text-white hover:scale-105  transition-all duration-200 ease-in-out"
              >
                <i className="ri-github-fill text-lg"></i>
                Github
              </a>
              /
              <a
                href="https://www.instagram.com/theycallmeroshnn/?igsh=ZWxlcnV4YnRrcndk"
                target="_blank"
                 className="flex gap-0.5 text-sm items-center hover:text-white hover:scale-105  transition-all duration-200 ease-in-out"
              >
                <i className="ri-instagram-line text-lg"></i>
                Instagram
              </a>
            </div>
          </div>
        </div>
        <div className="my-4">
          <p
            ref={(el) => (profileRef.current[1] = el)}
            className="text-sm font-medium text-zinc-400 tracking-tightest leading-6"
          >
            I am a MERN Stack Developer at Expert IT Services with experience in
            building dynamic and scalable web applications.
          </p>
        </div>
        <div className="h-[1px] bg-zinc-600 "></div>
      </section>
    </>
  );
};

export default Profile;
