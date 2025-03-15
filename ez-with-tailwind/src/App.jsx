import React, { useState } from "react";
import Form from "./components/Form";
import CardGrid from "./components/card-components/CardGrid";
import ezLogo from "./assets/ez-logo.png";
import Modal from "./components/Modal";

function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleApiCallStart = () => {
    setIsLoading(true);
    setModalVisible(true);
    setModalContent("");
  };

  const handleApiResponse = (message) => {
    setIsLoading(false);
    setModalContent(message);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setModalContent("");
  };

  return (
    <div className="mx-auto w-full max-w-[1200px] px-5 py-10 flex flex-col gap-8 items-center md:flex-row md:items-stretch md:justify-between">
      <div className="w-full flex flex-col justify-between md:w-[40%]">
        <div className="text-center md:text-left">
          <div className="flex items-center gap-3 mb-4 justify-center md:justify-start">
            <img
              src={ezLogo}
              alt="EZ Works Logo"
              className="w-32 h-auto md:w-40"
            />
          </div>
          <h2 className="text-2xl font-bold text-[#00264d] mb-3 md:text-3xl">
            Suite Of Business Support Services
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-8 md:text-base md:max-w-[90%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt...Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed
          </p>
        </div>
        <div className="text-center md:text-left">
          <Form
            onApiCallStart={handleApiCallStart}
            onApiResponse={handleApiResponse}
          />
        </div>
      </div>

      <div className="w-full flex justify-center md:w-[58%] md:mt-0 md:items-start">
        <CardGrid />
      </div>

      {modalVisible && (
        <Modal
          content={modalContent}
          isLoading={isLoading}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}

export default App;
