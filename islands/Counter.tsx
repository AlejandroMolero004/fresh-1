import { FunctionComponent } from "preact";
import { useSignal } from "@preact/signals";
import { useState } from "preact/hooks";

type CounterProps = {
    initialvalue:number;
}
const Counter:FunctionComponent<CounterProps>=(props)=>{ 
    const[number,setNumber]=useState<number>(props.initialvalue)
    return(
        <>
            <h1>{number}</h1>
            <button disabled={number===0} onClick={()=>setNumber(number-1)}>RESTAR</button>
            {number===0 && <h2>has llegado</h2>}
        </>
    )
}

export default Counter

