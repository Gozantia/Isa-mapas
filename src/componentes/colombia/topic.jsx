import React from 'react';
import {useParams} from "react-router-dom";
import mapaSanAndres from "../imagenes/sanAndres@2x.png"
import mapaAtlantico from "../imagenes/atlanticoMapa.png"
import mapaAntioquia from "../imagenes/antioquiaMapa.png"
import mapaAmazonas from "../imagenes/amazonasMapa.png"
import mapaMeta from "../imagenes/metaMapa.png"
import mapaNarino from "../imagenes/narinoMapa.png"
import mapaChoco from "../imagenes/chocoMapa.png"
import mapaBoyaca from "../imagenes/boyacaMapa.png"
import mapaCordoba from "../imagenes/cordobaMapa.png"
import mapaBolivar from "../imagenes/bolivarMapa.png"
import mapaCesar from "../imagenes/cesarMapa.png"
import mapaCundinamarca from "../imagenes/cundinamarcaMapa.png"




const tropics= [
     {
        nombre: "San Andrés y Providencia",
        mapa: <img src={mapaSanAndres} alt="ISA"/>,
        id: 'san-andres',
        clase: "mapaSanAndres"
    },
    {
        nombre: "Antioquia",
        id:"antioquia",
        mapa: <img src={mapaAntioquia} alt="ISA"/>
    },
    {
      nombre: "Atlántico",
      id: 'atlantico',
      clase: "mapaAtlantico",
      mapa: <img src={mapaAtlantico} alt="ISA"/>,
  },
  {
    nombre: "Amazonas",
    id:"amazonas",
    mapa: <img src={mapaAmazonas} alt="ISA"/>
},
{
  nombre: "Meta",
  id:"meta",
  mapa: <img src={mapaMeta} alt="ISA"/>
},
{
  nombre: "Nariño",
  id:"narino",
  mapa: <img src={mapaNarino} alt="ISA"/>
},
{
  nombre: "Chocó",
  id:"choco",
  mapa: <img src={mapaChoco} alt="ISA"/>
},
{
  nombre: "Cesar",
  id:"cesar",
  mapa: <img src={mapaCesar} alt="ISA"/>,
  clase: "cesarAtlantico",
},
{
  nombre: "Bolivar",
  id:"bolivar",
  mapa: <img src={mapaBolivar} alt="ISA"/>
},
{
  nombre: "Boyacá",
  id:"boyaca",
  mapa: <img src={mapaBoyaca} alt="ISA"/>
},
{
  nombre: "Córdoba",
  id:"cordoba",
  mapa: <img src={mapaCordoba} alt="ISA"/>
},
{
  nombre: "Cundinamarca",
  id:"cundinamarca",
  mapa: <img src={mapaCundinamarca} alt="ISA"/>
},

]

function Topic() {


    let { topicId } = useParams();
    const topic= tropics.find(({id}) => id === topicId)
    const claseRegion = topic.clase;
    const mapaRegion = topic.mapa;
    const nombreRegion = topic.nombre;
  return (
    <section className="regionSeccion">
      <h2>{nombreRegion}</h2>
      <figure className={claseRegion}> 
        {mapaRegion}
      </figure>     
    </section>
    )
}

export default Topic
