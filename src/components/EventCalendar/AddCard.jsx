import React from "react";
import { ViewGridAddIcon } from "@heroicons/react/solid";

function Card(props) {
  return (
    <article className="bg-white shadow-lg hover:shadow-xl shadow-slate-200 text-slate-400 hover:text-slate-700 rounded-lg self-center transition-all duration-200">
      <button
        className="w-full h-full flex flex-col justify-center items-center px-4 py-[7rem]"
        onClick={() => props.setOpen(true)}
      >
        <ViewGridAddIcon className="w-10 h-10" />
        <p>Add new event</p>
      </button>
    </article>
  );
}

export default Card;
