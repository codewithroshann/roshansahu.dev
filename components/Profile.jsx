'use client'
import React from 'react'
import Image from 'next/image'
import profileImg from '@/public/profile/Img.jpg'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'

const Profile = () => {
  const profileRef = useRef([])

  useGSAP(() => {
    const tl = gsap.timeline()
    tl.from(profileRef.current, {
      opacity: 0,
      y: 50,
      filter: 'blur(10px)',
      duration: 0.3,
      stagger: 0.2, // delay between each item
      ease: 'power3.out',
    })
  })

  return (
    <>
      <section className="flex flex-col gap-3">
        <div
          ref={(el) => (profileRef.current[0] = el)}
          className="flex items-center gap-4"
        >
          <div className="rounded-lg select-none">
            <Image
              className="max-h-[130px] min-h-[120px] max-w-[130px] min-w-[120px] rounded-full shadow-md object-cover"
              src={profileImg}
              alt="profileImg-logo"
            />
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-xl font-medium text-black dark:text-white">
              Hey, I'm Roshan Sahu
            </h1>
            <p className="flex items-center gap-1 text-sm text-shadow-zinc-600 dark:text-zinc-400">
              <i className="ri-map-pin-line"></i> Bilaspur, Chhatishgarh, India
            </p>
            <div className="flex flex-wrap items-center gap-2 text-zinc-700 dark:text-zinc-300">
              <a
                href=""
                target="_blank"
                className="flex items-center gap-0.5 text-sm transition-all duration-200 ease-in-out hover:scale-105 dark:hover:text-white"
              >
                <i className="ri-linkedin-box-fill text-lg"></i>
                Linkedin
              </a>
              /
              <a
                href="https://github.com/codewithroshann"
                target="_blank"
                className="flex items-center gap-0.5 text-sm transition-all duration-200 ease-in-out hover:scale-105 dark:hover:text-white"
              >
                <i className="ri-github-fill text-lg"></i>
                Github
              </a>
              /
              <a
                href="https://www.instagram.com/theycallmeroshnn/?igsh=ZWxlcnV4YnRrcndk"
                target="_blank"
                className="flex items-center gap-0.5 text-sm transition-all duration-200 ease-in-out hover:scale-105 dark:hover:text-white"
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
            className="tracking-tightest text-sm leading-6 font-medium text-zinc-600 dark:text-zinc-400"
          >
            I am a MERN Stack Developer at Expert IT Services with experience in
            building dynamic and scalable web applications.
          </p>
        </div>
        <div className="h-[1px] bg-zinc-600"></div>
      </section>
    </>
  )
}

export default Profile
