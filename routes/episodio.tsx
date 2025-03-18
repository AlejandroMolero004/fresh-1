import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Axios from "npm:axios";
import Button from "../components/Button.tsx";
import Character from "../components/Character.tsx";


type api_data={
    characters:string[]
    name:string
}
type Personaje = {
    id: number;
    name: string;
    status: string;
    species: string;
    episode: string[];
    url_episode:string[];
    image: string;
};
type api_data_personaje={
    personajes:Personaje[]
}
type Data ={
    name:string
    personajes:Personaje[]
 }

export const handler:Handlers<Data>={
    GET:async (req:Request,ctx:FreshContext<unknown,Data>)=>{
        const url=new URL(req.url)
        console.log(url)
        const url_ep=url.searchParams.get("id")||1

        const response = await Axios.get<api_data>(
            `https://rickandmortyapi.com/api/episode/${url_ep}`
        ); 
        const response_personaje_promise = response.data.characters.map((p)=>Axios.get<Personaje>(p))
        const response_personaje=await Promise.all(response_personaje_promise)
        return ctx.render({personajes:response_personaje.map((p)=>p.data),name:response.data.name})
    }
}

const Page=(data:PageProps<Data>)=>{
    return (
        <div className="episodios">
            <h1 className="titulo-ep">Personajes episodio: {data.data.name}</h1>
            <div className="container">
                    {data.data.personajes?.map((ep, index) => (

                        <div class="personajes-episodio">
                             <a href={`/saludarRM?id=${ep.id}`}>
                                <Character name={ep.name} image={ep.image} status={ep.status} /> 
                             </a>    
                        </div>  
                    ))}
            </div>
            <div class="back">
                                <a  class="nombre" href={`/saludarRM`}>
                                <Button variant="primary">back</Button>
                                </a>
            </div>
        </div>
    )
}

export default Page