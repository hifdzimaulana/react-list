import React, { useState } from "react";
import { SearchCircleIcon } from "@heroicons/react/solid";

function Search(props) {
  const [state, setState] = useState({
    keyword: "",
  });

  const onChange = (event) => {
    setState({ keyword: event.target.value });
  };

  const onEnter = (event) => {
    if (event.keyCode === 13) {
      props.searching(state.keyword);
    }
  };

  return (
    <div className="flex items-center">
      <div class="flex bg-gray-100 p-4 w-72 space-x-4 rounded-lg">
        <SearchCircleIcon className="w-7 h-7 text-gray-600 " />
        <input
          class="bg-gray-100 outline-none"
          type="text"
          placeholder="Book title..."
          onChange={onChange}
          onKeyDown={onEnter}
        />
      </div>
    </div>
  );
}

export default Search;
