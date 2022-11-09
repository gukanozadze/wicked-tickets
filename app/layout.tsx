import "./global.css";

import SidePortal from "components/Sidebar/SideBar";
import Header from "components/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-bgColor">
        <Header />

        <div className="max-w-[1920px] mx-auto flex md:gap-8 px-4 md:px-8 lg:px-12">
          <SidePortal />
          <div className="flex-1">{children}</div>
        </div>
      </body>
    </html>
  );
}
