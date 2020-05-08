import React, { useContext, useEffect } from "react";
import { Context } from "../../Context";
import "./Main.css";
import data from "../../data";
import Preview from "./Components/Preview/Preview";
import NotFound from "./Components/NotFound/NotFound";
import Modal from "./Components/Modal/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
} from "@fortawesome/free-solid-svg-icons";

function Main() {
  const context = useContext(Context);
  const { get: searchValue } = context.searchValue;
  const {
    get: prevIndexBegin,
    set: setPrevIndexBegin,
  } = context.prevIndexBegin;
  const { get: prevIndexEnd, set: setPrevIndexEnd } = context.prevIndexEnd;
  const { get: modal, set: setModal } = context.modal;
  const { get: fullViewIndex, set: setFullViewIndex } = context.fullViewIndex;

  // when search value updates, resets preview thumbnails to first two in array
  useEffect(() => {
    setPrevIndexBegin(0);
    setPrevIndexEnd(2);
  }, [searchValue, setPrevIndexBegin, setPrevIndexEnd]);

  const closeModal = (e) => {
    e.target.id === "modal" && setModal(false);
  };

  const prevModal = () => {
    if (fullViewIndex === 1 && prevIndexBegin === 0) {
      setFullViewIndex(0);
    }
  };

  const prevPreview = () => {
    if (prevIndexBegin > 0) {
      setPrevIndexBegin(prevIndexBegin - 1);
      setPrevIndexEnd(prevIndexEnd - 1);
    }
  };

  const prevPage = () => {
    prevModal();
    prevPreview();
  };

  const nextModal = () => {
    if (fullViewIndex === 0 && prevIndexEnd === dataFiltered.length) {
      setFullViewIndex(1);
    }
  };

  const nextPreview = () => {
    if (prevIndexEnd < dataFiltered.length) {
      setPrevIndexBegin(prevIndexBegin + 1);
      setPrevIndexEnd(prevIndexEnd + 1);
    }
  };

  const nextPage = () => {
    nextModal();
    nextPreview();
  };

  // returns only the scenes which meet any of the search conditions
  let dataFiltered = data.Scenes.filter(
    (scene) =>
      scene.characters.includes(searchValue.characters.toLowerCase()) ||
      scene.scene === parseInt(searchValue.scene) ||
      scene.page === parseInt(searchValue.page)
  );

  // returns all scenes if no search has yet taken place; e.g. on load
  if (!searchValue.characters && !searchValue.scene && !searchValue.page) {
    dataFiltered = data.Scenes;
  }

  // ensures a max of only two scenes are displayed at a time
  const activePreviews = dataFiltered.slice(prevIndexBegin, prevIndexEnd);

  return (
    <main className="Main">
      {modal && (
        <Modal
          src={activePreviews[fullViewIndex].src}
          length={dataFiltered.length}
          closeModal={(e) => closeModal(e)}
          prevPage={prevPage}
          nextPage={nextPage}
        />
      )}

      {prevIndexBegin > 0 ? (
        <FontAwesomeIcon
          icon={faArrowAltCircleLeft}
          className="font-awesome fa-2x"
          onClick={prevPreview}
        />
      ) : (
        <div className="placeholder" />
      )}

      {dataFiltered.length > 0 ? (
        activePreviews.map((scene, i) => (
          <Preview
            key={scene.page}
            src={scene.src}
            onClick={() => {
              setFullViewIndex(i);
              setModal(true);
            }}
          />
        ))
      ) : (
        <NotFound />
      )}

      {prevIndexEnd < dataFiltered.length ? (
        <FontAwesomeIcon
          icon={faArrowAltCircleRight}
          className="font-awesome fa-2x"
          onClick={nextPreview}
        />
      ) : (
        <div className="placeholder" />
      )}
    </main>
  );
}

export default Main;
