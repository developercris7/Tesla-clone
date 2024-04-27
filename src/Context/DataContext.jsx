import { createContext, useState } from "react";

export const DataContext = createContext(null)

export const DataProvider = ({children}) => {
    const [name,setName] = useState("Cris")
return (
    <DataContext.Provider value={{name,setName}} >
        {children}
    </DataContext.Provider>
)
}