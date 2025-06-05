export default function Example5(){
    const users = [
        { id: 1, name: 'Nathan', role: 'Web Developer' },
        { id: 2, name: 'John', role: 'Web Designer' },
        { id: 3, name: 'Jane', role: 'Team Leader' },
    ]
    return(
        <div>
            {users.map((user) => {
                return (
                    <h1 key={user.id}>{user.name} is a {user.role}</h1>
                )
            })}
        </div>
    )
}