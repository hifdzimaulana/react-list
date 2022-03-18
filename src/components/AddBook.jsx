import React from "react";
import { PlusCircleIcon } from "@heroicons/react/outline";

function AddBook(props) {
  return (
    <div>
      <button
        className="flex items-center py-2 rounded-xl px-2 space-x-1.5 bg-blue-600 text-white"
        onClick={() => props.setAddModal(true)}
      >
        <PlusCircleIcon className="w-7 h-7" />
        <span className="font-semibold">Add book</span>
      </button>
    </div>
  );
}

export default AddBook;
