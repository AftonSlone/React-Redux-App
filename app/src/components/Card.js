import React, { useState } from "react";
import Modal from "react-modal";

export default function Card(props) {
  const { small, large } = props.cardData.images;
  const { name } = props.cardData;

  const [modalOpen, setModalOpen] = useState(false);

  const onClick = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <>
      <img src={small} alt={name} onClick={onClick} />
      <Modal className="card-modal" isOpen={modalOpen} onRequestClose={onClick}>
        <button className="modal-close" onClick={onClick}>
          X
        </button>
        <img src={large} alt={name} />
      </Modal>
    </>
  );
}
