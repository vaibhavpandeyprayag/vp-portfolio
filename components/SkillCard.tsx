"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Brain,
  Sparkles,
  BarChart3,
  Server,
  Database,
  Cloud,
  Wrench,
} from "lucide-react";
import type { SkillCategory } from "@/data/types";

const iconMap: Record<string, React.ElementType> = {
  Code2,
  Brain,
  Sparkles,
  BarChart3,
  Server,
  Database,
  Cloud,
  Wrench,
};

export function SkillCard({ category }: { category: SkillCategory }) {
  const Icon = iconMap[category.icon] || Code2;

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="rounded-xl border border-border bg-card p-6 transition-colors hover:bg-card-hover"
    >
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-accent-primary-light">
        <Icon className="h-5 w-5 text-accent-primary" aria-hidden="true" />
      </div>
      <h3 className="mb-1 text-lg font-semibold text-primary-text">
        {category.title}
      </h3>
      <p className="mb-4 text-sm leading-relaxed text-muted-text">
        {category.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full bg-accent-primary-light px-3 py-1 text-xs font-medium text-accent-primary"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
