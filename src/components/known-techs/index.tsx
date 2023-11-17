'use client'

import { Card } from "../card";
import { SectionTitle } from "../section-title";
import { techs } from "../../../public/jsons/techs";
import { motion } from "framer-motion";

export function KnownTechs() {
   return (
      <div className="container pb-16 pt-32">
         <SectionTitle title='Conhecimentos' subTitle='competências' />

         <div className="mt-10 gap-3 grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))]">
            {techs.map((item, i) => (
               <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.2, delay: i * 0.1 }}
               >
                  <Card
                     key={item.id}
                     techName={item.techName}
                     experience={item.exp}
                     icon={item.icon}
                  />
               </motion.div>
            ))}
         </div>
      </div>
   )
}