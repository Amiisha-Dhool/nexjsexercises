export default async function SlowComponent() {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return <h2>Conten wuu soo socda🤣</h2>;
}