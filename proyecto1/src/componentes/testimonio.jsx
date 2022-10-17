import React from 'react'
import PropTypes from 'prop-types'
import "../estilos/testimonio.css"

export function Testimonio(props) {
    return (
    <div className='recuadro'>
        <img className='imagen-testimonio' src={require(`../imagenes/${props.imagen}.png`)}></img>
        <div className='textos'>
            <p className='nombre'><strong>{props.nombre}</strong> in {props.pais}</p>
            <p className='empleo'>{props.empleo} at <strong>{props.empresa}</strong></p>
            <p className='descripcion'>"{props.descripcion}"</p>
        </div>
    </div>
    )
}

Testimonio.propTypes = {}


