import "./main.css";
import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/index.jsx";
import getProducts from "../../Helpers/index";
import itemsData from "../../Api-data";


function ItemListContainer(props){

    const [data, setData] = useState([]);
    
    useEffect(() => {
        getProducts().then((respuesta) => {
            setData(respuesta);
        })
        .catch((error) =>console.log(error));
    }, []);

    return(
        <section className="title" id="Home">
            <div className="max-width ">
                <h1 className="title">{props.greeting}</h1>
                <div className= " d-flex flex-row flex-wrap">
                    <ItemList data={data}/>
                </div>
            </div>
        </section>
    )
}
export default ItemListContainer;