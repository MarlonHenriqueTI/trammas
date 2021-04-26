import React from 'react' 
import './Botao.css'

export default function Botao (props) {
    return (
        <button className="Botao">{ props.texto }</button>
    )
}