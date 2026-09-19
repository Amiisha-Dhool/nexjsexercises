export async function markAllComplete(ids: string[]) {
  const db = await getDatabase();

  const { ObjectId } = await import("mongodb");

  await db.collection("todos").updateMany(
    {
      _id: {
        $in: ids.map((id) => new ObjectId(id)),
      },
    },
    {
      $set: {
        completed: true,
        updatedAt: new Date(),
      },
    }
  );

  revalidatePath("/todos");
}