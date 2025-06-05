export default function Example2(){
    const eventhandler = (event)=>{
        console.log("hello world");
        console.log(event);
    }
    return(
        <>
            <button onClick={eventhandler}> click me</button>
        </>
    )
}