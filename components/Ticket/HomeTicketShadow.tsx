import clsx from "clsx";

export default function HomeTicketShadow() {
  const gradient = "bg-gradient-to-b from-transparent to-black";
  return (
    <div
      className={clsx(
        "absolute bottom-0 left-0 h-full w-full rounded-md ",
        "bg-gradient-to-b from-transparent to-bgColor hover:to-white"
      )}
    ></div>
  );
}
