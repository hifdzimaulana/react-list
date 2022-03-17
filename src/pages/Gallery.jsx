import React, { Component } from "react";
import { SearchCircleIcon, PlusCircleIcon } from "@heroicons/react/solid";

import Card from "../components/Card";
import ModalConfirm from "../components/ModalConfirm";
import ModalEdit from "../components/ModalEdit";
import ModalAdd from "../components/ModalAdd";

class Gallery extends Component {
  constructor() {
    super();
    this.state = {
      buku: [
        {
          isbn: "12345",
          judul: "Bulan",
          penulis: "Tere Liye",
          penerbit: "CV Harapan Kita",
          harga: 90000,
          cover:
            "https://cdnwpseller.gramedia.net/wp-content/uploads/2021/10/08110223/BULAN-TERE-LIYE.jpg",
        },
        {
          isbn: "12346",
          judul: "Anak Badai",
          penulis: "Tere Liye",
          penerbit: "CV Nusa Bangsa",
          harga: 80000,
          cover:
            "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1565676381l/51497970._SX0_SY0_.jpg",
        },
        {
          isbn: "54321",
          judul: "Bumi",
          penulis: "Tere Liye",
          penerbit: "CV Nusa Bangsa",
          harga: 70000,
          cover:
            "https://cdn.gramedia.com/uploads/items/9786020332956_Bumi-New-Cover.jpg",
        },
      ],

      selected: {
        isbn: "",
        judul: "",
        penulis: "",
        penerbit: "",
        harga: "",
        cover: "",
      },
      selectedIndex: null,
      openConfirmModal: false,
      openEditModal: false,
      openAddModal: false,
    };
  }

  Drop = (index) => {
    this.setConfirmModal(true);
    this.setState({ selectedIndex: index });
  };

  Edit = (index, items) => {
    this.setEditModal(true);
    this.setState({ selected: items, selectedIndex: index });
  };

  clearSelected = () => {
    let selected = this.state.selected;
    Object.keys(selected).forEach((key) => {
      selected[key] = "";
    });

    this.setState({ selected, selectedIndex: null });
  };

  setAddModal = (input) => {
    this.setState({ openAddModal: input });
  };

  setConfirmModal = (input) => {
    this.setState({ openConfirmModal: input });

    if (input === false) this.clearSelected();
  };

  setEditModal = (input) => {
    this.setState({ openEditModal: input });

    if (input === false) this.clearSelected();
  };

  deleteBook = () => {
    let tempBuku = this.state.buku;
    let index = this.state.selectedIndex;
    tempBuku.splice(index, 1);

    this.setState({
      buku: tempBuku,
    });
  };

  saveBook = (data) => {
    let tempBuku = this.state.buku;
    tempBuku[this.state.selectedIndex] = data;

    this.setState({ buku: tempBuku });
  };

  addBook = (data) => {
    let buku = this.state.buku;
    buku.push(data);

    this.setState({ buku });
  };

  render() {
    return (
      <div>
        <div class="flex justify-between items-center py-2 px-6 space-x-6 bg-white rounded-b-xl transform transition duration-500">
          <div>
            <button
              className="flex items-center py-2 rounded-xl px-2 space-x-1.5 bg-blue-600 text-white"
              onClick={() => this.setAddModal(true)}
            >
              <PlusCircleIcon className="w-7 h-7" />
              <span className="font-semibold">Add book</span>
            </button>
          </div>
          <div className="flex items-center">
            <div class="flex bg-gray-100 p-4 w-72 space-x-4 rounded-lg">
              <SearchCircleIcon className="w-7 h-7 text-gray-600 " />
              <input
                class="bg-gray-100 outline-none"
                type="text"
                placeholder="Book title..."
              />
            </div>
            <div class="bg-indigo-600 py-3 px-5 text-white font-semibold rounded-lg hover:shadow-lg transition duration-3000 cursor-pointer">
              <span>Search</span>
            </div>
          </div>
        </div>

        {this.state.buku.map((item, index) => (
          <Card
            key={index}
            cover={item.cover}
            judul={item.judul}
            penulis={item.penulis}
            penerbit={item.penerbit}
            harga={item.harga}
            onEdit={() => this.Edit(index, item)}
            onDrop={() => this.Drop(index)}
          />
        ))}

        <ModalConfirm
          openModal={this.state.openConfirmModal}
          setOpen={this.setConfirmModal}
          deleteBook={this.deleteBook}
        />

        <ModalEdit
          openModal={this.state.openEditModal}
          setOpen={this.setEditModal}
          data={this.state.selected}
          onSave={this.saveBook}
        />

        <ModalAdd
          openModal={this.state.openAddModal}
          setOpen={this.setAddModal}
          onSave={this.addBook}
        />
      </div>
    );
  }
}

export default Gallery;
