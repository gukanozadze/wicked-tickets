import Image from "next/image";
import ticketLogo from "../public/ticket.png";

export default function Page() {
  const data = [
    {
      id: 1,
      title: "Super Cup 2022",
    },
    {
      id: 2,
      title: "Gotavista MRX99 at Naxalovka",
    },
    {
      id: 3,
      title: "officia porro iure quia iusto qui ipsa ut modi",
    },
    {
      id: 4,
      title: "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
    },
    {
      id: 5,
      title: "natus nisi omnis corporis facere molestiae rerum in",
    },
    {
      id: 6,
      title: "accusamus ea aliquid et amet sequi nemo",
    },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold">All Tickets</h1>
      <div>
        {data.map(({ title, id }) => {
          return (
            <div key={id}>
              <Image
                src={"https://source.unsplash.com/random/800x600"}
                alt="title"
                width={75}
                height={75}
              />
              <div>{title}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
