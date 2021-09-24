import React from "react";


export const Imput = () => {
    
    const inputHandler = (event) => {
        //event.preventDefault();
        event.stopPropagation();
        console.log(event.key);
    }
    
    return (
        <div className="box">
            <div className="border border-1">
                <input className="m-5" onKeyDown={inputHandler} type="text" name="i" od="i" />
            </div>    
        </div>
    )
}
