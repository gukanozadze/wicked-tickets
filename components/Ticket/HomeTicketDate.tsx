import clsx from "clsx";
import { format } from "date-fns";

export default function HomeTicketShadow({ date }) {
  return (
    <div
      className={clsx(
        "transition-all absolute text-sm rounded-md ",
        "w-full h-full opacity-75 text-accentColor hover:text-white hover:opacity-100"
      )}
    >
      <div className="absolute right-2 bottom-0">
        {date && format(new Date(date), "dd LLLL | y")}
      </div>
    </div>
  );
}
