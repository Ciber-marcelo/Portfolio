import { HorizontalDivider } from "../horizontal-divider";
import { ProjectItem } from "../project-item";
import { SectionTitle } from "../section-title";
import { projects } from '../../../public/jsons/projects'

export function AllProjects() {
   return (
      <div className="container py-16">
         <SectionTitle title='Principais Projetos' subTitle='projetos' />
         <HorizontalDivider />
         {projects.map((item) => (
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
      </div>
   )
}