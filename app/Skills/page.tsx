import { NextPage } from "next";
import Link from "next/link";
import Card from "../components/Card";

interface Props {}

const Skills = [
  {
    skill: "Angular",
    image: "/image/angular.jpg",
  },
  {
    skill: "React",
    image: "/image/react.jpg",
  },
  {
    skill: "Next",
    image: "/image/next.jpg",
  },
  {
    skill: "Node",
    image: "/image/node.jpg",
  },
  {
    skill: "Express",
    image: "/image/express.jpg",
  },
  {
    skill: "MongoDb",
    image: "/image/mongodb.jpg",
  },
];

const Page: NextPage<Props> = ({}) => {
  return (
    <div className="h-screen overflow-auto">
      <div className="p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {Skills.map((skill: any, index: number) => {
          return (
            <div key={index}>
              <Card image={skill.image} />
            </div>
          );
        })}
      </div>
      <div className="w-full flex justify-end p-10">
        <Link
          href="/About"
          className="bg-orange-500 text-white p-2 rounded-md mt-10 flex w-28 justify-evenly"
        >
          About
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
