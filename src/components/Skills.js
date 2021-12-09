import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
//Place where project info is coming from
import { skills } from "../data";

export default function Skills() {
  return (
    <section id="skills" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Skills
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
            facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam
            fuga dolore.
          </p>
        </div>
        <div className="flex justify-center flex-wrap -m-4">
          {skills.map((skill) => (
              <div className="flex relative">
                <div className="px-11 py-10 relative w-full border-2 border-gray-800 bg-gray-900 hover:opacity-50">
                  <ul>
                    <li>
                      <h2 className="text-sm title-font font-medium text-green-400 mb-1">
                        {skill.subtitle}
                      </h2>
                    </li>
                    <li>
                      <h1 className="title-font text-lg font-medium text-white mb-3">
                        {skill.title}
                      </h1>
                    </li>
                  </ul>
                </div>
              </div>
          ))}
        </div>
      </div>
    </section>
  );
}