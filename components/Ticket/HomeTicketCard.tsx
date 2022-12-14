import Image from "next/image";
import clsx from "clsx";
import HomeTicketShadow from "./HomeTicketShadow";
import HomeTicketDate from "./HomeTicketDate";
import TicketBanner from "components/Ticket/TicketBanner";
import TicketName from "typography/TicketName";
import Link from "next/link";

export default function HomeTicketCard({ title, src, date, fewLeft }: any) {
  return (
    <Link
      href="/ticket/3"
      className={clsx(
        "block bg-brand h-48 rounded-lg relative block cursor-pointer",
        "text-brand  hover:text-white  transition-all"
      )}
    >
      <TicketName className="absolute left-0 bottom-5 px-4  z-10">
        {title}
      </TicketName>
      <Image
        src={src}
        alt="psg-bayern"
        className="object-cover bg-top rounded-lg "
        fill
        // width={500} automatically provided
        // height={500} automatically provided
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      />

      <HomeTicketShadow />
      <HomeTicketDate date={date} />
      {fewLeft && <TicketBanner />}
    </Link>
  );
}
