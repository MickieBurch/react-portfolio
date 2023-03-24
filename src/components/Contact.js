
import React from "react";
import bgImage from "./coding.png"

export default function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => alert("Message sent!"))
      .catch((error) => alert(error));
  }

  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative"
        style={{
          background: `url(${bgImage})`,
        }}>
          
          <div className="bg-lime-500  py-7 rounded shadow-md">
            <div className=" px-10">
              <h2 className="title-font font-semibold text-white tracking-widest text-s">
                ADDRESS
              </h2>
              <p className="mt-2">
              Overland Park, KS
              </p>
            </div>
            <div className=" px-10 lg:mt-2">
              <h2 className="title-font font-semibold text-white tracking-widest text-s mt-4">
                EMAIL
              </h2>
              <a className="text-black-400">
                Mickieburch22@gmail.com
              </a>
              <h2 className="title-font font-semibold text-white tracking-widest text-s mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed">913-602-9317</p>
            </div>
          </div>
        </div>
     
        <form
          netlify
          name="contact"
          onSubmit={handleSubmit}
          className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-black sm:text-4xl text-3xl mb-1 font-medium title-font">
            Hire Me
          </h2>
          <p className="leading-relaxed mb-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
            suscipit officia aspernatur veritatis. Asperiores, aliquid?
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-black-400">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-lime-700 rounded border border-lime-700  focus:ring-2  text-base outline-none text-black-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-black-400">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-lime-800 rounded border border-lime-700  focus:ring-2 text-base outline-none text-black-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-black-400">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-lime-800 rounded border border-lime-700  focus:ring-2  h-32 text-base outline-none text-lime-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-lime-800 "
          >
            Submit
          </button>
        </form>
      </div>
     
    </section>
  );
}