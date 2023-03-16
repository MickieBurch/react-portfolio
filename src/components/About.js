import React from "react";

function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">
            Hey, I'm Mickie.
            <br className="hidden lg:inline-block" />I'm a creative and energetic front end developer. 
          </h1>
          <p className="mb-8 sm:text-2xl text-2xl mb-4 text-black">
          Since i've started programming in 2022 i've learned that I love creating what customers 
          see on applications. Being able to take a creative vision and turn it into something that real
          is what really keeps my drive with programming. I love that programming constantly challenges you
          and I want to continue learning more and more as I go along. 
          </p>
        </div>
      </div>
    </section>
  );
}

export default About
