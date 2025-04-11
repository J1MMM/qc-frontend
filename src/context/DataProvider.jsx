import React, { createContext, useRef, useState } from "react";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [records, setRecords] = useState([]);
  return (
    <DataContext.Provider value={{ records }}>{children}</DataContext.Provider>
  );
};

export default DataContext;
