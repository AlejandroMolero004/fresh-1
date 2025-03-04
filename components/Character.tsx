import { FunctionComponent } from "preact/src/index.d.ts";

type character_props={
    name:string
    image:string
    status:string
}

const Character:FunctionComponent<character_props>=(props)=>{
    const{name,image,status}=props
    return(
        <>
            <h2>{name}</h2>
            <img src={image} alt={name}/>
            <p><strong>Status:</strong>{status}</p>
        </>
    )
}

export default Character