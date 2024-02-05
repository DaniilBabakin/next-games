import { Games } from "@/components";

async function getGamesData() {
  const res = await fetch('https://nextjs-test-pi-hazel-56.vercel.app/data/games.json')
  const data = await res.json()
 
  return data
}

export default async function Home() {
  const data = await getGamesData() as Game[]

  return (
    <main className="flex min-h-screen flex-wrap items-center justify-center p-24 bg-slate-950">
      <Games data={data}/>
    </main>
  );
}