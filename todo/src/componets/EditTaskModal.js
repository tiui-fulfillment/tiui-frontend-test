import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const EditTaskModal = ({ show, handleClose, taskText, handleSave }) => {
  const [editedText, setEditedText] = useState(taskText);

  useEffect(() => {
    setEditedText(taskText);
  }, [taskText]);

  const handleSaveClick = () => {
    handleSave(editedText);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Editar tarea</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <input
          type="text"
          className="form-control"
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancelar
        </Button>
        <Button variant="primary" onClick={handleSaveClick}>
          Guardar cambios
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditTaskModal;
