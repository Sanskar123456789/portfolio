"use client";
import { NextPage } from "next";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Props {
  image: string;
  efforts: Array<string>;
  name: string;
}

const ProjectCard: NextPage<Props> = ({ image, efforts, name }) => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <div
      className={`transition duration-500 opacity-0 ${
        fadeIn ? "opacity-100" : ""
      }`}
    >
      <div className="border border-gray-300 shadow-lg h-52 rounded hover:scale-110 relative hover:z-10 transition duration-100">
        <div className="p-2 bg-white h-full">
          <div className="text-xl text-orange-500">{name}</div>
          <ul>
            {efforts.map((effort: string, index: number) => {
              return (
                <li key={index} className="text-base">
                  {effort}
                </li>
              );
            })}
          </ul>
        </div>
        <Image
          src={image}
          alt="no image"
          width="0"
          height="0"
          className="w-full h-full hover:opacity-0 absolute top-0 ease-in-out duration-500 transition bg-white p-2"
          unoptimized
        ></Image>
      </div>
    </div>
  );
};

export default ProjectCard;
