import React,{useState,useEffect,createContext} from 'react'


export const DataContext=createContext();

export const DataProvider=(props)=>{
    const[menu,setMenu]=useState(false); // inicializador de estado

    const value={
        menu:[menu,setMenu]
    }
    return(
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>
    )
}