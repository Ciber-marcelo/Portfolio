import { SectionTitle } from "../section-title";
import { ExperienceItem } from "./experience-item";
import { works } from "../../../public/jsons/works";

export function WorkExperience() {
   return (
      <div className="container flex flex-col lg:flex-row justify-between pb-32 pt-16 gap-y-10">
         <div className="max-w-[420px]">
            <SectionTitle
               subTitle="experiências"
               title="Experiência Profissional"
            />
            <p className="text-color3text mt-6">
               Estou sempre aberto a novos desafios e projetos. Vamos
               trabalhar juntos para criar soluções incríveis para sua empresa !
            </p>
         </div>

         <div className="flex flex-col-reverse gap-4">
            {works.map((item) => (
               <ExperienceItem
                  key={item.id}
                  initial={item.initial}
                  companyName={item.companyName}
                  officeName={item.officeName}
                  time={item.time}
                  text={item.text}
                  technologies={item.technologies}
               />
            ))}
         </div>
      </div>
   )
}