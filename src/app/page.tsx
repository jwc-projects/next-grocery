import { getGroceryList, seedDatabase } from "@/actions/database";
import List from "@/components/List";

export default async function Home() {
  // Render list & form
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col">
        <h1 className="text-2xl mb-4">Grocery List</h1>
        <List />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
