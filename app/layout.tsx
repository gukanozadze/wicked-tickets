import "./global.css";

import SidePortal from "../components/SidePortal";
import Header from "../components/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Wicked Tickets</title>
      </head>
      <body>
        <Header />
        <div className="max-w-[1920px] mx-auto flex gap-8 px-12">
          <SidePortal />
          <div>{children}</div>
        </div>
      </body>
    </html>
  );
}
