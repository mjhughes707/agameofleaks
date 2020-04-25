import React, { createContext, useState } from "react";

const Context = createContext();
const { Provider } = Context;

function ContextProvider(props) {
  const [dropdown, setDropdown] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [prevIndexBegin, setPrevIndexBegin] = useState(0);
  const [prevIndexEnd, setPrevIndexEnd] = useState(2);
  const [modal, setModal] = useState(false);
  const [fullViewIndex, setFullViewIndex] = useState(0);
  const [searchValue, setSearchValue] = useState({
    characters: "",
    scene: "",
    page: "",
  });

  const store = {
    dropdown: { get: dropdown, set: setDropdown },
    currentPage: { get: currentPage, set: setCurrentPage },
    prevIndexBegin: { get: prevIndexBegin, set: setPrevIndexBegin },
    prevIndexEnd: { get: prevIndexEnd, set: setPrevIndexEnd },
    modal: { get: modal, set: setModal },
    fullViewIndex: { get: fullViewIndex, set: setFullViewIndex },
    searchValue: { get: searchValue, set: setSearchValue },
  };

  return <Provider value={store}>{props.children}</Provider>;
}

export { ContextProvider, Context };
