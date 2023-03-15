import React from "react";
import { projects } from "../data.js";
import { Timeline, EventTimeline } from "react-tailwind-timeline-component";


function Projects() {
  return (
    <section id="projects" className="text-black-400 bg-white-900 body-font">
     
      {/*This creates the initial container on the page */}
          <div
            className="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-blue-50"
          ></div>

      {/*This div is what holds the actual projects and the apps ive built section */}
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
         
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-black">
            Apps I've Built
          </h1>
          <p className="lg mx-auto leading-relaxed text-base ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
            facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam
            fuga dolore.
          </p>
        </div>
        </div>

        <div className="timeline">
          <div className="container-left">
          <Timeline
        className="py-4 max-w-2x1 md:max-w-4xl mx-auto"
        beforeUndatedContent={false}
      >
        <EventTimeline
          title="Test 1 "
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          leftSideContent={new Date(2020, 7, 28).toLocaleDateString()}
          lineClassName="border-lime-500"
          iconBackgroundClassName="bg-lime-500 ring-lime-400 ring-2 ring-opacity-75"
          date={new Date(2020, 7, 28)}
          rightSideContentClassName="hover:text-white-500"
          cardClassName="border-4 border-lime-500 bg-white-100 hover:bg-lime-500"
          />

          <EventTimeline
          title="Test 2"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          leftSideContent={new Date(2020, 7, 28).toLocaleDateString()}
          lineClassName="border-lime-500"
          iconBackgroundClassName="bg-lime-500 ring-lime-400 ring-2 ring-opacity-75"
          date={new Date(2020, 7, 28)}
          rightSideContentClassName="hover:text-white-500"
          cardClassName="border-4 border-lime-500 bg-white-100 hover:bg-lime-500"
          />

           </Timeline>
           </div>
        </div>
    </section>
  );
}
export default Projects

