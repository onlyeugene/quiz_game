import React, { useState } from "react";
import "../Home/home.css";
import Header from "../Header";

import Sidebar from "../Sidebar";
import { Helmet, HelmetProvider } from "react-helmet-async";
import HomeSection from "../HomeSection";

const Home = () => {
  const [sidebarIsOpen, updateSidebarIsOpen] = useState(false);

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Quiz - Home</title>
        </Helmet>
        <main className="block">
          <Header
            page="home"
            onClickMenuButton={() => updateSidebarIsOpen(true)}
          />
          <Sidebar
            onClose={() => updateSidebarIsOpen(false)}
            isOpen={sidebarIsOpen}
          />
          <HomeSection />
        </main>
      </HelmetProvider>
    </>
  );
};

export default Home;
