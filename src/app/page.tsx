import { getGroceryList, seedDatabase } from "@/actions/database";

export default async function Home() {
  // Fetch list table contents
  await seedDatabase();
  await getGroceryList();
  // Render list & form
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col">
        <h1>Grocery List</h1>
        <ul>{/* TODO: Add list & form */}</ul>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
