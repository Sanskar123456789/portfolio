import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

interface Props {
  image: string;
  docUrl: string;
}

const Card: NextPage<Props> = ({ image, docUrl }) => {
  return (
    <div className=" shadow-lg h-52 w-52 hover:scale-110 transition rounded-full">
      <Link href={docUrl} target="_blank">
        <Image
          src={image}
          alt="no image"
          width="0"
          height="0"
          className="w-full h-full rounded-full"
          unoptimized
        ></Image>
      </Link>
    </div>
  );
};

export default Card;
