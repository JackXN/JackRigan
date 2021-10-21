export default function Projects({ data }) {
  return (
    <>
      <div>
        {data.map((datas) => {
          return <h1 key={datas.id}>{datas.name}</h1>;
        })}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const data = await fetch(
    "https://my-json-server.typicode.com/JackXN/API-Rigan/projects"
  ).then((res) => res.json());

//   console.log(data);

  return {
    props: {
      data,
    },
  };
}
