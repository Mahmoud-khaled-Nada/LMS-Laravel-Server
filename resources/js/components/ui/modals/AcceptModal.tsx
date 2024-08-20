import React, { memo, Dispatch, SetStateAction } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from '@windmill/react-ui';
import { Spinners } from '../icons/Spinners';

type AcceptModalProps = {
  title: string;
  children: React.ReactNode;
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  acceptAction: () => void;
  isLoading?: boolean;
  disabled?: boolean;
};

const AcceptModal: React.FC<AcceptModalProps> = memo(
  ({ title, children, isModalOpen, setIsModalOpen, acceptAction, isLoading = false, disabled = false }) => {
    const handleClose = () => setIsModalOpen(false);

    return (
      <Modal isOpen={isModalOpen} onClose={handleClose}>
        <ModalHeader>{title}</ModalHeader>
        <ModalBody>{children}</ModalBody>
        <ModalFooter>
          <Button className="w-full sm:w-auto" layout="outline" onClick={handleClose}>
            Cancel
          </Button>

          <Button
            iconRight={isLoading ? Spinners : ''}
            disabled={disabled}
            className="w-full sm:w-auto"
            onClick={acceptAction}
          >
            Accept
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
);

export default AcceptModal;
