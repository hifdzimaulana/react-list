/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useRef, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { PencilIcon } from "@heroicons/react/outline";

export default function Example(props) {
  const cancelButtonRef = useRef(null);

  const [state, setState] = useState({
    index: "",
    isbn: "",
    judul: "",
    penulis: "",
    penerbit: "",
    harga: 0,
    cover: "",
  });

  const onFormChange = (event) => {
    setState({
      ...state,
      [event.target.id]: event.target.value,
    });
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    props.onSave(state);
    props.setOpen(false);
  };

  useEffect(() => {
    setState({ ...props.data });
  }, [props.data]);

  return (
    <Transition.Root show={props.openModal} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        initialFocus={cancelButtonRef}
        onClose={() => props.setOpen(false)}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                    <PencilIcon
                      className="h-6 w-6 text-green-600"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <Dialog.Title
                      as="h3"
                      className="text-lg leading-6 font-medium text-gray-900 mt-1.5"
                    >
                      Edit this book
                    </Dialog.Title>
                  </div>
                </div>
                <div className="mt-4">
                  {/*  */}
                  <form
                    id="modal-form"
                    onChange={onFormChange}
                    onSubmit={onFormSubmit}
                  >
                    <div>
                      <label
                        htmlFor="isbn"
                        className="block mb-2 text-md font-medium text-gray-900"
                      >
                        ISBN
                      </label>
                      <input
                        type="text"
                        id="isbn"
                        name="isbn"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                        defaultValue={props.data.isbn}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="judul"
                        className="block mb-2 text-md font-medium text-gray-900"
                      >
                        Judul
                      </label>
                      <input
                        type="text"
                        id="judul"
                        name="judul"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                        defaultValue={props.data.judul}
                      />
                    </div>

                    <div className="mt-2">
                      <label
                        htmlFor="penulis"
                        className="block mb-2 text-md font-medium text-gray-900"
                      >
                        Penulis
                      </label>
                      <input
                        type="text"
                        id="penulis"
                        name="penulis"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                        defaultValue={props.data.penulis}
                      />
                    </div>

                    <div className="mt-2">
                      <label
                        htmlFor="penerbit"
                        className="block mb-2 text-md font-medium text-gray-900"
                      >
                        Penerbit
                      </label>
                      <input
                        type="text"
                        id="penerbit"
                        name="penerbit"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                        defaultValue={props.data.penerbit}
                      />
                    </div>

                    <div className="mt-2">
                      <label
                        htmlFor="harga"
                        className="block mb-2 text-md font-medium text-gray-900"
                      >
                        Harga
                      </label>
                      <input
                        type="number"
                        id="harga"
                        name="harga"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                        defaultValue={props.data.harga}
                        min={0}
                      />
                    </div>

                    <div className="mt-2">
                      <label
                        htmlFor="cover"
                        className="block mb-2 text-md font-medium text-gray-900"
                      >
                        Cover
                      </label>
                      <input
                        type="text"
                        id="cover"
                        name="cover"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                        defaultValue={props.data.cover}
                      />
                    </div>
                  </form>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="submit"
                  form="modal-form"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Save
                </button>
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => props.setOpen(false)}
                  ref={cancelButtonRef}
                >
                  Cancel
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
