import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import  Axios from "npm:axios";

type personaje={
    id:string
    name:string
}
type Data={
    results:personaje[]
}
export const handler:Handlers={
    GET:async (_req:Request,ctx:FreshContext)=>{
        const{id}=ctx.params
        debugger;
        const personaje=await Axios.get<personaje>(`https://rickandmortyapi.com/api/character/${id}`)
        return ctx.render(personaje.data)
    }
}

const Page=(props:PageProps<personaje>)=>{
    const{id,name}=props.data
    return (
        <div>
            <li key={id}>
                Hola {name} con id {id}
            </li>
        </div>
    )
}

export default Page