import React, { useState } from "react";
import "./quizpage.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Header from "./Header";
import QuizSection from "./QuizSection";
import Sidebar from "./Sidebar";

const QuizPage = ({ location }) => {
  const [sidebarIsOpen, updateSidebarIsOpen] = useState(false);

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Quiz - Category: {location.state.category}</title>
        </Helmet>
        <main className="block">
          <Header
            page="quiz"
            onClickMenuButton={() => updateSidebarIsOpen(true)}
          />
          <Sidebar
            onClose={() => updateSidebarIsOpen(false)}
            isOpen={sidebarIsOpen}
          />
          <QuizSection category={location.state.category} />
        </main>
      </HelmetProvider>
    </>
  );
};

export default QuizPage;
