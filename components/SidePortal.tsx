import {
  HomeIcon,
  TicketIcon,
  ArrowLeftOnRectangleIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { FireIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import MutedTextContent from "./Sidebar/MutedTextContent";

export default function SidePortal() {
  return (
    <div className="border border-midnight rounded-lg w-72">
      <ul className="px-4 py-6 space-y-4">
        <li>
          <HomeIcon className="w-6 h-6 inline mr-3" />
          <Link href="/">Homepage</Link>
        </li>
        <li>
          <FireIcon className="w-6 h-6 inline mr-3" />
          <Link href="/hotevents">Hot Events</Link>
        </li>
        <li>
          <TicketIcon className="w-6 h-6 inline mr-3" />
          <Link href="/mytickets">My Tickets</Link>
        </li>
      </ul>
      <MutedTextContent text={"Popular By Category"} />

      <ul className="p-4 space-y-4 text-lg ">
        <li>
          <Link href="/">Sport</Link>
        </li>
        <li>
          <Link href="/hotevents">Cinema</Link>
        </li>
        <li>
          <Link href="/mytickets">Music Events</Link>
        </li>
        <li className="text-appleBlue text-sm -mt-4">
          <Link href="/mytickets">See All</Link>
        </li>
      </ul>

      <MutedTextContent text={"Account Settings"} />

      <ul className="px-4 py-4 space-y-4 text-midnight">
        <li>
          <UserCircleIcon className="w-6 h-6 inline mr-3" />
          <Link href="/">Profile</Link>
        </li>
        <li>
          <ArrowLeftOnRectangleIcon className="w-6 h-6 inline mr-3 " />
          <Link href="/logout">Log Out</Link>
        </li>
      </ul>
    </div>
  );
}
