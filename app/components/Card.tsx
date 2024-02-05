import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

interface Props {
  image: string;
  docUrl: string;
}

const Card: NextPage<Props> = ({ image, docUrl }) => {
  return (
    <div className="border border-gray-300 shadow-lg h-52 rounded-full hover:scale-110 transition bg-white">
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
