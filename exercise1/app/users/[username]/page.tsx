export default async function UserPage({
  params,
}: {
  params: Promise<{ username: string }>;
}) {
  const { username } = await params;

  return <h1>zoodhawow huno, {username}</h1>;
}