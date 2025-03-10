
import { Handlers, FreshContext, PageProps } from "$fresh/server.ts";
import Axios from "npm:axios";
import Button from "../components/Button.tsx";

type Personaje = {
    id: number;
    name: string;
    status: string;
    species: string;
    episode: string[];
    url_episode:string[];
    image: string;
};


type Data = {
    personaje?: Personaje;
    episodios?: string[];
    url_episode?:string[];
    integrantes?:string[];
    error?: string;
};

export const handler: Handlers = {
    GET: async (req: Request, ctx: FreshContext<Data>) => {
        const url = new URL(req.url);
        const name = url.searchParams.get("id");

        if (!name) return ctx.render({ personaje: undefined });

        try {
           
            const response = await Axios.get<{ results: Personaje[], episode: string[] }>(
                `https://rickandmortyapi.com/api/character/${name}`
            ); 

            const episode_promises = response.data.episode.map((e) =>
                Axios.get(e) 
            );

            const episodes = await Promise.all(episode_promises);
           
           
            const episodes_name = episodes.map((e) => e.data.name);

            


            return ctx.render({ personaje: response.data, episodios: episodes_name, url_episode:response.data.episode});

        } catch (error) {
            console.error("Error al obtener los datos:", error);
            return ctx.render({ personaje: undefined, error: "Error al obtener los datos" });
        }
    },
};
const Page = ({ data }: PageProps<Data>) => {
   
    return (
        <div class="PersonajeBuscado">
            <div className="buscador">
                <form method="get">
                    <input type="text" name="id"/>
                    <Button type="submit" variant="primary">buscar</Button>
                </form>
            </div>
    
            {data.personaje?<>
                <div class="personaje">
                    <img src={data.personaje.image} />
                </div>
                <h1 class="nombre">{data.personaje.name}</h1>
                <h2 class="nombre">{data.personaje.status}</h2>
                <h2 class="nombre">{data.personaje.species}</h2>
                <div className="episodios">
                    {data.episodios?.map((ep, index) => (
                        <p key={index}>{ep}</p>
                    ))}
                </div>

                <div className="episodios">
                    {data.url_episode?.map((ep, index) => (
                        <a  class="nombre" href={`/episodio/?url=${ep}`}>
                             <p key={index}>{ep}</p>
                        </a>
                    ))}
                </div>

                <div class="back">
                    <a  class="nombre" href={`/`}>
                    <Button variant="primary">back</Button>
                    </a>
                </div>
            </>:<h1 class="buscador">none</h1>}
        </div>
    );
};

export default Page;
