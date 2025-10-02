"use client";
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import reactImg from "@/public/tool_stack/React.png";
import NextjsImg from "@/public/tool_stack/Nextjs.png";
import TailwindcssImg from "@/public/tool_stack/TailwindCss.png";
import NodejsImg from "@/public/tool_stack/Nodejs.png";
import MongodbImg from "@/public/tool_stack/MongoDB.png";
import FirebaseImg from "@/public/tool_stack/Firebase.png";

import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
const Expertise = () => {
  const stackRef = useRef([]);
  const tabsTrigger = useRef();
  const stackToolRef = useRef([]);
  const [tabState, setTabState] = useState("projects");

  useGSAP(() => {
    gsap.from(tabsTrigger.current, {
      opacity: 0,
      x: -50,
      y: 50,
      duration: 0.3,
      filter: "blur(10px)",
    });
  });
  useGSAP(() => {
    const elements = stackRef.current.filter(Boolean);
    if (elements.length) {
      const tl = gsap.timeline();
      tl.from(elements, {
        opacity: 0,
        x: -50,
        y: 50,
        filter: "blur(10px)",
        stagger: 0.2, // delay between each item
        duration: 0.5,
        ease: "power3.out",
      });
    }
  }, [tabState]);
  useGSAP(() => {
    const elements = stackToolRef.current.filter(Boolean);
    if (elements.length) {
      const tl = gsap.timeline();
      tl.from(elements, {
        opacity: 0,

        y: 50,
        filter: "blur(10px)",
        stagger: 0.2, // delay between each item
        duration: 0.5,
        ease: "power3.out",
      });
    }
  }, [tabState]);

  return (
    <Tabs defaultValue="projects">
      <TabsList ref={tabsTrigger} className="pl-0 mb-3">
        <TabsTrigger
          onClick={() => setTabState("projects")}
          value="projects"
          className="text-zinc-400 font-medium text-md pl-0"
        >
          Projects
        </TabsTrigger>
        <TabsTrigger
          onClick={() => setTabState("experience")}
          value="experience"
          className="text-zinc-400 font-medium text-md"
        >
          Experience
        </TabsTrigger>
        <TabsTrigger
          onClick={() => setTabState("tools")}
          value="tools"
          className="text-zinc-400 font-medium text-md"
        >
          Tools
        </TabsTrigger>
      </TabsList>

      <TabsContent value="projects">
        <ul className="space-y-8 mb-3">
          <div ref={(el) => (stackRef.current[0] = el)}>
            <li className="group hover:translate-x-1 duration-200 transition-all">
              <div className="flex justify-between mb-1">
                <h3 className="dark:text-white font-bold ">Beat Wave</h3>
                <div className="flex gap-3 text-xs text-zinc-400 ">
                  <a
                    href=""
                    className="flex gap-1 hover:text-white transition-all duration-150"
                  >
                    Github
                    <i className="ri-share-box-fill"></i>
                  </a>
                  <a
                    href=""
                    className="flex gap-1 hover:text-white transition-all duration-150"
                  >
                    View
                    <i className="ri-share-box-fill"></i>
                  </a>
                </div>
              </div>
              <p className="text-sm text-zinc-400 mb-2">
               A Beat Market where you can buy your desired beat.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="text-zinc-500 text-xs">Next.js /</span>
                <span className="text-zinc-500 text-xs">Typescript /</span>
                <span className="text-zinc-500 text-xs">Express.js /</span>
                <span className="text-zinc-500 text-xs">MongoDB /</span>
                <span className="text-zinc-500 text-xs">TailwindCSS /</span>
                <span className="text-zinc-500 text-xs">Cloudinary /</span>
                <span className="text-zinc-500 text-xs">JWT Auth /</span>
              </div>
            </li>
          </div>
          <div ref={(el) => (stackRef.current[1] = el)}>
            <li className="group hover:translate-x-1 duration-200 transition-all">
              <div className="flex justify-between mb-1">
                <h3 className="dark:text-white font-bold ">Galaxy Academy</h3>
                <div className="flex gap-3 text-xs text-zinc-400 ">
                  <a
                    href=""
                    className="flex gap-1 hover:text-white transition-all duration-150"
                  >
                    Github
                    <i className="ri-share-box-fill"></i>
                  </a>
                  <a
                    href=""
                    className="flex gap-1 hover:text-white transition-all duration-150"
                  >
                    View
                    <i className="ri-share-box-fill"></i>
                  </a>
                </div>
              </div>
              <p className="text-sm text-zinc-400 mb-2">
          An online learning platform offering curated courses, interactive lessons, and community support for aspiring developers.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="text-zinc-500 text-xs">Next.js /</span>
                <span className="text-zinc-500 text-xs">Typescript.js /</span>
                <span className="text-zinc-500 text-xs">Express.js /</span>
                <span className="text-zinc-500 text-xs">TailwindCSS /</span>
             
              </div>
            </li>
          </div>
          <div ref={(el) => (stackRef.current[2] = el)}>
            <li className="group hover:translate-x-1 duration-200 transition-all">
              <div className="flex justify-between mb-1">
                <h3 className="dark:text-white font-bold ">Beat Wave</h3>
                <div className="flex gap-3 text-xs text-zinc-400 ">
                  <a
                    href=""
                    className="flex gap-1 hover:text-white transition-all duration-150"
                  >
                    Github
                    <i className="ri-share-box-fill"></i>
                  </a>
                  <a
                    href=""
                    className="flex gap-1 hover:text-white transition-all duration-150"
                  >
                    View
                    <i className="ri-share-box-fill"></i>
                  </a>
                </div>
              </div>
              <p className="text-sm text-zinc-400 mb-2">
                A place to share your open source projects and find new ones.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="text-zinc-500 text-xs">Next.js /</span>
                <span className="text-zinc-500 text-xs">Next.js /</span>
                <span className="text-zinc-500 text-xs">Next.js /</span>
                <span className="text-zinc-500 text-xs">Next.js /</span>
                <span className="text-zinc-500 text-xs">Next.js /</span>
              </div>
            </li>
          </div>
        </ul>
      </TabsContent>
      <TabsContent value="experience">
        <ul className="space-y-8 ">
          <div ref={(el) => (stackRef.current[0] = el)}>
            <li className="group hover:translate-x-1 duration-200 transition-all">
              <div className="flex justify-between mb-1">
                <h3 className="dark:text-white font-bold ">
                  Expert It Services
                </h3>
                <div className="flex gap-3 text-xs text-zinc-400 ">
                  <span className="flex gap-1 hover:text-white transition-all duration-150">
                    July 2025 - Present
                  </span>
                </div>
              </div>
              <p className="text-sm text-zinc-500 mb-2">
                Full Stack Developer With Mern Core Concept
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="text-zinc-500 text-xs">Next.js /</span>
                <span className="text-zinc-500 text-xs">Next.js /</span>
                <span className="text-zinc-500 text-xs">Next.js /</span>
                <span className="text-zinc-500 text-xs">Next.js /</span>
                <span className="text-zinc-500 text-xs">Next.js /</span>
              </div>
            </li>
          </div>
        </ul>
      </TabsContent>
      <TabsContent value="tools">
        <ul
          ref={(el) => (stackToolRef.current[0] = el)}
          className="space-y-8 mb-4"
        >
          <div>
            <li className="">
              <div className=" mb-3">
                <h3 className="dark:text-white font-bold ">Frontend</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                <div className="flex flex-col items-center justify-between py-2 px-4 gap-1 group w-[calc(25%-12px)]">
                  <Image
                    src={reactImg}
                    alt="react-js"
                    width={35}
                    height={40}
                    className="group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-200 ease-in-out"
                  />
                  <h4 className="text-xs text-zinc-400">React</h4>
                </div>
                <div className="flex flex-col items-center py-2 px-4 gap-1 group w-[calc(25%-12px)]">
                  <Image
                    src={NextjsImg}
                    alt="react-js"
                    width={40}
                    height={35}
                    className="group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-200 ease-in-out"
                  />
                  <h4 className="text-xs text-zinc-400">NextJS</h4>
                </div>
                <div className="flex flex-col items-center justify-between py-2 px-4 gap-1 group w-[calc(25%-12px)]">
                  <Image
                    src={TailwindcssImg}
                    alt="react-js"
                    width={35}
                    height={35}
                    className="group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-200 ease-in-out"
                  />
                  <h4 className="text-xs text-zinc-400">TailwindCSS</h4>
                </div>
              </div>
            </li>
          </div>
        </ul>
        <ul ref={(el) => (stackToolRef.current[1] = el)} className="space-y-8">
          <div>
            <li className="">
              <div className=" mb-3">
                <h3 className="dark:text-white font-bold ">
                  Backend & Infrastructure
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                <div className="flex flex-col items-center justify-between py-2 px-4 gap-1 group w-[calc(25%-12px)]">
                  <Image
                    src={NodejsImg}
                    alt="react-js"
                    width={35}
                    height={40}
                    className="group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-200 ease-in-out"
                  />
                  <h4 className="text-xs text-zinc-400">NodeJS</h4>
                </div>
                <div className="flex flex-col items-center py-2 px-4 gap-1 group w-[calc(25%-12px)]">
                  <Image
                    src={MongodbImg}
                    alt="react-js"
                    width={40}
                    height={35}
                    className="group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-200 ease-in-out"
                  />
                  <h4 className="text-xs text-zinc-400">MongoDB</h4>
                </div>
                <div className="flex flex-col items-center justify-between py-2 px-4 gap-1 group w-[calc(25%-12px)]">
                  <Image
                    src={FirebaseImg}
                    alt="react-js"
                    width={35}
                    height={35}
                    className="group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-200 ease-in-out"
                  />
                  <h4 className="text-xs text-zinc-400">FireBase</h4>
                </div>
              </div>
            </li>
          </div>
        </ul>
      </TabsContent>
    </Tabs>
  );
};

export default Expertise;
