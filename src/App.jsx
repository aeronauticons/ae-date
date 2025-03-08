import React, { useEffect, useState } from "react";
import { DarkModeButton } from "./components/ButtonComponents/DarkModeButton";
import { BrowserRouter as Router } from "react-router-dom";
import { PublicRoutes } from "./route/PublicRoutes";
import { DefaultModal } from "./components/Modal/DefaultModal";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer/Footer";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [modalData, setModalData] = useState(null);

  useEffect(() => {
    document.dispatchEvent(new Event("app-loaded"));
  }, []);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  const openModal = (data, ContentComponent) => {
    setModalData(data);
    setModalContent(() => ContentComponent);
    setIsModalOpen(true);
  };

  const toggleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <ThemeProvider>
      <Router>
        <div>
          <Navbar />
          <DarkModeButton />
          <DefaultModal
            isOpen={isModalOpen}
            isClose={() => toggleClose()}
            content={modalContent}
            data={modalData}
          />
          <PublicRoutes openModal={openModal} />
          <div className="flex-grow"></div>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
