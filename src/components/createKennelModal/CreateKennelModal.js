import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

export default function CreateKennelModal() {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.showCreateKennel);
  const closeModal = () => {
    dispatch({ type: "C-KENNEL", payload: { showCreateKennel: false } });
  };

  return (
    <div>
      <Modal show={show} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Modal body text goes here.</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onHide={closeModal}>
            Close
          </Button>
          <Button variant="warning">Create Kennel</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
