import React,{Component} from 'react';
import Option from './Option.js';
import PropTypes from 'prop-types';


export default class Formulario extends Component {
    constructor(props) {
        super(props);

        //Binds
        this.sendForm = this.sendForm.bind(this);
    }
    //los refs se utilizan para leer los valores de los campos de un formulario
    marcaRef    = React.createRef();
    yearRef     = React.createRef();
    planBasicoRef   = React.createRef();
    planCompletoRef = React.createRef();

    static propTypes = {
        // title: PropTypes.string.isRequired,
        marcas: PropTypes.arrayOf(PropTypes.string)
    }
    static defaultProps = {
        marcas: []
    }

    sendForm( evt ) {
        evt.preventDefault();
        
        //Obtener los daros


        //crear el objeto
        const infoAuto = {
            marca:  this.marcaRef.current.value,
            year:   this.yearRef.current.value,
            plan:   this.planBasicoRef.current.checked ? 'basico' : 'completo'
        }
        //enviarlo al componente principal
        console.log('Enviado');
        console.log(this.marcaRef.current.value);
        
        //enviarlo al componente principal
        this.props.cotizarSeguro( infoAuto );
        console.log(evt.currentTarget);
        
        evt.currentTarget.reset();
    }

    componentDidMount() {
        console.log('Cargo el componente');
    }

    render() {
        console.log(this.state);
        
        return (
            <form className="cotizar-auto" onSubmit={this.sendForm}>
                <div className="campo">
                    <label>Marca</label>
                    <select name="marca"  ref={this.marcaRef}>
                        <Option key={-1} value={''} disabled text={'Selecciona una marca'}/>
                        {
                            this.props.marcas.map( (marca, index) => <Option key={index} value={marca} text={marca}/>)
                        }
                    </select>
                </div>

                <div className="campo">
                    <label>Año</label>
                    <select name="year" ref={this.yearRef}>
                        <option value="2018">2018</option>
                        <option value="2017">2017</option>
                        <option value="2016">2016</option>
                        <option value="2015">2015</option>
                        <option value="2014">2014</option>
                        <option value="2013">2013</option>
                        <option value="2012">2012</option>
                        <option value="2011">2011</option>
                        <option value="2010">2010</option>
                        <option value="2009">2009</option>
                        <option value="2008">2008</option>
                    </select>
                </div>
                <div className="campo">
                    <label>Plan:</label>
                    <input type="radio" name="plan" defaultChecked ref={this.planBasicoRef} value="basico"/> Básico
                    <input type="radio" name="plan" ref={this.planCompletoRef} value="completo"/> Completo
                </div>

                <button type="submit" className="boton">Cotizar</button>
            </form>
        );
    }
}