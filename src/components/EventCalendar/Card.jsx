import React from "react";
import { Disclosure, Transition } from "@headlessui/react";
import {
  ChevronDownIcon,
  TrashIcon,
  PencilAltIcon,
} from "@heroicons/react/solid";

function Card(props) {
  return (
    <article className="bg-white shadow-xl shadow-slate-200 rounded-lg">
      <div
        className={`p-3 shadow bg-slate-200 text-slate-700 uppercase grid place-items-center rounded-t-lg min-h-[5rem]`}
      >
        <div className="text-sm">{props.date?.month}</div>
        <div className="text-3xl font-bold">{props.date?.date}</div>
      </div>
      <div className="p-4 md:p-6 lg:p-8 grid gap-4 md:gap-6">
        <div className="grid gap-1">
          <p className="text-slate-600 text-sm">{props["full-date"]}</p>
          <h2 className="font-bold text-2xl">{props.title}</h2>
          <div className="grid gap-1">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="text-slate-400 flex gap-1 items-center cursor-pointer">
                    <p className={`pointer-events-none ${open && "underline"}`}>
                      See details
                    </p>
                    <ChevronDownIcon
                      className={`h-4 w-4 pointer-events-none ${
                        open && "transform -rotate-180"
                      } transition-all duration-200`}
                    />
                  </Disclosure.Button>
                  <Transition
                    enter="transition duration-200 ease-out"
                    enterFrom="transform h-1/2 opacity-0"
                    enterTo="transform h-full opacity-100"
                    leave="transition duration-200 ease-out"
                    leaveFrom="transform h-1/2 opacity-100"
                    leaveTo="transform h-full opacity-0"
                  >
                    <Disclosure.Panel className="grid gap-1">
                      <p className="text-slate-700">{props.details}</p>
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>
          </div>
        </div>
        <div
          className={`grid grid-cols-2 rounded-md text-slate-700 shadow-2xl shadow-slate-200 text-center font-bold`}
        >
          <button
            className="ointer-events-none flex justify-center rounded-l-full bg-teal-400 hover:bg-teal-500 py-2 px-4 text-slate-50 font-bold"
            onClick={props.onEdit}
          >
            <PencilAltIcon className="h-5 w-5" />
          </button>
          <button
            className="ointer-events-none flex justify-center rounded-r-full bg-fuchsia-400 hover:bg-fuchsia-500 py-2 px-4 text-slate-50 font-bold"
            onClick={props.onDrop}
          >
            <TrashIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </article>
  );
}

export default Card;
