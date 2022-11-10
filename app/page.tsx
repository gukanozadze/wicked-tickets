import HomeTicketCard from "../components/Ticket/HomeTicketCard";

import PSGVSBAYERN from "/public/psg-bayern.jpg";
import GEORGIAMACEDONIA from "/public/georgia-macedonia.jpeg";
import MEGADAVCURAVZGVAS from "/public/me-gadavcurav-zgvas.jpeg";
import EMINEMSNOOPDOGG from "/public/eminem-snoopdogg.jpeg";
import DENMARKGEORGIA from "/public/denmark-georgia.jpeg";
import DESIGNSUMMIT from "/public/design-summit.jpeg";

export default function Page() {
  const data = [
    {
      id: 1,
      title: "Bayern - PSG | Alianz Arena",
      src: PSGVSBAYERN,
      date: new Date("2023-02-14"),
      fewLeft: true,
    },
    {
      id: 2,
      title: "Macedonia - Georgia | Boris Paichadze Stadium",
      src: GEORGIAMACEDONIA,
      date: new Date("2023-05-23"),
    },
    {
      id: 3,
      title: "Me Gadavcurav Zgvas | Sadgac",
      src: MEGADAVCURAVZGVAS,
      date: new Date("2022-12-12"),
    },
    {
      id: 4,
      title: "Eminem & Snoop Dog, end of era concert | Bassiani",
      src: EMINEMSNOOPDOGG,
      date: new Date("2023-01-08"),
    },

    {
      id: 6,
      title: "Digital Summit TOUCH22 | Rustaveli Theatre  ",
      src: DESIGNSUMMIT,
      date: new Date("2022-12-07"),
    },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold">All Tickets</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-8 mt-6 ">
        {data.map((item) => (
          <HomeTicketCard key={item.id} {...item} />
        ))}
        {data.map((item) => (
          <HomeTicketCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
