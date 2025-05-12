export default async function Chat({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <div>
      <h1>Chat {id}</h1>
    </div>
  );
}
