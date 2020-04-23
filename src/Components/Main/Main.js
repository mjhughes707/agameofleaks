import React, { useState } from "react";
import "./Main.css";
import data from "../../data";
import Preview from "./Components/Preview/Preview";
import Modal from "./Components/Modal/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
} from "@fortawesome/free-solid-svg-icons";

function Main() {
  const [currentPage, setCurrentPage] = useState(1);
  const [pagination, setPagination] = useState(1);
  const [modal, setModal] = useState(false);

  const closeModal = e => {
    e.target.id === "modal" && setModal(false);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
    setPagination(pagination - 1);
  };

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
    setPagination(pagination + 1);
  };

  const activeFullView = data.Scenes.find(scene => scene.page === currentPage)
    .src;

  const activePreviews = data.Scenes.filter(
    scene => scene.page === pagination || scene.page === pagination + 1
  );

  return (
    <main className="Main">
      {modal && (
        <Modal
          src={activeFullView}
          currentPage={currentPage}
          length={data.Scenes.length}
          closeModal={e => closeModal(e)}
          prevPage={prevPage}
          nextPage={nextPage}
        />
      )}
      {pagination > 1 ? (
        <FontAwesomeIcon
          icon={faArrowAltCircleLeft}
          className="font-awesome fa-2x"
          onClick={prevPage}
        />
      ) : (
        <div className="placeholder" />
      )}
      {activePreviews.map(scene => (
        <Preview
          key={scene.page}
          scene={scene}
          onClick={() => {
            setCurrentPage(scene.page);
            setModal(true);
          }}
        />
      ))}
      {pagination < data.Scenes.length - 1 ? (
        <FontAwesomeIcon
          icon={faArrowAltCircleRight}
          className="font-awesome fa-2x"
          onClick={nextPage}
        />
      ) : (
        <div className="placeholder" />
      )}
    </main>
  );
}

export default Main;
