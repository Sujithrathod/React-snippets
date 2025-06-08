Info.defaultProps = {
    user : {
        name : "plz tell",
        age : 0
    }
}
export default function Info({user = {name : "plz tell", age : 0}}){
    return(
        <div>
            <h4>Name is {user.name}</h4>
        </div>
    )
}
// Destructuring with default
