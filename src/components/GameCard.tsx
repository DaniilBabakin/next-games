import Image from "next/image";
import Link from "next/link";

const GameCard = (data: Game) => {
  const { identifier, seo_title, categories, provider } = data;
  return (
    <div className="hover:scale-105 transition-transform">
      <Link href={`/games/${provider || categories[0]}/${seo_title}`}>
        <Image 
          src={`https://d2norla3tyc4cn.cloudfront.net/i/s3/${identifier}.webp`} 
          alt={`Image of ${identifier} game`}
          width={400}
          height={400}
          quality={100}
        />
      </Link>
    </div>
  )
}

export default GameCard