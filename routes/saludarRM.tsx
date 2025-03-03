import { Handlers, FreshContext, PageProps } from "$fresh/server.ts";
import Axios from "npm:axios";

type Personaje = {
    id: number;
    name: string;
};

type Data = {
    personaje?: Personaje;
    error?: string;
};

export const handler: Handlers = {
    GET: async (req: Request, ctx: FreshContext) => {
        const url = new URL(req.url);
        const name = url.searchParams.get("name")?.trim();

 
        if (!name) return ctx.render({ personaje: undefined });

        try {

            const response = await Axios.get<{ results: Personaje[] }>(
                `https://rickandmortyapi.com/api/character/?name=${name}`
            ); 
            return ctx.render({ personaje: response.data.results[0] });

        } catch (error) {
            return ctx.render({ personaje: undefined, error: "Error al obtener los datos" });
        }
    },
};

const Page = ({ data }: PageProps<Data>) => {
    return (
        <div>
            <form method="get">
                <input type="text" name="name"/>
                <button type="submit">Buscar</button>
            </form>

            {data.error && <p style={{ color: "red" }}>{data.error}</p>}

            {
            data.personaje ? (<h2>Personaje encontrado: {data.personaje.name}</h2>) : (<p>Ingresa un nombre para buscar un personaje.</p>)
            }
        </div>
    );
};

export default Page;
