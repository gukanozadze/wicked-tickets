import "./global.css";

import Header from "components/Header/Header";
import SideBar from "components/Sidebar/SideBar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="bg-bgColor h-full">
        <SideBar />
        <div className="md:pl-64">
          <div className="mx-auto relative max-w-4xl md:px-8 xl:px-0">
            <Header />
            <div className="py-6 px-4 sm:px-6 md:px-0">
              {/* Replace with your content */}
              {children}
              {/* /End replace */}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
