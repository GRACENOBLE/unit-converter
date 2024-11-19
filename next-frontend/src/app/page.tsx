const page = async () => {
  const data = await fetch(
    "http://localhost:3333/convert?from=meters&to=feet&value=10"
  ).then((res) => res.json());
  console.log(data)
  return <div></div>;
};

export default page;
