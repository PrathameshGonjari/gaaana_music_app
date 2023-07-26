import { Modal } from "@mui/material";
import { FC } from "react";

interface CustomModalTypes {
  visible: boolean;
  handleCloseModal: () => void;
  children: JSX.Element;
}

const CustomModal: FC<CustomModalTypes> = ({
  visible,
  handleCloseModal,
  children,
}) => {
  return (
    <Modal
      open={visible}
      onClose={handleCloseModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      {children}
    </Modal>
  );
};

export default CustomModal;
