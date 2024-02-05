import { NextPage } from "next";
import Link from "next/link";
import ProjectCard from "../components/ProjectCard";

interface Props {}

const Projects = [
  {
    name: "RetroTax",
    image: "/image/retrotax.jpg",
    efforts: [
      "Worked on migration of an Webscreen application",
      "Developed an extension of RetroTax named Plugin in Angular.",
    ],
  },
  {
    name: "PDX",
    image: "/image/PDX.jpg",
    efforts: [
      "Spearheaded improvements in PDX project by fixing bugs and enhancing overall functionality ",
    ],
  },
  {
    name: "StartDate",
    image: "/image/startdate.png",
    efforts: [
      "Developed the project with UI team",
      "Builded the Api's",
      "Integrated frontend functionalities with backend systems, ensuring seamless communication and data flow",
    ],
  },
  {
    name: "PoweredBy",
    image: "/image/poweredBy.svg",
    efforts: [
      "Developed the project with UI team",
      "Builded the Api's",
      "Integrated frontend functionalities with backend systems, ensuring seamless communication and data flow",
    ],
  },
];

const Page: NextPage<Props> = ({}) => {
  return (
    <div className="h-screen overflow-auto">
      <div className="p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {Projects.map((Project: any, index: number) => {
          return (
            <div key={index}>
              <ProjectCard
                efforts={Project.efforts}
                name={Project.name}
                image={Project.image}
              />
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
