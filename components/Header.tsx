import Image from "next/image";
import ticketLogo from "../public/ticket.png";
import SearchBox from "./SearchBox";

export default function Header() {
  return (
    <div className="mb-8 border-b border-midnight">
      <div className="px-12  flex items-center max-w-[1920px] mx-auto">
        <Image
          className="rotate-45"
          src={ticketLogo}
          alt="Picture of the ticket"
          width={75}
          height={75}
          // blurDataURL="data:..." automatically provided
          // placeholder="blur" // Optional blur-up while loading
        />
        <div className="flex-1">
          <SearchBox />
        </div>
      </div>
    </div>
  );
}
