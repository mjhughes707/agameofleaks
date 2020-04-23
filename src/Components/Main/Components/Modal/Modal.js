import React from "react";
import "./Modal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Modal(props) {
  const { src, currentPage, length, closeModal, prevPage, nextPage } = props;
  return (
    <div
      className="Modal modal-container"
      id="modal"
      onClick={e => closeModal(e)}
    >
      {currentPage > 1 ? (
        <FontAwesomeIcon
          icon={faArrowLeft}
          className="modal-font-awesome fa-3x"
          onClick={prevPage}
        />
      ) : (
        <div id="modal" className="modal-placeholder" />
      )}
      <div
        className="modal-content"
        style={{ backgroundImage: `url(${src})` }}
      />
      {currentPage < length ? (
        <FontAwesomeIcon
          icon={faArrowRight}
          className="modal-font-awesome fa-3x"
          onClick={nextPage}
        />
      ) : (
        <div id="modal" className="modal-placeholder" />
      )}
    </div>
  );
}

export default Modal;
