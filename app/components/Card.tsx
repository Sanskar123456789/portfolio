"use client"
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Props {
  image: string;
  docUrl: string;
}

const Card: NextPage<Props> = ({ image, docUrl }) => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <div className={`border border-gray-300 opacity-0 bottom-0 shadow-lg h-52 hover:scale-110 transition bg-white duration-500 ${fadeIn ? 'opacity-100' : ''}`}>
      <Link href={docUrl} target="_blank">
        <Image
          src={image}
          alt="no image"
          width="0"
          height="0"
          className="w-full h-full"
          unoptimized
        ></Image>
      </Link>
    </div>
  );
};

export default Card;
