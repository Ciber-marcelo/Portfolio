import { Card } from "../card";
import { SectionTitle } from "../section-title";
import { techs } from "../../../public/jsons/techs";

export function KnownTechs() {
   return (
      <div className="container pb-16 pt-32">
         <SectionTitle title='Conhecimentos' subTitle='competências' />

         <div className="mt-10 gap-3 grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))]">
            {techs.map((item) => (
               <Card
                  key={item.id}
                  techName={item.techName}
                  experience={item.exp}
                  icon={item.icon}
               />
            ))}
         </div>
      </div>
   )
}