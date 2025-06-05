export default function Example(props){
    let {users} = props;
    return (
        <>
        {users ? <button>Logout</button> : <button>Logout</button>}
        </>
    )
}