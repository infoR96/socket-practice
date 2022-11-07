
import React from 'react'
const add = [1,2,3,4];

export const Test = () => {

    const recorrido =()=>{
        return(
            
                add.map((value) => {
                    return(
                        <h1>{value}</h1>
                    )
                })
            
        )
    }


    return(
        <div>
        {recorrido()}
        </div>
        )

}
