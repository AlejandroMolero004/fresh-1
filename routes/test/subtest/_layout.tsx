import { PageProps } from "$fresh/server.ts";

const layout=(props:PageProps)=>{
    const Component=props.Component
    return (
        <div>
            <h1>Soy el segundo layout </h1>
            <Component/>
        </div>
    )
}

export default layout