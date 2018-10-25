import {primeraMayuscula} from '../../helpers'
import React from 'react'

const Resumen = function(props) {
    return  <div className="resumen">
                <ul>
                    <h2>Resumen de la cotizaciion:</h2>
                    <li>Marca:{primeraMayuscula(props.datos.marca)}</li>
                    <li>Plan:{primeraMayuscula(props.datos.plan)}</li>
                    <li>anio:{props.datos.year}</li>
                </ul>
            </div>
}

export default Resumen;