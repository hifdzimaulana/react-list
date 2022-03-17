import React from "react";

function Card(props) {
  const IDRformat = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  };

  return (
    <div className="grid grid-cols-1">
      <div className="card">
        <div className="card-body grid-rows-1">
          <div className="grid grid-cols-10">
            <div className="col-span-3">
              <div className="grid grid-cols-5">
                <img
                  className="col-start-2 col-span-3 max-h-96 min-h-min"
                  src={props.cover}
                />
              </div>
            </div>
            <div className="col-span-7 font-sans">
              <h5 className="font-semibold text-xl font-serif">
                {props.judul}
              </h5>
              <h6 className="">Penulis: {props.penulis}</h6>
              <h6 className="">Penerbit: {props.penerbit}</h6>
              <h6 className="text-orange-700">
                Harga: {IDRformat(props.harga)}
              </h6>

              <div className="flex space-x-2 mt-3">
                <button
                  className="rounded-full bg-sky-500 py-2 px-4 text-white font-bold"
                  onClick={props.onEdit}
                >
                  Edit
                </button>
                <button
                  className="rounded-full bg-red-500 py-2 px-4 text-white font-bold"
                  onClick={props.onDrop}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
