import { NextPage } from "next";
import Link from "next/link";

interface Props {}

const Page: NextPage<Props> = ({}) => {
  return (
    <div className="max-h-screen overflow-auto p-10">
      <p className="text-3xl">
        Education <br />
        <span className="text-base">
          Bachelors of Computer Application (2019 May-2022 May)
        </span>
      </p>
      <p className="text-3xl mt-10">
        Experience <br />
        <span className="text-base">Freelance (2021 Nov- 2022 Dec)</span>
        <br />
        <span className="text-base">Navtech (2023 Feb- Present)</span>
      </p>
      <p className="text-3xl mt-10">
        Certification <br />
        <Link
          href={
            "https://drive.google.com/file/d/1HGYb449iQdvUJz12uI-HEEsPWnXos9kq/view?usp=sharing"
          }
          className="text-base text-orange-500"
        >
          {" "}
          JAVA Full Stack Development - Simplilearn (April 2022) - (Jan 2023)
        </Link>
        <br />
        <Link
          href={
            "https://drive.google.com/file/d/19bIk-MiuYfg9MpvEewwxoGWodIhwV4sV/view?usp=sharing"
          }
          className="text-base text-orange-500"
        >
          MERN Full Stack Development - Simplilearn (April 2022) - (Sept 2022)
        </Link>
        <br />
        <Link
          href={
            "https://drive.google.com/file/d/1WgiLc-TXepSa5o1w6vr3Ng4qJqMzOe3U/view?usp=sharing"
          }
          className="text-base text-orange-500"
        >
          MEAN Full Stack Development - Udemy (Aug 2021) - (Sept 2021)
        </Link>
      </p>
      <p className="text-3xl mt-10">
        Extracurricular
        <br />
        <span className="text-base">Part of Scouts and Guides</span>
        <br />
        <span className="text-base">Part of NSS</span>
        <br />
        <span className="text-base">Table Tennis</span>
      </p>
      <div className="w-full flex justify-end">
        <Link
          href="/Projects"
          className="bg-orange-500 text-white p-2 rounded-md mt-10 flex w-40 justify-evenly"
        >
          Projects
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
