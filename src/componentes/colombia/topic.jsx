import React from 'react';
import {useParams} from "react-router-dom";

const tropics= [
    {
        nombre: "San Andrés y Providencia",
        id: 'san-andres',
        proyecto: "proyecto proyecto",
        emoji:" _i_"
    },
    {
        nombre: "Antioquia",
        proyecto: "giño giño",
        emoji: "_O_"
    }
]

function Topic() {


    let { topicId } = useParams();
    const topic= tropics.find(({id}) => id === topicId)
    console.log(topic)
  return (
    <div>
      <h1>{topicId}</h1>
      <p>{topic.nombre}</p>
    </div>
    )
}

export default Topic
