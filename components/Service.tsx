import React from "react";
import {Service as Serv} from "./Services";

const Service = ({service}: {service: Serv}) => {
  return (
    <div className="relative pl-16 my-3">
      <dt className="text-base font-semibold leading-7 text-gray-900 dark:text-gray-200">
        <div className="absolute top-0 left-0 flex items-center justify-center w-10 h-10 bg-blue-600 rounded-lg">
          <div
            className="w-6 h-6 font-medium text-white"
            aria-hidden="true"
            dangerouslySetInnerHTML={{__html: service.icon}}
          />
        </div>
        {service.name}
      </dt>
      <dd className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-300">
        {service.description}
      </dd>
    </div>
  );
};

export default Service;
