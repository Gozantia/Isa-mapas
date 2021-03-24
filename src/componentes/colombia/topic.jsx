import React from 'react';
import {useParams} from "react-router-dom";
import mapaSanAndres from "../imagenes/sanAndres@2x.png"

const tropics= [
     {
        nombre: "San Andrés y Providencia",
        mapa: <img src={mapaSanAndres} alt="ISA"/>,
        id: 'san-andres',
        clase: "mapaSanAndres"
    },
    {
        nombre: "Antioquia",
        proyecto: "giño giño",
        emoji: "_O_"
    },
    {
      nombre: "Atlántico",
      id: 'atlantico',
      clase: "mapaAtlantico",
      mapa: "giño giño",
  }
]

function Topic() {


    let { topicId } = useParams();
    const topic= tropics.find(({id}) => id === topicId)
    const claseRegion = topic.clase;
    const mapaRegion = topic.mapa;
    const nombreRegion = topic.nombre;
  return (
    <section className={claseRegion}>
      <h2>{nombreRegion}</h2>
      <figure>
        {mapaRegion}
      </figure>     
    </section>
    
    )
}

export default Topic
