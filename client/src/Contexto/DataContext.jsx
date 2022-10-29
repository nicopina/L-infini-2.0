import React,{useState,useEffect,createContext} from 'react'
import { fastFoodProducts } from "../api/products";


export const DataContext=createContext();
export const DataProvider=(props)=>{

    const[productos,setProductos]=useState([]); // inicializador de estado
    const[menu,setMenu]=useState(false); // inicializador de estado
    const[carrito,setCarrito]=useState([]); // inicializador de estado
    const[total,setTotal]=useState(0); // inicializador de estado
   
    useEffect(()=>{
        const producto=fastFoodProducts;

        if(producto){
            setProductos(producto)
        }else{
            setProductos([])
        }
        
    },[])


    const addCarrito=(id)=>{
       const check=carrito.every(item=>{ 
              return item.id !== id;
         })
         if(check){
             const data=productos.filter(producto=>{
                    return producto.id === id
            })
            setCarrito([...carrito,...data])
         }else{
            alert("El producto ya se ha agregado al carrito")
         }
    }
    //  ---- Para al refrescar la pagina quede guardado el carrito(no me funciona)-------------------
    // useEffect(()=>{
    //     const dataCarrito=JSON.parse(localStorage.getItem("dataCarrito")
    //     );
    //     if(dataCarrito){
    //         setCarrito(dataCarrito)
    //     }
    // }, [])

    // useEffect(()=>{
    //     localStorage.setItem("dataCarrito",JSON.stringify(carrito))
    // }, [carrito])

    useEffect(()=>{
        const getTotal=()=>{
            const res=carrito.reduce((prev,item)=>{
                return prev+(item.price*item.cantidad)
            },0)
            setTotal(res);
        }
        getTotal()
    },[carrito])

    const value={
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