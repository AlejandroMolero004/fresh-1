import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Axios from "npm:axios";


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
        const url_ep=url.searchParams.get("url")||undefined
        console.log("url")
        console.log(url_ep)
        const response = await Axios.get<api_data>(
            url_ep!
        ); 
        console.log(response.data.characters)
        const response_personaje_promise = response.data.characters.map((p)=>Axios.get<Personaje>(p))
        const response_personaje=await Promise.all(response_personaje_promise)
        console.log(response_personaje.at(0)?.data.name)
        return ctx.render({personajes:response_personaje.map((p)=>p.data),name:response.data.name})
    }
}

const Page=(data:PageProps<Data>)=>{
    return (
        <div className="episodios">
            <h1>Personajes episodio: {data.data.name}</h1>
            <div className="container">
                    {data.data.personajes?.map((ep, index) => (
                        <div class="personajes-episodio">
                             <img src={ep.image}/>
                            <p key={index}>{ep.name}</p>
                            <p key={index}>{ep.status}</p>
                           
                        </div>
                        
                    ))}
            </div>
        </div>
    )
}

export default Page