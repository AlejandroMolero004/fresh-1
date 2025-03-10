
import Axios from "npm:axios"
import Button from "../components/Button.tsx";
import Counter from "../islands/Counter.tsx";
import Character from "../components/Character.tsx";


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
  
    
    const url=new URL(req.url)
    const page=Number(url.searchParams.get("page"))||1
    const personajes=await Axios.get<Data>(`https://rickandmortyapi.com/api/character/?page=${page}`)
    return (
      <>
      <h1 class="title">Rick and Morty Characters</h1>
      <div class="container">
        
        {personajes.data.results.map((p) => {
          return (
            <div>
              <Character name={p.name} image={p.image} status={p.status} />
            </div>
          );
        })}
      </div>
      <div class="next">
      <a href={`/?page=${page -1}`}>
          <Button variant="primary">Last</Button>
        </a>
      <a href={`/?page=${page + 1}`}>
          <Button variant="primary">Next</Button>
        </a>
      
      </div>
    
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
        <h1>Buttons</h1>
        <Button variant="primary">primary</Button>
        <Button variant="secondary">secondary</Button>
        
        <div class="restar">
          <Counter initialvalue={5}/>
        </div>
        </>
    );
}
