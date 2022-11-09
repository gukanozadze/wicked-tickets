"use client";
import "./global.css";

import { useState } from "react";
import Header from "components/Header";
import SideBarNew from "components/Sidebar/SideBarNew";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <html lang="en" className="h-full">
      <body className="bg-bgColor h-full">
        <div>
          <SideBarNew
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
          />

          <div className="md:pl-64">
            <div className="mx-auto flex max-w-4xl flex-col md:px-8 xl:px-0">
              <Header
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
              />

              <main className="flex-1">
                <div className="py-6">
                  <div className="px-4 sm:px-6 md:px-0">
                    {/* Replace with your content */}
                    {children}
                    {/* /End replace */}
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
