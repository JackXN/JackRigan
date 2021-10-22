
export const getStaticPaths = async () => {
     const res = await fetch ('https://my-json-server.typicode.com/JackXN/API-Rigan/projects')
    const data = await res.json();
    // console.log(data)

    const paths = data.map(item => {
        return {
            params: { id: item.id.toString() }
        }
    })
    return {
        paths,
        fallback: false
    }
    }


export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch(`https://my-json-server.typicode.com/JackXN/API-Rigan/projects/${id}`)
    const data = await res.json();

    return {
        props: { project: data }
    }
}




const ProjectDetail = ({project}) => {
    return (
  <h1>{project.title}</h1>
    )
}


export default ProjectDetail;