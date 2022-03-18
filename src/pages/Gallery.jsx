import React, { Component } from "react";

import Card from "../components/Card";
import ModalConfirm from "../components/ModalConfirm";
import ModalEdit from "../components/ModalEdit";
import ModalAdd from "../components/ModalAdd";
import AddBook from "../components/AddBook";
import Search from "../components/Search";

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

      keyword: "",
      filtered: [],
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

  setAddModal = (input) => {
    this.setState({ openAddModal: input });
  };

  setConfirmModal = (input) => {
    this.setState({ openConfirmModal: input });
  };

  setEditModal = (input) => {
    this.setState({ openEditModal: input });
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

  searching = (newKeyword) => {
    let keyword = newKeyword.toLowerCase();
    let tempBuku = this.state.buku;
    let result = tempBuku.filter((item) => {
      return (
        item.judul.toLocaleLowerCase().includes(keyword) ||
        item.penulis.toLocaleLowerCase().includes(keyword) ||
        item.penerbit.toLocaleLowerCase().includes(keyword)
      );
    });

    this.setState({ filtered: result, keyword });
    // console.log("you just pressed enter key, keyword = " + keyword);
  };

  render() {
    return (
      <div className="mb-8">
        <div class="flex justify-between items-center py-2 px-6 space-x-6 bg-white rounded-b-xl transform transition duration-500">
          <AddBook setAddModal={this.setAddModal} />
          <Search searching={this.searching} />
        </div>

        {this.state.keyword
          ? this.state.filtered.map((item, index) => (
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
            ))
          : this.state.buku.map((item, index) => (
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
