import { NextPage } from "next";
import Link from "next/link";

interface Props {}

const Page: NextPage<Props> = ({}) => {
  return (
    <div className="h-screen overflow-auto p-10">
      <p className="m-auto text-4xl text-center">Thankyou</p>
      <p className="m-auto text-3xl mt-10 mb-10">
        Email <br />
        <span className="text-base text-orange-500">
          <a href="mailto:Sanskar.agarwal91@gmail.com">
            Sanskar.agarwal91@gmail.com
          </a>
        </span>
      </p>
      <p className="m-auto text-3xl">
        Phone No. <br />
        <span className="text-base">9628853634</span>
      </p>
      <div className="w-full flex justify-end p-10">
        <Link
          href="/Main"
          className="bg-orange-500 text-white p-2 rounded-md mt-10 flex w-36 justify-evenly"
        >
          Introduction
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
  );
};

export default Page;
