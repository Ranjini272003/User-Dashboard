export const userLoader = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data=await res.json();
  return data;
}

export const userSingleLoader = async ({params}) => {
  const {id} =params;
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const data=await res.json();
  return data;
}
