import React from 'react';

const Option = function(props){
    if ( props.value=== '')
        return <option value={props.value} disabled>{props.text}</option>
    return <option value={props.value} >{props.text}</option>
}

export default Option;