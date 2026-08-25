"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/experience";
import { ExperienceCard } from "./ExperienceCard";

export function Experience() {
  if (experience.length === 0) return null;

  return (
    <section id="experience" className="section-padding" aria-labelledby="experience-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
          className="mb-12"
        >
          <h2
            id="experience-heading"
            className="text-3xl font-bold text-primary-text sm:text-4xl"
          >
            Professional Experience
          </h2>
          <p className="mt-3 max-w-2xl text-secondary-text">
            My professional journey and the impact I&apos;ve made.
          </p>
        </motion.div>

        <div className="space-y-6">
          {experience.map((exp, i) => (
            <motion.div
              key={`${exp.company}-${exp.role}`}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.35, delay: i * 0.08 }}
            >
              <ExperienceCard exp={exp} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
