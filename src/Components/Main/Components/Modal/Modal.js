import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../../../../Context";
import "./Modal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Modal(props) {
  const { src, length, closeModal, prevPage, nextPage } = props;
  const context = useContext(Context);
  const { get: prevIndexBegin } = context.prevIndexBegin;
  const { get: prevIndexEnd } = context.prevIndexEnd;
  const { get: fullViewIndex } = context.fullViewIndex;

  return (
    <div
      className="Modal modal-container"
      id="modal"
      onClick={(e) => closeModal(e)}
    >
      {prevIndexBegin > 0 || (prevIndexBegin === 0 && fullViewIndex === 1) ? (
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

      {prevIndexEnd < length ||
      (prevIndexEnd === length && fullViewIndex === 0) ? (
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

Modal.propTypes = {
  src: PropTypes.string.isRequired,
  length: PropTypes.number.isRequired,
  closeModal: PropTypes.func.isRequired,
  prevPage: PropTypes.func.isRequired,
  nextPage: PropTypes.func.isRequired,
};

export default Modal;
