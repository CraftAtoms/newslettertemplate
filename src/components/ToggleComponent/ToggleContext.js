import React, { Component } from 'react';

const ToggleContext = React.createContext();

export class ToggleProvider extends Component {
    constructor(props) {
    super(props);

    this.state = {
        on: false,
    }
}
  
    toggle = () => {
        this.setState({
            on: !this.state.on
        });
    }

    render() {
        const { children } = this.props;
        
        return (
            <ToggleContext.Provider 
            value={{
                on: this.state.on,
            toggle: this.toggle
            }}>
            
        {children}
        </ToggleContext.Provider>
        );
    }
}

export const ToggleConsumer = ToggleContext.Consumer;