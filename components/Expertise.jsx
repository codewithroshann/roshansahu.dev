'use client'
import React, { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Image from 'next/image'
import reactImg from '@/public/tool_stack/React.png'
import NextjsImg from '@/public/tool_stack/Nextjs.png'
import TailwindcssImg from '@/public/tool_stack/TailwindCss.png'
import NodejsImg from '@/public/tool_stack/Nodejs.png'
import MongodbImg from '@/public/tool_stack/MongoDB.png'
import FirebaseImg from '@/public/tool_stack/Firebase.png'
import Gsap from '@/public/tool_stack/Gsap.png'

import gsap from 'gsap'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
const Expertise = () => {
  const stackRef = useRef([])
  const tabsTrigger = useRef()
  const stackToolRef = useRef([])
  const [tabState, setTabState] = useState('projects')

  useGSAP(() => {
    gsap.from(tabsTrigger.current, {
      opacity: 0,
      x: -50,
      y: 50,
      duration: 0.3,
      filter: 'blur(10px)',
    })
  })
  useGSAP(() => {
    const elements = stackRef.current.filter(Boolean)
    if (elements.length) {
      const tl = gsap.timeline()
      tl.from(elements, {
        opacity: 0,
        x: -50,
        y: 50,
        filter: 'blur(10px)',
        stagger: 0.2, // delay between each item
        duration: 0.5,
        ease: 'power3.out',
      })
    }
  }, [tabState])
  useGSAP(() => {
    const elements = stackToolRef.current.filter(Boolean)
    if (elements.length) {
      const tl = gsap.timeline()
      tl.from(elements, {
        opacity: 0,

        y: 50,
        filter: 'blur(10px)',
        stagger: 0.2, // delay between each item
        duration: 0.5,
        ease: 'power3.out',
      })
    }
  }, [tabState])

  return (
    <Tabs defaultValue="projects">
      <TabsList ref={tabsTrigger} className="mb-3 pl-0">
        <TabsTrigger
          onClick={() => setTabState('projects')}
          value="projects"
          className="text-md pl-0 font-medium text-zinc-600 dark:text-zinc-400"
        >
          Projects
        </TabsTrigger>
        <TabsTrigger
          onClick={() => setTabState('experience')}
          value="experience"
          className="text-md font-medium text-zinc-600 dark:text-zinc-400"
        >
          Experience
        </TabsTrigger>
        <TabsTrigger
          onClick={() => setTabState('tools')}
          value="tools"
          className="text-md font-medium text-zinc-600 dark:text-zinc-400"
        >
          Tools
        </TabsTrigger>
      </TabsList>

      <TabsContent value="projects">
        <ul className="mb-3 space-y-8">
          <div ref={(el) => (stackRef.current[0] = el)}>
            <li className="group transition-all duration-200 hover:translate-x-1">
              <div className="mb-1 flex justify-between">
                <h3 className="font-bold dark:text-white">Beat Wave</h3>
                <div className="flex gap-3 text-xs font-medium dark:font-normal text-zinc-600 dark:text-zinc-400">
                  <a
                    target="_blank"
                    href="https://github.com/codewithroshann/BeatWave"
                    className="flex gap-1 transition-all duration-150 dark:hover:text-white"
                  >
                    Github
                    <i className="ri-share-box-fill"></i>
                  </a>
                  <a
                    target="_blank"
                    href="https://beat-wave-pink.vercel.app/"
                    className="flex gap-1 transition-all duration-150 dark:hover:text-white"
                  >
                    View
                    <i className="ri-share-box-fill"></i>
                  </a>
                </div>
              </div>
              <p className="mb-2 text-sm font-medium text-zinc-600 dark:text-zinc-400">
                A Beat Market where you can buy your desired beat.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="text-xs text-zinc-600 dark:text-zinc-500">
                  Next.js /
                </span>
                <span className="text-xs text-zinc-600 dark:text-zinc-500">
                  Typescript /
                </span>
                <span className="text-xs text-zinc-600 dark:text-zinc-500">
                  Express.js /
                </span>
                <span className="text-xs text-zinc-600 dark:text-zinc-500">
                  MongoDB /
                </span>
                <span className="text-xs text-zinc-600 dark:text-zinc-500">
                  TailwindCSS /
                </span>
                <span className="text-xs text-zinc-600 dark:text-zinc-500">
                  Cloudinary /
                </span>
                <span className="text-xs text-zinc-600 dark:text-zinc-500">
                  JWT Auth /
                </span>
              </div>
            </li>
          </div>
          <div ref={(el) => (stackRef.current[1] = el)}>
            <li className="group transition-all duration-200 hover:translate-x-1">
              <div className="mb-1 flex justify-between">
                <h3 className="font-bold dark:text-white">Galaxy Academy</h3>
                  <div className="flex gap-3 text-xs font-medium dark:font-normal text-zinc-600 dark:text-zinc-400">
                  <a
                    target="_blank"
                    href="https://github.com/codewithroshann/Galaxy-Academy"
                    className="flex gap-1 transition-all duration-150 dark:hover:text-white"
                  >
                    Github
                    <i className="ri-share-box-fill"></i>
                  </a>
                  <a
                    target="_blank"
                    href="https://galaxy-academy.vercel.app/"
                    className="flex gap-1 transition-all duration-150 dark:hover:text-white"
                  >
                    View
                    <i className="ri-share-box-fill"></i>
                  </a>
                </div>
              </div>
              <p className="mb-2 text-sm font-medium text-zinc-600 dark:text-zinc-400">
                An online learning platform offering curated courses,
                interactive lessons, and community support for aspiring
                developers.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="text-xs text-zinc-600 dark:text-zinc-500">
                  Next.js /
                </span>
                <span className="text-xs text-zinc-600 dark:text-zinc-500">
                  Typescript.js /
                </span>
                <span className="text-xs text-zinc-600 dark:text-zinc-500">
                  Express.js /
                </span>
                <span className="text-xs text-zinc-600 dark:text-zinc-500">
                  TailwindCSS /
                </span>
              </div>
            </li>
          </div>
          <div ref={(el) => (stackRef.current[2] = el)}>
            <li className="group transition-all duration-200 hover:translate-x-1">
              <div className="mb-1 flex justify-between">
                <h3 className="font-bold dark:text-white">QR Code Generator</h3>
                    <div className="flex gap-3 text-xs font-medium dark:font-normal text-zinc-600 dark:text-zinc-400">
                  <a
                    target="_blank"
                    href="https://github.com/codewithroshann/Qr_Code_Generator/"
                        className="flex gap-1 transition-all duration-150 dark:hover:text-white"
                  >
                    Github
                    <i className="ri-share-box-fill"></i>
                  </a>
                  <a
                    target="_blank"
                    href="https://qr-code-generator-vmg0.onrender.com/"
              className="flex gap-1 transition-all duration-150 dark:hover:text-white"
                  >
                    View
                    <i className="ri-share-box-fill"></i>
                  </a>
                </div>
              </div>
              <p className="mb-2 text-sm font-medium text-zinc-600 dark:text-zinc-400">
                A web application that allows users to generate QR codes for
                URLs, text, or other data, with options for customization and
                download.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="text-xs text-zinc-600 dark:text-zinc-500">
                  ejs /
                </span>
                <span className="text-xs text-zinc-600 dark:text-zinc-500">
                  Express.js /
                </span>
                <span className="text-xs text-zinc-600 dark:text-zinc-500">
                  MongoDB /
                </span>
                <span className="text-xs text-zinc-600 dark:text-zinc-500">
                  Cloudinary /
                </span>
                <span className="text-xs text-zinc-600 dark:text-zinc-500">
                  Bootstrap /
                </span>
              </div>
            </li>
          </div>
        </ul>
      </TabsContent>
      <TabsContent value="experience">
        <ul className="space-y-8">
          <div ref={(el) => (stackRef.current[0] = el)}>
            <li className="group transition-all duration-200 hover:translate-x-1">
              <div className="mb-1 flex justify-between">
                <h3 className="font-bold dark:text-white">
                  Expert It Services
                </h3>
                 <div className="flex gap-3 text-xs font-medium text-zinc-600 dark:text-zinc-400">
                  <span className="flex gap-1 transition-all duration-150 dark:hover:text-white">
                    July 2025 - Present
                  </span>
                </div>
              </div>
             <p className="mb-2 text-sm font-medium text-zinc-600 dark:text-zinc-400">
                Full Stack Developer With Mern Core Concept
              </p>
              <div className="flex flex-wrap gap-3">
                   <span className="text-zinc-600 dark:text-zinc-500 text-xs">React.js /</span>
                   <span className="text-zinc-600 dark:text-zinc-500 text-xs">Next.js /</span>
                   <span className="text-zinc-600 dark:text-zinc-500 text-xs">Express.js /</span>
                   <span className="text-zinc-600 dark:text-zinc-500 text-xs">MondoDB /</span>
                   <span className="text-zinc-600 dark:text-zinc-500 text-xs">Firebase /</span>
              </div>
            </li>
          </div>
        </ul>
      </TabsContent>
      <TabsContent value="tools">
        <ul
          ref={(el) => (stackToolRef.current[0] = el)}
          className="mb-4 space-y-8"
        >
          <div>
            <li className="">
              <div className="mb-3">
                <h3 className="font-bold dark:text-white">Frontend</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                <div className="group flex w-[calc(25%-12px)] flex-col items-center justify-between gap-1 px-4 py-2">
                  <Image
                    src={reactImg}
                    alt="react-js"
                    width={35}
                    height={40}
                    className="transition-all duration-200 ease-in-out group-hover:-translate-y-1 group-hover:scale-110"
                  />
                  <h4 className="text-xs text-zinc-600 dark:text-zinc-400">React</h4>
                </div>
                <div className="group flex w-[calc(25%-12px)] flex-col items-center gap-1 px-4 py-2">
                  <Image
                    src={NextjsImg}
                    alt="react-js"
                    width={40}
                    height={35}
                    className="transition-all duration-200 ease-in-out group-hover:-translate-y-1 group-hover:scale-110"
                  />
                  <h4 className="text-xs text-zinc-600 dark:text-zinc-400">NextJS</h4>
                </div>
                <div className="group flex w-[calc(25%-12px)] flex-col items-center justify-between gap-1 px-4 py-2">
                  <Image
                    src={TailwindcssImg}
                    alt="react-js"
                    width={35}
                    height={35}
                    className="transition-all duration-200 ease-in-out group-hover:-translate-y-1 group-hover:scale-110"
                  />
                  <h4 className="text-xs text-zinc-600 dark:text-zinc-400">TailwindCSS</h4>
                </div>
                <div className="group flex w-[calc(25%-12px)] flex-col items-center justify-between gap-1 px-4 py-2">
                  <Image
                    src={Gsap}
                    alt="react-js"
                    width={35}
                    height={35}
                    className="transition-all duration-200 ease-in-out group-hover:-translate-y-1 group-hover:scale-110"
                  />
                  <h4 className="text-xs text-zinc-600 dark:text-zinc-400">Gsap</h4>
                </div>
              </div>
            </li>
          </div>
        </ul>
        <ul ref={(el) => (stackToolRef.current[1] = el)} className="space-y-8">
          <div>
            <li className="">
              <div className="mb-3">
                <h3 className="font-bold dark:text-white">
                  Backend & Infrastructure
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                <div className="group flex w-[calc(25%-12px)] flex-col items-center justify-between gap-1 px-4 py-2">
                  <Image
                    src={NodejsImg}
                    alt="react-js"
                    width={35}
                    height={40}
                    className="transition-all duration-200 ease-in-out group-hover:-translate-y-1 group-hover:scale-110"
                  />
                  <h4 className="text-xs text-zinc-600 dark:text-zinc-400">NodeJS</h4>
                </div>
                <div className="group flex w-[calc(25%-12px)] flex-col items-center gap-1 px-4 py-2">
                  <Image
                    src={MongodbImg}
                    alt="react-js"
                    width={40}
                    height={35}
                    className="transition-all duration-200 ease-in-out group-hover:-translate-y-1 group-hover:scale-110"
                  />
                  <h4 className="text-xs text-zinc-600 dark:text-zinc-400">MongoDB</h4>
                </div>
                <div className="group flex w-[calc(25%-12px)] flex-col items-center justify-between gap-1 px-4 py-2">
                  <Image
                    src={FirebaseImg}
                    alt="react-js"
                    width={35}
                    height={35}
                    className="transition-all duration-200 ease-in-out group-hover:-translate-y-1 group-hover:scale-110"
                  />
                  <h4 className="text-xs text-zinc-600 dark:text-zinc-400">FireBase</h4>
                </div>
              </div>
            </li>
          </div>
        </ul>
      </TabsContent>
    </Tabs>
  )
}

export default Expertise
