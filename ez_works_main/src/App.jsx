import React, { useState } from "react";
import styles from "./App.module.css";
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
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <div className={styles.logoRow}>
          <img src={ezLogo} alt="EZ Works Logo" className={styles.logo} />
        </div>
        <h2 className={styles.heading}>Suite Of Business Support Services</h2>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt...Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed
        </p>
        <Form
          onApiCallStart={handleApiCallStart}
          onApiResponse={handleApiResponse}
        />
      </div>

      <div className={styles.rightSide}>
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
