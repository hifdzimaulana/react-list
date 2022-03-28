import React, { Component } from "react";

class Home extends Component {
  componentDidMount() {
    document.title = "Home";
  }
  render() {
    return (
      <div className="flex justify-center items-center h-[91vh]">
        <div>
          <h1 className="text-8xl font-semibold text-neutral-200 hover:text-neutral-400 hover:scale-105 hover:-translate-y-1 text-center transition-all ease-in-out duration-700">
            Hello World!
          </h1>
        </div>
      </div>
    );
  }
}

export default Home;
