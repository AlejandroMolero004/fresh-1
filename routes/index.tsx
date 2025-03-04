import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";
import Axios from "npm:axios"
import Character from "../components/character.tsx";

type character={
  id:string
  name:string
  image:string
  status:string
}
type Data={
  results:character[]
}
export default async function Home(req:Request) {
  try{
    const url=new URL(req.url)
    const page=Number(url.searchParams.get("page"))||1
    const personajes=await Axios.get<Data>(`https://rickandmortyapi.com/api/character/?page=${page}`)
    return (
          <div>
            <h1>Rick and Morty Characters</h1>
            {personajes.data.results.map((p)=>{
                return(
                  <div>
                      <Character name={p.name} image={p.image} status={p.status}/>
                  </div>
                )
              })}
          <a href={`/?page=${page + 1}`}>
            <button>Next</button>
          </a>
          <h1>
            <a href="/saludar">saludar</a>
          </h1>
          <h1>
            <a href="/saludarRM">saludarRM</a>
          </h1> 
          <h1>
            <a href="/saludarSW">saludarSW</a>
          </h1>
          <h1>
            <a href="/saludarDB">saludarDB</a>
          </h1>
      </div>
    );
  }catch(e){
    return <div>Ha habido un error</div>
  }
}
