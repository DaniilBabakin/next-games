"use client";

type Props = {
  categories: string[];
  activeCategory: string;
  setCategory: (category: string) => void;
}

const Filters = (props: Props) => {
  const { categories, activeCategory, setCategory } = props;

  return (
    <div className="flex h-fit flex-wrap items-center justify-center gap-6 bg-slate-200 rounded-lg p-4">
      {categories.map((category)=>(
        <button 
          onClick={()=>setCategory(category)}
          key={category}
          className={`uppercase border-2 border-red-400 rounded-lg p-2 hover:bg-red-400 transition-colors ${activeCategory === category ? "bg-red-400" : ''}`}
        >
          {category}
        </button>
      ))}
    </div>
  )
}

export default Filters