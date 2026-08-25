"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/data/skills";
import { SkillCard } from "./SkillCard";

export function Skills() {
  if (skillCategories.length === 0) return null;

  return (
    <section id="skills" className="section-padding" aria-labelledby="skills-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
          className="mb-12"
        >
          <h2
            id="skills-heading"
            className="text-3xl font-bold text-primary-text sm:text-4xl"
          >
            Technical Skills
          </h2>
          <p className="mt-3 max-w-2xl text-secondary-text">
            Technologies and tools I work with to build intelligent systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
            >
              <SkillCard category={category} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
