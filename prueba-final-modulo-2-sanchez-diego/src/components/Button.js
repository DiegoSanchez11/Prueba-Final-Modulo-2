import React from 'react';
import { Button } from '@material-ui/core';

class Button extends React.Component{
    render(){
        return(
            <div>
                <Button variant={this.props.button_variant} color={this.props.button_color}>{this.props.button_name}</Button>
            </div>
        )
    }
}

export default Button;