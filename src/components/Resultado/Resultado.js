import React,{Component} from 'react';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import './Resultado.css';
//react-transition-group
class Resultado extends Component {

    render() {

        let resultado = this.props.resultado;
        let mensaje = (!resultado) ? 'Elige Marcar, año, y Plan' : '$'+resultado;
        return (
            <div className="gran-total">
                <TransitionGroup
                className="fade">

                    <CSSTransition
                        classNames="fade"
                        timeout={1500}
                        >
                        <span>{mensaje}</span>
                    </CSSTransition>
                </TransitionGroup>
            </div>
        );
    }
}


export default Resultado;