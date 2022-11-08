"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ href, title, icon }: any) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={clsx("p-2 block", pathname === href && "bg-brand rounded-lg")}
    >
      {icon}
      <span>{title}</span>
    </Link>
  );
}
