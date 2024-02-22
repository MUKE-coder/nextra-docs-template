import Link from "next/link";
import React from "react";
export default function Hero() {
  const links = [
    {
      title: "Typescript in Next Js",
      path: "/programming-tutorials/nextjs/next-typescript",
    },
    { title: "Roadmaps Must see", path: "/roadmaps" },
    { title: "Desishub Lessons", path: "/programming-tutorials" },
    { title: "YouTube Video Tutorials", path: "#" },
    { title: "Website Templates Guides", path: "#" },
    { title: "Course Guides", path: "#" },
    { title: "Desishub Courses", path: "#" },
    { title: "How to Guides", path: "#" },
  ];

  return (
    <div className="bg-gradient-to-b from-slate-900 to-black">
      <div className="min-h-auto relative min-h-[192px] border-b border-b-[#1e293c] sm:min-h-[281px] transition-all">
        <div className="container px-5 py-6 pb-14 text-left transition-opacity duration-300 sm:px-0 sm:py-20 sm:text-center">
          <p className="-mt-4 sm:-mt-10 mb-7">
            <Link
              href="https://www.youtube.com/@JBWEBDEVELOPER"
              className="rounded-md border border-dashed border-purple-700 px-3 py-1.5 text-purple-400 transition-colors hover:border-gray-700 hover:text-white"
            >
              <span className="relative -top-[0.5px] mr-1 text-xs font-semibold uppercase text-white">
                Welcome
              </span>
              <span className="hidden sm:inline">
                to Our new Desishub Docs
                <span className="font-semibold ms-2">By JB Web Developer</span>
              </span>
              <span className="inline sm:hidden">
                Welcome to Our new Desishub Docs by JB
              </span>
            </Link>
          </p>
          <h className="mb-2 bg-gradient-to-b from-amber-50 to-purple-500 bg-clip-text text-2xl font-bold text-transparent sm:mb-4 sm:text-5xl">
            All in One Developer's Handbook
          </h>
          <p className="hidden px-4 text-lg text-gray-400 sm:block">
            Master any dev challenge with Desishub's all-in-one handbook. From
            roadmaps to video tutorials, conquer frontend, backend, and design
            with ease. This guide empowers you with everything you need to
            become a top developer.
          </p>
          <p className="text-md block px-0 text-gray-400 sm:hidden">
            Desishub's all-in-one handbook. From roadmaps to video tutorials,
            conquer frontend, backend, and design with ease.
          </p>
        </div>
      </div>
      <div className="relative border-b border-b-[#1e293c] py-10 sm:py-14">
        <div className="max-w-7x mx-auto">
          <h1 className="text-md font-regular absolute -top-[17px] flex rounded-lg border border-[#1e293c] bg-slate-900 px-3 py-1 text-slate-400 sm:left-1/2 sm:-translate-x-1/2">
            Popular Bookmarks
          </h1>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 mx-auto px-8">
            {links.map((item, i) => {
              return (
                <li key={i}>
                  <Link
                    href={item.path}
                    className="group border border-slate-800 bg-slate-900 p-2.5 sm:p-3.5 block no-underline rounded-lg relative text-slate-400 font-regular text-md hover:border-slate-600 hover:text-slate-100 overflow-hidden"
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
