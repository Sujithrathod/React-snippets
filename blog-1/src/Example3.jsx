import { useState } from "react"

export default function Example3(){
    const [paraVisible,setparaVisible] = useState(true);
    const toggleFunc = () =>{
        setparaVisible(!paraVisible);
    }
    return (
        <>
            {paraVisible && <p>Hello world</p>}
            <button onClick={toggleFunc}>{paraVisible? "Hide" : "Show"} Para</button>
        </>

    )
}