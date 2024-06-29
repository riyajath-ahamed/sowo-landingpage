import React from "react";

const Landing = () => {
  return (
    <div id="about">
      <div className="mx-auto max-w-2xl py-24 sm:py-28 lg:py-32">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            Explore our website to discover more about our initiatives{"  "}
            <a href="#" className="font-semibold text-blue-500">
              <span className="absolute inset-0" aria-hidden="true" />
              Read more <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            <span className="bg-gradient-to-r from-orange-600 to-amber-400 bg-clip-text text-transparent  hover:drop-shadow-2xl">
              {" "}
              Happy
            </span>
            <span className="bg-gradient-to-r from-sky-700 to-blue-400 bg-clip-text text-transparent">
              {" "}
              Sri Lanka
              {" "}
            </span>
            <br />
            Today !
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          SOWO is a committed organization that was founded to offer necessary services meant to improve people's lives in Sri Lanka. 
          SOWO is dedicated to promoting transformation and advancement in our local communities by .hosting many social campaigns and projects.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Join Us
            </a>
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Landing;
