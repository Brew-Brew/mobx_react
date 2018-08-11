import React, {Component} from 'react';

import {observer} from 'mobx-react';
import Devtools from "mobx-react-devtools";

@observer class App extends Component {
    render() {
        return (
        <div>
            <Devtools/>
           Counter{this.props.store.count}<br/>
           <button onClick={this.handleInc}>+</button>
           <button onClick={this.handleDec}>-</button>
        </div>)
    }
    handleDec=()=>{
        this.props.store.decrement();
    }
    handleInc=()=>{   
        this.props.store.increment();
    }
}
export default App;