"use client";
import { NextPage } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Props {}

const Page: NextPage<Props> = ({}) => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <div className="relative h-screen overflow-auto">
      <div className="intro mt-[20vh] w-full pl-10">
        <p className="text-4xl font-medium"> Sanskar Agarwal</p>
        <p className="text-lg text-gray-500"> Full Stack Developer</p>
      </div>
      <div className="pl-10">
        <p className="text-lg font-thin mt-4 w-[50vw]">
          Software Developer with over 2 years of experience, specializing in
          Frontend development and having an intermediate level of backend
          knowledge. Proficient across diverse platforms, languages, and
          frameworks. Created responsive and user-friendly web applications also
          have experience in API developments
        </p>
        <div className="w-[50vw] flex justify-end">
          <Link
            href="/Skills"
            className="bg-orange-500 text-white p-2 rounded-md mt-10 flex w-28 justify-evenly"
          >
            Skills
            <i>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </i>
          </Link>
        </div>
      </div>
      <div></div>
      <div
        className={`footer bg-orange-500 absolute bottom-0 hidden md:min-h-12 lg:min-h-20 w-full rounded-t-full md:flex justify-evenly text-base transition duration-500 ease-in ${fadeIn ? '' : ' opacity-70'}`}
      >
        <p className="m-auto text-center text-white font-light">
          Experience <br /> <span className=" text-sm">2 Year</span>
        </p>
        <p className="m-auto text-center text-white font-light">
          From <br /> <span className=" text-sm">Lucknow</span>
        </p>
        <p className="m-auto text-center text-white font-light">
          DOB <br /> <span className=" text-sm">17/02/2002</span>
        </p>
      </div>
    </div>
  );
};

export default Page;
