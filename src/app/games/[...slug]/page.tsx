//@ts-nocheck
import { GetStaticPaths } from "next";
import Image from "next/image";

type UrlProps = { 
  params: { 
    slug: string 
  } 
}

export async function generateMetadata({ params: { slug } }: UrlProps) {
  const [providerOrCategory, seo_title] = slug
  const newTitle = `${providerOrCategory}/${seo_title}`

  return {
    title: newTitle,
  };
}

export const getStaticPaths: GetStaticPaths = (async () => {
  const res = await fetch('https://nextjs-test-pi-hazel-56.vercel.app/data/games.json');
  const data = await res.json();

  const paths = data.map((game: Game) => ({
    params: { slug: [game.provider, game.seo_title] }
  }));

  return { paths, fallback: false };
}) satisfies GetStaticPaths

async function getGameData(slug: string): Promise<Game> {
  const [providerOrCategory, seo_title] = slug
  const res = await fetch('https://nextjs-test-pi-hazel-56.vercel.app/data/games.json')
  const data = await res.json()

  const game = data.find((g:Game) => (g.provider === providerOrCategory || g.categories.includes(providerOrCategory)) && g.seo_title === seo_title);

  return game;
}

const GamePage = async ({ params: { slug } }: UrlProps) => {
  const game = await getGameData(slug)

  const { title, identifier, provider, categories } = game;

  return (
    <main className="flex min-h-screen flex-col flex-wrap justify-center items-center gap-5 bg-slate-950 text-gray-100">
      <Image 
          src={`https://d2norla3tyc4cn.cloudfront.net/i/s3/${identifier}.webp`} 
          alt={`Image of ${identifier} game`}
          width={400}
          height={400}
          priority={true}
        />
      <h1 className="text-4xl">{title}</h1>
      <p className="text-3xl">Provider: {provider}</p>
      <ul className="flex gap-3 flex-wrap">
        {categories.map((category)=>(
          <li
            className="uppercase border-2 border-red-400 rounded-lg p-2" 
            key={category}
          >
            {category}
          </li>
        ))}
      </ul>
    </main>
  );
};

export default GamePage;