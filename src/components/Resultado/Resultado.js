import React,{PureComponent} from 'react';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
//react-transition-group
class Resultado extends PureComponent {

    render() {
        return (
            <div className="gran-total">
                <TransitionGroup component="span" className="resultado">
                    <CSSTransition
                        className="resultado"
                        key={this.props.resultado}
                        timeout={{enter: 500, exit: 500}}
                        >
                        <span>{ this.props.resultado }</span>
                    </CSSTransition>
                </TransitionGroup>
            </div>
        );
    }
}


export default Resultado;