import { useMemo } from "react";
import { getHeroByPublisher } from "../helpers"
import { HeroCard } from "./HeroCard";

export const HeroList = ({ publisher }) => {

    const heroesFiltered = useMemo(() => getHeroByPublisher(publisher), [publisher]);

    return (
    <div className="row rows-cols-1 row-cols-md-3 g-3">
       { heroesFiltered.map(hero => (
            <HeroCard 
              {...hero} 
              key={hero.id}/>
        ))}
    </div>
  )
}
