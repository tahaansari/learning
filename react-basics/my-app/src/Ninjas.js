import React from 'react';
import './Ninjas.css'
const Ninjas = (props) => {
    
    const ninjas = props.ninjas;
    const deleteNinja = props.deleteNinja;

    const ninjaList = ninjas.map( ninja => {
        if(ninja.age < 25){
            return(
                <div className="ninja" key={ ninja.id }>
                    <div>Name: {ninja.name}</div>
                    <div>Age: {ninja.age}</div>
                    <div>Belt: {ninja.belt}</div>
                    <button onClick={ () => { deleteNinja(ninja.id) }  }>Delete Ninja</button>
                    <br/>
                    <br/>
                </div>
            )
        }else{ return null }
    })

    return(
        <div className="ninjaList">
            { ninjaList }
        </div>
    )
}

export default Ninjas;