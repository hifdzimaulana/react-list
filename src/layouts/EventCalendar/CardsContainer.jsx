import React from "react";

function CardsContainer(props) {
  return (
    <div className="max-w-6xl w-full mx-auto">
      <section
        className="grid gap-4 grid-cols-event-cards md:gap-6 lg:gap-8 items-start"
        id="events-container"
      >
        {props.children}
      </section>
    </div>
  );
}

export default CardsContainer;
