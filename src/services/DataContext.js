import { createContext } from "react";

const DataContext = createContext({ data: null, error: null });

export default DataContext;