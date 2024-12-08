import React from "react";

import popularDestinations from "./data/popularDestinations";
import DestinationCard from "./components/DestinationCard";

export default function App() {
return (
    <div>
      <div className="bg-white grid lg:grid-cols-2 2xl:grid-cols-5">
        <div className="px-8 py-12 pt-0 max-w-md mx-auto sm:max-w-xl lg:px-12 lg:py-24 lg:max-w-full xl:mr-0 2xl:col-span-2">
          <div className="xl:max-w-xl">
          <img className="h-20 pt-0" src="img/logo.jpg" alt="workation logo" />
          <img
            className="rounded-lg shadow-xl sm:mt-8 sm:h-64 sm:w-full sm:object-cover sm:object-center lg:hidden"
            src="img/beach.jpg"
            alt="woman on beach"
          />
          </div>
          <h1 className="text-gray-900 mt-6 text-2xl font-bold sm:mt-8 sm:text-4xl lg:text-3xl xl:text-4xl">
            You can work from anywhere.
            <br className="hidden lg:inline" />
            <span className="text-indigo-500">Take advantage of it.</span>
          </h1>

          <p className="mt-2 text-gray-600 sm:mt-4 sm:text-xl">
            A workation is a combination of work and vacation, where employees work while away from the office in a
            different location. The term is a portmanteau of the words "work" and "vacation".
          </p>

          <div className="mt-4 sm:mt-6 space-x-1">
            <a
              className="btn btn-primary shadow-lg hover:-translate-y-0.5 transform"
              href="#"
            >
              Book your escape
            </a>

            <a className="btn btn-secondary" href="#">
              Learn more
            </a>
          </div>
        </div>
        <div className="hidden relative lg:block 2xl:col-span-3">
          <img
            className="absolute inset-0 w-full h-full object-cover object-center"
            src="img/beach.jpg"
            alt="woman on beach"
          />
        </div>
      </div>
      <div className=" max-w-md sm:max-w-xl lg:max-w-6xl mx-auto px-8 lg:px-12 py-8">
        <h2 className="text-2xl font-bold text-gray-900">Popular destinations</h2>
        <p className="mt-2 text-gray-600">
          A selection of great work friendly cities with lots to see and explore
        </p>
        <div className="grid mt-6 gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {popularDestinations.map((destination) => (
            <DestinationCard destination={destination} key={destination.city} />
          ))}
        </div>
      </div>
    </div>
  );
}