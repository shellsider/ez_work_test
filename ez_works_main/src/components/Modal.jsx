import styles from "./Modal.module.css";

function Modal({ content, isLoading, onClose }) {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        {isLoading ? (
          <div className={styles.spinner}></div>
        ) : (
          <>
            <p>{content}</p>
            <button className={styles.closeButton} onClick={onClose}>
              Close
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Modal;
