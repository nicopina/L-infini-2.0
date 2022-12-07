import React,{useState,useEffect,createContext} from 'react'
import { fastFoodProducts } from "../api/products";
import{getActiveDishesRequest} from "../api/dishes.api";
import { getDishesCategoriesRequest } from "../api/dishesCategories.api";


//hacer atributo cantidad 1 en tabla orden y luego llamarla aqui para pasar por el value.


export const DataContext=createContext();
export const DataProvider=(props)=>{

    const[productos,setProductos]=useState([]); // inicializador de estado
    const[menu,setMenu]=useState(false); // inicializador de estado
    const[total,setTotal]=useState(0); // inicializador de estado
    const[carrito,setCarrito]=useState(JSON.parse(localStorage.getItem("dataCarrito"))||[]); // inicializador de estado
    const[menuCategorias,setMenuCategorias]=useState([]); // inicializador de estado

    useEffect(()=>{ 
        getDishesCategoriesRequest().then((response) => {
            if (response.status === 200) {
                setMenuCategorias(response.data);
            }
        });
    },[])
    
   
    useEffect(()=>{
        getActiveDishesRequest().then((response) => {
            if (response.status === 200) {
              setProductos(response.data);
            }
        });
        
    },[])


    const addCarrito=(id)=>{
       const check=carrito.every(item=>{ 
              return item.id !== id;
         })
         if(check){
             const data=productos.filter(producto=>{
                    return producto.id === id
            })
            data[0].cantidad=1; //agregar cantidad=1 a la data dado que se agrego al carrito
            setCarrito([...carrito,...data])
         }else{
            alert("El producto ya se ha agregado al carrito")
         }
    }
    
    //  ---- Para al refrescar la pagina quede guardado el carrito(no me funciona)-------------------
    useEffect(()=>{
        const dataCarrito= JSON.parse(localStorage.getItem("dataCarrito"))
        if(dataCarrito?.length>0){
            setCarrito(dataCarrito)
        }
    }, [])

    useEffect(()=>{
        localStorage.setItem("dataCarrito",JSON.stringify(carrito))
        const getTotal=()=>{
            const res=carrito.reduce((prev,item)=>{
                return prev+(item.value*item.cantidad)
            },0)
            setTotal(res);
        }
        getTotal()
    },[carrito])

    const value={
        menuCategorias:[menuCategorias],
        productos:[productos],
        menu:[menu,setMenu],
        addCarrito:addCarrito,
        carrito:[carrito,setCarrito],
        total:[total,setTotal]
    }
    return(
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>
    )
}