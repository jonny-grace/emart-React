import React,{createContext,useState} from 'react';


export const SidebarContext = createContext();

const SidebarProvider = ({children}) => {
const [isOpen,setIsOpen] = useState(false);

const handleClose = () => {
  setIsOpen(!isOpen);
};


  return <SidebarContext.Provider value={{handleClose,isOpen,setIsOpen}}>{children}</SidebarContext.Provider>;
};

export default SidebarProvider;
