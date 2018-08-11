import React, {Component} from 'react';

import {observer} from 'mobx-react';
import { observable } from 'mobx';

@observer class App extends Component {
    render() {
        return (<div>
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