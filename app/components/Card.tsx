import { NextPage } from "next";
import Image from "next/image";

interface Props {
  image: string;
}

const Card: NextPage<Props> = ({ image }) => {
  return (
    <div className="border border-gray-300 shadow-lg h-52 rounded hover:scale-110 transition bg-white">
      <Image
        src={image}
        alt="no image"
        width="0"
        height="0"
        className="w-full"
        style={{ height: "100%" }}
        unoptimized
      ></Image>
    </div>
  );
};

export default Card;
