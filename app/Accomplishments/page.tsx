import { NextPage } from "next";
import Link from "next/link";
import Card from "../components/Card";

interface Props {}

const Projects = [
  {
    name: "RetroTax",
    image: "/image/retrotax.jpg",
    link: "https://webscreen-qa.retrotax-aci.com/",
    efforts: [
      "Worked on migration of an Webscreen application",
      "Developed an extension of RetroTax named Plugin in Angular.",
    ],
  },
  {
    name: "PDX",
    image: "/image/PDX.jpg",
    link: "https://staging.startdate.co/",
    efforts: [
      "Spearheaded improvements in PDX project by fixing bugs and enhancing overall functionality ",
    ],
  },
  {
    name: "StartDate",
    image: "/image/startdate.png",
    link: "https://stg-playground.startdate.co/",
    efforts: ["Developed the project with UI team"],
  },
  {
    name: "PoweredBy",
    image: "/image/poweredBy.svg",
    link: "https://dev.pdx-qa.premieredigital.net/",
    efforts: ["Developed the project with UI team"],
  },
];

const Page: NextPage<Props> = ({}) => {
  return (
    <div className="h-screen overflow-auto">
      <div className="p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {Projects.map((Project: any, index: number) => {
          return (
            <div key={index}>
              <Card image={Project.image} />
              <Link href={Project.link} className="text-xl text-orange-500">
                {Project.name}
              </Link>
              {Project.efforts.map((effort: string, index: number) => {
                return (
                  <>
                    <br />
                    <span key={index} className="text-base">
                      {effort}
                    </span>
                  </>
                );
              })}
            </div>
          );
        })}
      </div>
      <div className="w-full flex justify-end p-10">
        <Link
          href="/Contact"
          className="bg-orange-500 text-white p-2 rounded-md mt-10 flex w-28 justify-evenly"
        >
          Contact
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
