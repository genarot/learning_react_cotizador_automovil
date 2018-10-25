import React, { Component } from 'react';
import Header from '../Header';
import './App.css';
import Formulario from '../Formulario/';
import { obtenerDiferenciaAnio, calcularMarca, obtenerPlan } from '../../helpers';
import Resumen from '../Resumen';
import Resultado from '../Resultado';
const  marcas = ['americano','europeo','asiatico'];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      marcas: [],
      selection: -1,
      resultado: '',
      datos: {}
    }
  }

  cotizarSeguro = ( datos ) => {
    console.log(datos);
    let {year, marca, plan} = datos;

    let resultado = 2000;
    
    const diferencia = obtenerDiferenciaAnio( year );

    //r
    resultado  -= ((diferencia * 3) * resultado)/100;

    resultado = calcularMarca( marca) * resultado;

    let incrementoPlan = obtenerPlan( plan );

    resultado *= incrementoPlan;

    console.log(resultado);
    this.setState({
      resultado: resultado,
      datos: datos
    })
  }
  componentDidMount() {
    setTimeout(() => {
        this.setState({marcas: marcas })
    },
    1500)
  }

  renderResultado() {
      if ( this.state.resultado !== '' ) {
        return <Resumen datos={this.state.datos} resultado={this.state.resultado}/>
      }
      return null;
  }
  render() {
    return (
      <div className="contenedor">
          <Header title={'Cotizador de Seguro de Auto'}/>
          <div className={'contenedor-formulario'}>
            <Formulario marcas={this.state.marcas} cotizarSeguro={this.cotizarSeguro} selection={ this.state.selection }/>
            {this.renderResultado()}
            <Resultado resultado={this.state.resultado} />
          </div>
      </div>
    );
  }
}

export default App;