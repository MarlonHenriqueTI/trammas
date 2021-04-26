import React from 'react' 
import './Descricao.css'

export default function Descricao (props) {
    return (
        <div className="Descricao col-12">
            <p>{ props.texto }</p>
        </div>
    )
}