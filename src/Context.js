import React, { createContext, useState } from "react";

const Context = createContext();
const { Provider } = Context;

function ContextProvider(props) {
  const [dropdown, setDropdown] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pagination, setPagination] = useState(1);
  const [modal, setModal] = useState(false);
  const [searchValue, setSearchValue] = useState({
    Character: "",
    Scene: "",
    Page: "",
  });

  const store = {
    dropdown: { get: dropdown, set: setDropdown },
    currentPage: { get: currentPage, set: setCurrentPage },
    pagination: { get: pagination, set: setPagination },
    modal: { get: modal, set: setModal },
    searchValue: { get: searchValue, set: setSearchValue },
  };

  return <Provider value={store}>{props.children}</Provider>;
}

export { ContextProvider, Context };
