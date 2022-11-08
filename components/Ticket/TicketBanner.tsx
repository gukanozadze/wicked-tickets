import { FireIcon } from "@heroicons/react/24/outline";

export default function TicketBanner() {
  return (
    <div className="bg-gradient-to-b from-brand h-8 w-full absolute -top-2 px-2  text-white rounded-md">
      <div className="flex items-center h-full ">
        <FireIcon className="w-6 h-6 inline mr-2" />
        <span>Only 3 tickets left</span>
      </div>
    </div>
  );
}
