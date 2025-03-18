import { useState } from "preact/hooks";
import { FunctionComponent } from "preact";
import { JSX } from "preact";

type Error={
    error:boolean
    message:string
}

export const Form:FunctionComponent=()=>{
    const [error , setError]=useState<Error>({
        error:false,
        message:""
    })
    const checkage=(age:number)=>{
        if(age<18){ 
            setError({
                error:true,
                message:"la edad debe ser mayor a 18"
            })
        }else{
            setError({
                error:false,
                message:""
            })
        }
    }
        return (
            <div class="form">
                <h1>Introduce tus datos</h1>
                <form action="/submitform.tsx" method="POST">

                    <div>
                        <label for="name">Name</label>
                    </div>

                    <div>
                        <input type="text" id="name" name="name"/>
                    </div>

                    <div>
                        <label for="email">Email</label>
                    </div>

                    <div>
                        <input type="email" id="email" name="email"/>
                    </div>

                    <div>
                        <label for="age">Age</label>
                    </div>

                    <div>
                        <input  
                            type="number"
                            id="age"
                            name="age"
                            onBlur={(e)=> checkage(Number(e.currentTarget.value))}
                        />
                    </div>

                    <div>
                        <button  disabled={error.error}  type="submit" class="btn">
                            Submit
                        </button>
                    </div>

                    <div>
                        <button type="reset" class="reset">
                            Reset
                        </button>
                    </div>
                    
                    <div>
                        {error.error && <div>{error.message}</div>}
                    </div>

                </form>
            </div>
        );   
  }
export default Form;