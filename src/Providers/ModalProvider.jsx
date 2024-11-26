
import { createContext, useState } from "react";
import { motion } from "framer-motion";

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [enabled, setEnabled] = useState(false);
  const [modalChild, setModalChild] = useState(<>This modal is empty!</>);
  const [modalTitle, setModalTitle] = useState("this is a modal.");
  const CloseModal = () => {
    setEnabled(false);
  };
  const OpenModal = () => {
    setEnabled(true);
  };
  const CreateModal = (title, child, enable = false) => {
    setModalChild(child);
    setModalTitle(title);
    setEnabled(enable);
  };
  const Modal = () => {
    if (!enabled) return <></>;

    return (
      <>
        <div className="bds"></div>
        <div className="_modal">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}>
            <div className="header d-flex justify-content-between">
              <div>{modalTitle}</div>
              <div className="btn-close" onClick={CloseModal}></div>
            </div>
            {modalChild}
          </motion.div>
        </div>
      </>
    );
  };
  return (
    <ModalContext.Provider
      value={{ CloseModal, OpenModal, Modal, CreateModal }}>
      <Modal />
      {children}
    </ModalContext.Provider>
  );
};
