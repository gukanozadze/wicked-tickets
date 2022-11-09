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
        <meta property="og:title" content="Tickets for sale" key="ogtitle" />
        <meta
          property="og:description"
          content="Cheap platform for buying tickets for various events"
          key="ogdesc"
        />
        <meta
          property="og:image"
          content="/public/psg-bayern.jpg"
          key="ogimage"
        />
        <meta
          property="og:site_name"
          content="WickedTickets"
          key="ogsitename"
        />

        <title>Wicked Tickets</title>
      </head>
      <body className="bg-bgColor">
        <Header />

        <div className="max-w-[1920px] mx-auto flex gap-4 px-4 md:gap-8 md:px-8 lg:px-12">
          <SidePortal />
          <div className="flex-1">{children}</div>
        </div>
      </body>
    </html>
  );
}
