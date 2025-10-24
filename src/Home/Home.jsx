import React, { useState } from "react";
import "../Home/home.css";
import Header from "../Header";
import Footer from "../Footer";
import HomeSection from "../HomeSection";
import Sidebar from "../Sidebar";
import { Helmet, HelmetProvider } from "react-helmet-async";

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
          <Footer />
        </main>
      </HelmetProvider>
    </>
  );
};

export default Home;
