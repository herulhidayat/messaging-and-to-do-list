import { createContext } from "react";

const DataContext = createContext({ data: null, data2:null, comments:null, error: null });

export default DataContext;