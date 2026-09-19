export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const { slug } = await params;

  return (
    <h1>
      zxp waxad zoo poqatay: /{slug?.join("/") || ""}
    </h1>
  );
}