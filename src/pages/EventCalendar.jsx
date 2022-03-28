import React, { Component } from "react";
import Card from "../components/EventCalendar/Card";
import CardsContainer from "../layouts/EventCalendar/CardsContainer";
import ModalConfirm from "../components/EventCalendar/ModalConfirm";
import ModalEdit from "../components/EventCalendar/ModalEdit";
import ModalAdd from "../components/EventCalendar/ModalAdd";
import AddCard from "../components/EventCalendar/AddCard";

class EventCalendar extends Component {
  constructor() {
    super();

    this.state = {
      events: [
        {
          date: { month: "OCT", date: 23 },
          fullDate: new Date(2022, 9, 23),
          title: "Hari maguire 🐐",
          details: "5",
        },
        {
          date: { month: "MAR", date: 21 },
          fullDate: new Date(2022, 2, 21),
          title: "Hari hutan internasional 🎋",
          details:
            "Hari Hutan Sedunia diperingati pertama kali pada tanggal 21 Maret 2013 berdasarkan resolusi PBB pada 28 November 2012.",
        },
        {
          date: { month: "MAR", date: 22 },
          fullDate: new Date(2022, 2, 22),
          title: "Hari air sedunia 🌊",
          details:
            "Hari Air Sedunia adalah perayaan yang ditujukan sebagai usaha-usaha menarik perhatian publik akan pentingnya air bersih dan usaha penyadaran untuk pengelolaan sumber-sumber air bersih yang berkelanjutan.",
        },
        {
          date: { month: "APR", date: 22 },
          fullDate: new Date(2022, 3, 22),
          title: "Hari bumi 🌏",
          details:
            "Hari Bumi adalah acara tahunan yang dirayakan di seluruh dunia pada 22 April untuk menunjukkan dukungan bagi perlindungan lingkungan. Hari Bumi dirancang untuk meningkatkan kesadaran dan apresiasi terhadap planet yang ditinggali manusia ini yaitu bumi.",
        },
        {
          date: { month: "JUN", date: 21 },
          fullDate: new Date(2022, 5, 21),
          title: "Hari musik sedunia 🎼",
          details:
            "World Music Day atau Fete de la Musique adalah sebuah perayaan musik tahunan yang unik. Hari ini juga dikenal sebaga Music Day (hari musik) atau Make Music Day (hari membuat musik).",
        },
      ],
      selected: {},
      openConfirmModal: false,
      openEditModal: false,
      openAddModal: false,
    };
  }

  setModal = (modal) => {
    return (setTo) => {
      this.setState({ [modal]: setTo });
    };
  };

  setSelected = (index, value) => {
    this.setState({ selected: { index, ...value } });
  };

  Drop = (index) => {
    let tempEvents = this.state.events;
    tempEvents.splice(index, 1);
    this.setState({ events: tempEvents });
  };

  Edit = (data) => {
    let tempEvents = this.state.events;
    let { index, ...changedEvent } = data;
    tempEvents[index] = changedEvent;

    this.setState({ events: tempEvents });
  };

  Add = (data) => {
    let tempEvents = this.state.events;
    tempEvents.push(data);
    this.setState({ events: tempEvents });
  };

  render() {
    // sorting events by date
    {
      this.state.events.sort((prev, next) => {
        prev = prev.fullDate;
        next = next.fullDate;
        return prev > next ? 1 : prev < next ? -1 : 0;
      });
    }
    return (
      <div
        className="bg-slate-50 p-4 md:p-6 lg:p-8 min-h-[91vh] grid gap-4 md:gap-6 lg:gap-8 
      text-slate-600"
      >
        <div className="text-center grid p-4 place-items-center content-center">
          <h1 className="text-3xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-br pb-4 md:pb-6 from-blue-500 to-violet-700">
            My Calendar Events
          </h1>
        </div>

        <CardsContainer>
          {this.state.events.map((value, index) => (
            <Card
              key={index}
              date={value.date}
              full-date={value.fullDate?.toDateString()}
              title={value.title}
              details={value.details}
              onDrop={() => {
                this.setSelected(index, value);
                this.setModal("openConfirmModal")(true);
              }}
              onEdit={() => {
                this.setSelected(index, value);
                this.setModal("openEditModal")(true);
              }}
            />
          ))}
          <AddCard setOpen={this.setModal("openAddModal")} />
        </CardsContainer>

        <ModalConfirm
          openModal={this.state.openConfirmModal}
          setOpen={this.setModal("openConfirmModal")}
          onDelete={this.Drop}
          selected={this.state.selected}
        />

        <ModalEdit
          openModal={this.state.openEditModal}
          setOpen={this.setModal("openEditModal")}
          selected={this.state.selected}
          onSave={this.Edit}
        />

        <ModalAdd
          openModal={this.state.openAddModal}
          setOpen={this.setModal("openAddModal")}
          onSave={this.Add}
        />
      </div>
    );
  }
}

export default EventCalendar;
