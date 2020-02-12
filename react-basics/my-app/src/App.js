import React, { Component } from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';

class App extends Component {

    state = {
        ninjas:[
            {name:"Taha Ansari", age:27, belt:"Black", id:1},
            {name:"Amir Ansari", age:24, belt:"Brown", id:2},
            {name:"Umar Ansari", age:20, belt:"Blue", id:3}
        ]
    }

    addNinja = (ninja) => {
        // console.log(ninja)
        ninja.id = Math.random();
        let ninjas = [...this.state.ninjas, ninja];
        this.setState({
            ninjas
        })
    }

    deleteNinja = (id) => {
        // console.log(id);
        let ninjas = this.state.ninjas.filter(ninja => { 
            return ninja.id !== id;
        })

        this.setState({
            ninjas
        })
    }

    render() {
        return (
        <div className="App">
            <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas}/> 
            <AddNinja addNinja={this.addNinja} />
        </div>
        )
    }
}

export default App;