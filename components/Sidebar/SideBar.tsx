import {
  HomeIcon,
  TicketIcon,
  ArrowLeftOnRectangleIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { FireIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import MutedTextContent from "../../typography/MutedTextContent";
import NavLink from "./NavLink";

const NavigationMainRoutes = [
  {
    href: "/",
    title: "Homepage",
    icon: <HomeIcon className="w-6 h-6 inline mr-3" />,
  },
  {
    href: "/hotevents",
    title: "Hot Events",
    icon: <FireIcon className="w-6 h-6 inline mr-3" />,
  },
  {
    href: "/mytickets",
    title: "My Tickets",
    icon: <TicketIcon className="w-6 h-6 inline mr-3" />,
  },
];

const NavigationSecondaryRoutes = [
  {
    href: "/sports",
    title: "Sports",
  },
  {
    href: "/cinema",
    title: "Cinema",
  },
  {
    href: "/music",
    title: "Music Events",
  },
];

export default function SideBar() {
  return (
    <div>
      <div className="border border-accentColor rounded-lg w-48 md:w-72">
        <div className="px-2 md:px-4 py-6 space-y-2">
          {NavigationMainRoutes.map((props) => (
            <NavLink key={props.title} {...props} />
          ))}
        </div>

        <MutedTextContent text={"Popular By Category"} />

        <div className="p-2 md:p-4 space-y-2 text-lg ">
          {NavigationSecondaryRoutes.map((props) => (
            <NavLink key={props.title} {...props} />
          ))}
        </div>

        <MutedTextContent text={"Account Settings"} />

        <ul className="p-4 space-y-4 text-accentColor">
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
    </div>
  );
}
