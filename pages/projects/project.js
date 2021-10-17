
const data = [
    {
        id: 1,
        title: 'hello'
    },
    {
        id: 2,
        title: 'hello two'
    }
]



const Project = () => {
    return (
        <div>
            {data.map((item )=> (
                <div key={item.id}> 
                {item.title}
                </div>
            ))}
        </div>
    )

}

export default Project;