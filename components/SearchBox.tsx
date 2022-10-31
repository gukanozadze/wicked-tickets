import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

export default function SearchBox() {
  return (
    <div>
      <div className="rounded-xl shadow-sm mx-auto w-72 relative">
        <input
          type="text"
          className="px-4 py-2 block w-full bg-transparent rounded-xl border border-[#353535]  focus:border-[#6E6E6E] focus:ring-[#6E6E6E] sm:text-sm"
          placeholder="Search..."
        />
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
          <MagnifyingGlassIcon
            className="h-5 w-5 text-lightGray"
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  );
}
