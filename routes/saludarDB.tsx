import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Axios from "npm:axios";
type personaje={
    id:number
    name:string
    race:string
}

type Data = {
    personaje?: personaje;
    error?: string;
};

export const handler:Handlers={
    GET:async(req:Request,ctx:FreshContext)=>{
        const url=new URL(req.url)
        const id=url.searchParams.get("id")
        if(!id) return ctx.render({personaje:undefined})
            try {

                const response = await Axios.get<personaje>(
                    `https://dragonball-api.com/api/characters/${id}`
                ); 
                return ctx.render({ personaje: response.data});
    
            } catch (error) {
                return ctx.render({ personaje: undefined, error: "Error al obtener los datos" });
            }
    }
}

const Page = ({ data }: PageProps<Data>) => {

    return(
        <div>
            <form method="GET">
                <input type="text" name="id"/>
                <button type="submit">Buscar</button>
            </form>
            {data.error && <p style={{ color: "red" }}>{data.error}</p>}

            {
            data.personaje ? (<h2>Personaje encontrado: {data.personaje.name} {data.personaje.race}</h2>) : (<p>Ingresa un nombre para buscar un personaje.</p>)
            }
        </div>
    )
    
}

export default Page