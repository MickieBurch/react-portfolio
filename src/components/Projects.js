import React from "react";
import { Timeline, EventTimeline } from "react-tailwind-timeline-component";

function Projects() {
  return (
    <section id="projects" className="text-black-400 bg-grey-900 body-font">

      {/*This div is what holds the actual projects and the apps ive built section */}
      <div className="container px-2 py-5 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-10">
         
          <h1 className="sm:text-4xl text-3xl font-bold title-font  text-black">
            See my past work and history! 
          </h1>
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
          description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
      
          leftSideContent={new Date(2020, 7, 28).toLocaleDateString()}
          lineClassName="border-lime-500"
          iconBackgroundClassName="bg-lime-500 ring-lime-400 ring-2 ring-opacity-75"
          date={new Date(2020, 7, 28)}
          rightSideContentClassName="hover:text-white-500"
          cardClassName="border-4 border-lime-500 bg-white-100 hover:bg-pink-500"
          />

          <EventTimeline
          title="Test 2"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          leftSideContent={new Date(2020, 7, 28).toLocaleDateString()}
          lineClassName="border-lime-500"
          iconBackgroundClassName="bg-lime-500 ring-lime-400 ring-2 ring-opacity-75"
          date={new Date(2020, 7, 28)}
          rightSideContentClassName="hover:text-white-500"
          cardClassName="border-4 border-lime-500 bg-white-100 hover:bg-pink-500"
          />

           </Timeline>
           </div>
        </div>
    </section>
  );
}
export default Projects

