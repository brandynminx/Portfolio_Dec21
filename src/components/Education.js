import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
//Place where project info is coming from
import { education } from "../data";

export default function Education() {
  return (
    <section id="education" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Education
          </h1>
        </div>
        <div className="flex justify-center flex-wrap -m-4">
          {education.map((edu) => (
            <a
              href={edu.link}
              className="w-100 p-4">
              <div className="flex relative">
                <div className="px-8 py-10 relative w-full border-4 border-gray-800 bg-gray-900 hover:opacity-70">
                  <h2 className="tracking-widest text-lg title-font font-medium text-green-400 mb-1">
                    {edu.subtitle}
                  </h2>
                  <h1 className="title-font text-md font-medium text-white mb-3">
                    {edu.title}
                  </h1>
                  <p className="leading-relaxed">{edu.honors}</p>
                  <br></br>
                  <p className="leading-relaxed">{edu.description}</p>
                  <br></br>
                  <p className="leading-relaxed text-white">{edu.courses}</p>
                  <p className="leading-relaxed">{edu.coursework}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}