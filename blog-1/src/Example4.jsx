import { useState } from "react";

export default function Example4(){
    const [name,setName] = useState("");
    const [error,setError] = useState();
    const handleChange = (e) =>{
        e.preventDefault();
        if(error) {
            alert("unable to submit : form contain errors");
        }else{
            alert(name)
        }
    }

    const handleError = (e) =>{
        let {value} = e.target;
        setName(value);

        if(value.length <=6) {
            setError("the name should be greater than 6 letter");
        }else{
            setError();
        }
    }
    return (
        <>
            <form onSubmit={handleChange}>
                <input type="text" value={name} onChange={handleError}></input>
                <p>{error}</p>
                <button>Submit</button>
            </form>
        </>
    )
}