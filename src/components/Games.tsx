"use client";
import { useMemo, useState } from "react";
import { GameCard } from ".";
import Filters from "./Filters";

type Props = {
  data: Game[]
}

const Games = (props: Props) => {
  const { data } = props;
  const [filteredCategory, setFilteredCategory] = useState('')

  const uniqueCategories = useMemo(()=>{
    return Array.from(new Set(data.map((game) => game.categories[0])))
  },[data])

  return (
    <div className="flex min-h-screen flex-wrap items-center justify-center gap-8">
      <Filters 
        categories={uniqueCategories} 
        activeCategory={filteredCategory} 
        setCategory={setFilteredCategory}
      />
      {data.filter((game)=> filteredCategory ? game.categories.includes(filteredCategory) : game).map((game)=>(
        <GameCard {...game} key={game.identifier}/>
      ))}
    </div>
  )
}

export default Games