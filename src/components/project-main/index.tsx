import { HorizontalDivider } from "../horizontal-divider";
import { ProjectItem } from "../project-item";
import { SectionTitle } from "../section-title";
import { projects } from '../../../public/jsons/projects'
import { HiArrowNarrowRight } from 'react-icons/hi'

export function MainProjects() {
   return (
      <div className="container py-16">
         <SectionTitle title='Projetos em destaque' subTitle='destaques' />
         <HorizontalDivider />
         {projects.slice(-2).reverse().map((item) => (
            <ProjectItem 
               key={item.id}
               image={item.image}
               title={item.title}
               text={item.text}
               link={item.link}
               repo={item.repo}
               technologies={item.technologies}
            />
         ))}
         <p className="flex items-center gap-2">
            <span className="text-color3text">Se interessou ?</span>
            <a href="/projects" className="flex gap-2 text-color2text hover:text-color1text transition">
               Ver todos os projetos
               <HiArrowNarrowRight size={20}/>
            </a>
         </p>
      </div>
   )
}